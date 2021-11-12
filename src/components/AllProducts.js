import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom"



const AllProducts = (props) => {
    const [allProducts, setAllProducts] = useState([])

    const [deleteProduct, setDeleteProduct] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(response => {
                console.log("Response When Getting All Products --->", response)
                setAllProducts(response.data.results)
            })
            .catch(err => console.log("errrrrrrr->", err))
    },[props.formSubmitted, deleteProduct])


    const removeProduct = (idOfProduct) => {
        console.log("Deleting This Product--->", idOfProduct)
        axios.delete(`http://localhost:8000/api/products/delete/${idOfProduct}`)
            .then(response => {
                console.log("response after deleting-->", response)
                setDeleteProduct(!deleteProduct)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>All Products</h1>
            {
                allProducts.map((products, i) => {
                    return (
                        <div key={i}>
                            <h1> <Link to={`/products/${products._id}`}>{products.title}</Link> </h1>
                            <p><button onClick= {(e) => removeProduct(products._id)} className="btn btn-danger mt-2">Delete {products.title}</button></p> 
                        </div>
                    )
                })
            }
        </div>
    );
};



export default AllProducts;