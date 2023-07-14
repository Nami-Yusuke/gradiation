// Polyfill
import "intersection-observer";
import objectFitImages from "object-fit-images";
import closetPolyfill from "./lib/closet.polyfill";
objectFitImages();
closetPolyfill();
// Libraly
import Loading from "./lib/Loading";
// import $ from "jquery";
// import Swiper from 'swiper';
// import SmoothScroll from "smooth-scroll";
// import ScrollObserver from './lib/ScrollObserver';
// import Toggle from "./lib/Toggle";
// import Close from "./lib/Close";
// import Slider from "./lib/Slider";
// import { dropdown } from './lib/dropdown';
// import { inview } from './lib/inview';
import three from "./lib/three";
three();
new Loading();
// new SmoothScroll('a[href*="#"]');
// new Toggle(".js-drawer");
