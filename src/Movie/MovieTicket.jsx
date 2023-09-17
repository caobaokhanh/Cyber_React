import React from "react";
import SeatList from "./SeatList";
import Ticket from "./Ticket";
import data from "./data.json";
import styles from "./mystyle.module.css";

export default function MovieTicket() {
  return (
    <div className="container">
      <h1 className="text-center fs-1 text-bg-warning p-4 fw-bolder">
        ĐẶT VÉ XEM PHIM CYBERLEARN.VN
      </h1>
      <div className={`row ${styles.background_movie}`}>
        <div className="col-md-8">
          <SeatList seats={data} />
        </div>
        <div className="col-md-4">
          <Ticket />
        </div>
      </div>
    </div>
  );
}
