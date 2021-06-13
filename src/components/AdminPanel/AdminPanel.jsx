import Container from "./AdminPanel.stykes";
import PostsList from "./PostsList/PostsList";
import { Button } from "components/shared";
import AddLanguage from "./AddLanguage/AddLanguage";

import unAuthorizedSVG from "images/not-authorized.svg";

const AdminPanel = ({
  posts = [],
  userRole = null,
  canLoadMore = false,
  loadMoreThoughts = () => {},
  respondToPost = () => {},
  addLanguage = () => {},
}) => {
  return (
    <Container>
      {/* Unauthorized */}
      {!userRole && (
        <div className="unauthorized">
          <img
            src={unAuthorizedSVG}
            alt="unauthorized"
            className="unauthorized__img"
          />
          <p className="unauthorized__msg">
            You don't have sufficient rights to access this section
          </p>
        </div>
      )}

      {userRole && (
        <>
          {/* Add language */}
          <AddLanguage addLanguage={addLanguage} />

          {/* Posts View */}
          <PostsList
            posts={posts}
            loadMoreThoughts={loadMoreThoughts}
            respondToPost={respondToPost}
          />

          {/* Load more button */}
          {canLoadMore && (
            <div className="load-more">
              <Button
                variant="secondary"
                label="Load more"
                cta={loadMoreThoughts}
              />
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default AdminPanel;
