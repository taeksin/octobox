// PythonRanking.js
import React from "react";
import RankingList from "./RankingComponent";
import javaRankingsData from "../../util/ranking/javaRankingsData";

const JavaRanking = () => {
  // Python에 대한 랭킹 데이터 사용
  return <RankingList rankings={javaRankingsData} />;
};

export default JavaRanking;
