import { Products } from "@/interfaces/productInterface";
import { mockproducts } from "@/utils/mockProduct";



function Cards({ product }: { product: Products }) {
  return (
    <div className="w-full max-w-sm bg-white border border-pink-200 rounded-lg shadow-sm dark:bg-gray-900 dark:border-gray-400">
      <a href="#">
        <img src={product.image} alt="product image" className="w-[400px] h-[200px]  object-cover rounded-xl" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        </a>
        <div>
          <p>{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price}</span>
          <a href="#" className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Agregar al carrito</a>
        </div>
        <div>
          <p>{product.stock} Unidades</p>
        </div>
      </div>
    </div>



  )
}

export default function Home() {
  return (
    <>
      <div>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-4xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-violet-400">Mas vendidos</span> </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Los productos mas vendidos </p>
      </div>
      <div className="grid grid-cols-4 p-8 pb-20 gap-8 ">

        {mockproducts.map(prod => (
          <Cards product={prod} key={prod.id} />
        ))}
      </div>
    </>
  );
}
