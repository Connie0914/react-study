import styles from "src/styles/Home.module.css"
import Head from "next/head"
import { Footer } from "src/components/Footer"
import { Header } from "src/components/Header"
import { Main } from "src/components/Main"
import React, { useCallback, useEffect, useState } from "react"

  //* 引数がなかったり、煩雑にならない場合は外に書く.
  //* 再レンダリング時にメソッドが再生成されず、挙動が早いため.
  // const handleClick = useCallback((e) => {
  //   console.log(e.target.href)
  //   e.preventDefault();
  //   alert(foo);
  // }, []);

export default function Home() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);


  //* 簡潔に書ける.
  //* useCallback:再レンダリングされた時に再生成されないようにする.
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  //* useCallbackも、空配列[]の中に値を指定したら、値が変化するたびに関数のメソッド部分が再生成される.
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if(prevArray.some((item) => item === text)) {
        alert("同じ要素が既に存在します。");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);
  
  useEffect(() => { //* マウント時の処理
    document.body.style.backgroundColor = "lightblue";
    return () => { //* アンマウント時の処理
      document.body.style.backgroundColor = "";
    }
  //* 空配列[]に変数などを入れると、その変数が変更されたタイミングでuseEffectの処理が走る.
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow ? <h1>{count}</h1> : null}
      <button  onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示": "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Main page="index" />
      <Footer />
    </div>
  )
}
