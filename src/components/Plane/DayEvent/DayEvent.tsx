import "./DayEvent.scss";
import wedding from "../../../assets/images/wedding.png";
import travel from "../../../assets/images/travel.png";
import eat from "../../../assets/images/eat.png";
import preparation from "../../../assets/images/preparation.png";
import party from "../../../assets/images/party.png";

const event = [
  {
    image: travel,
    desc: "Сбор в Питере",
    time: "12:00 - 15:00",
  },
  {
    image: eat,
    desc: "Обед",
    time: "13:30",
  },
  {
    image: preparation,
    desc: "Подготовка",
    time: "15:00 - 19:00",
  },
  {
    image: party,
    desc: "Начало вечера",
    time: "19:00",
  },
  {
    image: wedding,
    desc: "Окончание вечера",
    time: "02:00",
  },
];
const DayEvent = () => {
  return (
    <div className="dayEvent">
      {event.map((item, index) => (
        <div className="dayEvent__event" key={index}>
          <img src={item.image} alt="" className="dayEvent__event__image" />
          <div className="dayEvent__event__description">
            <div>{item.desc}</div>
            <div>{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DayEvent;
