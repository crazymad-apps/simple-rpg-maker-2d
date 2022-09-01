import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";
import EditorStore from "../../stores/EditorStore";
import styles from "./index.module.scss";

const CanvasContainer: React.FC = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    canvasRef.current && EditorStore.initCanvas(canvasRef.current);
  }, []);

  return (
    <div className={styles.canvas_container}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default observer(CanvasContainer);
