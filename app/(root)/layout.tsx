import React from "react";

const Layout = ({ children }: { children: React.ReactNode })=>{
  return(
    <div>
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold">Main Page</h2>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Home</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Analytics</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Reports</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Profile</li>
          </ul>
        </nav>
      </div>
      {children}
    </div>
  )
}

export default Layout