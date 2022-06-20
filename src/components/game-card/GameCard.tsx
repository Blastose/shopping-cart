import GamesResult from "rawg-api-wrapper/interfaces/games-result-interface";

const GameCard = (props: { game: GamesResult }) => {
  return (
    <div className="flex group flex-col bg-slate-500 hover:bg-slate-300 rounded-lg overflow-hidden duration-300">
      <img src={props.game.background_image} alt="" />
      <div className="p-3 text-white group-hover:text-black duration-300">
        <div className="font-bold text-lg">{props.game.name}</div>
        <div className="">{props.game.released}</div>
      </div>
    </div>
  );
};

export default GameCard;
