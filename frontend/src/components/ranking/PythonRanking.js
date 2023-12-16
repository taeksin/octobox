// PythonRanking.js
import React from "react";
import RankingList from "./RankingComponent";
import pythonRankingsData from "../../util/ranking/pythonRankingsData";

const PythonRanking = () => {
  // Python에 대한 랭킹 데이터 사용
  return <RankingList rankings={pythonRankingsData} />;
};

export default PythonRanking;
