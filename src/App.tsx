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
const App: React.FC = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:3000/products`)
      setProducts(data);
    })()
  }, []);

  const onhandleRemove = async (id: any) => {
    try {
      const confirm = window.confirm('Are you delete product?')
      if (confirm) {
        const { data } = await axios.delete(`http://localhost:3000/products/${id}`)
        console.log(data)
        window.location.reload()
        alert('Done')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const onhandleAdd = async () =>{
    try {
      const {data} = await axios.post(`http://localhost:3000/products`,products);
      console.log(data);
      window.location.reload();
      alert('Done');
    } catch (error) {
      
    }
  }

  return (
    <>
      <Routes>
       <Route path='/' element={<LayoutWebsite/>}>
        <Route index element={<ProductPage products={products} />}/>
        <Route path='/products/:productId' element={<ProductDetail/>}/>

       </Route>

        <Route path='admin' element={<LayoutAdmin/>}>
          <Route index element={<h1>Admin</h1>} />
          <Route path='products' element={<Product  products={products} onRemove={onhandleRemove}/>}/>
          <Route path='products/add' element={<ProductAdd onAdd={onhandleAdd}/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
