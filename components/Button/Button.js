import styled from "styled-components";

const Button = ({ size = "big", variant = "primary" }) => {
  return (
    <ButtonWrapper size={size} variant={variant}>
      Hello
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  background: ${({ variant }) =>
    variant === "primary"
      ? "#7157D9"
      : variant === "secondary"
      ? "#4580E6"
      : "#2B94D6"};
  width: ${({ size }) => (size === "big" ? "80px" : "60px")};
  text-align: center;
  height: ${({ size }) => (size === "big" ? "45px" : "25px")};
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${({ variant }) =>
      variant === "primary"
        ? "#9179F2"
        : variant === "secondary"
        ? "#669EFF"
        : "#48AFF0"};
  }
  &:active {
    background: ${({ variant }) =>
      variant === "primary"
        ? "#7157D9"
        : variant === "secondary"
        ? "#4580E6"
        : "#2B94D6"};
  }
`;

export default Button;
