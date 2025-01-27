import Navbar from "./components/Navbar";
import Grid from "./grid/page";
import Card from "./components/Card";
import Modal from "./components/ModalExample";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Grid />
      <div className="container">
        <div className="row">
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
}