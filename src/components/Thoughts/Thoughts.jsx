import { useEffect, useState } from "react";
import Container from "./Thoughts.styles";

/* Components */
import { Field } from "components/shared";
import { Thought } from "components";

const Thoughts = ({ thoughts = [], selectedLanguage = "" }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleQuery = (e) => setSearchQuery(e.target.value);

  // Update page title
  useEffect(() => {
    document.title = selectedLanguage
      ? `${selectedLanguage} | devThoughts`
      : "devThoughts";
  }, [selectedLanguage]);

  return (
    <Container>
      {/* Search for posts */}
      <div className="post-search">
        <Field
          type="text"
          placeholder="Search for topics"
          style={{ width: "100%" }}
          value={searchQuery}
          onChange={handleQuery}
        />
      </div>

      {/* Thoughts list */}
      <div className="thoughts-list">
        {thoughts.map(
          (thought) =>
            ((searchQuery &&
              thought?.title
                ?.toLowerCase()
                ?.includes(searchQuery?.toLowerCase())) ||
              !searchQuery) && (
              <Thought
                key={thought.id}
                thought={thought}
                style={{ marginBottom: "2rem" }}
                postUrl={`/${selectedLanguage}/${thought.id}`}
              />
            )
        )}
      </div>
    </Container>
  );
};

export default Thoughts;
