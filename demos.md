---
title: "&lt;responsive-video-background&gt; Web Component"
---

<link rel="stylesheet" href="demo/page.css">
<link rel="stylesheet" href="demo/demos.css">

<div class="page">

# `&lt;responsive-video-background&gt;` Web Component

A Web Component helping using a video as the background of a content block.

The video can be limited to large viewports, with an image fallback on thinner ones.

## Usage

### Syntax

Components configuration is done with attributes:

```html
<style>
…inline CSS styles for the component, to prevent layout shift
</style>
<responsive-video-background
    class="…"
    webm="video.webm"
    mp4="video.mp4"
    poster="video-poster.jpg"
    img="image.jpg"
    srcset="image-320.jpg 320w, image-640.jpg 640w, image-1024.jpg 1024w"
    sizes="calc(100vh - 2rem)"
    breakpoint="48rem"&gt;
  <div>
    Some content…
  </div>
</responsive-video-background>
```

### API

<table border="1">
  <thead>
    <tr>
      <th scope="col">Attribute</th>
      <th scope="col">Description</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><code>data-webm</code></th>
      <td>URL to the WebM version of the video</td>
      <td><code>https://example.com/path/to/video.webm</code></td>
    </tr>
    <tr>
      <th scope="row"><code>data-mp4</code></th>
      <td>URL to the MP4 version of the video</td>
      <td><code>https://example.com/path/to/video.mp4</code></td>
    </tr>
    <tr>
      <th scope="row"><code>data-poster</code></th>
      <td>URL to the video's poster image (should be the first frame)</td>
      <td><code>https://example.com/path/to/video-poster.jpg</code></td>
    </tr>
    <tr>
      <th scope="row"><code>data-image</code></th>
      <td>URL to the fallback image, for the <code>src</code> attribute</td>
      <td><code>https://example.com/path/to/image-fallback.jpg</code></td>
    </tr>
    <tr>
      <th scope="row"><code>data-srcset</code></th>
      <td>value of the <code>srcset</code> attribute for the responsive image</td>
      <td><code>https://example.com/path/to/image-320px.jpg 320w, https://example.com/path/to/image-850px.jpg 850w, https://example.com/path/to/image-1600px.jpg 1600w</code></td>
    </tr>
    <tr>
      <th scope="row"><code>data-sizes</code></th>
      <td>value of the <code>sizes</code> attribute for the responsive image</td>
      <td><code>calc(100vh - 2rem)</code></td>
    </tr>
    <tr>
      <th scope="row"><code>data-breakpoint</code></th>
      <td>viewport width breakpoint, if there should be an image on thin viewports and a video on larger viewports</td>
      <td><code>48rem</code></td>
    </tr>
  </tbody>
</table>

## Examples

<responsive-video-background
    class="demo demo1"
    mp4="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
    poster="https://test-videos.co.uk/user/pages/images/big_buck_bunny.jpg"
    fallback="https://images.unsplash.com/photo-1601629665203-f9f2b8d07019?auto=format&w=1440&q=80"
    srcset="https://images.unsplash.com/photo-1601629665203-f9f2b8d07019?auto=format&w=420&q=80 420w, https://images.unsplash.com/photo-1601629665203-f9f2b8d07019?auto=format&w=768&q=80 768w, https://images.unsplash.com/photo-1601629665203-f9f2b8d07019?auto=format&w=1024&q=80 1024w, https://images.unsplash.com/photo-1601629665203-f9f2b8d07019?auto=format&w=1440&q=80 1440w"
    sizes="calc(100vh - 2rem)"
    breakpoint="768px">
  <div>
    <h1>A fluid height component with an image background</h1>
  </div>
</responsive-video-background>

<responsive-video-background
    class="demo demo2"
    mp4="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
    poster="https://test-videos.co.uk/user/pages/images/big_buck_bunny.jpg">
  <div style="height: 20rem">
    <h1>A dynamic width component with a video background</h1>
  </div>
</responsive-video-background>

<responsive-video-background
    class="demo demo3"
    mp4="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
    poster="https://test-videos.co.uk/user/pages/images/big_buck_bunny.jpg">
  <div>
    <h1>A small component with a video background</h1>
  </div>
</responsive-video-background>

<responsive-video-background
class="demo demo4"
fallback="https://images.unsplash.com/photo-1601629665203-f9f2b8d07019?auto=format&w=1440&q=80"
    srcset="https://images.unsplash.com/photo-1601629665203-f9f2b8d07019?auto=format&w=420&q=80 420w, https://images.unsplash.com/photo-1601629665203-f9f2b8d07019?auto=format&w=768&q=80 768w, https://images.unsplash.com/photo-1601629665203-f9f2b8d07019?auto=format&w=1024&q=80 1024w, https://images.unsplash.com/photo-1601629665203-f9f2b8d07019?auto=format&w=1440&q=80 1440w"
    sizes="(min-width: 92rem) 90rem, calc(100vh - 2rem)">
  <div>
    <h1>A fixed height component with an image background</h1>
    <p>Look here!</p>
  </div>
</responsive-video-background>

<responsive-video-background
    class="demo demo5"
    mp4="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4">
  <div>
    <h1>A fluid height component with an image background</h1>
  </div>
</responsive-video-background>

</div>
<script type="module" src="./demo/app.js"></script>
