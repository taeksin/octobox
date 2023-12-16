// PythonRanking.js
import React from "react";
import RankingList from "./RankingComponent";
import cRankingsData from "../../util/ranking/cRankingsData";

const CRanking = () => {
  // Python에 대한 랭킹 데이터 사용
  return <RankingList rankings={cRankingsData} />;
};

export default CRanking;
