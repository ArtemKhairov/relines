import { Button, Typography } from "antd";
import { FC } from "react";

interface IProps {
  action: () => void;
  nextAction: () => void;
  title?: string;
}
const ListHeader: FC<IProps> = ({ action, nextAction, title = "Список" }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography style={{ marginRight: "15px" }}>{title}</Typography>
      <Button style={{ marginRight: "15px" }} onClick={action}>
        Обновить
      </Button>
      <Button onClick={nextAction}>Еще</Button>
    </div>
  );
};

export { ListHeader };
