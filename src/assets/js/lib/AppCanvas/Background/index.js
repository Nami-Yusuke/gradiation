"use strict";

import { Mesh } from "three/src/objects/Mesh";
import { PlaneGeometry } from "three/src/geometries/PlaneGeometry";
import { RawShaderMaterial } from "three/src/materials/RawShaderMaterial";
import { Vector2 } from "three/src/math/Vector2";
import vertexShader from "./shader/vert.glsl";
import fragmentShader from "./shader/frag.glsl";
import Pointer from "../../_utils/Pointer";
import { Tween2 } from "../../_utils/Tween";
import Config from "../Config";
export default class Background extends Mesh {
  constructor({ textures }) {
    super();

    this.geometry = new PlaneGeometry(4, 4);

    this.material = new RawShaderMaterial({
      uniforms: {
        texture: { value: textures[0] },
        dustTex: { value: textures[1] },
        time: { value: 0.0 },
        pointer: { value: new Vector2(0, 0) },
      },
      vertexShader,
      fragmentShader,
    });

    // ポインターの動きをなめらかにするためのTweenを作成
    this.tween = new Tween2({ x: 0, y: 0 }, 10);
  }

  update(time) {
    // Pointerの座標をthree.jsのシーン用に変換
    const px = -Config.sceneWidth / 2 + (Pointer.x / window.innerWidth) * Config.sceneWidth;
    const py = Config.sceneHeight / 2 - (Pointer.y / window.innerHeight) * Config.sceneHeight;
    this.tween.update({ x: -px, y: -py }, time);
    this.material.uniforms.time.value = time;
    // this.material.uniforms.pointer.value.x = this.tween.position.x;
    // this.material.uniforms.pointer.value.y = this.tween.position.y;
    // console.log(deltaTime);
  }
}
