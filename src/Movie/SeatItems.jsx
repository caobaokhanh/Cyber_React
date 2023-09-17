import React from "react";
import SeatItem from "./SeatItem";
import { useSelector } from "react-redux";

export default function SeatItems({ seats, isSelected }) {
  const { selectedSeats } = useSelector((state) => {
    return state.movie;
  });
  return (
    <div>
      {seats.danhSachGhe.map((seat) => {
        const isSelected = selectedSeats.find(
          (item) => item.soGhe === seat.soGhe
        );
        return <SeatItem seat={seat} isSelected={!!isSelected} />;
      })}
    </div>
  );
}
