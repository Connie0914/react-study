import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Footer } from "src/components/Footer"
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'
import { useEffect, useState } from 'react'

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
  const handleClick = (e) => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    // foo = foo + 1;
  };

  useEffect(() => { //* マウント時の処理
    document.body.style.backgroundColor = "lightblue";
    return () => { //* アンマウント時の処理
      document.body.style.backgroundColor = "";
    }
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
