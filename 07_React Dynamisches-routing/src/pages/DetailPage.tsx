import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Car } from "../Car";
import carData from "../assets/data.json";


const DetailPage = () => {

const [allCars, setAllCars] = useState<Car [] | null>(carData)
const [filteredCar, setFilteredVCar] = useState <Car | null>(null)


const {muffin} = useParams<{ muffin?: string}>()
console.log(muffin);
console.log(allCars);

useEffect(() => {
    if (allCars && muffin) {
        const found = allCars.find((item) => item.id === Number (muffin))
        setFilteredVCar(found !== undefined ? found : null)
    }
}, [muffin, allCars])

    return ( 
        <section>
            <h2>{filteredCar?.CarMake}</h2>
            <p>{filteredCar?.carModel}</p>
            <p>{filteredCar?.CarYear}</p>
        </section>        

     );
}
 
export default DetailPage;