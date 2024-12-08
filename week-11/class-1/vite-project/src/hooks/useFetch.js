import { useEffect, useState } from "react";

export function usePostTitle() {
  const [post, setPost] = useState(null);

  async function getPosts() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const json = await response.json();
      setPost(json);
    } catch (error) {
      console.error("Failed to fetch post:", error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return post ? post.title : "Loading...";
}
export function useFetch(url) {
  const [finalData, setFinalData] = useState({});
  const [loading, setLoading] = useState(true);
  async function getDetails() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
    setLoading(false);
  }
  useEffect(() => {
    getDetails();
  }, [url]);
  return {
    finalData,
    loading,
  };
}