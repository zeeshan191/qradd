import React from 'react'
import MainDriver from './MainDriver'

function Hotbeverages() {
    return (
        <>
        <div className="row">
        <div className="col-md-6">
            <div className="list-items">
            <MainDriver title="Coffee / Tea" desc="Say Good morning to Freshness" price="15" image="coffee tea.jpg"/>
            <MainDriver title="Lemon Tea" desc="This green tea recipe uses homemade lemon-ginger simple syrup for its complex, soothing flavor." price="15" image="leman tea.jpg"/>
            <MainDriver title="Badam Milk" desc="Badam milk is a popular Indian drink where almonds are blended with milk and flavored with saffron and cardamom." price="15" image="Veg-Noodles.jpg"/>
                                              </div>
        </div>
        <div className="col-md-6">
            <div className="list-items">
           




<MainDriver title="Ginger Tea" desc="Made with natural ingredients, this flavorful tea will warm you up and may even provide anti-inflammatory benefits." price="15" image="ginger.jpg"/>
<MainDriver title="Horlicks / Bournvita" desc="The drink that brings out the best in you." price="20" image="horlicks-bournvita.jpg"/>

                        </div>
        </div>
    </div> 
        </>
    )
}

export default Hotbeverages
