// RankingComponent.Style.js

import styled from 'styled-components';

export const RankingsTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 5px;
`;

export const TableHeader = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  background-color: #f2f2f2;
`;

export const TableCell = styled.td`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 10px;
  ${({ isVotesColumn, isRankColumn, isNameColumn, isSolutionColumn }) =>
    isVotesColumn
      ? "width: 5%; background-color: #ffe08a; margin-left: 10px; font-weight: bold;"
      : isRankColumn
      ? "width: 5%; margin-left: 10px; font-weight: bold;"
      : isNameColumn
      ? "width: 10%; margin-left: 5px;"
      : isSolutionColumn
      ? "width: 5%; margin-left: 5px;"
      : "width: 30%; margin-left: 5px;"} /* 각 열에 대한 너비를 조절합니다. */
`;
