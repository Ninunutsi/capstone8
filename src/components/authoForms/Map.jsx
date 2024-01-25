import MapImage from "../../assets/mapilustrat.png";
import icon1 from "../../assets/geperson.png";
import icon2 from "../../assets/enperson.png";
import icon3 from "../../assets/howperson.png";
import icon11 from "../../assets/helloge.png";
import icon12 from "../../assets/hello.png";
import icon13 from "../../assets/howareyou.png";
import "./autho.css";

const Map = () => {
  return (
    <div className="map">
      <img className="mapImage" src={MapImage} alt="map" />
      <img className="icon icon1" src={icon1} alt="illustration" />
      <img className="icon icon2" src={icon2} alt="illustration" />
      <img className="icon icon3" src={icon3} alt="illustration" />
      <img className="icon icon11" src={icon11} alt="illustration" />
      <img className="icon icon12" src={icon12} alt="illustration" />
      <img className="icon icon13" src={icon13} alt="illustration" />
    </div>
  );
};

export default Map;
