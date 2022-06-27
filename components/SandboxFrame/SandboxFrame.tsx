type SandboxFrameProps = {
  src: string;
};

export default function SandboxFrame({ src }: SandboxFrameProps) {
  return (
    <div className="w-full h-[500px] my-6">
      <iframe
        src={src}
        style={{
          width: "100%",
          height: "100%",
          border: "0",
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title="distracted-morning-pyskce"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
}
