import "./Detail.Module.css";
import mobile from "../../assets/mobile.png";
import { useSelector } from "react-redux";
const Detail = () => {
  const imageUrl = useSelector((state) => state.link.imageUrl);
  const data = useSelector((state) => state.link.data);
  console.log(data);
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
    </div>
  );
};

export default Detail;
