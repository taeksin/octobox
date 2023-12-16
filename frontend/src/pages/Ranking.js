import React, { useState, useEffect } from "react";
import Confetti from "react-dom-confetti";
import "../components/css/Ranking.css";
//  Component
import SidebarRight from "../components/aside/SidebarRight";
import Sidebar from "../components/aside/Sidebar";
import RankingList from "../components/ranking/RankingComponent";
import PythonRanking from "../components/ranking/PythonRanking";
import JavaRanking from "../components/ranking/JavaRanking";
import CppRanking from "../components/ranking/CppRanking";
import CRanking from "../components/ranking/CRanking";
import JavascriptRanking from "../components/ranking/JavascriptRanking";
import TopRankingProfiles from "../components/ranking/TopRankingProfiles";
// Data
import pythonRankingsData from "../util/ranking/pythonRankingsData";
import javaRankingsData from "../util/ranking/javaRankingsData";
import cppRankingsData from "../util/ranking/cppRankingsData";
import cRankingsData from "../util/ranking/cRankingsData";
import javascriptRankingsData from "../util/ranking/javascriptRankingsData";

const languages = ["python", "java", "c", "cpp", "javascript"];

const Ranking = () => {
  const [confetti, setConfetti] = useState(false);
  const [rankings, setRankings] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("python"); // Set default language to "python"
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    setConfetti(true);

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const rankingComponents = {
    python: <PythonRanking rankings={rankings} />,
    java: <JavaRanking rankings={rankings} />,
    c: <CRanking rankings={rankings} />,
    cpp: <CppRanking rankings={rankings} />,
    javascript: <JavascriptRanking rankings={rankings} />
  };

  const rankingData = {
    python: pythonRankingsData,
    java: javaRankingsData,
    c: cRankingsData,
    cpp: cppRankingsData,
    javascript: javascriptRankingsData
  };

  const filterRankingsByLanguage = () => {
    return selectedLanguage === null
      ? rankings
      : rankings.filter((rank) => rank.language === selectedLanguage);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage((prevLanguage) =>
      prevLanguage === language ? prevLanguage : language
    );
  
    setRankings(rankingData[language]?.sort((a, b) => b.score - a.score) || []);
    setConfetti(true); // 효과를 다시 활성화합니다.
  
    // 언어 변경 시 Confetti를 다시 트리거합니다.
    setTimeout(() => {
      setConfetti(false);
    }, 100); // 효과가 끝나고 비활성화합니다.
  };
  // spread 값을 현재 브라우저의 가로 크기에 비례하도록 계산
  const spread = windowSize.width;

  const origin = "center";

  // elementCount와 startVelocity 값을 설정
  const elementCount = 110;
  const startVelocity = 60;
  return (
    <div className="so-main-wrapper flex flex-col">
      <div className="flex mx-auto my-0 w-[1400px]">
        <nav className="sticky max-h-[calc(100vh-180px)] top-[60px] w-[164px] flex-grow-0 flex-shrink-0 basis-[164px]">
          <Sidebar />
        </nav>
        <div className="so-main-content so-with-both-side border-r-white">
          <div className="flex flex-row items-center justify-between px-6 py-8">
            <Confetti
              active={confetti}
              config={{ spread, elementCount, startVelocity, origin }}
            />
            <h2 className="text-xxl">Ranking</h2>
            <Confetti
              active={confetti}
              config={{ spread, elementCount, startVelocity, origin }}
            />
          </div>
          <hr />
          <br />
          <div className="flex justify-between">
            <div className="nameRanking">
              {selectedLanguage && (
                <p
                  style={{
                    fontSize: "26px",
                    fontWeight: "bold",
                    marginTop: "10px",
                    marginLeft: "60px"
                  }}
                >
                  Total Ranking
                </p>
              )}
            </div>

            {/* 언어별 버튼 5개 */}
            <div className="flex justify-end" style={{ marginTop: "15px", marginRight: "50px"}}>
              {languages.map((language) => (
                <div className="language-button-box" key={language}>
                  <button
                    className={`mr-[-1px] px-3 py-1.5 text-sm text-black bg-white border rounded-l font-regular border-soGray-light hover:bg-soGray-light 
                    focus:z-10 focus:bg-soGray-light ${
                      selectedLanguage === language ? "active" : ""
                    }`}
                    onClick={() => handleLanguageChange(language)}
                    style={{
                      // 추가된 스타일
                      backgroundColor:
                        selectedLanguage === language ? "#e2e8f0" : "",
                      color: selectedLanguage === language ? "#000" : "#718096"
                    }}
                  >
                    {language.charAt(0).toUpperCase() + language.slice(1)}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <br />

          {/* 각 언어별 상위 랭킹을 프로필 형식으로 보여주는 부분 */}
          {languages.map((language) => (
            <div
              key={language}
              style={{
                display: selectedLanguage === language ? "block" : "none"
              }}
            >
              <Confetti
                active={confetti}
                config={{ spread, elementCount, startVelocity, origin }}
              />
              <TopRankingProfiles
                rankings={rankingData[language]?.slice(0, 3) || []}
              />
            </div>
          ))}

          {/* 전체 랭킹을 보여주는 부분 */}
          {isPending ? <p>Loading...</p> : rankingComponents[selectedLanguage]}
        </div>
        <aside className="w-[280px] flex-grow-0 flex-shrink-0 basis-[280px]">
          <SidebarRight />
        </aside>
      </div>
    </div>
  );
};

export default Ranking;
