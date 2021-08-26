import React,{useState} from 'react'

import Chinesericeitems from './Chinesericeitems'
import Chinesespecialvegetables from './Chinesespecialvegetables'
import Freshfruitjuices from './Freshfruitjuices'
import Hotbeverages from './Hotbeverages'
import Icecream from './Icecream'
import Kadaispecial from './Kadaispecial';
import Main from './Main'
import data from './data';
import Basket from './Basket'
function According() {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
  console.log(products);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
    return (
        <>

            <div className="container content">
                <div className="title-base">
                    <hr />
                    <h2>Our menu</h2>
                    <p>Genuine and delicious</p>
                </div>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                CHINESE NOODLES
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                          
  <Main products={products} onAdd={onAdd} ></Main>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                CHINESE RICE ITEMS
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
<Chinesericeitems/>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                CHINESE SPECIAL VEGETABLES
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
<Chinesespecialvegetables/>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                FRESH FRUIT JUICES
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
<Freshfruitjuices/>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                HOT BEVERAGES
                            </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
<Hotbeverages/>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingSix">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                ICE CREAMS
                            </button>
                        </h2>
                        <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
<Icecream/>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingSeven">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                                KADAI SPECIAL
                            </button>
                        </h2>
                        <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                           <Kadaispecial/>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingeight">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseeight" aria-expanded="false" aria-controls="flush-collapseeight">
                               Meals
                            </button>
                        </h2>
                        <div id="flush-collapseeight" class="accordion-collapse collapse" aria-labelledby="flush-headingeight" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <Chinesespecialvegetables />
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingNine">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                                MILKSHAKES
                            </button>
                        </h2>
                        <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                            <Chinesericeitems/>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTen">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                                NORTH INDIAN DISHES
                            </button>
                        </h2>
                        <div id="flush-collapseTen" class="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                            <Chinesericeitems/>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree1">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree1" aria-expanded="false" aria-controls="flush-collapseThree1">
                                PAV BHAJI
                            </button>
                        </h2>
                        <div id="flush-collapseThree1" class="accordion-collapse collapse" aria-labelledby="flush-headingThree1" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                            <Chinesericeitems/>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree21">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree21" aria-expanded="false" aria-controls="flush-collapseThree21">
                                RAITA
                            </button>
                        </h2>
                        <div id="flush-collapseThree21" class="accordion-collapse collapse" aria-labelledby="flush-headingThree21" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                            <Chinesericeitems/>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree23">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree23" aria-expanded="false" aria-controls="flush-collapseThree23">
                                RICE ITEMS
                            </button>
                        </h2>
                        <div id="flush-collapseThree23" class="accordion-collapse collapse" aria-labelledby="flush-headingThree23" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                            <Chinesericeitems/>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree24">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree24" aria-expanded="false" aria-controls="flush-collapseThree24">
                                SALAD
                            </button>
                        </h2>
                        <div id="flush-collapseThree24" class="accordion-collapse collapse" aria-labelledby="flush-headingThree24" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                            <Chinesericeitems/>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree5">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree5" aria-expanded="false" aria-controls="flush-collapseThree5">
                                SNACKS
                            </button>
                        </h2>
                        <div id="flush-collapseThree5" class="accordion-collapse collapse" aria-labelledby="flush-headingThree5" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                            <Chinesericeitems/>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree6">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree6" aria-expanded="false" aria-controls="flush-collapseThree6">
                                SOUPS
                            </button>
                        </h2>
                        <div id="flush-collapseThree6" class="accordion-collapse collapse" aria-labelledby="flush-headingThree6" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                            <Chinesericeitems/>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree7">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree7" aria-expanded="false" aria-controls="flush-collapseThree7">
                                SOUTH INDIAN DISHES
                            </button>
                        </h2>
                        <div id="flush-collapseThree7" class="accordion-collapse collapse" aria-labelledby="flush-headingThree7" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                            <Chinesericeitems/>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree8">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree8" aria-expanded="false" aria-controls="flush-collapseThree8">
                                SPECIAL VARIETIES OF ICE CREAMS
                            </button>
                        </h2>
                        <div id="flush-collapseThree8" class="accordion-collapse collapse" aria-labelledby="flush-headingThree8" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                            <Chinesericeitems/>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree10">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree10" aria-expanded="false" aria-controls="flush-collapseThree10">
                                THANDOORI SPECIAL
                            </button>
                        </h2>
                        <div id="flush-collapseThree10" class="accordion-collapse collapse" aria-labelledby="flush-headingThree10" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                            <Chinesericeitems/>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree11">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree11" aria-expanded="false" aria-controls="flush-collapseThree11">
                                THANDOORI SPECIAL DRY
                            </button>
                        </h2>
                        <div id="flush-collapseThree11" class="accordion-collapse collapse" aria-labelledby="flush-headingThree11" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                            <Chinesericeitems/>
                            </div>
                        </div> 
                    </div>
                </div> 
                
                <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
                
                </div>


        </>
    )
}

export default According
