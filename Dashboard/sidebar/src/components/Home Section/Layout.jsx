// components/Layout.js


import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <div className='layout-container'>
  
    <Sidebar/>
    
      {/* Main content */}
      <div style={{overflowY: 'scroll',height:"100%",width:"100vw"}}>
        {children}
      </div>
    </div>
  );
}
