import { Button } from "antd";
import React from "react";
import CanvasContainer from "./components/CanvasContainer";
import HeaderTools from "./components/HeaderTools";
import LayerList from "./components/LayerList";
import ResourceList from "./components/ResourceList";

function App() {
  return (
    <div className="App">
      <HeaderTools />
      <main>
        <ResourceList />
        <CanvasContainer />
        <LayerList />
      </main>
    </div>
  );
}

export default App;
