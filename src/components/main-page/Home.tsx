import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import GamesResult from "rawg-api-wrapper/interfaces/games-result-interface";
import GameCardView from "components/game-card/GameCardView";
import AppContext from "components/main-page/app-context-interface";

const Home = () => {
  const context = useOutletContext() as AppContext;
  const rawgApiWrapper = context.rawgApiWrapper;
  const [games, setGames] = useState([] as GamesResult[]);

  useEffect(() => {
    const fetchGames = async () => {
      const fetchedGames = await rawgApiWrapper.getGames(1, 5);
      if (fetchedGames) {
        setGames(fetchedGames);
      }
    };
    fetchGames();
  }, [rawgApiWrapper]);

  return (
    <main className="bg-slate-400 flex-1 flex">
      <div className="lg:container lg:mx-auto py-6 px-4  duration-300">
        <div className="flex justify-between">
          <span className="font-bold text-2xl">Popular Games</span>
          <Link to="/games">
            <span className="font-bold text-xl hover:text-white duration-300">
              See more ➔
            </span>
          </Link>
        </div>
        <div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-6">
            <GameCardView games={games} numRows={4} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;