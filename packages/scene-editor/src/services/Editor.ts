import EditorStore from "../stores/EditorStore";
import { loadImage } from "../utils/imageLoader";

class Editor {
  canvas: HTMLCanvasElement;

  context: CanvasRenderingContext2D;

  drawing = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d")!;

    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    this.canvas.width = width;
    this.canvas.height = height;

    this.context.fillRect(0, 0, width, height);

    this.initHandler();
  }

  initHandler() {
    const { left: baseX, top: baseY } = this.canvas.getBoundingClientRect();
    this.canvas.addEventListener("mousedown", (e) => {
      this.drawing = true;
      const { pageX, pageY } = e;
      const x = pageX - baseX;
      const y = pageY - baseY;

      this.drawSpiritOnLayer(x, y);
    });
    this.canvas.addEventListener("mousemove", (e) => {
      if (!this.drawing) return;

      const { pageX, pageY } = e;
      const x = pageX - baseX;
      const y = pageY - baseY;
      this.drawSpiritOnLayer(x, y);
    });
    document.addEventListener("mouseup", () => {
      this.drawing = false;
    });
  }

  drawSpiritOnLayer(x: number, y: number) {
    const { curResource, curLayerIdx, scene, resources } = EditorStore;
    const resource = resources.find((item) => item.name === curResource);
    if (!curResource || !resource) return;

    const gridx = Math.floor(x / 32);
    const gridy = Math.floor(y / 32);

    const layer = scene.layers[curLayerIdx];
    if (!layer.grids[gridx]) {
      layer.grids[gridx] = [];
    }

    if (layer.grids[gridx][gridy] === curResource) return;

    layer.grids[gridx][gridy] = curResource;
    // const isTall = ["tree", "tree2"].includes(curResource);
    // const px = gridx * 32;
    // const py = (isTall ? gridy - 1 : gridy) * 32;

    // loadImage(resource.spirit).then((image) => {
    //   this.context.drawImage(image, px, py, 32, isTall ? 64 : 32);
    // });
    // this.renderLayer(curLayerIdx);
    this.renderLayers();
  }

  renderLayers() {
    EditorStore.scene.layers.forEach((_, idx) => this.renderLayer(idx));
  }

  renderLayer(idx: number) {
    const { scene, resources } = EditorStore;
    const { layers } = scene;
    const layer = layers[idx];

    for (let ii = 0; ii < scene.width; ii++) {
      if (!layer.grids[ii]) continue;

      for (let jj = 0; jj < scene.height; jj++) {
        if (!layer.grids[ii][jj]) continue;

        // layer.grids[ii][jj];
      }
    }
  }
}

export default Editor;
