import "./Photo.scss";
import camera from "../../assets/images/camera.png";

const Photo = () => {
  return (
    <div className="photo">
      <h2>Фотоотчет</h2>
      <p>
        Через некоторое время мы поделимся всеми сделанными на торжестве
        фотографиями. Но помните, что никому не запрещено делать и свои! 😎
      </p>
      <img src={camera} alt="" className="photo__image" />
    </div>
  );
};

export default Photo;
