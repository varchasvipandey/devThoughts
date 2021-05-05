import styled, { css } from "styled-components";

const Button = styled.button(({ style }) => [
  css`
    position: fixed;
    z-index: 1;
    height: 4rem;
    width: 4rem;
    font-size: 3.2rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    box-shadow: var(--shadow-default);
    transition: all 0.1s;
    background-color: var(--color-violet);
    color: var(--color-white);

    &:hover {
      transform: scale(1.1) rotate(90deg);
      cursor: pointer;
    }
  `,
  { ...style },
]);

const FloatButton = ({ label = "", cta = () => {}, style = {} }) => {
  return (
    <Button
      onClick={cta}
      style={style}
      dangerouslySetInnerHTML={{ __html: label }}
    ></Button>
  );
};

export default FloatButton;
