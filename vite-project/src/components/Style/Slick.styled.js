import { createGlobalStyle } from "styled-components";

export const SlickGlobalStyle = createGlobalStyle`
.slick-slider {
  position: relative;
  display: block;
  box-sizing: border-box;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-list {
  position: relative;
  overflow: hidden;
  display: block;
  margin: 0;
  padding: 0;
}
.slick-list:focus {
  outline: none;
}
.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list {
  transform: translate3d(0, 0, 0);
}

.slick-track {
  position: relative;
  left: 0;
  top: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.slick-track:before, .slick-track:after {
  content: "";
  display: table;
}
.slick-track:after {
  clear: both;
}
.slick-loading .slick-track {
  visibility: hidden;
}

.slick-slide {
  float: left;
  height: 100%;
  min-height: 1px;
  display: none;
}
[dir=rtl] .slick-slide {
  float: right;
}
.slick-slide img {
  display: block;
}
.slick-slide.slick-loading img {
  display: none;
}
.slick-slide.dragging img {
  pointer-events: none;
}
.slick-initialized .slick-slide {
  display: block;
}
.slick-loading .slick-slide {
  visibility: hidden;
}
.slick-vertical .slick-slide {
  display: block;
  height: auto;
  border: 1px solid transparent;
}

.slick-arrow.slick-hidden {
  display: none;
}`