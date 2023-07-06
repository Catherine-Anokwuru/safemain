import { Outlet } from "react-router-dom"
import Navbar from "./nav/Navbar"
import Footer from "./footer/Footer"
import Sidebar from "./nav/Sidebar"
import Submenu from "./nav/Submenu"

const SharedLayout = () => {
  return (
    <>
<Navbar/>
<Sidebar/>
<Submenu/>
<main>
  <Outlet/>
</main>
<Footer/>
</>
  )
}
export default SharedLayout