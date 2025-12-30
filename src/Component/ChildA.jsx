import { useContext } from 'react'
import { TheamContext } from '../Context/UseContext'
import ChildB from './ChildB'

const products = [
  { title: "Old Books", desc: "Engineering and competitive exam books", img: "books" },
  { title: "Laptop", desc: "Used laptop in good condition", img: "laptop" },
  { title: "Mobile Phone", desc: "Second-hand smartphone", img: "smartphone" },
  { title: "Bicycle", desc: "College use cycle", img: "bicycle" },
  { title: "Headphones", desc: "Noise cancelling headphones", img: "headphones" },
  { title: "Calculator", desc: "Scientific calculator", img: "calculator" },
  { title: "Bag", desc: "College backpack", img: "backpack" },
  { title: "Chair", desc: "Comfortable study chair", img: "chair" },
  { title: "Table Lamp", desc: "LED study lamp", img: "lamp" },
  { title: "Keyboard", desc: "Mechanical keyboard", img: "keyboard" }
]

const ChildA = () => {
  const { theam } = useContext(TheamContext)

  return (
    <div className="p-6">
      <ChildB/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden shadow-md transition hover:scale-105
              ${theam === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}
            `}
          >
            {/* ✅ WORKING IMAGE API */}
            <img
              // src={`https://picsum.photos/300/200?random=11 {random=12}`}
              src={`https://picsum.photos/300/200?random=${index + 1}`}
              alt={item.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChildA
