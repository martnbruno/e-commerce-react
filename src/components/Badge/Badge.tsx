import { Props } from "./customTypes";
import { BadgeStyled } from "./Badge.styled";

const Badge = ({ text }: Props) => {
  return <BadgeStyled>{text}</BadgeStyled>;
};

export default Badge;
