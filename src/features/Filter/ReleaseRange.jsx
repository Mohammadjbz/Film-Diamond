import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useRef, useState } from "react";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const MIN_VALUE = 1970;
const MAX_VALUE = currentYear;
const STEP = 1;

function ReleaseRange({ rangeValue, setRangeValue }) {
  const handleRangeChange = (newValues) => {
    setRangeValue(newValues);
  };

  const [showRangeValue, setShowRangeValue] = useState(false);
  const [minSelected, maxSelected] = rangeValue;
  const menuRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowRangeValue(false);
      }
    }

    if (showRangeValue) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showRangeValue]);

  return (
    <div className="w-[50%] relative" ref={menuRef}>
      <button
        onClick={() => setShowRangeValue((show) => !show)}
        className="border border-2 border-[#f5c61cab] text-[#faf1f1f9] rounded-[4px] py-[4px] px-[8px]  mx-auto cursor-pointer hover:bg-[#44434197] transition-all ease-in-out diration-200"
      >
        Year of production
      </button>

      {showRangeValue && (
        <div className="bg-[#242121e6] p-1 rounded-[8px]">
          {" "}
          <div className="mt-2 mb-1">
            <p>
              from <span>{minSelected}</span> to <span>{maxSelected}</span>
            </p>
          </div>
          <div className="w-[90%]">
            <Slider
              range
              min={MIN_VALUE}
              max={MAX_VALUE}
              step={STEP}
              value={rangeValue}
              onChange={handleRangeChange}
              styles={{
                rail: {
                  backgroundColor: "#bbb9b9", // خط اصلی (پس‌زمینه اسلایدر)
                  height: 4,
                },
                track: {
                  backgroundColor: "#F5C51C", // بخش فعال (بین دو هندل یا از اول تا هندل)
                  height: 4,
                },
                handle: {
                  borderColor: "#F5C51C", // رنگ دور هندل
                  backgroundColor: "#fac70d", // رنگ داخل هندل
                  width: 15,
                  height: 15,
                  opacity: 1,
                  boxShadow: "0 0 5px rgba(0,0,0,0.2)",
                },
              }}
            />
          </div>
          <div className="flex justify-between w-[80%]">
            <div>{minSelected}</div>
            <div>{maxSelected}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReleaseRange;
