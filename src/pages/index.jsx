import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from "src/components/Footer"
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useCallback, useEffect, useState } from 'react'

  //* 引数がなかったり、煩雑にならない場合は外に書く.
  //* 再レンダリング時にメソッドが再生成されず、挙動が早いため.
  // const handleClick = useCallback((e) => {
  //   console.log(e.target.href)
  //   e.preventDefault();
  //   alert(foo);
  // }, []);

export default function Home() {
  const [count, setCount] = useState(1)
  // let foo = 1;

  //* 簡潔に書ける.
  //* useCallback:再レンダリングされた時に再生成されないようにする.
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  //useCallbackも、空配列[]の中に値を指定したら、値が変化するたびに関数のメソッド部分が再生成される.
  }, [count]);

  useEffect(() => { //* マウント時の処理
    document.body.style.backgroundColor = "lightblue";
    return () => { //* アンマウント時の処理
      document.body.style.backgroundColor = "";
    }
  //空配列[]に変数などを入れると、その変数が変更されたタイミングでuseEffectの処理が走る.
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button  onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  )
}
