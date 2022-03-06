import { PostComponent } from "./Post";

export const LatestPosts = (props) => {
  return (
    <div className="LatestPosts">
      <h4 className="LatestPosts__title">Latest posts</h4>
      <LatestPostsContent latestPosts={props.latestPosts} />
    </div>
  );
};

const LatestPostsContent = (props) => {
  if (props.latestPosts.length === 0) {
    return (
      <p className="LatestPosts__info">List is empty please add new post</p>
    );
  } else {
    return props.latestPosts.map((lastesPostObj) => (
      <PostComponent
        key={lastesPostObj.id}
        title={lastesPostObj.title}
        description={lastesPostObj.description}
      />
    ));
  }
};
