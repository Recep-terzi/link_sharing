import "./Navbar.Module.css";
import { PiLinkSimple } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { setStep } from "../../redux/linkSlice";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const linksHandle = () => {
    dispatch(setStep(1));
  };
  const detailHandle = () => {
    dispatch(setStep(2));
  };
  return (
    <>
      <div className="navbar__section">
        <div className="navbar__left">devlinks</div>
        <div className="navbar__center">
          <a onClick={linksHandle}>
            <PiLinkSimple /> Links
          </a>
          <a onClick={detailHandle}>
            <CgProfile />
            Profile Details
          </a>
        </div>
        <div className="navbar__right">
          <button>Preview</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
