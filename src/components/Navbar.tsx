import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">ข้อที่ 123</Link></li>
            <li><Link to="/exam4">ข้อที่ 4</Link></li>
            <li><Link to="/exam5">ข้อที่ 5</Link></li>
            <li><Link to="/exam7">ข้อที่ 7</Link></li>
            <li><Link to="/exam8">ข้อที่ 8</Link></li>
            <li><Link to="/exam11">ข้อที่ 11</Link></li>
            <li><Link to="/exam12">ข้อที่ 12</Link></li>

      </ul>
    </div>
    <a className="btn btn-ghost text-xl">แบบทดสอบ</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>แบบทดสอบ</summary>
          <ul className="p-2">
            <li><Link to="/">ข้อที่ 123</Link></li>
            <li><Link to="/exam4">ข้อที่ 4</Link></li>
            <li><Link to="/exam5">ข้อที่ 5</Link></li>
            <li><Link to="/exam7">ข้อที่ 7</Link></li>
            <li><Link to="/exam8">ข้อที่ 8</Link></li>
            <li><Link to="/exam11">ข้อที่ 11</Link></li>
            <li><Link to="/exam12">ข้อที่ 12</Link></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  )
}

export default Navbar