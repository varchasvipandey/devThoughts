import styled, { css } from "styled-components";
import { Button } from "components/shared";
import { useHistory } from "react-router-dom";

const Container = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    .option {
      text-align: center;
      &:not(:last-of-type) {
        margin-right: 1rem;
      }
    }
  `
);

const AdminFeatures = ({ role = null, profileModalHandler = () => {} }) => {
  const history = useHistory();

  const redirectToAdminPanel = () => {
    profileModalHandler();
    history.push("/admin");
  };

  return (
    <Container>
      <div className="option">
        <Button
          variant="tertiary"
          label="Get in touch"
          cta={() =>
            window.open(
              "https://www.linkedin.com/in/varchasvipandey/",
              "_blank"
            )
          }
        />
        <Button
          variant="tertiary"
          label="Contribute"
          cta={() =>
            window.open("https://github.com/varchasvipandey", "_blank")
          }
        />
        {["owner", "admin", "moderator"].includes(role) && (
          <Button
            variant="tertiary"
            label="Visit admin panel"
            cta={redirectToAdminPanel}
          />
        )}
      </div>
    </Container>
  );
};

export default AdminFeatures;
