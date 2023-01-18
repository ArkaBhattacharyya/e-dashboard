import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList=()=>{
    const [products,setProducts] = useState([]);
    useEffect(()=>{
       getProducts();
    },[]);
    const getProducts = async ()=>{
     let result = await fetch('http://127.0.0.1:3500/products');
     result = await result.json();
     setProducts(result);
    }
    const DeleteProduct= async (id)=>{
    //    console.warn(id);
      let result = await fetch(`http://127.0.0.1:3500/product/${id}`,{
           method:'delete'
      });
      result = await result.json();
      if(result){
        alert("record is deleted");
        getProducts();
      }
    }
    return(
        <div className="product-list">
          <h1>Product List</h1>
          <ul>
            <li>sl no</li>
            <li>Name</li>
            <li>Price</li>
            <li>Category</li>
            <li>Company</li>
            <li>Operation</li>
          </ul>
          {
            products.map((item,index)=>
                <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li><button onClick={()=>DeleteProduct(item._id)}>Delete</button>
            <Link to={"/update/"+item._id}>Update</Link>
            </li>

          </ul> 
            )
          }
        </div>
    )
}
export default ProductList;