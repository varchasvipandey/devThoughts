import { useHistory } from "react-router-dom";

import Container from "./PostItem.styles";
import { dateAgoFormat } from "helpers";
import { TickIcon, CrossIcon, DeleteIcon } from "components/shared";

const PostItem = ({ post = {}, respondToPost = () => {} }) => {
  const history = useHistory();

  const handlePostClick = () => {
    history.push(`/thoughts/${post?.language}/${post?.id}`);
  };

  return (
    <Container isVerified={post?.verified}>
      <div className="post">
        <p className="post__language">{post?.language}</p>
        <p className="post__title" onClick={handlePostClick}>
          {post?.title}
        </p>
        <div className="post__info">
          <p className="post__info__date">
            {dateAgoFormat(post?.date?.toDate()) || ""}
          </p>
          <p className="post__info__author">{post?.author}</p>
        </div>
      </div>
      <div className="actions">
        {!post.verified && (
          <>
            <div
              className="actions__action"
              onClick={() => respondToPost(post?.id, true)}
            >
              <TickIcon style={{ fill: "var(--color-success)" }} />
            </div>

            <div
              className="actions__action"
              onClick={() => respondToPost(post?.id, null, true)}
            >
              <DeleteIcon style={{ fill: "var(--color-danger)" }} />
            </div>
          </>
        )}

        {post.verified && (
          <div
            className="actions__action"
            onClick={() => respondToPost(post?.id, false)}
          >
            <CrossIcon style={{ fill: "var(--color-danger)" }} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default PostItem;
