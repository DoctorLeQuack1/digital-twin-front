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
    margin: "2rem",
    textAlign: "right" as React.CSSProperties["textAlign"],
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
  },
  div2: {
    display: "flex",
    alignItems: "center",
  },
  iframe: {
    width: "500px",
    height: "300px",
  },
  button: {
    marginLeft: "4%",
  },
};

export const Home = () => {
  return (
    <div className="flex flex-wrap">
      <div style={styles.titleDiv}>
        <h1 style={styles.h1}>make your assets go live!</h1>
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
            style={styles.button}
            className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            Contct us
          </Button>
        </Link>
      </div>
      <div style={styles.div2}>
        <div style={styles.frameDiv}>
          <model-viewer
            src="Factory.glb" // Replace with the path to your GLB model
            alt="A 3D model"
            camera-controls
            auto-rotate
            style={styles.iframe}
          ></model-viewer>
        </div>
      </div>
    </div>
  );
};
