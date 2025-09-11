import Detail from "../Ui/Detail";
import SliderCast from "../features/Credits/SliderCast";

function DetailPage({ type }) {
  return (
    <div className="w-full mt-[5vh]">
      <Detail type={type} />
      {/* <SliderCast type={type} /> */}
    </div>
  );
}

export default DetailPage;
