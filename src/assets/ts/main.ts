// Polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";

import "intersection-observer";
import objectFitImages from "object-fit-images";
import closetPolyfill from "./lib/closet.polyfill";
objectFitImages();
closetPolyfill();

// Libraly
// import $ from 'jquery';
// import Swiper from 'swiper';
// import ScrollObserver from './lib/ScrollObserver';
// import Toggle from './lib/Toggle';
// import { dropdown } from './lib/dropdown';
// import { inview } from './lib/inview';

import "./lib/loading";
