import { useState } from "react";
import { ProductCard } from "./ProductCard";

const ProductLists = ()=> {
    const [products,setProducts] = useState([
        {
    id: 1,
    name: "iPhone 17",
    description: "Latest Apple smartphone with advanced camera system.",
    category: "mobile",
    price: 3000,
    image: "https://media.itechstore.com.np/w_3072&f_png/img/product/variants/b3f72364-c5d0-45cf-a6c9-eb3f4105cb77/iphone_17_sage_1.png"
  },
  {
    id: 2,
    name: "Samsung Galaxy S25",
    description: "Flagship Android phone with powerful performance.",
    category: "mobile",
    price: 2800,
    image: "https://media.itechstore.com.np/w_3072&f_png/img/product/variants/b3f72364-c5d0-45cf-a6c9-eb3f4105cb77/iphone_17_sage_1.png"
  },
  {
    id: 3,
    name: "MacBook Pro M4",
    description: "High-performance laptop for developers and creators.",
    category: "laptop",
    price: 4500,
    image: "https://media.itechstore.com.np/w_3072&f_png/img/product/variants/b3f72364-c5d0-45cf-a6c9-eb3f4105cb77/iphone_17_sage_1.png"
  },
  {
    id: 4,
    name: "Dell XPS 15",
    description: "Premium Windows laptop with stunning display.",
    category: "laptop",
    price: 3500,
    image: "https://media.itechstore.com.np/w_3072&f_png/img/product/variants/b3f72364-c5d0-45cf-a6c9-eb3f4105cb77/iphone_17_sage_1.png"
  },
  {
    id: 5,
    name: "iPad Pro",
    description: "Powerful tablet perfect for work and entertainment.",
    category: "tablet",
    price: 2000,
    image: "https://media.itechstore.com.np/w_3072&f_png/img/product/variants/b3f72364-c5d0-45cf-a6c9-eb3f4105cb77/iphone_17_sage_1.png"
  },
  {
    id: 6,
    name: "Sony WH-1000XM6",
    description: "Noise-cancelling wireless headphones.",
    category: "accessory",
    price: 500,
    image: "https://media.itechstore.com.np/w_3072&f_png/img/product/variants/b3f72364-c5d0-45cf-a6c9-eb3f4105cb77/iphone_17_sage_1.png"
  },
  {
    id: 7,
    name: "Apple Watch Series 10",
    description: "Smartwatch with fitness tracking and health features.",
    category: "wearable",
    price: 1200,
    image: "https://media.itechstore.com.np/w_3072&f_png/img/product/variants/b3f72364-c5d0-45cf-a6c9-eb3f4105cb77/iphone_17_sage_1.png"
  },
  {
    id: 8,
    name: "Canon EOS R8",
    description: "Mirrorless camera for professional photography.",
    category: "camera",
    price: 3200,
    image: "https://media.itechstore.com.np/w_3072&f_png/img/product/variants/b3f72364-c5d0-45cf-a6c9-eb3f4105cb77/iphone_17_sage_1.png"
  }
    ])

    const [category,setCategory] = useState("All");
    const filterProducts = category === "All" ? products : products.filter((item,index)=>(
        item.category === category
    ))

    return(
        <>
        <div className="flex gap-8 items-center mb-4">
                <button className="p-4 bg-gray-300" onClick={() => setCategory("All")}>All</button>
                <button className="p-4 bg-gray-300" onClick={() => setCategory("mobile")}>mobile</button>
                <button className="p-4 bg-gray-300" onClick={() => setCategory("laptop")}>laptop</button>
                <button className="p-4 bg-gray-300" onClick={() => setCategory("tablet")}>tablet</button>
                <button className="p-4 bg-gray-300" onClick={() => setCategory("accessory")}>accessory</button>
                <button className="p-4 bg-gray-300" onClick={() => setCategory("wearable")}>wearable</button>
                <button className="p-4 bg-gray-300" onClick={() => setCategory("camera")}>camera</button>
            </div>

        <div className="card-list grid grid-cols-3 gap-4">
        {filterProducts.map((item,index)=>(
                <ProductCard key={item.id} item={item}/>
            )
        )}
        </div>
        </>
    )
}
export default ProductLists;

