"use client";

import { useEffect, useState } from "react";
import { getListGameSteam } from "./services/apiSteam";

export default function Home() {
  const [listGame, setListGame] = useState<[]>([]);
  const [gameListSteam, setGameListSteam] = useState<any>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      getListGameSteam().then((res) => {
        console.log(res);
      });
    }
  }, []);
  return (
    <>
      <h1 className="text-center text-5xl">Random Steam Game</h1>
      <div className="flex gap-4"></div>
    </>
  );
}
