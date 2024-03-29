
import { TProduct } from "~/interfaces/Product";
import style from './ProductPage.module.scss';
import { Link } from "react-router-dom";
import React from "react";
type  Props = {
  products : TProduct[]
}
 const ProductPage :React.FC<Props> = ({products}) => {
  return (
    <div>
      <h1 className={style.h1}>Danh sách sản phẩm</h1>
    <div className={style.list}>
      {products.map((products)=>(
         <div  className={style.product} key={products.id}  >
           <div className="product-info">
            <Link style={{textDecoration:"none"}} to={`/products/${products.id}`}>
            <div className={style.title}>{products.title}</div>
            </Link>
            <Link to={`/products/${products.id}`}>
            <div className={style.img}>
               <img src={products.thumbnail} width={200} height={200} alt="Product 1" />
             </div>
            </Link>      
             <div className="product-price"><h5 style={{color:"red"}}>{products.price}.$</h5></div>
             <p className="product-desc">{products.description.length > 30 ? `${products.description.slice(0, 30)}...` : products.description}</p>
           </div>
           <div className={style.card}>
             <button  style={{backgroundColor: '#fff'}} className="border mb-3 ">Add to Cart</button>
           </div>
         </div>
     
      ))}
     
    </div>
    </div>
  )
}

export default ProductPage
