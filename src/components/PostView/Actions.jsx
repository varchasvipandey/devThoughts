import styled, { css } from "styled-components";
import { Button } from "components/shared";

const Container = styled.div(
  () => css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .action {
      margin-left: 1rem;
    }
  `
);

const Actions = ({ actions = [] }) => {
  return (
    <Container>
      {actions.map((action, i) => (
        <div className="action" key={i}>
          <Button
            label={action.label}
            variant="secondary"
            cta={action.cta}
            style={{ fontSize: "1rem", padding: "0.4rem 0.8rem" }}
          />
        </div>
      ))}
    </Container>
  );
};

export default Actions;
