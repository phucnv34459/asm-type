
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Product from './pages/Product'
import LayoutWebsite from './components/layouts/LayoutWebsite'
import LayoutAdmin from './components/layouts/LayoutAdmin'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'
import ProductAdd from './pages/products-add'
import { TProduct } from './interfaces/Product'
import { createProduct, removeProduct, updateProduct } from './apis/product'
import instance from './apis'
import Notfound from './pages/Notfound'
import ProductEdit from './pages/product-edit'
import { ToastContainer, toast } from 'react-toastify'
import Register from './pages/Register'
import Login from './pages/Login'
function App(){
  const navigate = useNavigate();
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
      toast.success("Thêm sản phẩm thành công")
			setProducts([...products, data]);
		})();
	};
  const onhandleEdit = async (product:TProduct) =>{
   try {
    const data = await updateProduct(product);
    setProducts(products.map((i) => (i.id === data.id ? data : i)));
    navigate('admin/products');
    toast.success("Cật nhập sản phẩm thành công");

    
   } catch (error) {
    
   }
  };
  const onRemove = async (id:number | undefined) => {
    try {
      const confirm = window.confirm("Are you delete?");
      if(confirm){
        await removeProduct(`${id}`);
        toast.success("Xóa sản phẩm thành công");
        setProducts(products.filter((item)=> item.id !== id));
      }
    } catch (error) {
      
    }
  }

  return (
    <>
      <Routes>
       <Route path='/' element={<LayoutWebsite/>}>
        <Route index element={<ProductPage products={products} />}/>
        <Route path='/products/:productId' element={<ProductDetail/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Notfound/>}/>

       </Route>

        <Route path='admin' element={<LayoutAdmin />}>
          <Route index element={<h1>DashboardPage</h1>} />
          <Route path='products' element={<Product onDel={onRemove}  products={products}/>}/>
          <Route path='products/add' element={<ProductAdd onAdd={onhandleAdd}/>}/>
          <Route path='products/:id/edit' element={<ProductEdit onEdit={onhandleEdit}/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Route>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
