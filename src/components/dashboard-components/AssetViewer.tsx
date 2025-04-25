export const AssetViewer = () => {
  return (
    <div className="w-full h-full">
      <model-viewer
        src="/Factory.glb"
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