import { useState } from "react";
import { Drawer as AntDrawer } from "antd";

const DrawerComponent = ({ isOpen, onClose }) => {
  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const toggleChildrenDrawer = () => {
    setChildrenDrawer(!childrenDrawer);
  };

  return (
    <AntDrawer
      title="Basic Drawer"
      placement="right"
      onClose={onClose}
      open={isOpen}
    >
      <p>Level one</p>
      <button onClick={toggleChildrenDrawer}> level two</button>
      <AntDrawer
        title="Two-level Drawer"
        width={320}
        onClose={toggleChildrenDrawer}
        open={childrenDrawer}
      >
        <p>Level two</p>
      </AntDrawer>
    </AntDrawer>
  );
};

export default DrawerComponent;
