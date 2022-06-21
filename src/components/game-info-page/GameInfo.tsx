import Game from "rawg-api-wrapper/interfaces/game-interface";
import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GameScreenshot from "rawg-api-wrapper/interfaces/game-screenshot-interface";
import GameScreenshots from "./GameScreenshots";
import AppContext from "components/main-page/app-context-interface";
import AddToCartButton from "./AddToCartButton";

const GameInfo = () => {
  const params = useParams();
  const context = useOutletContext() as AppContext;
  const rawgApiWrapper = context.rawgApiWrapper;

  const [game, setGame] = useState<Game | undefined>(undefined);
  const [screenshots, setScreenShots] = useState<GameScreenshot[] | undefined>(
    undefined
  );

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGame = async () => {
      if (!params.gameId) {
        return undefined;
      }
      setIsLoading(true);
      const fetchedGame = await rawgApiWrapper.getGame(parseInt(params.gameId));
      if (fetchedGame) {
        setGame(fetchedGame);
        setIsLoading(false);
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
        {isLoading && (
          <div>
            <span className="text-2xl font-bold">Loading...</span>
          </div>
        )}
        {game && screenshots && (
          <div className="flex flex-col gap-4">
            <div className="grid md:grid-cols-[70%_1fr] gap-8">
              <div className="flex flex-col gap-4">
                <Link to="/games" className="hover:text-white duration-300">
                  <span className="font-bold text-2xl">🠔 Back to games</span>
                </Link>
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
              </div>
              <div className="flex flex-col gap-2">
                <AddToCartButton
                  game={game}
                  cart={context.cart}
                  addGameToCart={context.addGameToCart}
                />

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
