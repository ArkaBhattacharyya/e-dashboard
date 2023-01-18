import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = ()=>{
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const navigate = useNavigate();
    const params = useParams();
    useEffect(()=>{ 
        getProductDetails();
    },[])
   
    const getProductDetails= async()=>{
        console.warn(params);
        let result = await fetch(`http://127.0.0.1:3500/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateData= async ()=>{
        let result = await fetch(`http://127.0.0.1:3500/product/${params.id}`,{
             method: 'put',
             body: JSON.stringify({name,price,category,company}),
             headers: {
                'Content-Type':'application/json'
            }
        })
        result = await result.json();
        if(result){
            navigate('/');
        }
        console.warn(result);
    }
    return (
        <div className="register">
            <h1>Update Product</h1>
            <input type="text" className="inputBox" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            <input type="text" className="inputBox" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
            <input type="text" className="inputBox" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Category" />
            <input type="text" className="inputBox" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Company" />
            <button type="button" onClick={updateData} className="Appbutton">Update Product</button>
        </div>
    )
}
export default UpdateProduct;