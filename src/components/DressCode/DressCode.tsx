import "./DressCode.scss";
import shorts from "../../assets/images/shorts.png";
import jumper from "../../assets/images/jumper.png";
import suit from "../../assets/images/suit.png";
import dress from "../../assets/images/dress.png";
import correct from "../../assets/images/correct.png";
import wrong from "../../assets/images/wrong.png";

const clothes = [
  {
    image: shorts,
    choice: wrong,
  },
  {
    image: jumper,
    choice: wrong,
  },
  {
    image: suit,
    choice: correct,
  },
  {
    image: dress,
    choice: correct,
  },
];

const DressCode = () => {
  return (
    <div className="dressCode">
      <h2>Дресс-код</h2>
      <p>
        Этот будет единственный пункт, где мы на чем-то настоим. Для нас
        празднование в Питере с Вами - это основное празднование свадьбы,
        поэтому <span>настоятельно просим</span> выбрать торжественный наряд.
      </p>
      <div className="dressCode__wrapper">
        {clothes.map((item, index) => (
          <div className="dressCode__wrapper__item" key={index}>
            <img
              src={item.image}
              alt=""
              className="dressCode__wrapper__image"
            />
            <img
              src={item.choice}
              alt=""
              className="dressCode__wrapper__choice"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DressCode;
