import React from 'react'
import Link from 'next/link'
import {FaRobot , FaPortrait ,FaProjectDiagram,FaClipboardList } from "react-icons/fa";


const Sidebar = () => {
    return (
    <div className="side-bar">
    <div>
    <div >

    <Link href={"/"}  className="logo"> <h2> Developer Maps </h2> </Link>
    <h2 className="catagories">Catagories</h2>
    <ul className="menu-list">

    <li> <Link legacyBehavior href="/"><a> <FaRobot className='icon'/> Home </a></Link></li>
    
    <li> <Link legacyBehavior href="/portfolio"><a><FaPortrait className='icon' /> Portfolio </a></Link> </li>
    
    <li> <Link legacyBehavior href="/roadmap"><a> <FaProjectDiagram className='icon'/> Road Map </a></Link>  </li>
    
    <li> <Link legacyBehavior href="/bookmark"><a> <FaClipboardList className='icon' /> Bookmark </a></Link> </li>

    <h2 className="catagories" id='sub-menu'>Sub Menus</h2>

        
    <li> <Link legacyBehavior href="/cms"><a className='sub-menu'>   CMS Tools </a></Link> </li>
    
    <li> <Link legacyBehavior href="/compilers"><a className='sub-menu'> Online Compilers </a></Link> </li>
    
    <li> <Link legacyBehavior href="/chromeextensions"><a className='sub-menu'>  Chrome Extension </a></Link> </li>
    
    <li> <Link legacyBehavior href="freehosting"><a className='sub-menu'>   Free Hosting </a></Link> </li>
    
    <li> <Link legacyBehavior href="/websitedesigns"><a className='sub-menu'>  UI & UX Tools </a></Link> </li>

    </ul>

    </div>

    </div>
</div> 
)
}

export default Sidebar