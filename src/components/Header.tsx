import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <div>
      <div className='container' style={{marginTop:"10px"}} >
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center  mb-md-0'>
            <li>
              <a href='#' className='nav-link px-2 text-black'>
                Trang chủ
              </a>
            </li>
            <li>
              <Link to="/products" className='nav-link px-2 text-black'>
                Sản Phẩm
              </Link>
            </li>
            <li>
              <a href='#' className='nav-link px-2 text-black'>
                Bài Viết
              </a>
            </li>
            <li>
              <a href='#' className='nav-link px-2 text-black'>
                Liên hệ 
              </a>
            </li>
         
          </ul>
          <div className='text-end'>
            <button type='button' className='btn btn-primary me-2'>
              Login
            </button>
            <button type='button' className='btn btn-warning'>
              Sign-up
            </button>
          </div>
        </div>
      </div>
      <hr />
      {/* <div className='banner'>
       <img src="public/images/banner1.png" width={1520} height={450} alt="" />
      </div> */}
    </div>
  )
}

export default Header
