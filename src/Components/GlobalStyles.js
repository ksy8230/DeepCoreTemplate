import { createGlobalStyle } from 'styled-components';
import { theme } from '../constants';
// import OpenSans from '../css/fonts/OpenSans-Regular.ttf';
// import SquadaOne from '../css/fonts/SquadaOne-Regular.ttf';
// import Alata from '../css/fonts/Alata-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
body {
    position: relative;
    margin: 0;
    min-height: 100%;
    background:${theme.black};
  }
  html {
    height: 100%;
  }
  .default-layout {
    height: 100%;
    padding-bottom: 50px;
  }
  iframe {
    border: 0;
    width: 100%;
  }
  
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:boerder-box;
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }
    ul {
        padding:0;
        margin:0;
    }
    li {
        list-style:none;
    }
    .copytoclipboard-btn {
        visibility: hidden;
        width: 0;
        height: 0px;
        opacity: 0;
        padding: 0;
        margin: 0;
    }
    button:focus {
        outline: 0 !important;
    }
    em {
        font-style: normal;
    }


    /* 이게 뭔지 알아내기 (달력에 사용되는 css?)
    * Force Bootstrap v4 transitions
    * (ignores prefers-reduced-motion media feature)
    * https://gist.github.com/robssanches/33c6c1bf4dd5cf3c259009775883d1c0
    */

    .fade {
        transition:opacity 0.15s linear !important;
    }
    .collapsing {
        transition:height 0.35s ease !important;
    }
    .custom-switch .custom-control-label::after {
        transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,-webkit-transform 0.15s ease-in-out !important;
        transition:transform 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out !important;
        transition:transform 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,-webkit-transform 0.15s ease-in-out !important;
    }
    .custom-range::-webkit-slider-thumb {
        transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out !important;
    }
    .custom-range::-moz-range-thumb {
        transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out !important;
    }
    .custom-range::-ms-thumb {
        transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out !important;
    }
    .custom-control-label::before,.custom-file-label,.custom-select {
        transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out !important;
    }
    .badge {
        transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out !important;
    }
    .progress-bar {
        transition:width 0.6s ease !important;
    }
    .progress-bar-animated {
        -webkit-animation:progress-bar-stripes 1s linear infinite !important;
        animation:progress-bar-stripes 1s linear infinite !important;
    }
    .modal.fade .modal-dialog {
        transition:-webkit-transform 0.3s ease-out !important;
        transition:transform 0.3s ease-out !important;
        transition:transform 0.3s ease-out,-webkit-transform 0.3s ease-out !important;
    }
    .carousel-item {
        transition:-webkit-transform 0.6s ease-in-out !important;
        transition:transform 0.6s ease-in-out !important;
        transition:transform 0.6s ease-in-out,-webkit-transform 0.6s ease-in-out !important;
    }
    .carousel-fade .carousel-item {
        transition-property: opacity !important;
    }

    .carousel-fade .active.carousel-item-left,
    .carousel-fade .active.carousel-item-right {
        transition: 0s 0.6s opacity !important;
    }

    .carousel-control-prev,.carousel-control-next {
        transition:opacity 0.15s ease !important;
    }
    .carousel-indicators li {
        transition:opacity 0.6s ease !important;
    }
    .form-control {
        transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out !important;
    }
    .btn {
        transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out !important;
    }
`;
