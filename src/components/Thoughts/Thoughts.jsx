import { useEffect, useState } from "react";
import Container from "./Thoughts.styles";

/* Components */
import { Field, Thought, NoResultsFound } from "components/shared";

const Thoughts = ({
  thoughts = [],
  selectedLanguage = "",
  addNewFormModalHandler = () => {},
}) => {
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
          style={{ width: "100%", fontSize: "1.4rem", padding: "1.2rem 1rem" }}
          value={searchQuery}
          onChange={handleQuery}
        />
      </div>

      {!thoughts?.length && (
        <NoResultsFound
          action={{
            label: "Share a thought on this!",
            cta: addNewFormModalHandler,
          }}
        />
      )}

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
                postUrl={`/thoughts/${selectedLanguage}/${thought.id}`}
              />
            )
        )}
      </div>
    </Container>
  );
};

export default Thoughts;
