import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '~/apis';
import css from './ProductDetail.module.scss';
import { TProduct } from '~/interfaces/Product';

type Props = {}

const ProductDetail = (props: Props) => {
  const parmas = useParams();
  const [product, setProduct] = useState<TProduct | null>(null);

  useEffect(()=>{
   const getProduct = async () =>{
    const {data} = await instance.get(`/products/${parmas.productId}`)
    setProduct(data);
   }
   getProduct();
  },[]);
  return (
    <div className={css.tong}>
      <h3 className={css.h3}>Chi tiết sản phẩm </h3>
      <div className={css.container}>   
  <div className={css.productimage}>
    <img src={product?.thumbnail}  alt="Product Image" />
  </div>
  <div className={css.productinfo}>
    <h1 className={css.producttitle}>{product?.title}</h1>
    <p className={css.productdescription}>{product?.description}</p>
    <p className={css.productprice}>{product?.price}$</p>
    <button className={css.addtocartbtn}>Add to Cart</button>
  </div>
</div>
  <hr />
 
  


  

    </div>
  )
}

export default ProductDetail