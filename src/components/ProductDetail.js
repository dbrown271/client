import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProductDetail = () => {

    const {id} = useParams();

    const [productDetail, setProductDetail] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response=>{
            console.log("RESPONSE WHEN TRYING TO GET DETAILS ABOUT ONE PRODUCT-->", response)
            setProductDetail(response.data.results)
        })
        .catch(err=>console.log(err))
    },[id])

    return (
        <div>
            <h1>{productDetail.title}</h1>
            <h3>${productDetail.price}</h3>
            <p>{productDetail.description}</p>
        </div>
    );
};



export default ProductDetail;