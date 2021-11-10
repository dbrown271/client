import React, {useState, useEffect} from 'react';
import axios from 'axios'



const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(response => {
                console.log("Response When Getting All Products --->", response)
                setAllProducts(response.data.results)
            })
            .catch(err => console.log("errrrrrrr->", err))
    })


    return (
        <div>
            {
                allProducts.map((products, i) => {
                    return (
                        <div key={i}>
                            <h1>{`/ninjas/${products._id}`}</h1>
                            <h1>Number of Projects:{products.price}</h1>

                        </div>                        
                    )
                })
            }
        </div>
    );
};



export default AllProducts;