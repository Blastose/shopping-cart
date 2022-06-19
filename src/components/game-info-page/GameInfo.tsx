import Game from "rawg-api-wrapper/interfaces/game-interface";
import RawgApiWrapper from "rawg-api-wrapper/rawg-api-wrapper";
import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const GameInfo = () => {
  const params = useParams();
  const rawgApiWrapper = useOutletContext() as RawgApiWrapper;
  const [game, setGame] = useState<Game | undefined>(undefined);

  useEffect(() => {
    const fetchGame = async () => {
      if (!params.gameId) {
        return undefined;
      }
      const fetchedGame = await rawgApiWrapper.getGame(parseInt(params.gameId));
      if (fetchedGame) {
        setGame(fetchedGame);
      }
    };
    fetchGame();
  }, [params.gameId, rawgApiWrapper]);

  return (
    <main className="bg-slate-400 flex-1 flex">
      <div className="lg:container lg:mx-auto py-6 px-4">
        <div className="flex justify-between">
          <div>
            {game && (
              <>
                <div>{game.name}</div>
                <div>{game.description_raw}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
export default GameInfo;
