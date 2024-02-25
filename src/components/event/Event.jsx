import { Button, Carousel } from "react-bootstrap";
import "../event/event.css";
import img1 from "../../assets/images/eventSection/Carousel/img1.png";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <>
      <div className="divEventSection">
        <div className="rowEventSection1">
          <p className="titleEventSection">
            Estamos felices de compartir este día con vos{" "}
          </p>
          <Carousel data-bs-theme="dark" className="carousel">
            <Carousel.Item>
              <img
                className="d-block w-100 imgCarousel"
                src={img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 imgCarousel"
                src={img1}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 imgCarousel"
                src={img1}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="rowEventSection2">
          <div>
            <p className="subtitleEventSection">Ceremonia</p>
            <p className="textEventSection">Iglesia Nuestra Señora del Valle<br/>17hs</p>
            <Link target="_blank" to={"https://www.google.com/maps/place/Parroquia+Nuestra+Se%C3%B1ora+del+Valle/@-26.815749,-65.293438,16z/data=!4m6!3m5!1s0x942242d62123af13:0xaa2edb3420b1b358!8m2!3d-26.815749!4d-65.293438!16s%2Fg%2F1tfwlfys?hl=es&entry=ttu"}>
            <Button className="buttonEventSection">Como llegar</Button>
            </Link>
            <p className="subtitleEventSection">Fiesta</p>
            <p className="textEventSection">San Pablo Country Club <br/>19hs</p>
            <Link target="_blank" to={"https://www.google.com/maps/place/San+Pablo+Country+Life+%26+Golf/@-26.8539783,-65.3181571,17z/data=!3m1!4b1!4m6!3m5!1s0x9422436f81cdc72d:0x2f083f34b254a65e!8m2!3d-26.8539831!4d-65.3155822!16s%2Fg%2F11b7tv2yz7?hl=es&entry=ttu"}>
            <Button className="buttonEventSection">Como llegar</Button>
            </Link>
          </div>

          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.7607951218642!2d-65.29601829117578!3d-26.815744189057884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942242d62123af13%3A0xaa2edb3420b1b358!2sParroquia%20Nuestra%20Se%C3%B1ora%20del%20Valle!5e0!3m2!1ses!2sar!4v1705193279549!5m2!1ses!2sar"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Event;
