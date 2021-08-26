import React from 'react'

function Products(props) {
    const { product, onAdd } = props;
    return (
        <>
        <div className="row">
        <div className="col-md-6">
            <div className="list-items">
            <div className="list-item">
           
                <div className="col-md-12" >
                    <h3 >{product.name}</h3>
                                  </div>
                <div className="col-md-3" style={{marginLeft: '304px'
                    ,marginTop: '-42px'}}>
                    <span>Rs {product.price}</span>
                </div>
                <div className="col-md-3">
                    <img src={product.image}  alt="logo" width="170" height="84" />
                </div>
            
         
            <input type='checkbox' onClick={() => onAdd(product)}/>
</div>
                                              </div>
        </div>
     
    </div> 
        </>
    )
}

export default Products;
