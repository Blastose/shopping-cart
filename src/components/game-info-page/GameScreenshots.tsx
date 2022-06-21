import GameScreenshot from "rawg-api-wrapper/interfaces/game-screenshot-interface";
import { Carousel } from "react-responsive-carousel";

const GameScreenshots = (props: { screenshots: GameScreenshot[] }) => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      swipeable={true}
      emulateTouch={true}
      showThumbs={false}
    >
      {props.screenshots.map((screenshot) => {
        return (
          <div key={screenshot.id}>
            <img src={screenshot.image} alt="" className="rounded-2xl" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default GameScreenshots;
