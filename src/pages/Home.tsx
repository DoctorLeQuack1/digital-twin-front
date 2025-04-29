import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const styles = {
  titleDiv: {
    width: "50%",
  },
  h1: {
    fontSize: "60px",
    fontFamily: "Arial",
    fontStyle: "italic",
    margin: "4rem",
    width: "70%",
    textShadow: "3px 3px rgb(73, 146, 101)",
  },
  p: {
    margin: "3rem 3rem 2rem 3rem",
    fontSize: "20px",
  },
  span: {
    fontWeight: "bold",
    fontSize: "30px",
  },
  frameDiv: {
    verticalAlign: "middle",
    marginLeft: "20%",
    border: "1px solid white",
  }
};

export const Home = () => {
  return (
    <div className="flex flex-col h-screen justify-center gap-30 items-center lg:flex-row lg:justify-between lg:px-30">
      <div className="flex flex-col flex-wrap justify-center items-center">
        <h1 className="self-start" style={styles.h1}>Make your assets go live!</h1>
        <p style={styles.p}>
          <span style={styles.span}>
            Keep an eye on everything, anytime, everywhere you go all in a
            single place.
          </span>
          <br />
          <br />
          Send us a message and start tracking in real time the digital twin of
          any asset you own.
        </p>
        <Link to="/contact">
          <Button
            className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Contct us
          </Button>
        </Link>
      </div>
      <div id="custom-container">
        {/* @ts-ignore */}
        <model-viewer
          src="Factory.glb" // Replace with the path to your GLB model
          alt="A 3D model"
          camera-controls
          auto-rotate
          style={{ width: "500px", height: "500px", backgroundColor:"#111827", borderRadius: "10px"}}
        >
          {/* @ts-ignore */}
        </model-viewer>
      </div>
    </div>
  );
};
