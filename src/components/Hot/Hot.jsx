import { memo } from "react";
import Container from "./Hot.styles";

import { SmallThoughtCard } from "components/shared";

const Hot = ({ topRatedThoughts = [] }) => {
  console.log({ topRatedThoughts });
  return (
    <Container>
      <section className="wrapper">
        <div className="title">
          <p>Top Trending Topics</p>
        </div>

        <div className="thoughts">
          {topRatedThoughts?.map((thought, i) => (
            <SmallThoughtCard
              key={thought?.id || i}
              thought={thought}
              style={{ marginBottom: "1.2rem" }}
              postUrl={`/thoughts/${thought.language}/${thought.id}`}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

const renderClause = (prevProps, nextProps) => {
  return (
    prevProps.topRatedThoughts?.length === nextProps.topRatedThoughts?.length
  );
};

export default memo(Hot, renderClause);
