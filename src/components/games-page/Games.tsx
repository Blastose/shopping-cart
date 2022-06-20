import React, { useEffect, useState } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import RawgApiWrapper from "rawg-api-wrapper/rawg-api-wrapper";
import GamesResult from "rawg-api-wrapper/interfaces/games-result-interface";
import GameCardView from "components/game-card/GameCardView";

const Games = () => {
  const [searchParams] = useSearchParams();

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
      <div className="lg:container lg:mx-auto py-6 px-4 duration-300">
        <div className="flex justify-between">
          <div className="flex flex-col items-center flex-1">
            <p className="self-start font-bold text-2xl">Games</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-6">
              <GameCardView games={games} numRows={4} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Games;
