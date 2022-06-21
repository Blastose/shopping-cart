import React, { useEffect, useState } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import GamesResult from "rawg-api-wrapper/interfaces/games-result-interface";
import GameCardView from "components/game-card/GameCardView";
import AppContext from "components/main-page/app-context-interface";

const Games = () => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page");
  const searchQuery = searchParams.get("search");

  const context = useOutletContext() as AppContext;
  const rawgApiWrapper = context.rawgApiWrapper;

  const [games, setGames] = useState([] as GamesResult[]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      setGames([]);
      setIsLoading(true);
      const fetchedGames = await rawgApiWrapper.getGames(
        parseInt(page ? page : "1"),
        undefined,
        searchQuery ? searchQuery : undefined
      );
      if (fetchedGames) {
        setGames(fetchedGames);
        setIsLoading(false);
      }
    };
    fetchGames();
  }, [page, rawgApiWrapper, searchQuery]);

  return (
    <main className="bg-slate-400 flex-1 flex">
      <div className="lg:container lg:mx-auto py-6 px-4 duration-300">
        <div className="flex justify-between">
          {isLoading && (
            <div>
              <span className="text-2xl font-bold">Loading...</span>
            </div>
          )}
          <div className="flex flex-col items-center flex-1">
            {games.length > 0 && (
              <>
                <p className="self-start font-bold text-2xl">Games</p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-6">
                  <GameCardView games={games} numRows={4} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Games;
