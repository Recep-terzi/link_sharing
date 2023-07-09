import "./Detail.Module.css";
import mobile from "../../assets/mobile.png";
import { useSelector } from "react-redux";
import {
  AiFillGithub,
  AiOutlineArrowRight,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Detail = () => {
  const imageUrl = useSelector((state) => state.link.imageUrl);
  const data = useSelector((state) => state.link.data);

  const linkData = useSelector((state) => state.link.linkData);
  return (
    <div className="detail__body">
      <img src={imageUrl} alt="" />
      <img src={mobile} alt="" />
      {data && (
        <div className="data__information">
          <p>
            {data.firstName} {data.lastName}
          </p>
          <p>{data.email}</p>
        </div>
      )}

      <div className="detail__link__data">
        {linkData &&
          linkData.map((link) => {
            switch (link.platform) {
              case "Github":
                return (
                  <a href={link.platformLink} className={link.platform}>
                    <div>
                      <AiFillGithub />
                      <p>GitHub</p>
                    </div>
                    <AiOutlineArrowRight />
                  </a>
                );
              case "Youtube":
                return (
                  <a href={link.platformLink} className={link.platform}>
                    <div>
                      <AiFillYoutube />
                      <p>Youtube</p>
                    </div>

                    <AiOutlineArrowRight />
                  </a>
                );
              case "Linkedin":
                return (
                  <a href={link.platformLink} className={link.platform}>
                    <div>
                      <AiFillLinkedin />
                      <p>Linkedin</p>
                    </div>

                    <AiOutlineArrowRight />
                  </a>
                );
              case "Instgram":
                return (
                  <a href={link.platformLink} className={link.platform}>
                    <div>
                      <AiFillInstagram />
                      <p>Instgram</p>
                    </div>

                    <AiOutlineArrowRight />
                  </a>
                );
              default:
                break;
            }
          })}
      </div>
    </div>
  );
};

export default Detail;
