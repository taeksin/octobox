// PythonRanking.js
import React from "react";
import RankingList from "./RankingComponent";
import cppRankingsData from "../../util/ranking/cppRankingsData";

const CppRanking = () => {
  // Python에 대한 랭킹 데이터 사용
  return <RankingList rankings={cppRankingsData} />;
};

export default CppRanking;
