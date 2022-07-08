# `<responsive-video-background />` Web Component

[![npm](https://img.shields.io/npm/v/@cleverage/responsive-video-background)](https://www.npmjs.com/package/@cleverage/responsive-video-background) [![npm](https://img.shields.io/npm/dm/@cleverage/responsive-video-background)](https://www.npmjs.com/package/@cleverage/responsive-video-background) ![GitHub](https://img.shields.io/github/license/cleverage/responsive-video-background) [![Built by Clever Age](https://img.shields.io/badge/Build%20by-Clever%20Age-223445?labelColor=98700e)](https://www.clever-age.com/)

A Web Component that helps **responsively using a video as the background of a content block**. The video usage can be restricted to large viewports, with an image fallback on thinner ones.

The dimensions of the Web Component are determined by the content inside it. You can style the Web Component with CSS, but it is better to style the content itself, as there could be a layout shift with the component's styles because JavaScript has to run to really make it available.

## Examples

See on https://cleverage.github.io/responsive-video-background/

## Installation

### Use from a CDN

The quickest way to get started and try the Web Component is to load `<responsive-video-background />` as a module script tag from a CDN:

```html
<script type="module" src="https://unpkg.com/@cleverage/responsive-video-background@^1"></script>
```

Don't forget the `type="module"` attribute, this is [own JavaScript modules are now loaded in HTML pages](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#applying_the_module_to_your_html).

This is own it is used in [this demo in CodePen](https://codepen.io/nhoizey/pen/YzawBrq) that you can fork to play with it.

### Better for performance: add a local version to your project

`<responsive-video-background />` is also available [on npm](https://www.npmjs.com/package/@cleverage/responsive-video-background), so you can add it to your project with this shell command:

```shell
npm install @cleverage/responsive-video-background
```

You can then import it in your own project:

```js
import '@cleverage/responsive-video-background';
```

Your build tools will then be able to optimize where, when and how to load it.

## Usage

### Syntax

The Web Component's configuration is done with attributes:

```html
<style>
/* …inline CSS styles for the component, to prevent layout shifts */
</style>
<responsive-video-background
    class="…"
    webm="video.webm"
    mp4="video.mp4"
    poster="video-poster.jpg"
    fallback="not-responsive-image.jpg"
    srcset="image-320.jpg 320w, image-640.jpg 640w, image-1024.jpg 1024w"
    sizes="calc(100vh - 2rem)"
    breakpoint="48rem">
  Some content…
</responsive-video-background>
```

### API

| Attribute | Description | Example |
| --------- | ----------- | ------- |
| `webm` | URL to the WebM version of the video | https://cleverage.github.io/responsive-video-background/demo/Big_Buck_Bunny_720_10s_1MB.webm |
| `mp4` | URL to the MP4 version of the video | https://cleverage.github.io/responsive-video-background/Big_Buck_Bunny_720_10s_1MB.mp4 |
| `poster` | URL to the video's poster image. This should be the first frame of the video, and an highly optimized progressive JPEG | https://cleverage.github.io/responsive-video-background/Big_Buck_Bunny_720.jpg |
| `fallback` | URL to the fallback image, for the `src` attribute | https://example.com/path/to/image-fallback.jpg |
| `srcset` | Value of the `srcset` attribute for the responsive image | `https://example.com/path/to/image-320px.jpg 320w, https://example.com/path/to/image-850px.jpg 850w, https://example.com/path/to/image-1600px.jpg 1600w` |
| `sizes` | value of the `sizes` attribute for the responsive image | `calc(100vh - 2rem)` |
| `breakpoint` | Viewport width breakpoint, if there should be an image on thin viewports and a video on larger viewports | `48rem` |

If the `srcset` option is set, these other ones are mandatory:
- `webm` and/or `mp4`
- `fallback`
- `sizes`

If the `breakpoint` option is set, these other ones are mandatory:
- `webm` and/or `mp4`
- `fallback`
- `srcset`
- `sizes`

## FAQ

| Question | Answer |
| -------- | ------ |
| Why isn't the image switching to a video when the viewport becomes larger? | This is not a bug. The idea is to prevent a strong visual change when the user changes the viewport, either by resizing the browser, or rotating the device. |
