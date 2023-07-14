import { TweenMax } from "gsap";
export default class MouseStalker {
  constructor() {
    // this.stalker = document.querySelector(selector);
    this.stalker = document.createElement("div");
    this.linkElems = document.querySelectorAll("a[href]:not(.no_stick_), button");
    // this.linkElems = document.querySelectorAll(".js-carousel");
    this.hoverFlag = false;
    this.posX = 0;
    this.posY = 0;

    TweenMax.set(this.stalker, {
      scale: 0.2,
    });

    this.init();
  }

  init() {
    this.stalker.classList.add("c-stalker");
    document.body.appendChild(this.stalker);
    // this.stalker.innerText = "Drag";

    this.on();
  }

  on() {
    document.addEventListener("mousemove", this.move.bind(this));
    this.linkElems.forEach((ele) => {
      ele.addEventListener("mouseover", this.mouseover.bind(this));
      ele.addEventListener("mouseleave", this.mouseleave.bind(this));
    });
  }

  mouseover() {
    this.hoverFlag = true;
    this.stalker.classList.add("is-active");
    TweenMax.to(this.stalker, 0.3, {
      scale: 1,
    });
  }

  mouseleave() {
    this.hoverFlag = false;
    this.stalker.classList.remove("is-active");
    TweenMax.to(this.stalker, 0.3, {
      scale: 0.5,
    });
  }

  move(e) {
    TweenMax.to(this.stalker, 0.3, {
      x: e.clientX,
      y: e.clientY,
    });
  }
}
