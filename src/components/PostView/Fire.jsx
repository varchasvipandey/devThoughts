import { FloatButton } from "components/shared";
import styled, { css } from "styled-components";

const Container = styled.div(
  () => css`
    display: flex;
    align-items: center;

    .cta {
      margin-right: 1rem;
    }

    .count {
      color: var(--color-yellow);
      font-size: 1.4rem;
      font-weight: 700;
    }
  `
);

const Fire = ({ fire, addFire = () => {} }) => {
  return (
    <Container>
      <div className="cta">
        <FloatButton
          label="<img src='/static/media/fire.c5df206f.webp' alt='' style='width: 2rem;'/>"
          style={{
            position: "relative",
            backgroundColor: "var(--color-white)",
            zIndex: "0",
            boxShadow: "var(--shadow-spreaded)",
            "&:hover": {
              transform: "rotate(0)",
            },
            "&:active": {
              transform: "scale(1.1)",
            },
          }}
          cta={addFire}
        />
      </div>
      <p className="count">{fire}</p>
    </Container>
  );
};

export default Fire;
