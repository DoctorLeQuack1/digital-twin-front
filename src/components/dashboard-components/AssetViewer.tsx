export const AssetViewer = (props: any) => {
  console.log(props.value);
  return (
    <div className="w-full h-full">
      {/* Ignoramos el error de TypeScript sobre model-viewer */}
      {/* @ts-ignore */}
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
        {/* @ts-ignore */}
      </model-viewer>
    </div>
  );
};