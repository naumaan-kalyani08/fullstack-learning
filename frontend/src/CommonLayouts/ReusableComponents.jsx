import Card from "antd";
export const ReusablButton = () => {
  return <div>ReusableComponents</div>;
};

export const ReusableCard = ({ title, children }) => {
  return <Card title={title}>{children}</Card>;
};
