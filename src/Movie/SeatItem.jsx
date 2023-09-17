import React from "react";
import { useDispatch } from "react-redux";

export default function SeatItem({ seat, isSelected }) {
  // useState quản lý ghế có được chọn hay không
  //   const [isSelected, setIsSelected] = useState(false);

  const dispatch = useDispatch();

  const handleSelect = () => {
    // setIsSelected(!isSelected);
    dispatch({
      type: "selectSeat",
      payload: { ...seat, isSelected: !isSelected },
    });
  };
  let classes = "btn btn-secondary p-2 my-3";
  if (seat.daDat) {
    classes += " btn-danger";
  } else if (isSelected) {
    classes += " btn-success";
  } else {
    classes += " text-white";
  }
  return (
    <div>
      <button className={classes} disabled={seat.daDat} onClick={handleSelect}>
        <div style={{ marginLeft: "3px" }}>{seat.soGhe}</div>
      </button>
    </div>
  );
}
