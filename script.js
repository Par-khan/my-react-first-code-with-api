import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

function card(key,title,image,brand,price){
   return(
     <div className='card' key={key}>
    <img src={image} alt="image" />
    <div className='card-content'>
    <h3>{title}</h3>
    <p>{brand}</p>
    <p><b>${price}</b></p>
    </div>
</div>
);
}




const container=[card(1),card(2),card(3),card(4),card(5)]
    

const root=ReactDOM.createRoot(document.getElementById('root'))


console.log('Hello World');


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
    console.log(data);
     root.render(<div className='container'>{data.products.map((products)=>{
        return card(products.id,products.title,products.thumbnail,products.brand,products.price)})}</div>)
});