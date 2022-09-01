import { Button, InputNumber, Space } from "antd";
import React from "react";

const HeaderTools: React.FC = (props) => {
  return (
    <header>
      <Space>
        <Button>导入场景文件</Button>

        <span>
          <label>场景宽度</label>
          <InputNumber placeholder="场景宽度" />
        </span>

        <span>
          <label>场景高度</label>
          <InputNumber placeholder="场景高度" />
        </span>
      </Space>
    </header>
  );
};

export default HeaderTools;
