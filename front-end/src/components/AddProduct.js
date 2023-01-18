import React from "react";
import { useNavigate } from "react-router-dom";

const AddProduct=()=>{
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const navigate = useNavigate();
    const addProdcut = async () => {
        console.warn(name, price, category, company);
        const userID = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:3500/add-product', {
            method: 'post',
            body: JSON.stringify({name,price,category,company,userID}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.log(userID);
        if(result){
            navigate('/');
        }
    }
    return (
        <div className="register">
            <h1>Add Product</h1>
            <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            <input className="inputBox" type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
            <input className="inputBox" type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category" />
            <input className="inputBox" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Company" />
            <button onClick={addProdcut} type="button" className="Appbutton">Add Product</button>
        </div>
    )
}
export default AddProduct;