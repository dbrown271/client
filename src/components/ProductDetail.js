import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';




const ProductDetail = () => {

    const {id} = useParams();

    const [productDetail, setProductDetail] = useState({})

    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response=>{
            console.log("RESPONSE WHEN TRYING TO GET DETAILS ABOUT ONE PRODUCT-->", response)
            setProductDetail(response.data.results)
        })
        .catch(err=>console.log(err))
    },[id])

    const removeProduct = () => {
        console.log("deleting product at this id -->", id)
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(response => {
                console.log("response after deleting -->", response)
                history.push("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>{productDetail.title}</h1>
            <h3>${productDetail.price}</h3>
            <p>{productDetail.description}</p>
            <button onClick= {removeProduct} className="btn btn-danger">Delete {productDetail.title} </button>
        </div>
    );
};



export default ProductDetail;