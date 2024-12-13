import React from 'react'
import { Link } from 'react-router-dom'
const AdminNav = () => {
  return (
    <>
    <div className="navbar bg-blue-900">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li className='text-white'><Link to='/adminPortal'> ADMIN HOME</Link></li>
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li> */}
    </ul>
  </div>
</div>
    </>
  )
}

export default AdminNav