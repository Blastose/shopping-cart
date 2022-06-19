import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import RawgApiWrapper from "rawg-api-wrapper/rawg-api-wrapper";
import GamesResult from "rawg-api-wrapper/interfaces/games-result-interface";

const Home = () => {
  const rawgApiWrapper = useOutletContext() as RawgApiWrapper;
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
      <div className="lg:container lg:mx-auto py-6 px-4">
        <div className="flex justify-between">
          <div>
            <p>Home</p>
            <div>
              <span>Games</span>
              <div>
                {games.map((game) => {
                  return (
                    <Link to={`/games/${game.id}`} key={game.id}>
                      <div>{game.name}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <Link to="/games">To /games</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
