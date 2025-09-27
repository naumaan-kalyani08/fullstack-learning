import Card from "antd";
export const ReusablButton = () => {
  return <div>ReusableComponents</div>;
};

export const ReusableCard = ({
  title,
  children,
  className = "",
  width = "100%",
  bordered = true,
  loading = false,
  hoverable = false,
  headStyle = {},
  bodyStyle = {},
  extra,
}) => {
  return (
    <Card
      title={title}
      className={`shadow-md ${className}`}
      style={{ width }}
      bordered={bordered}
      loading={loading}
      hoverable={hoverable}
      headStyle={{
        fontSize: "1.2rem",
        fontWeight: "500",
        ...headStyle,
      }}
      bodyStyle={{
        padding: "1.5rem",
        ...bodyStyle,
      }}
      extra={extra}
    >
      {children}
    </Card>
  );
};
