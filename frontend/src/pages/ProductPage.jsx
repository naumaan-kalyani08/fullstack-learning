import React, { useState } from "react";
import {
  Layout,
  Card,
  Row,
  Col,
  Typography,
  Select,
  Slider,
  Checkbox,
  Space,
  Pagination,
  Rate,
  Tag,
} from "antd";
import { FilterOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const ProductPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("popular");

  // Mock data - replace with actual data
  const products = Array(12).fill({
    title: "Sample Product",
    price: 99.99,
    rating: 4,
    image: "placeholder.jpg",
  });

  return (
    <Layout className="min-h-screen">
      <Content className="p-6">
        <Row gutter={[24, 24]}>
          {/* Filters Sidebar */}
          <Col xs={24} sm={24} md={6} lg={6}>
            <Card>
              <Space direction="vertical" className="w-full" size="large">
                <div>
                  <Title level={4}>Categories</Title>
                  <Checkbox.Group
                    options={["Electronics", "Fashion", "Home", "Books"]}
                    value={selectedCategories}
                    onChange={setSelectedCategories}
                  />
                </div>

                <div>
                  <Title level={4}>Price Range</Title>
                  <Slider
                    range
                    value={priceRange}
                    onChange={setPriceRange}
                    min={0}
                    max={1000}
                  />
                  <Row justify="space-between">
                    <Text>${priceRange[0]}</Text>
                    <Text>${priceRange[1]}</Text>
                  </Row>
                </div>

                <div>
                  <Title level={4}>Rating</Title>
                  <Rate disabled defaultValue={4} />
                  <Text className="ml-2">& Up</Text>
                </div>
              </Space>
            </Card>
          </Col>

          {/* Products Grid */}
          <Col xs={24} sm={24} md={18} lg={18}>
            <Row justify="space-between" align="middle" className="mb-4">
              <Title level={3}>All Products</Title>
              <Select
                defaultValue="popular"
                style={{ width: 200 }}
                onChange={setSortBy}
              >
                <Option value="popular">Most Popular</Option>
                <Option value="newest">Newest</Option>
                <Option value="price-low">Price: Low to High</Option>
                <Option value="price-high">Price: High to Low</Option>
              </Select>
            </Row>

            <Row gutter={[16, 16]}>
              {products.map((product, index) => (
                <Col xs={24} sm={12} md={8} lg={6} key={index}>
                  <Card
                    hoverable
                    cover={
                      <div
                        className="aspect-square bg-gray-200"
                        style={{ height: 200 }}
                      />
                    }
                    actions={[
                      <ShoppingCartOutlined key="cart" />,
                      <Rate
                        disabled
                        defaultValue={product.rating}
                        key="rate"
                      />,
                    ]}
                  >
                    <Card.Meta
                      title={product.title}
                      description={
                        <Space direction="vertical">
                          <Text strong>${product.price}</Text>
                          <Tag color="blue">Free Shipping</Tag>
                        </Space>
                      }
                    />
                  </Card>
                </Col>
              ))}
            </Row>

            <Row justify="center" className="mt-8">
              <Pagination defaultCurrent={1} total={50} />
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ProductPage;
