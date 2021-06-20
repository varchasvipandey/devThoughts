import Container from "./PostsLists.styles";
import PostItem from "../PostItem/PostItem";

const PostsList = ({ posts = [], respondToPost = () => {} }) => {
  return (
    <Container>
      {!!posts?.length &&
        posts.map((post, i) => (
          <PostItem
            key={post?.id || i}
            post={post}
            respondToPost={respondToPost}
          />
        ))}
    </Container>
  );
};

export default PostsList;
