import Detail from "../Ui/Detail";

function DetailPage({ type }) {
  return (
    <div className="w-full mt-[5vh]">
      <Detail type={type} />
    </div>
  );
}

export default DetailPage;
