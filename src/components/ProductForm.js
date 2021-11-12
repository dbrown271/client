import React, {useState} from 'react';
import axios from 'axios';


const ProductForm = (props) => {
    const[formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description: ""
    })

    const [formErrors, setFormErrors] = useState({
        title: "",
        price: "",
        description: "",
    }) //COMEBACK FIX THIS



    const changeHandler = (e)=> {
        console.log("Chnaging Form")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }



    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/products", formInfo)
            .then(response=>{
                console.log(response)
                
                if(response.data.err){ 
                    setFormErrors(response.data.err.errors)
                }else{
                    props.setFormSubmitted(!props.formSubmitted)

                    setFormInfo({
                        title:"",
                        price:"",
                        description:"",
                    })
                    setFormErrors({
                        title:"",
                        price:"",
                        description:""
                    })
                }
            })
            .catch(err=>console.log("error submitting the post request-->", err))
    }


    return (
        <div>
            <form onSubmit= {submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input onChange= {changeHandler} type="text" name= "title" className= "form-control" value= {formInfo.title} /> 
                    <p className= "text-danger">{formErrors.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input onChange= {changeHandler} type="number" name= "price" className= "form-control" value= {formInfo.price}  /> 
                    <p className= "text-danger">{formErrors.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description: </label>
                    <input onChange= {changeHandler} type="text" name= "description" className= "form-control" value= {formInfo.description}/>
                    <p className= "text-danger">{formErrors.description?.message}</p>
                </div>
                <input type="submit" value="Create" className= "btn btn-success mt-3" />
            </form>
        </div>
    );
};


export default ProductForm;