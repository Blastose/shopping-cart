import GamesResult from "rawg-api-wrapper/interfaces/games-result-interface";
import GameCard from "./GameCard";

const GameCardView = (props: { games: GamesResult[]; numRows: number }) => {
  const cols: number[][] = [];
  for (let i = 0; i < props.numRows; i++) {
    cols.push([]);
  }
  props.games.forEach((_game, index) => {
    cols[index % props.numRows].push(index);
  });

  return (
    <>
      {cols.map((col, index) => {
        return (
          <div className="flex flex-col gap-4 2xl:gap-6" key={index}>
            {col.map((gameIndex) => {
              return (
                <GameCard
                  game={props.games[gameIndex]}
                  key={props.games[gameIndex].id}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default GameCardView;
