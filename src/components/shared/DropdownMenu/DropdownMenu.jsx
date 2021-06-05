import styled, { css } from "styled-components";

const Container = styled.div(({ style }) => [
  css`
    position: absolute;
    min-width: 20rem;
    min-height: 6rem;
    max-height: 16rem;
    background-color: var(--color-background);
    box-shadow: var(--shadow-spreaded);
    overflow-y: auto;

    animation: dropdown 0.3s;
  `,
  { ...style },
]);

const Option = styled.div(
  () => css`
    font-size: 1.4rem;
    font-weight: 4 00;
    padding: 0.8rem 0.8rem;
    cursor: pointer;

    display: flex;
    align-items: center;

    transition: all 0.2s;

    .icon {
      flex: 0 0 10%;
      margin-right: 1rem;
    }

    .label {
      flex: 1;
      color: var(--color-text);
    }

    &:hover {
      box-shadow: var(--shadow-default);
    }

    &:active {
      transform: scale(0.95);
      box-shadow: none;
    }
  `
);

const DropdownMenu = ({ style = {}, options = [] }) => {
  return (
    <Container style={style}>
      {options.map((option, i) => (
        <Option onClick={option.cta}>
          <div className="icon">{option.icon}</div>
          <p className="label">{option.label}</p>
        </Option>
      ))}
    </Container>
  );
};

export default DropdownMenu;
