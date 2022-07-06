const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
        display: grid;
    }

    :host .background,
    :host .overlay,
    :host .content {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }

    :host .background {
      width: 100%;
      object-position: center center;
      object-fit: cover;

      // initial state before JS runs
      height: 0;
      visibility: hidden;
    }

    :host .overlay {
      background: var(--overlay-background, transparent);
    }

    /* Fix for Safari that puts inline videos on top by default */
    :host .background { z-index: 50; }
    :host .overlay { z-index: 51; }
    :host .content { z-index: 52; }
  </style>
  <div class="overlay"></div>
  <div class="content">
    <slot>You need to put some content here</slot>
  </div>
`;

export class ResponsiveVideoBackground extends HTMLElement {
  static is = "responsive-video-background";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    let webm = this.getAttribute("webm");
    let mp4 = this.getAttribute("mp4");
    let poster = this.getAttribute("poster");
    let fallback = this.getAttribute("fallback");
    let srcset = this.getAttribute("srcset");
    let sizes = this.getAttribute("sizes");
    let breakpoint = this.getAttribute("breakpoint");

    const overlayElement = this.shadowRoot.querySelector(".overlay");
    const contentElement = this.shadowRoot.querySelector(".content");

    if (
      (webm || mp4) &&
      (breakpoint === null ||
        window.matchMedia(`(min-width: ${breakpoint})`).matches)
    ) {
      // there's a video and the viewport is at least`breakpoint` pixels wide, let's show the video
      const videoElement = document.createElement("video");
      videoElement.classList.add("background");

      videoElement.setAttribute("playsinline", "");
      videoElement.setAttribute("no-controls", "");
      videoElement.setAttribute("autoplay", "");
      videoElement.setAttribute("muted", "");
      videoElement.setAttribute("loop", "");
      // Uncomment this if CORS is required and video server sends Access-Control-Allow-Origin header
      // videoElement.setAttribute("crossorigin", "anonymous");

      if (poster) {
        videoElement.setAttribute("poster", poster);
      }
      if (webm) {
        let webmSource = document.createElement("source");
        webmSource.setAttribute("src", webm);
        webmSource.setAttribute("type", "video/webm");
        videoElement.appendChild(webmSource);
      }
      if (mp4) {
        let mp4Source = document.createElement("source");
        mp4Source.setAttribute("src", mp4);
        mp4Source.setAttribute("type", "video/mp4");
        videoElement.appendChild(mp4Source);
      }

      let height = contentElement.offsetHeight;
      videoElement.style.setProperty("height", `${height}px`);

      // Insert the video element in the DOM before the overlay
      this.shadowRoot.insertBefore(videoElement, overlayElement);

      // backgroundElement.appendChild(videoElement);
      videoElement.style.setProperty("visibility", "visible");
    } else if (srcset) {
      // the viewport is less than `breakpoint` pixels wide, or there is no video, and there is an image

      const imageElement = document.createElement("img");
      imageElement.classList.add("background");
      if (fallback) { imageElement.setAttribute("src", fallback); }
      imageElement.setAttribute("srcset", srcset);
      if (sizes) { imageElement.setAttribute("sizes", sizes); }

      // Insert the image element in the DOM before the overlay
      this.shadowRoot.insertBefore(imageElement, overlayElement);

      // Show the image
      imageElement.style.setProperty("visibility", "visible");
    }

    const resizeObserver = new ResizeObserver((entries) => {
      window.requestAnimationFrame(() => {
        if (!Array.isArray(entries) || !entries.length) {
          return;
        }
        for (let entry of entries) {
          // if (entry.target.parentNode.host.classList.contains('demo1')) {
          //   console.dir(entry.target);
          //   console.dir(entry.target.parentNode.querySelector(".background"));
          //   console.log(entry.borderBoxSize[0].blockSize);
          // }
          let backgroundElement =
            entry.target.parentNode.querySelector(".background");
          if (backgroundElement) {
            backgroundElement.style.height = `${Math.ceil(
              entry.borderBoxSize[0].blockSize
            )}px`;
          }
        }
      });
    });

    resizeObserver.observe(this.shadowRoot.querySelector(".content > slot"));
  }
}
