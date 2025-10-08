import React, { useState } from "react";
import {
  Drawer,
  List,
  Button,
  Typography,
  Space,
  InputNumber,
  Divider,
  Badge,
} from "antd";
import {
  ShoppingCartOutlined,
  DeleteOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const CartPopup = () => {
  const [open, setOpen] = useState(false);

  // Mock cart data - replace with your actual cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 15",
      price: 67999,
      quantity: 1,
      image: "https://placeholder.com/100x100",
    },
    // Add more items as needed
  ]);

  const updateQuantity = (id, value) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: value } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Badge count={cartItems.length}>
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          onClick={() => setOpen(true)}
          size="large"
        >
          Cart
        </Button>
      </Badge>

      <Drawer
        title="Shopping Cart"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        width={400}
        extra={<Text type="secondary">{cartItems.length} items</Text>}
      >
        {cartItems.length > 0 ? (
          <>
            <List
              itemLayout="horizontal"
              dataSource={cartItems}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => removeItem(item.id)}
                    />,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <img
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                      />
                    }
                    title={item.name}
                    description={
                      <Space direction="vertical">
                        <Text>₹{item.price.toLocaleString()}</Text>
                        <InputNumber
                          min={1}
                          max={10}
                          value={item.quantity}
                          onChange={(value) => updateQuantity(item.id, value)}
                          size="small"
                        />
                      </Space>
                    }
                  />
                </List.Item>
              )}
            />

            <Divider />

            <Space direction="vertical" style={{ width: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Text strong>Subtotal:</Text>
                <Text strong>₹{totalAmount.toLocaleString()}</Text>
              </div>

              <Button type="primary" block size="large">
                Proceed to Checkout
              </Button>
            </Space>
          </>
        ) : (
          <Space
            direction="vertical"
            style={{ width: "100%", textAlign: "center", marginTop: "40px" }}
          >
            <ShoppingOutlined style={{ fontSize: "48px", color: "#ccc" }} />
            <Title level={4}>Your cart is empty</Title>
            <Text type="secondary">Add items to get started</Text>
          </Space>
        )}
      </Drawer>
    </>
  );
};

export default CartPopup;
