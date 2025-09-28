import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const MIN_VALUE = 1970;
const MAX_VALUE = currentYear;
const STEP = 1;

function ReleaseRange({ rangeValue, setRangeValue }) {
  const handleRangeChange = (newValues) => {
    setRangeValue(newValues);
  };

  const [minSelected, maxSelected] = rangeValue;

  return (
    <div style={{ padding: "40px 20px", width: "80%", margin: "0 auto" }}>
      <h2>انتخاب بازه عددی (RC-Slider)</h2>

      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <p>
          **حداقل:**{" "}
          <span style={{ fontWeight: "bold", color: "#108ee9" }}>
            {minSelected}
          </span>{" "}
          | **حداکثر:**{" "}
          <span style={{ fontWeight: "bold", color: "#108ee9" }}>
            {maxSelected}
          </span>
        </p>
      </div>

      <Slider
        range
        min={MIN_VALUE}
        max={MAX_VALUE}
        step={STEP}
        value={rangeValue}
        onChange={handleRangeChange}
        trackStyle={[{ backgroundColor: "#108ee9" }]}
        handleStyle={[
          { borderColor: "#108ee9", backgroundColor: "white" },
          { borderColor: "#108ee9", backgroundColor: "white" },
        ]}
        railStyle={{ backgroundColor: "#ccc" }}
      />

      <div>min:{minSelected}</div>
      <div>max:{maxSelected}</div>
    </div>
  );
}

export default ReleaseRange;
