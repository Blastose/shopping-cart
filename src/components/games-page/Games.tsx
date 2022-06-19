import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useSearchParams } from "react-router-dom";
import RawgApiWrapper from "rawg-api-wrapper/rawg-api-wrapper";
import GamesResult from "rawg-api-wrapper/interfaces/games-result-interface";

const Games = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page");
  const searchQuery = searchParams.get("search");

  const rawgApiWrapper = useOutletContext() as RawgApiWrapper;
  const [games, setGames] = useState([] as GamesResult[]);

  useEffect(() => {
    const fetchGames = async () => {
      const fetchedGames = await rawgApiWrapper.getGames(
        parseInt(page ? page : "1"),
        undefined,
        searchQuery ? searchQuery : undefined
      );
      if (fetchedGames) {
        setGames(fetchedGames);
      }
    };
    fetchGames();
  }, [page, rawgApiWrapper, searchQuery]);

  return (
    <main className="bg-slate-400 flex-1 flex">
      <div className="lg:container lg:mx-auto py-6 px-4">
        <div className="flex justify-between">
          <div>
            <p>Games</p>
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
        </div>
      </div>
    </main>
  );
};

export default Games;
