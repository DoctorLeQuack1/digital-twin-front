// MyModelViewerComponent.jsx
export const CampingComponent = () => {
  const style = {
    hotspot: {
      display: "block",
      width: "20px",
      height: "20px",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "#B0578D",
      boxSizing: "border-box",
    },
  };

  const handleClick = () => {
    console.log("Button clicked!"); // Log a message to the console
  };

  return (
    <>
      <model-viewer
        src="https://storage.googleapis.com/digital_twin_assets/camping.glb" // Replace with the path to your GLB model
        alt="A 3D model"
        camera-controls
        auto-rotate
        style={{ width: "100%", height: "1500px" }}
      >
        <button
          style={style.hotspot}
          slot="hotspot-visor"
          data-position="0 0 0"
          data-normal="0 0 0"
          onClick={handleClick}
        ></button>
      </model-viewer>
    </>
  );
};
