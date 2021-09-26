import { useRouter } from "next/dist/client/router";
import { useEffect, useMemo } from "react";


export const useBgColor = () => {
  const router = useRouter();
  const bgColor = useMemo(() => {
    switch (router.pathname) {
      case "/": {
        return "lightblue";
      }
      case "/about": {
        return "beige";
      }
      default:
        return "";
    }
  }, [router.pathname])

  useEffect(() => { //* マウント時の処理
    document.body.style.backgroundColor = bgColor;
    return () => { //* アンマウント時の処理
      document.body.style.backgroundColor = "";
    }
  //* 空配列[]に変数などを入れると、その変数が変更されたタイミングでuseEffectの処理が走る.
  }, [bgColor]);
}