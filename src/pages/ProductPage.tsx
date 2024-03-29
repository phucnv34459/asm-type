
import { TProduct } from "~/interfaces/Product";
import style from './ProductPage.module.scss';
import { Link } from "react-router-dom";
import React from "react";
type  Props = {
  products : TProduct[];
};
 const ProductPage :React.FC<Props> = ({products}) => {
  return (
    <div>
      <h1 className={style.h1}>Danh sách sản phẩm</h1>
    <div className={style.list}>
      {products.map((item)=>(
         <div  className={style.product} key={item.id}  >
            <Link style={{textDecoration:"none"}} to={`/products/${item.id}`}>
            <div className={style.title}>{item.title}</div>
            </Link>
            <Link to={`/products/${item.id}`}>
            <div className={style.img}>
               <img src={item.thumbnail} width={200} height={200} />
             </div>
            </Link>      
             <span className="product-price"><h5 style={{color:"red"}}>{item.price}.$</h5></span>
             <p className="product-desc">{item.description}</p>
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
