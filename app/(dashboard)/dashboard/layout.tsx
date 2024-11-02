import React from "react";
const Layout = ({ children }: { children: React.ReactNode })=>{
  return(
    <div>
      <div className="fixed top-0 left-0 right-0 bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Dashboard</h2>
            <nav>
              <ul className="flex space-x-6">
                <li className="hover:text-gray-300 cursor-pointer">Home</li>
                <li className="hover:text-gray-300 cursor-pointer">Analytics</li>
                <li className="hover:text-gray-300 cursor-pointer">Reports</li>
                <li className="hover:text-gray-300 cursor-pointer">Settings</li>
                <li className="hover:text-gray-300 cursor-pointer">Profile</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
       {children}
    </div>
  )
}
export default Layout