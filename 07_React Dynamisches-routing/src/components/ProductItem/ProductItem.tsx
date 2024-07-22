import React from "react";
import "./ProductItem.css"
import { Car} from "../../Car";
import { Link } from "react-router-dom";


interface CarItemProps {
    pasta: Car
}

const ProductItem: React.FC<CarItemProps> = (props) => {

    return (
        <div className="product">
            <h3>{props.pasta.CarMake}</h3>
            <Link to={`/${props.pasta.id}`}>Read more</Link>
        </div>
    );
}
export default ProductItem;


