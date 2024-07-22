import { useState } from "react";
import "./Productlist.css";
import { Car } from "../../Car";
import carData from "../../assets/data.json";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = () => {

    const [cars, setCars] = useState<Car[] | null>(carData)
    
    console.log(cars);

    return (
        <section>
       <div className="list">
            {cars?.map((item, index)=> (
               <ProductItem pasta={item} key={index} /> 
            ))}
        </div>
        </section>
      );
}
 
export default ProductList; 