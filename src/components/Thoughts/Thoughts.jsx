import Container from "./Thoughts.styles";

/* Components */
import { Field } from "components/shared";
import { Thought } from "components";

const Thoughts = ({ thoughts = [], selectedLanguage = "" }) => {
  return (
    <Container>
      {/* Search for posts */}
      <div className="post-search">
        <Field
          type="text"
          placeholder="Search for topics"
          style={{ width: "100%" }}
        />
      </div>

      {/* Thoughts list */}
      <div className="thoughts-list">
        {thoughts.map((thought) => (
          <Thought
            key={thought.id}
            thought={thought}
            style={{ marginBottom: "2rem" }}
            postUrl={`/${selectedLanguage}/${thought.id}`}
          />
        ))}
      </div>
    </Container>
  );
};

export default Thoughts;
