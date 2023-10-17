/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const PurchaseCard = ({ serviceDetails }) => {

    const { id, name, image, price } =
        serviceDetails || {};

    return (
        <div>
            {/* <div className=" h-fit rounded-lg" >
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className=" rounded-lg shadow-2xl mr-5" />
                <div>
                   
                    <p className="py-2 text-xl font-medium ">{name}</p>
                    <p className="py-2 text-2xl font-medium"  > ${price}</p>
        <Link to={`/serviceDetails/${id}`}>
        <button className="btn btn-primary border-none">View Details</button></Link>
                </div>
            </div>
        </div> */}
            <div className="card bg-base-100 shadow-xl ">
                <figure><img className="w-full h-96" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    
                  
                    <div className="card-actions justify-end">
                        <p className="text-lg font-outfit font-medium">Price: {price}</p>
                        <Link to={`/serviceDetails/${id}`}>
                            <button className="btn text-white border-none bg-gradient-to-r from-[#1C1F38] to-[#42D0D9]">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseCard;