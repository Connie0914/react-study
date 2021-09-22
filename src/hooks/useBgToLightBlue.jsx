import { useEffect } from "react"


export const useBgToLightBlue = () => {
  useEffect(() => { //* マウント時の処理
    document.body.style.backgroundColor = "lightblue";
    return () => { //* アンマウント時の処理
      document.body.style.backgroundColor = "";
    }
  //* 空配列[]に変数などを入れると、その変数が変更されたタイミングでuseEffectの処理が走る.
  }, []);
}