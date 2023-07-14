"use strict";

import { TextureLoader } from "three/src/loaders/TextureLoader";
import BaseCanvas from "./BaseCanvas";
import Background from "./Background";

export default class AppCanvas extends BaseCanvas {
  constructor() {
    super();

    this.isReady = false;
    this.init();
  }

  async init() {
    const loader = new TextureLoader();
    const promiseList = [
      loader.loadAsync("./assets/img/common/gradation _14.png"),
      loader.loadAsync("./assets/img/common/dust.png"),
    ];
    const textures = await Promise.all(promiseList);

    this.background = new Background({ textures });
    this.scene.add(this.background);

    this.resize();
    this.isReady = true;
  }

  resize() {
    this.setConfig();
    this.resizeScene();
  }

  update(time) {
    if (!this.isReady) return;

    this.background.update(time);
    this.renderer.render(this.scene, this.camera);
  }
}
