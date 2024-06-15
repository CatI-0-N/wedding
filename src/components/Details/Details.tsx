import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";
import "./Details.scss";

const details = [
  {
    topic: "Дорога",
    text: (
      <div>
        Всем кто добирается из других городов - мы компенсируем проезд как туда,
        так и обратно. <br /> Для тех, кто из Петрозаводска, куплены билеты:
        <ul>
          <li>отправление в Питер - 07.09, 06:36 на Ласточке</li>
          <li>отправление в Петрозаводск - 08.09, 18:00 на Ласточке</li>
        </ul>
        Для тех, кто из других городов - покупка билетов возлагается на гостя.
        Убедительно просим приехать в Питер 07.09 не позднее 15:00.
      </div>
    ),
  },
  {
    topic: "Макияж",
    text: (
      <p>
        Для всех приглашенных девушек забронирован салон красоты, чтобы навести
        красоту перед вечером! <br />
        <br />
        Адрес салона: Лиговский проспект, 81Г, этаж 4, офис 14
      </p>
    ),
  },
  {
    topic: "День после торжества",
    text: (
      <p>
        Мы планируем программу только до и на время самого торжества. Следующий
        день в Вашем распоряжении.
      </p>
    ),
  },
  {
    topic: "Подарки",
    text: (
      <p>
        О таком не пишут, но уже спрашивали, поэтому поясним - помните, что мы
        также поедем в Питер и обратно, и если у кого-то возникнет желание
        подарить что-то габаритное... Не стоит так делать, пожалуйста!
      </p>
    ),
  },
];

const Details = () => {
  return (
    <div className="details">
      <h2>Детали</h2>
      {details.map((item, index) => (
        <div key={index}>
          <h3 className="details__topic">{item.topic}</h3>
          <div className={item.topic === "Макияж" ? "details__flex" : ""}>
            <div
              className={
                item.topic === "Макияж"
                  ? "details__info_special"
                  : "details__info"
              }
            >
              {item.text}
            </div>
            {item.topic === "Макияж" ? (
              <YMaps>
                <Map
                  defaultState={{
                    center: [59.924949, 30.355731],
                    zoom: 16,
                  }}
                  className="details__map"
                >
                  <Placemark geometry={[59.924949, 30.355731]} />
                  <ZoomControl options={{ size: "small" }} />
                </Map>
              </YMaps>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
