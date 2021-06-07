import { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useGlobalData } from "contexts/GlobalDataContext";

import styled, { css } from "styled-components";

import fireIcon from "images/fire.webp";

const Container = styled.div(
  ({ style }) => css`
    padding: 1rem;
    box-shadow: var(--shadow-default);
    width: 100%;
    /* max-width: 20rem; */

    .post-title {
      font-size: 1.4rem;
      color: var(--color-logo-1);
      font-weight: 600;
    }

    .post-body {
      h1,
      h2,
      h3,
      h4,
      h5,
      p {
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--color-text);
      }
    }

    .post-info {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__fire {
        display: flex;
        align-items: center;
        img {
          width: 2rem;
          margin-right: 6px;
        }
        p {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--color-yellow);
        }
      }

      &__language {
        color: var(--color-logo-1);
      }
    }

    ${style}
  `
);

const SmallThoughtCard = ({ thought, style, postUrl = "" }) => {
  const history = useHistory();
  const { languages } = useGlobalData();

  const languageDisplayName = useMemo(() => {
    return (
      languages?.filter((language) => language?.name === thought?.language)[0]
        ?.displayName || ""
    );
  }, [languages, thought.language]);

  return (
    <Container style={style} onClick={() => history.push(postUrl)}>
      <p className="post-title">{thought?.title}</p>
      <p
        className="post-body"
        dangerouslySetInnerHTML={{
          __html: thought?.body?.slice(0, 24) + "...",
        }}
      ></p>
      <div className="post-info">
        <div className="post-info__fire">
          <img src={fireIcon} alt="fire" />
          <p>{thought.fire}</p>
        </div>
        <p className="post-info__language">{languageDisplayName}</p>
      </div>
    </Container>
  );
};

export default SmallThoughtCard;
