import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";
import "./Location.scss";

const Location = () => {
  return (
    <div className="location">
      <h2>Место проведения</h2>
      <p>Мероприятие будет проходит в арендованном лофте в центре Питера.</p>
      <div className="location__desc">
        Лиговский проспект, 50, корп. 16, Санкт-Петербург (Лофт Меморис)
      </div>
      <YMaps>
        <Map
          defaultState={{
            center: [59.922777, 30.362536],
            zoom: 15,
          }}
          className="location__map"
        >
          <Placemark geometry={[59.922777, 30.362536]} />
          <ZoomControl options={{ size: "small" }} />
        </Map>
      </YMaps>
    </div>
  );
};

export default Location;
