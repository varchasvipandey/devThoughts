import styled, { css } from "styled-components";

const Container = styled.div(
  ({ active }) => css`
    .menu-bar {
      height: 1.2px;
      width: 2.4rem;
      background-color: var(--color-text);

      &:not(:last-child) {
        margin-bottom: 4.8px;
      }

      transition: all 0.2s;
    }

    ${active &&
    css`
      .menu-bar {
        background-color: var(--color-logo-1);
        &.top {
          transform: rotate(45deg);
          margin-bottom: 0;
        }
        &.mid {
          opacity: 0;
          position: absolute;
        }
        &.bottom {
          transform: rotate(-45deg);
        }
      }
    `}

    &:hover {
      cursor: pointer;
    }
  `
);

const Hamburger = ({ active = false, action = () => {} }) => {
  return (
    <Container active={active} onClick={action}>
      <div className="menu-bar top"></div>
      <div className="menu-bar mid"></div>
      <div className="menu-bar bottom"></div>
    </Container>
  );
};

export default Hamburger;
