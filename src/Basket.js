import React from 'react';
import { FaPlus,FaMinus } from 'react-icons/fa';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  
  const totalPrice = itemsPrice + taxPrice ;
  return (
    <aside className="block col-12" >
      <h2 style={{marginTop:'40px',color:'blue'}}>Your Selected Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-6">{item.name}</div>
            <div className="plus1">
             
           <button onClick={() => onRemove(item)}>   <FaMinus  />
           </button>
             <button  onClick={() => onAdd(item)}><FaPlus /></button>
              
          
            </div>

            <div className=" text-right" >
              {item.qty} x Rs{item.price.toFixed(2)}
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
            <input type="text" className="form-control"  placeholder="Name"/>
          </div>
          <div className="mb-3">
          <label  className="form-label">Phone Number</label>
          <input type="number" className="form-control"  placeholder="Mobile Number"/>
        </div>
        <div className="mb-3">
        <label className="form-label">Roam Number</label>
        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Number"/>
      </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Comments</label>
            <textarea className="form-control" rows="3"></textarea>
          </div>

            <div className="row">
            <button type="button" className="btn btn-success" onClick={() => alert('Implement Checkout!')}> Checkout</button>
            
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
