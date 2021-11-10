import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom"



const AllProducts = (props) => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(response => {
                console.log("Response When Getting All Products --->", response)
                setAllProducts(response.data.results)
            })
            .catch(err => console.log("errrrrrrr->", err))
    },[props.formSubmitted])


    return (
        <div>
            <h1>All Products</h1>
            {
                allProducts.map((products, i) => {
                    return (
                        <div key={i}>
                            <h1> <Link to={`/products/${products._id}`}>{products.title}</Link> </h1>
                        </div>
                    )
                })
            }
        </div>
    );
};



export default AllProducts;