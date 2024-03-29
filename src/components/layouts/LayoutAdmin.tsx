import React from 'react'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const LayoutAdmin: React.FC = () => {
  return (
    <div>
       <div className="container-fluid">
    <div className="row">
      <Sidebar/>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <Outlet/>
      {/* <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="admin" element={<DashboardPage/>}/>
        <Route path="admin/products" element={<ProductPage products={products} onRemove={onHandleRemove}/>}/>
        <Route path="admin/products/add" element={<ProductAddPage onAdd={onHandleAdd}/>}/>
        <Route path="admin/products/:id/edit" element={<ProductEditPage onUpdate={onHandleUpdate}/>}/>
       </Routes> */}
      </main>
    </div>
  </div>

    </div>
  )
}

export default LayoutAdmin