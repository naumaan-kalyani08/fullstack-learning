 frontend/src/components/OfferPopup.jsximport React from "react";
import { Modal, Typography, Button, Space } from "antd";
import { GiftOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const OfferPopup = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={400}
    >
      <div className="text-center py-6">
        <Space direction="vertical" size="large" className="w-full">
          <GiftOutlined style={{ fontSize: "48px", color: "#1890ff" }} />
          <Title level={3}>Special Welcome Offer!</Title>
          <Paragraph>
            Get 20% off on your first purchase by using code{" "}
            <strong>WELCOME20</strong>
          </Paragraph>
          <Button type="primary" size="large" onClick={onClose}>
            Shop Now
          </Button>
        </Space>
      </div>
    </Modal>
  );
};

export default OfferPopup;
