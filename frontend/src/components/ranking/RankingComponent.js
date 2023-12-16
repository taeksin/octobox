// 4등 부터 테이블을 만든다.


import React from "react";
import {
  RankingsTable,
  TableHeader,
  TableCell,
} from './RankingComponent.Style';



const RankingComponent = ({ rankings }) => {
  // Sort rankings based on the "Votes" column in descending order
  const sortedRankings = [...rankings].sort((a, b) => b.score - a.score);

  return (
    <div>
      
      <RankingsTable>
        <thead>
          <tr>
            <TableHeader>Rank</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Status message</TableHeader>
            <TableHeader>Solution</TableHeader>
            <TableHeader>Votes</TableHeader>
          </tr>
        </thead>
        <tbody>
          {sortedRankings.map((player, index) => (
            <tr key={index}>
              <TableCell isRankColumn>{index + 1}</TableCell>
              <TableCell isNameColumn>{player.name}</TableCell>
              <TableCell>{player.sentence}</TableCell>
              <TableCell isSolutionColumn>{player.solutioncount}</TableCell>
              <TableCell isVotesColumn>{player.score}</TableCell>
            </tr>
          ))}
        </tbody>
      </RankingsTable>
    </div>
  );
};

export default RankingComponent;
