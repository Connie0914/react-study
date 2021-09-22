import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1)
  const [isShow, setIsShow] = useState(true);

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
  return { count, isShow, handleClick, handleDisplay };
}