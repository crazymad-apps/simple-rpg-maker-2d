import { Button } from "antd";
import { observer } from "mobx-react-lite";
import React from "react";
import EditorStore from "../../stores/EditorStore";
import styles from "./index.module.scss";

const LayerList: React.FC = (props) => {
  const { scene, curLayerIdx } = EditorStore;

  return (
    <div className={styles.layer_list}>
      <Button
        style={{ width: "100%", marginTop: 12 }}
        onClick={() => EditorStore.addLayer()}
      >
        新建图层
      </Button>
      {scene.layers.map((layer, idx) => (
        <div
          className={`${styles.layer_item} ${
            curLayerIdx === idx ? styles.active : undefined
          }`}
          key={idx}
          onClick={() => EditorStore.setCurLayerIdx(idx)}
        >
          <span>{layer.name}</span>
        </div>
      ))}
    </div>
  );
};

export default observer(LayerList);
