import "./Animal.css";

type Animal = {
  name: string;
  species: string;
  habitat: string;
  lifespan: number;
  diet: string;
  funFacts: string[];
  emoji: string;
};

const AnimalDiv: React.FC<Animal> = (props) => {
  return (
    <>
      <div className="animalCard">
        <div className="upperPart">
          <p>{props.emoji}</p>
          <p>{props.name}</p>
          <p>{props.species}</p>
          <p>{props.habitat}</p>
          <p>{props.diet}</p>
          <p>{props.lifespan}</p>
          <p>{props.diet}</p>
        </div>
        <div className="lowerPart">
          <p>{props.funFacts[0]}</p>
          <p>{props.funFacts[1]}</p>
          <p>{props.funFacts[2]}</p>
        </div>
      </div>
    </>
  );
};

export default AnimalDiv;