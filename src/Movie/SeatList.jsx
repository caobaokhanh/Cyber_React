import React from "react";
import SeatItems from "./SeatItems";

export default function SeatList({ seats }) {
  return (
    <div className="row">
      <div className="col-md-12 text-center text-bg-danger p-3 fw-bold">
        MÀN HÌNH
      </div>
      <div className="row d-flex justify-content-center">
        {seats.map((seat) => {
          return (
            <div key={seat.hang} className="col-md-1 text-center m-1">
              <SeatItems seats={seat} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
