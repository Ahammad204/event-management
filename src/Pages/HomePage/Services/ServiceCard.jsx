/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {

    const { id,name,image,price,description,short_details,button_text} = service || {};
    
   

    return (
        <div>
              
            <div 
                className="card card-compact shadow-xl bg-[#252849] flex-grow" >
                <figure>
                    <img className="w-full h-60" src={image} alt={name} />
                </figure>
                <div className="card-body">
                    <div
                        className="w-fit p-2 rounded-lg"
                        
                    >
                        <h2 className=" card-title text-2xl">
                            {name}
                        </h2>
                        <p className="mt-3 font-outfit font-medium text-base">{short_details}</p>
                        <p className="mt-5 font-teko text-2xl font-normal ">{price}</p>
                    </div>
                    <Link to={`/serviceDetails/${id}`}> <button className="btn border-none w-full bg-gradient-to-r from-[#1C1F38] to-[#42D0D9]">Details</button></Link>
                    
                </div>
            </div>
           
        </div>
    );
};

export default ServiceCard;