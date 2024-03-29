import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import LayoutWebsite from './components/layouts/LayoutWebsite'
import LayoutAdmin from './components/layouts/LayoutAdmin'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'
import ProductAdd from './pages/products-add'
import { TProduct } from './interfaces/Product'
import { createProduct } from './apis/product'
import instance from './apis'
import Notfound from './pages/Notfound'
import { Menu } from './interfaces/Menu'
const App: React.FC = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  useEffect(()=>{
    const fetchMenus = async () =>{
      const {data} = await instance.get(`/menus`);
      setMenus(data);
    };
    fetchMenus();
    
  },[]);

  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await instance.get(`/products`);
			setProducts(data);
		};
		fetchProducts();
	}, []);

	const onhandleAdd = (product: TProduct) => {
		(async () => {
			const data = await createProduct(product);
			setProducts([...products, data]);
		})();
	};
 

  return (
    <>
      <Routes>
       <Route path='/' element={<LayoutWebsite/>}>
        <Route index element={<ProductPage products={products} />}/>
        <Route path='/products/:productId' element={<ProductDetail/>}/>
        <Route path='*' element={<Notfound/>}/>

       </Route>

        <Route path='admin' element={<LayoutAdmin />}>
          <Route index element={<h1>DashboardPage</h1>} />
          <Route path='products' element={<Product  products={products}/>}/>
          <Route path='products/add' element={<ProductAdd onAdd={onhandleAdd}/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
