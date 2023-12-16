// PythonRanking.js
import React from "react";
import RankingList from "./RankingComponent";
import javascriptRankingsData from "../../util/ranking/javascriptRankingsData";

const JavascriptRanking = () => {
  // Python에 대한 랭킹 데이터 사용
  return <RankingList rankings={javascriptRankingsData} />;
};

export default JavascriptRanking;
