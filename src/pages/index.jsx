import React, { useCallback, useEffect, useState } from "react"
import styles from "src/styles/Home.module.css"
import Head from "next/head"
import { Header } from "src/components/Header"

// eslint-disable-next-line no-unused-vars
const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  }, [])

  useEffect(() => {
    getPosts();
  }, [getPosts])

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {posts.length > 0 ? (
        <ol>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ol>
      ): null}
    </div>
  )
}

export default Home;