import React from 'react'
import { Link } from 'react-router-dom'
import { TProduct } from '~/interfaces/Product'

type Props = {
  products:TProduct[];
  onDel: (id:number | undefined) => void;
};
const Product = ({ products,onDel}:Props) => {
  const handleDelete = (id:number | undefined) =>{
    onDel(id);
  }
  return (
    <div>
      <h1>Quản lí sản phẩm</h1>
      <Link to={`./add`} className='btn btn-primary mb-3'>
        Thêm sản phẩm
      </Link>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>STT</th>
            <th>title</th>
            <th>Ảnh</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Mô tả</th>
            <th>Tác vụ</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.title}</td>
                <td>
                  <img src={item.thumbnail} width={50} />
                </td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td>{item.description}</td>
                <td>
                  <Link to={`/admin/products/${item.id}/edit`} className='btn btn-primary' >Cật nhập</Link>
                  <button className='btn btn-danger' onClick={() => handleDelete(Number(item.id))}>
                    Xóa
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Product
