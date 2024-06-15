import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";
import "./Hotel.scss";

const Hotel = () => {
  return (
    <div className="location">
      <h2>Место проживания</h2>
      <p>
        Мы планируем закончить празднование после полуночи, поэтому для каждого
        гостя предусмотрено проживание в отеле.
      </p>
      <div className="location__desc">
        Лиговский проспект, 48, Санкт-Петербург (SV Grand hotel)
      </div>
      <YMaps>
        <Map
          defaultState={{
            center: [59.925492, 30.35805],
            zoom: 15,
          }}
          className="location__map"
        >
          <Placemark geometry={[59.925492, 30.35805]} />
          <ZoomControl options={{ size: "small" }} />
        </Map>
      </YMaps>
    </div>
  );
};

export default Hotel;
