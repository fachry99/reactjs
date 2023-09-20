import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { Post } from "./post";

//*interface means that the object must have the properties listed in the interface
//Ipost = interface post
export interface Post {
  title: string;
  description: string;
  username: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}
export const Home = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const postsRef = collection(db, "posts");
  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]);
  };
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {posts?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};
