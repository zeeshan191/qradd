import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import axios from "axios";
export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const totalPrice = itemsPrice + taxPrice;


  const [foodName, setFoodName] = useState();
  const [personfname, setPersonfname] = useState();
  const [personphone, setPersonphone] = useState();
  const [personroom, setPersonroom] = useState();
  const [personcomments, setPersoncomments] = useState();
  const [foodId, setFoodId] = useState();
  //const [foodPrice, setFoodPrice] = useState();


  



  const handleChangeEvent = (e) => {
    //console.log("e : ", e);
    const input = e.target.name;
    //console.log("field name : ", e.target.name + "- value -", e.target.value);

    if (input === "personfname") {
      setPersonfname(e.target.value);
    } else if (input === "personphone") {
      setPersonphone(e.target.value);
    } else if (input === "personroom") {
      setPersonroom(e.target.value);
    } else if (input === "personcomments") {
      setPersoncomments(e.target.value);
    }
  };



  useEffect(() => {
    let temp = null;
    let tempId = null;

    console.log(cartItems);
    temp = null;
    tempId = null;
    for (let i = 0; i < cartItems.length; i++) {
      if (i === 0) {
        tempId = cartItems[i].id;
        temp = cartItems[i].name + "(" + cartItems[i].qty + ")";
      } else {
        temp = temp + "," + cartItems[i].name + "(" + cartItems[i].qty + ")";
        tempId = tempId + "," + cartItems[i].id;
      }
    }
    console.log("TEMP :" + temp);
    setFoodId(tempId);
    setFoodName(temp)
  }, [cartItems])


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://entemadb.entema-software.com/insertFoodOrderData", {

        personfname: personfname,
        personphone: personphone,
        personroom: personroom,
        personcomments: personcomments,
        foodname: foodName,
        foodid: foodId,
        foodprice: totalPrice
      })
      .then((res) => {
        console.log("updated Values Successfully : ", res.data);
        window.location.reload();        
      });

    console.log("test submit");

  };


  return (
    <form onChange={handleChangeEvent} onSubmit={handleSubmit}>
      <h2 style={{ marginTop: '40px', color: 'blue' }}>Your Selected Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((food) => (
          <div key={food.id} className="row">
            <div className="col-6">{food.name}</div>
            <div className="plus1">

              <button onClick={() => onRemove(food)}>   <FaMinus />
              </button>
              <button onClick={() => onAdd(food)}><FaPlus /></button>


            </div>

            <div className=" text-right" >
              {food.qty} x Rs{food.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="item1">Items Price</div>
              <div className="text-right"  >Rs{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="item1">Tax Price</div>
              <div className="text-right">Rs{taxPrice.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="item1">
                <strong>Total Price</strong>
              </div>
              <div className=" text-right">
                <strong>Rs{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" id="personfname" name="personfname" value={personfname} placeholder="Name" required/>
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="number" className="form-control" id="personphone" name="personphone" value={personphone} placeholder="Mobile Number" />
            </div>
            <div className="mb-3">
              <label className="form-label">Room Number</label>
              <input type="number" className="form-control" id="personroom" name="personroom" value={personroom} placeholder="Number" required/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Comments</label>
              <textarea className="form-control" id="personcomments" name="personcomments" value={personcomments} rows="3"></textarea>
            </div>

            <div className="row">
              <button type="submit" className="btn btn-success"> Checkout</button>

            </div>
          </>
        )}
      </div>
    </form>

  );
}
