import { makeObservable, observable } from "mobx";
import Editor from "../services/Editor";

const RESOURCES = [
  {
    spirit: "/imgs/resources/land.png",
    name: "land",
  },
  {
    spirit: "/imgs/resources/grass.png",
    name: "grass",
  },
  {
    spirit: "/imgs/resources/river.png",
    name: "river",
  },
  {
    spirit: "/imgs/resources/sand.png",
    name: "sand",
  },
  {
    spirit: "/imgs/resources/sea.png",
    name: "sea",
  },
  {
    spirit: "/imgs/resources/tree.png",
    name: "tree",
  },
  {
    spirit: "/imgs/resources/tree2.png",
    name: "tree2",
  },
];

class EditorStore {
  resources = RESOURCES;

  curResource?: string;

  editor?: Editor;

  curLayerIdx: number = 0;

  scene: {
    layers: { name: string; grids: string[][] }[];
    width: number;
    height: number;
  } = {
    layers: [{ name: "图层1", grids: new Array(40).fill(new Array(40)) }],
    width: 40,
    height: 40,
  };

  constructor() {
    makeObservable(this, {
      resources: observable,
      curResource: observable,
      scene: observable,
      curLayerIdx: observable,
    });
  }

  selectResource(name: string) {
    this.curResource = name === this.curResource ? undefined : name;
  }

  initCanvas(canvas: HTMLCanvasElement) {
    this.editor = new Editor(canvas);
  }

  setCurLayerIdx(idx: number) {
    this.curLayerIdx = idx;
  }

  addLayer() {
    this.scene.layers.push({
      name: "新建图层",
      grids: [],
    });
    // this.scene = { ...this.scene };
  }
}

export default new EditorStore();
