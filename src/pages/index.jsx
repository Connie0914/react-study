import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from "src/components/Footer"
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useCallback } from 'react'

  //* 引数がなかったり、煩雑にならない場合は外に書く.
  //* 再レンダリング時にメソッドが再生成されず、挙動が早いため.
  // const handleClick = useCallback((e) => {
  //   console.log(e.target.href)
  //   e.preventDefault();
  //   alert(foo);
  // }, []);

export default function Home() {
  const foo = 1;

  //* 簡潔に書ける.
  //* useCallback:再レンダリングされた時に再生成されないようにする.
  const handleClick = useCallback((e) => {
    console.log(e.target.href)
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a
        href="/about"
        onClick={handleClick}
      >
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  )
}
