type PostCardProps = {
  title: string;
  body: string;
  userId: number;
};

const PostCard: React.FC<PostCardProps> = ({ title, body, userId }) => {
  return (
    <div className="bg-white p-4 rounded shadow my-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{body}</p>
      <p className="text-sm text-gray-500 mt-2">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
