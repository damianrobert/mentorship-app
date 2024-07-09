import PostCard from './PostCard'; // Adjust the import based on your file structure

const PostsList = ({ posts }: any) => {
  // Sort posts by date in descending order
  const sortedPosts = posts.sort(
    (a: any, b: any) => (new Date(b.date) as any) - (new Date(a.date) as any)
  );

  return (
    <div>
      {sortedPosts.map((post: any) => (
        <PostCard
          key={post.id}
          title={post.title}
          createdAt={post.createdAt}
          genre={post.genre}
          authorId={post.authorId}
        />
      ))}
    </div>
  );
};

export default PostsList;
