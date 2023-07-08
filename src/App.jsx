import "./App.css";
import Customize from "./components/Customize/Customize";
import Detail from "./components/Detail/Detail";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="main__section">
        <div className="detail">
          <Detail />
        </div>
        <div className="customize">
          <Customize />
        </div>
      </div>
    </>
  );
}

export default App;
