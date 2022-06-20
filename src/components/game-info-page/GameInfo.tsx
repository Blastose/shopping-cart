import Game from "rawg-api-wrapper/interfaces/game-interface";
import RawgApiWrapper from "rawg-api-wrapper/rawg-api-wrapper";
import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GameScreenshot from "rawg-api-wrapper/interfaces/game-screenshot-interface";
import GameScreenshots from "./GameScreenshots";

const GameInfo = () => {
  const params = useParams();
  const rawgApiWrapper = useOutletContext() as RawgApiWrapper;
  const [game, setGame] = useState<Game | undefined>(undefined);
  const [screenshots, setScreenShots] = useState<GameScreenshot[] | undefined>(
    undefined
  );

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

    const fetchScreenshots = async () => {
      if (!params.gameId) {
        return undefined;
      }
      const fetchedScreenshots = await rawgApiWrapper.getGameScreenshots(
        parseInt(params.gameId)
      );
      if (fetchedScreenshots) {
        setScreenShots(fetchedScreenshots);
      }
    };

    fetchGame();
    fetchScreenshots();
  }, [params.gameId, rawgApiWrapper]);

  return (
    <main className="bg-slate-400 flex-1 flex">
      <div className="lg:container lg:mx-auto py-6 px-4">
        {game && screenshots && (
          <div className="flex flex-col gap-4">
            <div className="grid md:grid-cols-[70%_1fr] gap-8">
              <GameScreenshots
                screenshots={[
                  {
                    id: -1,
                    image: game.background_image,
                    width: -1,
                    height: -1,
                    is_deleted: false,
                  },
                  ...screenshots,
                ]}
              />
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">About</h1>
                <div>{game.description_raw}</div>

                <div>
                  <span>Released: </span>
                  <span>{game.released}</span>
                </div>
                <div>
                  <span>Genres: </span>
                  <span>
                    {game.genres.map((genre) => genre.name).join(", ")}
                  </span>
                </div>
                <div>
                  <span>Platform: </span>
                  <span>
                    {game.platforms
                      .map((platform) => platform.platform.name)
                      .join(", ")}
                  </span>
                </div>
                <div>
                  <span>Developers: </span>
                  <span>
                    {game.developers
                      .map((developer) => developer.name)
                      .join(", ")}
                  </span>
                </div>
                <div>
                  <span>Publishers: </span>
                  <span>
                    {game.publishers
                      .map((publisher) => publisher.name)
                      .join(", ")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
export default GameInfo;
