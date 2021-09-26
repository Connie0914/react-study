import { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1)
  const [isShow, setIsShow] = useState(true);

  //* Reactのコンポーネント内で何かを定義するときは全てに対してuseMemo（関数の場合は、useCallback）を使ってもいい
  const doubleCount = useMemo(() => {
    return count * 2;
  },[count]);

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
  return { count, doubleCount, isShow, handleClick, handleDisplay };
}