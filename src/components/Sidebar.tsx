import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar: React.FC = () => {
  return (
    <div style={{ height: '150vh' }} className='sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary'>
      <Link style={{textDecoration:"none", color:"black"}} to='/admin'>
       <h1 >Admin</h1>
      </Link>
      <div className='offcanvas-md offcanvas-end bg-body-tertiary' id='sidebarMenu' aria-labelledby='sidebarMenuLabel'>
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title' id='sidebarMenuLabel'>
            Company name
          </h5>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
            data-bs-target='#sidebarMenu'
            aria-label='Close'
          />
        </div>
        <div className='offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto'>
          <ul className='nav flex-column'>
            <hr />
            <li className='nav-item'>
              <NavLink className='nav-link d-flex align-items-center gap-2 active' aria-current='page' to='/admin/products'>
                Sản phẩm
              </NavLink>
            </li>
            <hr />
            <li className='nav-item'>
              <NavLink className='nav-link d-flex align-items-center gap-2 active' aria-current='page' to='*'>
                Tài khoản
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar