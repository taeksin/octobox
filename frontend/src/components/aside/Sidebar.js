import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const [selectedTab, setSelectedTab] = useState(path || "home");

  const onClick = (targetPath, tab) => {
    sessionStorage.removeItem("searchText");
    window.location.href = targetPath;
    setSelectedTab(tab);
  };

  return (
    <ol className="flex flex-col w-full text-[15px]">
      <li
        className={`${
          selectedTab === "home"
            ? "bg-soGray-bg border-r-4 border-solid border-primary-400 font-semibold"
            : ""
        } pl-5 py-2 mt-9 mb-2 font-normal hover:font-semibold flex items-center`}
      >
        <img
          src="https://cdn.icon-icons.com/icons2/936/PNG/512/home_icon-icons.com_73532.png"
          alt="Home"
          className="h-auto pr-2 w-7 fill-current"
        />
        <Link to="/" onClick={() => onClick("/", "home")} style={{ color: selectedTab === "home" && "currentColor" }}>
          Home
        </Link>
      </li>
      <li className="mt-3 mb-2">
        <ul>
          <span className="pl-5 text-[12px] text-soGray-darker">PUBLIC</span>
          {/* Questions Tab */}
          <li
            className={`${
              selectedTab === "question"
                ? "bg-soGray-bg border-r-4 border-solid border-primary-400 font-semibold"
                : ""
            } flex justify-start flex-row pl-5 py-2 my-2 hover:font-semibold items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={selectedTab === "question" ? "currentColor" : "none"}
              className="h-auto pr-2 w-7 fill-current"
            >
              <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z"
                clipRule="evenodd"
              />
            </svg>
            <Link to="/question" onClick={() => onClick("/question", "question")} style={{ color: selectedTab === "question" && "currentColor" }}>
              Questions
            </Link>
          </li>

          {/* Ranking Tab */}
          <li
            className={`${
              selectedTab === "ranking"
                ? "bg-soGray-bg border-r-4 border-solid border-primary-400 font-semibold"
                : ""
            } flex justify-start flex-row pl-5 py-2 my-2 hover:font-semibold items-center`}
          >
            <img
              src="https://cdn.icon-icons.com/icons2/2191/PNG/512/game_leaderboard_rank_ranking_competition_icon_133762.png"
              alt="Ranking Icon"
              className="h-auto pr-2 w-7 fill-current"
            />
            <Link to="/ranking" onClick={() => onClick("/ranking", "ranking")} style={{ color: selectedTab === "ranking" && "currentColor" }}>
              Ranking
            </Link>
          </li>
        </ul>
      </li>
    </ol>
  );
}

export default Sidebar;
