export const AssetViewer = (props : any) => {

  console.log(props.value);
  return (
    <div className="w-full h-full">
      <model-viewer
        src={props.value}
        alt="A 3D model"
        camera-controls
        auto-rotate
        style={{ 
          width: "100%",
          height: "100%",
        }}
      >
      </model-viewer>
    </div>
  );
};