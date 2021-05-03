import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {name, sprites, hp} = pokemon
  const [showsprite, setSprite] = useState(sprites.front)

  function onClick(){
    setSprite((showsprite) => !showsprite)
  }

  return (
    <Card onClick={onClick}>
      <div>
        <div className="image">
          <img src={showsprite? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
