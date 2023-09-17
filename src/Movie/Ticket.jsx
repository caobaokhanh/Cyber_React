import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Ticket() {
  const { selectedSeats } = useSelector((state) => {
    return state.movie;
  });

  const { totalPrice } = useSelector((state) => {
    return state.movie;
  });

  const handleBooking = () => {
    alert(`Số tiền cần thanh toán : ${totalPrice.toLocaleString()}$`);
  };
  const dispatch = useDispatch();

  const handleRemove = (seatNum) => {
    dispatch({ type: "removeSeat", payload: seatNum });
  };

  return (
    <div>
      <div className="col-md-12 text-center text-bg-primary p-3 fw-bold">
        DANH SÁCH GHẾ ĐÃ CHỌN
      </div>

      <div className="text-bg-dark text-center mt-3 m-md-3 fw-bold">
        GHẾ ĐÃ ĐẶT <span className="btn btn-danger p-3 my-3"></span>
        <br />
        GHẾ ĐANG CHỌN <span className="btn btn-success p-3 my-3"></span>
        <br />
        GHẾ CHƯA ĐẶT <span className="btn btn-secondary p-3 my-3"></span>
      </div>

      <div className="text-center mt-5 p-1">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">Số ghế</th>
              <th scope="col">Giá</th>
              <th scope="col">Hủy</th>
            </tr>
          </thead>

          <tbody>
            {selectedSeats.map((item) => {
              return (
                <tr>
                  <td>{item.soGhe}</td>
                  <td>{item.gia.toLocaleString()}$</td>
                  <td>
                    <button
                      className="text-dark"
                      onClick={() => {
                        handleRemove(item.soGhe);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>

          <tfoot className="fw-bold">
            <tr>
              <td>Tổng tiền</td>
              <td>{`${totalPrice.toLocaleString()}$`}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>

        {selectedSeats.length > 0 && (
          <button className="btn btn-danger" onClick={handleBooking}>
            ĐẶT VÉ
          </button>
        )}
      </div>
    </div>
  );
}
