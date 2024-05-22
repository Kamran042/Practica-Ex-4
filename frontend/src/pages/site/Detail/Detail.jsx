import React, { useContext } from "react";
import { useParams } from "react-router";
import MainContext from "../../../context/context";
import "./Detail.scss";

const Detail = () => {
  const { id } = useParams();
  const { data ,basket,setBasket} = useContext(MainContext);
  const target = data.find((x) => x._id == id);
  function addToBasket(id) {
    const targetOfBasket = basket.find((x) => x._id == id);
    if (targetOfBasket) {
      targetOfBasket.count++;
      targetOfBasket.totalPrice += targetOfBasket.price;
    } else {
      const targetOfDataBsse = data.find((x) => x._id == id);
      basket.push(targetOfDataBsse);
    }
    setBasket([...basket]);
    console.log(basket);
  }
  return (
    <div className="detail ">
      <div className="container ">
        <div className="row">
          <div className="col-6">
            {target && (
              <>
                <img src={target.img} width={"400px"} height={"350px"} alt="" />
              </>
            )}
          </div>
          <div className="col-6 detail__right">
            {target && (
              <>
                <h2>Title: {target.title}</h2>
                <h2>Descroption: {target.desc}</h2>
                <h3>Price: {target.price} $</h3>
                <button
                  onClick={() => {
                    addToBasket(target._id);
                  }}
                  className="btn btn-primary"
                >
                  Add to basket
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
