import React from 'react'

const Navbar = () => {
  return (
  <>
  <div className="navbar bg-blue-900 ">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-white">Logo</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
   
      <li>
        <details>
          <summary className='text-white'>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
      <li className='text-white'><a>Apply</a></li>
    </ul>
  </div>
</div>
</>
  )
}

export default Navbar