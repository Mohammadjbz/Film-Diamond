import { FadeLoader } from "react-spinners";

function FullPageSpinner() {
  return (
    <div className="h-[500px] flex items-center">
      <FadeLoader
        color="#F5C51C"
        height={14}
        margin={5}
        loading
        radius={2}
        speedMultiplier={1}
        width={3}
      />
    </div>
  );
}

export default FullPageSpinner;
