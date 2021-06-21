import Container from "./Hot.styles";

import { SmallThoughtCard } from "components/shared";

const Hot = ({ topRatedThoughts = [] }) => {
  return (
    <Container>
      <section className="wrapper">
        {!!topRatedThoughts?.length && (
          <div className="title">
            <p>Top Trending Topics</p>
          </div>
        )}

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

export default Hot;
