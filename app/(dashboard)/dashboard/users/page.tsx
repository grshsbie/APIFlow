import Link from "next/link"

const page = ()=> {
  return (
    <>
      <ul className="list-none p-4 space-y-2">
        <li className="hover:bg-gray-100 rounded-md transition-colors">
          <Link href="/dashboard/users/1" className="block px-4 py-2 text-gray-700">User 1</Link>
        </li>
        <li className="hover:bg-gray-100 rounded-md transition-colors">
          <Link href="/dashboard/users/2" className="block px-4 py-2 text-gray-700">User 2</Link>
        </li>
        <li className="hover:bg-gray-100 rounded-md transition-colors">
          <Link href="/dashboard/users/3" className="block px-4 py-2 text-gray-700">User 3</Link>
        </li>
        <li className="hover:bg-gray-100 rounded-md transition-colors">
          <Link href="/dashboard/users/4" className="block px-4 py-2 text-gray-700">User 4</Link>
        </li>
        <li className="hover:bg-gray-100 rounded-md transition-colors">
          <Link href="/dashboard/users/5" className="block px-4 py-2 text-gray-700">User 5</Link>
        </li>
        <li className="hover:bg-gray-100 rounded-md transition-colors">
          <Link href="/dashboard/users/6" className="block px-4 py-2 text-gray-700">User 6</Link>
        </li>
      </ul>
    </>
  )
}

export default page;