import { type ReactNode, useEffect, useState } from 'react';
import BlogPosts, { BlogPost } from './components/BlogPosts';
import ErrorMessage from './components/ErrorMessage';
import { get } from './util/http';
import fetchingImage from './assets/data-fetching.png';

type RawPost = {
  id: number;
  title: string;
  body: string;
};

function App() {
  const [posts, setPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchPosts() {
      setError(null);
      setIsFetching(true);

      try {
        let unvalidatedData = await get(
          'https://jsonplaceholder.typicode.com/posts',
          abortController.signal
        );

        if (!unvalidatedData || !Array.isArray(unvalidatedData)) return;

        const data = unvalidatedData as RawPost[];

        let posts: BlogPost[] = data.map((rawPost) => ({
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body,
        }));

        setPosts(posts);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }

      setIsFetching(false);
    }

    fetchPosts();

    return () => {
      abortController.abort();
    };
  }, []);

  let content: ReactNode;

  if (error) {
    content = <ErrorMessage text={error} />;
  } else if (posts) {
    content = <BlogPosts posts={posts} />;
  } else if (isFetching) {
    content = <p id="loading-fallback">Fetching posts...</p>;
  }

  return (
    <main>
      <img src={fetchingImage} alt="Image depicting a data fetching process." />
      {content}
    </main>
  );
}

export default App;
