import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MainContext from "../../../context/context";
import "./Products.scss";

const Products = () => {
  const { data, inpVal, setInpVal, basket, setBasket, sortBy, setSortBy } =
    useContext(MainContext);

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
    <div className="products">
      <div className="products__top">
        <h3>POPULAR PRODUCTS</h3>
        <h2>Our Products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
          consequatur laboriosam ipsam.
        </p>
      </div>
      <div className="products__search__sort">
        <input
          value={inpVal}
          onChange={(e) => setInpVal(e.target.value)}
          placeholder={"Searc by title"}
          type="text"
        />
        <button className="btn btn-success" onClick={()=>{setSortBy({field:"title",asc:true})}}>A-Z</button>
        <button className="btn btn-success" onClick={()=>{setSortBy({field:"title", asc:false})}}>Z-A</button>
        <button className="btn btn-secondary" onClick={()=>{setSortBy({field:"price", asc:true})}}>Artan</button>
        <button className="btn btn-secondary" onClick={()=>{setSortBy({field:"price", asc:false})}}>Azalan</button>
        <button className="btn btn-dark" onClick={()=>{setSortBy(null)}}>Default</button>
      </div>
      <div className="products__grid">
        {data
          .filter((x) => x.title.toLowerCase().includes(inpVal.toLowerCase()))
          .sort((a,b)=>{
            if(!sortBy){
                return 0;
            }else if(sortBy.asc == true){
               return (a[sortBy.field]> b[sortBy.field]) ? 1 : ((b[sortBy.field] > a[sortBy.field]) ? -1 : 0)
            }else if(sortBy.asc == false){
                return  (a[sortBy.field]< b[sortBy.field]) ? 1 : ((b[sortBy.field] < a[sortBy.field]) ? -1 : 0)
            }
          })
          .map((item, index) => (
            <div className="products__grid__card" key={index}>
              <div className="products__grid__card__img">
                <img src={item.img} alt="" />
              </div>
              <div className="products__grid__card__title">
                <h2>{item.title}</h2>
                <h3>{item.price} $</h3>
                <p>{item.desc} </p>
                <div className="products__grid__card__title__btns">
                  <Link to={`detail/${item._id}`} className="btn__info">
                    <i class="fa-solid fa-circle-info"></i>
                  </Link>
                  <div
                    className="btn__buy"
                    onClick={() => {
                      addToBasket(item._id);
                    }}
                  >
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
