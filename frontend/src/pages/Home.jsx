import React, { useState, useEffect } from "react";
import {
  Layout,
  Typography,
  Card,
  Row,
  Col,
  Button,
  Input,
  Space,
  Modal,
  Badge,
  Tag,
  Rate,
  Statistic,
  Divider,
  Avatar,
  Carousel,
} from "antd";
import {
  ShoppingOutlined,
  GiftOutlined,
  SendOutlined,
  HeartOutlined,
  StarFilled,
  ThunderboltOutlined,
  SafetyOutlined,
  RocketOutlined,
  TrophyOutlined,
  ShoppingCartOutlined,
  FireOutlined,
  CrownOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;
const { Countdown } = Statistic;

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showOffer, setShowOffer] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleOfferClose = () => {
    setShowOffer(false);
  };

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOffer(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const categories = [
    {
      title: "Electronics",
      icon: <ShoppingOutlined style={{ fontSize: 48, color: "#1890ff" }} />,
      count: "2.5k+ Products",
      color: "#e6f7ff",
    },
    {
      title: "Fashion",
      icon: <CrownOutlined style={{ fontSize: 48, color: "#eb2f96" }} />,
      count: "5k+ Products",
      color: "#fff0f6",
    },
    {
      title: "Home & Living",
      icon: <GiftOutlined style={{ fontSize: 48, color: "#52c41a" }} />,
      count: "3k+ Products",
      color: "#f6ffed",
    },
    {
      title: "Beauty",
      icon: <StarFilled style={{ fontSize: 48, color: "#faad14" }} />,
      count: "1.5k+ Products",
      color: "#fffbe6",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      title: "Wireless Headphones Pro",
      price: 99.99,
      originalPrice: 149.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 245,
      badge: "Hot",
      badgeColor: "#ff4d4f",
    },
    {
      id: 2,
      title: "Smart Watch Ultra",
      price: 199.99,
      originalPrice: 299.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 512,
      badge: "Best Seller",
      badgeColor: "#52c41a",
    },
    {
      id: 3,
      title: "Premium Camera Lens",
      price: 299.99,
      originalPrice: 399.99,
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 189,
      badge: "New",
      badgeColor: "#1890ff",
    },
    {
      id: 4,
      title: "Designer Backpack",
      price: 79.99,
      originalPrice: 129.99,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 324,
      badge: "Sale",
      badgeColor: "#faad14",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      avatar: "👩",
      rating: 5,
      comment: "Amazing quality and fast delivery! Highly recommend.",
    },
    {
      name: "Michael Chen",
      avatar: "👨",
      rating: 5,
      comment: "Best shopping experience ever. Great customer service!",
    },
    {
      name: "Emily Davis",
      avatar: "👧",
      rating: 4,
      comment: "Love the variety of products. Will shop again!",
    },
  ];

  const features = [
    {
      icon: <RocketOutlined />,
      title: "Free Shipping",
      desc: "On orders over $50",
    },
    {
      icon: <SafetyOutlined />,
      title: "Secure Payment",
      desc: "100% protected",
    },
    {
      icon: <ThunderboltOutlined />,
      title: "Quick Delivery",
      desc: "2-3 business days",
    },
    {
      icon: <TrophyOutlined />,
      title: "Best Quality",
      desc: "Premium products",
    },
  ];

  return (
    <Layout className="bg-gray-50">
      <Content>
        {/* Hero Section with Carousel */}
        <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 py-20">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} md={12}>
                <Space direction="vertical" size="large" className="w-full">
                  <Tag color="gold" className="px-4 py-1 text-sm">
                    <FireOutlined /> Limited Time Offer
                  </Tag>
                  <Title
                    level={1}
                    className="text-white !mb-0"
                    style={{ fontSize: "3rem" }}
                  >
                    Summer Sale
                    <br />
                    Up to 50% Off
                  </Title>
                  <Paragraph className="text-white text-lg opacity-90">
                    Discover amazing deals on premium products. Shop now and
                    save big on your favorite items!
                  </Paragraph>
                  <Space size="middle">
                    <Button
                      type="primary"
                      size="large"
                      icon={<ShoppingCartOutlined />}
                      className="bg-white text-purple-600 hover:bg-gray-100 border-0 shadow-lg"
                    >
                      Shop Now
                    </Button>
                    <Button
                      size="large"
                      ghost
                      className="border-white text-white hover:bg-white/10"
                    >
                      Learn More
                    </Button>
                  </Space>
                  <div className="mt-4">
                    <Text className="text-white opacity-75 mr-4">
                      Sale ends in:
                    </Text>
                    <Countdown
                      value={Date.now() + 2 * 24 * 60 * 60 * 1000}
                      format="HH:mm:ss"
                      className="text-white"
                      valueStyle={{
                        color: "white",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    />
                  </div>
                </Space>
              </Col>
              <Col xs={24} md={12}>
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=600&fit=crop"
                      alt="Hero"
                      className="rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* Features Bar */}
        <div className="bg-white shadow-sm py-6">
          <div className="max-w-7xl mx-auto px-4">
            <Row gutter={[24, 24]} justify="center">
              {features.map((feature, index) => (
                <Col key={index} xs={12} sm={12} md={6}>
                  <Space direction="vertical" align="center" className="w-full">
                    <div className="text-3xl text-purple-600">
                      {feature.icon}
                    </div>
                    <Text strong>{feature.title}</Text>
                    <Text type="secondary" className="text-xs">
                      {feature.desc}
                    </Text>
                  </Space>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Categories Section */}
        <div className="py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Title level={2} className="!mb-2">
              Shop by Category
            </Title>
            <Paragraph type="secondary" className="text-lg">
              Explore our wide range of premium products
            </Paragraph>
          </div>
          <Row gutter={[24, 24]}>
            {categories.map((category) => (
              <Col key={category.title} xs={12} sm={12} md={6}>
                <Card
                  hoverable
                  className="text-center border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ backgroundColor: category.color }}
                >
                  <Space
                    direction="vertical"
                    align="center"
                    size="large"
                    className="w-full"
                  >
                    {category.icon}
                    <div>
                      <Title level={4} className="!mb-1">
                        {category.title}
                      </Title>
                      <Text type="secondary" className="text-xs">
                        {category.count}
                      </Text>
                    </div>
                    <Button type="link" className="p-0">
                      Browse <span className="ml-1">→</span>
                    </Button>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Featured Products */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Space direction="vertical" size="small">
                <Tag color="magenta" className="px-4 py-1">
                  <FireOutlined /> Trending Now
                </Tag>
                <Title level={2} className="!mb-2">
                  Featured Products
                </Title>
                <Paragraph type="secondary" className="text-lg">
                  Hand-picked products just for you
                </Paragraph>
              </Space>
            </div>
            <Row gutter={[24, 24]}>
              {featuredProducts.map((product) => (
                <Col key={product.id} xs={24} sm={12} md={6}>
                  <Badge.Ribbon text={product.badge} color={product.badgeColor}>
                    <Card
                      hoverable
                      className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300"
                      cover={
                        <div className="relative overflow-hidden group">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-2 right-2">
                            <Button
                              shape="circle"
                              icon={<HeartOutlined />}
                              className={`bg-white/90 backdrop-blur-sm border-0 ${
                                favorites.includes(product.id)
                                  ? "text-red-500"
                                  : ""
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(product.id);
                              }}
                            />
                          </div>
                        </div>
                      }
                      onClick={() => handleProductClick(product)}
                    >
                      <Space
                        direction="vertical"
                        size="small"
                        className="w-full"
                      >
                        <Text strong className="text-base">
                          {product.title}
                        </Text>
                        <div>
                          <Rate
                            disabled
                            defaultValue={product.rating}
                            className="text-sm"
                          />
                          <Text type="secondary" className="ml-2 text-xs">
                            ({product.reviews})
                          </Text>
                        </div>
                        <Space>
                          <Text strong className="text-lg text-purple-600">
                            ${product.price}
                          </Text>
                          <Text delete type="secondary" className="text-sm">
                            ${product.originalPrice}
                          </Text>
                        </Space>
                        <Button
                          type="primary"
                          block
                          icon={<ShoppingCartOutlined />}
                          className="mt-2 bg-gradient-to-r from-purple-600 to-pink-600 border-0"
                        >
                          Add to Cart
                        </Button>
                      </Space>
                    </Card>
                  </Badge.Ribbon>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Special Offers Banner */}
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <Card
              className="text-center border-0 shadow-xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              }}
            >
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} md={12}>
                  <Space
                    direction="vertical"
                    size="large"
                    className="text-white"
                  >
                    <GiftOutlined style={{ fontSize: "4rem" }} />
                    <Title level={2} className="text-white !mb-0">
                      Special Offer!
                    </Title>
                    <Paragraph className="text-white text-lg opacity-90">
                      Get 20% off on your first purchase. Use code: WELCOME20
                    </Paragraph>
                    <Space>
                      <Button
                        type="primary"
                        size="large"
                        className="bg-white text-purple-600 hover:bg-gray-100 border-0"
                      >
                        Shop Now
                      </Button>
                      <Button
                        size="large"
                        ghost
                        className="border-white text-white hover:bg-white/10"
                      >
                        View Terms
                      </Button>
                    </Space>
                  </Space>
                </Col>
                <Col xs={24} md={12}>
                  <img
                    src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&h=400&fit=crop"
                    alt="Special Offer"
                    className="rounded-2xl shadow-2xl"
                  />
                </Col>
              </Row>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Title level={2} className="!mb-2">
                What Our Customers Say
              </Title>
              <Paragraph type="secondary" className="text-lg">
                Don't just take our word for it
              </Paragraph>
            </div>
            <Row gutter={[24, 24]}>
              {testimonials.map((testimonial, index) => (
                <Col key={index} xs={24} sm={24} md={8}>
                  <Card className="text-center border-0 shadow-md h-full">
                    <Space
                      direction="vertical"
                      size="middle"
                      className="w-full"
                    >
                      <div className="text-5xl">{testimonial.avatar}</div>
                      <Rate disabled defaultValue={testimonial.rating} />
                      <Paragraph className="italic text-gray-600">
                        "{testimonial.comment}"
                      </Paragraph>
                      <Text strong>{testimonial.name}</Text>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <Space direction="vertical" size="large" className="w-full">
              <div className="text-5xl mb-4">📧</div>
              <Title level={2} className="!mb-2">
                Subscribe to Our Newsletter
              </Title>
              <Paragraph className="text-lg text-gray-600">
                Stay updated with our latest offers, new arrivals, and exclusive
                deals
              </Paragraph>
              <Row justify="center" className="w-full">
                <Col xs={24} sm={20} md={16} lg={12}>
                  <Input.Search
                    placeholder="Enter your email address"
                    enterButton={
                      <Button
                        type="primary"
                        icon={<SendOutlined />}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 border-0"
                      >
                        Subscribe
                      </Button>
                    }
                    size="large"
                    className="shadow-md"
                  />
                  <Space className="mt-4" size="small">
                    <CheckCircleOutlined className="text-green-500" />
                    <Text type="secondary" className="text-xs">
                      Join 10,000+ subscribers. No spam, unsubscribe anytime.
                    </Text>
                  </Space>
                </Col>
              </Row>
            </Space>
          </div>
        </div>

        {/* Product Detail Modal */}
        <Modal
          title={null}
          open={isModalOpen}
          onCancel={handleModalClose}
          footer={null}
          width={800}
          centered
        >
          {selectedProduct && (
            <div>
              <Row gutter={[32, 32]}>
                <Col xs={24} md={10}>
                  <Badge.Ribbon
                    text={selectedProduct.badge}
                    color={selectedProduct.badgeColor}
                  >
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      className="w-full rounded-lg shadow-md"
                    />
                  </Badge.Ribbon>
                </Col>
                <Col xs={24} md={14}>
                  <Space direction="vertical" size="middle" className="w-full">
                    <div>
                      <Title level={3} className="!mb-2">
                        {selectedProduct.title}
                      </Title>
                      <Space>
                        <Rate disabled defaultValue={selectedProduct.rating} />
                        <Text type="secondary">
                          ({selectedProduct.reviews} reviews)
                        </Text>
                      </Space>
                    </div>
                    <Divider className="my-2" />
                    <Space direction="vertical" size="small">
                      <Space align="baseline">
                        <Title level={2} className="!mb-0 text-purple-600">
                          ${selectedProduct.price}
                        </Title>
                        <Text delete type="secondary" className="text-lg">
                          ${selectedProduct.originalPrice}
                        </Text>
                        <Tag color="red">
                          {Math.round(
                            (1 -
                              selectedProduct.price /
                                selectedProduct.originalPrice) *
                              100
                          )}
                          % OFF
                        </Tag>
                      </Space>
                      <Space>
                        <CheckCircleOutlined className="text-green-500" />
                        <Text type="success">In Stock</Text>
                      </Space>
                    </Space>
                    <Divider className="my-2" />
                    <Paragraph className="text-gray-600">
                      Experience premium quality with our best-selling product.
                      Designed with cutting-edge technology and superior
                      craftsmanship, this item delivers exceptional performance
                      and style. Perfect for everyday use with a sleek, modern
                      design.
                    </Paragraph>
                    <Space direction="vertical" size="small" className="w-full">
                      <Space>
                        <ClockCircleOutlined />
                        <Text>Free delivery in 2-3 business days</Text>
                      </Space>
                      <Space>
                        <SafetyOutlined />
                        <Text>100% secure payment</Text>
                      </Space>
                      <Space>
                        <CheckCircleOutlined />
                        <Text>30-day return policy</Text>
                      </Space>
                    </Space>
                    <Divider className="my-2" />
                    <Space size="middle" className="w-full">
                      <Button
                        type="primary"
                        size="large"
                        icon={<ShoppingCartOutlined />}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 border-0"
                        onClick={handleModalClose}
                      >
                        Add to Cart
                      </Button>
                      <Button
                        size="large"
                        icon={<HeartOutlined />}
                        onClick={() => toggleFavorite(selectedProduct.id)}
                        className={
                          favorites.includes(selectedProduct.id)
                            ? "text-red-500 border-red-500"
                            : ""
                        }
                      >
                        {favorites.includes(selectedProduct.id)
                          ? "Saved"
                          : "Save"}
                      </Button>
                    </Space>
                  </Space>
                </Col>
              </Row>
            </div>
          )}
        </Modal>

        {/* Offer Popup */}
        <Modal
          open={showOffer}
          onCancel={handleOfferClose}
          footer={null}
          centered
          width={500}
          closeIcon={null}
        >
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <Title level={2} className="!mb-4">
              Welcome!
            </Title>
            <Paragraph className="text-lg mb-6">
              Get{" "}
              <Text strong className="text-purple-600 text-2xl">
                20% OFF
              </Text>{" "}
              on your first order
            </Paragraph>
            <div className="bg-gray-100 rounded-lg p-4 mb-6">
              <Text copyable className="text-2xl font-mono font-bold">
                WELCOME20
              </Text>
            </div>
            <Space direction="vertical" size="middle" className="w-full">
              <Button
                type="primary"
                size="large"
                block
                className="bg-gradient-to-r from-purple-600 to-pink-600 border-0"
                onClick={handleOfferClose}
              >
                Start Shopping
              </Button>
              <Button size="large" block onClick={handleOfferClose}>
                Maybe Later
              </Button>
            </Space>
          </div>
        </Modal>
      </Content>
    </Layout>
  );
};

export default HomePage;
