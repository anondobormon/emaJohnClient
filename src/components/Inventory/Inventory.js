import React from 'react';


const Inventory = () => {
    const handleAddProduct =() => {
        const product = {};
        fetch('https://mysterious-retreat-46107.herokuapp.com/addProduct', {
            method : "POST",
            headers: {'Content-Type' : 'application/json'},
            body:JSON.stringify(product)
        })
    }
    return (
        <div>
            <h1>Inventory coming soon...</h1>
            <form action="">
                <p><span>Name</span><input type="text"/></p>
                <p><span>Price</span><input type="text"/></p>
                <p><span>Quantity</span><input type="text"/></p>
                <p><span>Product Image</span><input type="file"/></p>
                <button onClick={handleAddProduct}>Add Product</button>
            </form>
            
        </div>
    );
};

export default Inventory;