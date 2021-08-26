import React from 'react'
import MainDriver from './MainDriver'
function Chinesericeitems() {
    return (
        <>
        <div className="row">
        <div className="col-md-6">
            <div className="list-items">
                        <MainDriver title="Veg Fried Rice" desc="A delicious plate of Vegetable Fried Rice, made in the Indo-Chinese style." price="110" image="fried-rice.jpg"/>
                        <MainDriver title="Veg Schezwan Fried Rice" desc="Schezwan Fried Rice is an Indo-Chinese dish where cooked rice is stir-fried along with a few sauces, seasoning, protein, and veggies." price="120" image="schezwan fries rice.jpg"/>
                        <MainDriver title="Veg Ginger Fried Rice" desc="Crunchy Ginger Garlic fried rice Rice is a very flavorful and colorful recipe prepared using various colored capsicum or bell pepper. " price="120" image="Vegetarian-Ginger-Garlic-Fried-Rice-2-scaled.jpg"/>
            <MainDriver title="Veg Fried Rice with Noodles" desc="Hope you will give this a try and let me know how it turns out for you.." price="120" image="veg-fried-rice.jpg"/>
            <MainDriver title="Ghee fried rice" desc="Ghee rice is a popular south indian rice dish where rice is cooked with with  ghee and whole spice" price="120" image="ghee-rice.jpg"/>
            <MainDriver title="Paneer Fried Rice" desc="A delicious recipe to make paneer fried rice, an Indian Chinese fusion dish that makes for a great tasty food" price="120" image="paneer-fried-rice.jpg"/>
                                              </div>
        </div>
        <div className="col-md-6">
            <div className="list-items">
            <MainDriver title="Singapore Fried Rice" desc="Spicy hot Singapore fried rice made with mix veggies and hot sauces." price="120" image="singapore-fried-rice.jpg"/>
            <MainDriver title="Jeera Fried Rice" desc="Jeera Rice is one of the most famous and a staple dish from India" price="120" image="Jeera-Fried-Rice.jpg"/>
            <MainDriver title="Nisarga Special Fried Rice" desc="Take your stomach on a joy ride with yummy nisarga special rice" price="150" image="nisarga-special.jpg"/>
            <MainDriver title="Mushroom Fried Rice" desc="Make this delicious Indo Chinese Mushroom Fried Rice using the leftover rice" price="120" image="Mushrrom-Fried-Rice-2-3.jpg"/>
            <MainDriver title="Veg Triple Fried Rice" desc="Triple Schewzan rice is a combination of rice, noodles and fried noodles. Normally it is served along with Veg." price="120" image="triple rice fried.jpg"/>

                        </div>
        </div>
    </div> 
        </>
    )
}

export default Chinesericeitems
