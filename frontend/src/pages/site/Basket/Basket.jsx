import React, { useContext } from "react";
import MainContext from "../../../context/context";

const Basket = () => {
  const { basket, setBasket } = useContext(MainContext);

  function increaseCounItmOfBasket(item) {
    item.count++;
    item.totalPrice += item.price;
    setBasket([...basket])
  }

  function decreaseCounItmOfBasket(item) {
    if (item.count > 1) {
      item.count--;
      item.totalPrice -= item.price;
    }else{
      const target = basket.find((x)=> x._id==item._id)
      const targetOfIndex = basket.indexOf(target)
      basket.splice(targetOfIndex,1)
    }
    setBasket([...basket])

  }
  return (
    <div>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Img</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Add</th>
            <th scope="col">Count</th>
            <th scope="col">Delete</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img src={item.img} width={"60pc"} height={"60px"} alt="" />
              </td>
              <td>{item.title}</td>
              <td>{item.desc}</td>
              <td>{item.price} $</td>
              <td>
                <button onClick={()=>{
                  increaseCounItmOfBasket(item)
                }} className="btn btn-warning">+</button>
              </td>
              <td>{item.count}</td>
              <td>
                <button onClick={()=>{
                  decreaseCounItmOfBasket(item)
                }} className="btn btn-danger">-</button>
              </td>
              <td>{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Basket;
