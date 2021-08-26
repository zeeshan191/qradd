import React from 'react'
import MainDriver from './MainDriver'

function Icecream() {
    return (
        <>
        <div className="row">
        <div className="col-md-6">
            <div className="list-items">
            <MainDriver title="Vanilla" desc="Satisfy your taste buds with the best." price="40" image="vanilla.jpg"/>
<MainDriver title="Kesar Pista" desc="Our ice cream is an adventure to eat." price="45" image="kesar-pista.jpg"/>
<MainDriver title="Dry Fruits" desc="A complete place for dry fruits " price="50" image="dry-fruit.jpg"/>
<MainDriver title="Hot Chocolate saver with Nuts" desc="full on baigan" price="55" image="hot-chocklate-with-nuts.png"/>
<MainDriver title="Fruit Salad with Ice" desc="The Freshest Ice Cream on Earth." price="70" image="fruitsalad.jpg"/>
<MainDriver title="Strawberry" desc="Life tastes so good! Lap it up!" price="40" image="Strawberry-Ice-Cream.jpg"/>
<MainDriver title="Mango" desc="full on baigan" price="45" image="MangoIcecream1.jpg"/>
                                              </div>
        </div>
        <div className="col-md-6">
            <div className="list-items">
            

            <MainDriver title="Tootie Frootie" desc="full on baigan" price="45" image="tootiefrootie.jpg"/>
            <MainDriver title="Cone" desc="Change the World, One Scoop at a time." price="35" image="cone-ice-cream.jpg"/>
            <MainDriver title="Fruit Salad" desc="Eat fruits plenty, keep body wealthy" price="60" image="fruit-salad.jpg"/>
            <MainDriver title="Pista" desc="full on baigan" price="45" image="pista.png"/>
            <MainDriver title="Chocolate" desc="Its never too late for ice cream." price="45" image="chocolate.jpg"/>
            <MainDriver title="Butter Scotch" desc="Real ice cream for real ice cream lovers." price="45" image="butter-scotch.jpg"/>
            <MainDriver title="Casata Slice" desc="Ice cream has never tasted better." price="40" image="cassata.jpg"/>
                        </div>
        </div>
    </div> 
        </>
    )
}

export default Icecream
