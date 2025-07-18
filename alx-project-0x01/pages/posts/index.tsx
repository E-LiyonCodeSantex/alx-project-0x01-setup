import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PostCard from '@/components/common/PostCard';

const samplePosts = [
  { title: 'Post One', body: 'Body of post one', userId: 1 },
  { title: 'Post Two', body: 'Body of post two', userId: 2 },
  { title: 'Post three', body: 'Body of post three', userId: 3 },
];

const Posts: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        {samplePosts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Posts;
