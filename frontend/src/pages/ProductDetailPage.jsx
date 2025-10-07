import React, { useState } from "react";
import {
  Row,
  Col,
  Image,
  Typography,
  Button,
  Rate,
  Tag,
  Divider,
  Space,
  Card,
  Radio,
  InputNumber,
  Collapse,
  Table,
} from "antd";
import {
  ShoppingCartOutlined,
  ThunderboltOutlined,
  HeartOutlined,
  ShareAltOutlined,
  SafetyOutlined,
  TrophyOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import CartPopup from "./CartPopup";

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedStorage, setSelectedStorage] = useState("128 GB");
  const [mainImage, setMainImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1695048064772-d7a83cd9d0c7?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1695048133098-09c89c9e5a46?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1695048064599-b492c4b96290?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1696446702377-818040b20273?w=500&h=500&fit=crop",
  ];

  const colors = ["Black", "Blue", "Pink", "Yellow", "Green"];
  const storageOptions = ["128 GB", "256 GB", "512 GB"];

  const specifications = [
    {
      key: "1",
      feature: "Display",
      value: "6.1-inch Super Retina XDR display",
    },
    { key: "2", feature: "Processor", value: "A16 Bionic chip" },
    { key: "3", feature: "Camera", value: "48MP Main + 12MP Ultra Wide" },
    { key: "4", feature: "Front Camera", value: "12MP TrueDepth" },
    { key: "5", feature: "Battery", value: "Up to 20 hours video playback" },
    { key: "6", feature: "Connectivity", value: "5G, Wi-Fi 6, Bluetooth 5.3" },
    { key: "7", feature: "Operating System", value: "iOS 17" },
    { key: "8", feature: "Water Resistance", value: "IP68 rated" },
  ];

  const columns = [
    { title: "Feature", dataIndex: "feature", key: "feature", width: "40%" },
    { title: "Specification", dataIndex: "value", key: "value" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <Row gutter={[24, 24]}>
          {/* Image Section */}
          <Col xs={24} md={10}>
            <div style={{ position: "sticky", top: "20px" }}>
              <Image
                src={images[mainImage]}
                alt="iPhone 15"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <Row gutter={[8, 8]} style={{ marginTop: "16px" }}>
                {images.map((img, idx) => (
                  <Col span={6} key={idx}>
                    <div
                      onClick={() => setMainImage(idx)}
                      style={{
                        border:
                          mainImage === idx
                            ? "2px solid #1890ff"
                            : "1px solid #d9d9d9",
                        borderRadius: "4px",
                        cursor: "pointer",
                        padding: "4px",
                      }}
                    >
                      <img
                        src={img}
                        alt={`View ${idx + 1}`}
                        style={{ width: "100%", borderRadius: "4px" }}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          {/* Product Details Section */}
          <Col xs={24} md={9}>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <div>
                <Text type="secondary">Visit the Apple Store</Text>
                <Title level={3} style={{ margin: "8px 0" }}>
                  Apple iPhone 15 (128 GB) - Black
                </Title>
                <Space>
                  <Rate disabled defaultValue={4.5} allowHalf />
                  <Text strong>4.5</Text>
                  <Text type="secondary">24,567 ratings</Text>
                </Space>
                <div style={{ marginTop: "8px" }}>
                  <Tag color="orange">Amazon's Choice</Tag>
                  <Tag color="green">In Stock</Tag>
                </div>
              </div>

              <Divider style={{ margin: "12px 0" }} />

              <div>
                <Space align="baseline">
                  <Text style={{ fontSize: "14px", color: "#CC0C39" }}>
                    -15%
                  </Text>
                  <Title level={2} style={{ margin: 0, color: "#B12704" }}>
                    ₹67,999
                  </Title>
                </Space>
                <Text delete type="secondary" style={{ fontSize: "14px" }}>
                  M.R.P.: ₹79,900
                </Text>
                <div style={{ marginTop: "8px" }}>
                  <Text type="secondary">Inclusive of all taxes</Text>
                </div>
                <div style={{ marginTop: "4px" }}>
                  <Text type="secondary" style={{ fontSize: "12px" }}>
                    EMI starts at ₹2,267. No Cost EMI available
                  </Text>
                </div>
              </div>

              <Card
                size="small"
                style={{ backgroundColor: "#f7f7f7", border: "none" }}
              >
                <Space direction="vertical" size="small">
                  <Space>
                    <SafetyOutlined style={{ color: "#1890ff" }} />
                    <Text strong>1 Year Warranty</Text>
                  </Space>
                  <Space>
                    <RocketOutlined style={{ color: "#1890ff" }} />
                    <Text strong>Free Delivery by Tomorrow</Text>
                  </Space>
                  <Space>
                    <TrophyOutlined style={{ color: "#1890ff" }} />
                    <Text strong>Top Brand</Text>
                  </Space>
                </Space>
              </Card>

              <div>
                <Text strong style={{ display: "block", marginBottom: "8px" }}>
                  Color: {selectedColor}
                </Text>
                <Radio.Group
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  <Space wrap>
                    {colors.map((color) => (
                      <Radio.Button
                        key={color}
                        value={color}
                        style={{ minWidth: "80px" }}
                      >
                        {color}
                      </Radio.Button>
                    ))}
                  </Space>
                </Radio.Group>
              </div>

              <div>
                <Text strong style={{ display: "block", marginBottom: "8px" }}>
                  Storage: {selectedStorage}
                </Text>
                <Radio.Group
                  value={selectedStorage}
                  onChange={(e) => setSelectedStorage(e.target.value)}
                >
                  <Space wrap>
                    {storageOptions.map((storage) => (
                      <Radio.Button
                        key={storage}
                        value={storage}
                        style={{ minWidth: "90px" }}
                      >
                        {storage}
                      </Radio.Button>
                    ))}
                  </Space>
                </Radio.Group>
              </div>

              <Collapse defaultActiveKey={["1"]} ghost>
                <Panel header={<Text strong>About this item</Text>} key="1">
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>
                      DYNAMIC ISLAND COMES TO iPhone 15 — Dynamic Island bubbles
                      up alerts and Live Activities
                    </li>
                    <li>
                      INNOVATIVE DESIGN — iPhone 15 features a durable
                      colour-infused glass and aluminium design
                    </li>
                    <li>
                      48MP MAIN CAMERA WITH 2X TELEPHOTO — The 48MP Main camera
                      shoots in super-high resolution
                    </li>
                    <li>
                      NEXT-GENERATION PORTRAITS — Capture portraits with
                      dramatically more detail and colour
                    </li>
                    <li>
                      A16 BIONIC CHIP — The proven A16 Bionic chip delivers
                      incredible performance
                    </li>
                  </ul>
                </Panel>
              </Collapse>
            </Space>
          </Col>

          {/* Buy Box Section */}
          <Col xs={24} md={5}>
            <Card style={{ position: "sticky", top: "20px" }}>
              <Space
                direction="vertical"
                size="middle"
                style={{ width: "100%" }}
              >
                <div>
                  <Title level={4} style={{ color: "#B12704", margin: 0 }}>
                    ₹67,999
                  </Title>
                  <Text type="secondary" style={{ fontSize: "12px" }}>
                    FREE delivery by Tomorrow
                  </Text>
                </div>

                <div>
                  <Tag color="green" style={{ fontSize: "13px" }}>
                    In Stock
                  </Tag>
                  <div style={{ marginTop: "8px" }}>
                    <Text>Sold by: </Text>
                    <Text strong>Appario Retail Private Ltd</Text>
                  </div>
                </div>

                <div>
                  <Text style={{ display: "block", marginBottom: "8px" }}>
                    Quantity:
                  </Text>
                  <InputNumber
                    min={1}
                    max={10}
                    value={quantity}
                    onChange={setQuantity}
                    style={{ width: "100%" }}
                  />
                </div>

                <Button
                  type="primary"
                  size="large"
                  icon={<ShoppingCartOutlined />}
                  block
                  style={{
                    backgroundColor: "#FFD814",
                    borderColor: "#FCD200",
                    color: "#0F1111",
                    fontWeight: "bold",
                  }}
                >
                  Add to Cart
                </Button>

                <Button
                  size="large"
                  icon={<ThunderboltOutlined />}
                  block
                  style={{
                    backgroundColor: "#FFA41C",
                    borderColor: "#FF8F00",
                    color: "#0F1111",
                    fontWeight: "bold",
                  }}
                >
                  Buy Now
                </Button>

                <Divider style={{ margin: "8px 0" }} />

                <Space
                  direction="vertical"
                  size="small"
                  style={{ width: "100%" }}
                >
                  <Button
                    type="link"
                    icon={<HeartOutlined />}
                    style={{ padding: 0 }}
                  >
                    Add to Wish List
                  </Button>
                  <Button
                    type="link"
                    icon={<ShareAltOutlined />}
                    style={{ padding: 0 }}
                  >
                    Share
                  </Button>
                </Space>

                <Card
                  size="small"
                  style={{
                    backgroundColor: "#f0f7ff",
                    border: "1px solid #91d5ff",
                  }}
                >
                  <Text strong style={{ color: "#0050b3", fontSize: "12px" }}>
                    Secure transaction
                  </Text>
                </Card>
              </Space>
            </Card>
          </Col>
        </Row>

        {/* Technical Specifications */}
        <Row style={{ marginTop: "40px" }}>
          <Col span={24}>
            <Card>
              <Title level={4}>Technical Specifications</Title>
              <Table
                dataSource={specifications}
                columns={columns}
                pagination={false}
                size="middle"
                bordered
              />
            </Card>
          </Col>
        </Row>

        {/* Product Description */}
        <Row style={{ marginTop: "20px" }}>
          <Col span={24}>
            <Card>
              <Title level={4}>Product Description</Title>
              <Paragraph>
                iPhone 15. Newcam. Newaction button. New design. Forged in
                titanium and featuring the groundbreaking A17 Pro chip, a
                customizable Action button, and the most powerful iPhone camera
                system ever.
              </Paragraph>
              <Paragraph>
                The iPhone 15 brings you Dynamic Island, a 48MP Main camera, and
                USB-C — all in a dependable design. Experience the latest
                technology with A16 Bionic chip and advanced camera features.
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          <CartPopup />
        </div>
      </div>
    </div>
  );
}
