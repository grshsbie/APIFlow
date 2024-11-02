"use client"
import { useEffect, useState } from "react"

interface Coffee {
  title: string
  description: string
  ingredients: string[]
  image: string
  id: number
}

export default function ShopsPage() {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await fetch('https://api.sampleapis.com/coffee/hot')
        const data = await response.json()
        setCoffees(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching coffee data:', error)
        setLoading(false)
      }
    }

    fetchCoffees()
  }, [])

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (

    <div>
      <div className=" mx-auto px-4 py-8 mt-80">
      <div className="flex justify-center items-center h-screen">
      <div className="text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffees.map((coffee) => (
          <div key={coffee.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={coffee.image}
              alt={coffee.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{coffee.title}</h3>
              <p className="text-gray-600 mb-4">{coffee.description}</p>
              <div>
                <h4 className="font-semibold mb-2">Ingredients:</h4>
                <ul className="list-disc list-inside">
                  {coffee.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-600">{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
      </div>
    </div>

  )
}