import { observer } from "mobx-react";
import React from "react";
import EditorStore from "../../stores/EditorStore";
import styles from "./index.module.scss";

const ResourceList: React.FC = (props) => {
  const { resources, curResource } = EditorStore;

  return (
    <aside className={styles.resource_list}>
      {resources.map((resource, idx) => (
        <div
          key={idx}
          className={`${styles.resource_item} ${
            curResource === resource.name ? styles.active : ""
          }`}
          onClick={() => EditorStore.selectResource(resource.name)}
        >
          <img src={resource.spirit} alt={resource.name} />
          <label>{resource.name}</label>
        </div>
      ))}
    </aside>
  );
};

export default observer(ResourceList);
