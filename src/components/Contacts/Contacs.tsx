import "./Contacs.scss";
import contact from "../../assets/images/contact.png";
import he from "../../assets/images/He.jpg";
import she from "../../assets/images/She.jpg";

const Contacs = () => {
  return (
    <div className="contacs">
      <h2>Контакты</h2>
      <p>
        По любым возникающим у Вас вопросам, можете смело писать или звонить
        нам!
      </p>
      <div className="contacs__wrapper">
        <div className="contacs__wrapper__info">
          <img src={she} alt="" className="contacs__wrapper__single__photo" />
          <div className="contacs__wrapper__info__number">
            <div>Екатерина:</div>
            <div>89114084368</div>
          </div>
        </div>
        <div className="contacs__wrapper__we">
          <img src={contact} alt="" className="contacs__wrapper__we__photo" />
        </div>
        <div className="contacs__wrapper__info">
          <img src={he} alt="" className="contacs__wrapper__single__photo" />
          <div className="contacs__wrapper__info__number">
            <div>Семен:</div>
            <div>89116670919</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contacs;
