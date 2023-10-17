/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";


const ServiceDetails = () => {

    const [services, setServices] = useState({})
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(`/service.json`);
            const data = await response.json();
            const index = data.findIndex((item) => item.id === parseInt(id));
            setServices(data[index]);

        };

        fetchData();
    }, [id]);

    console.log(services)
    const { name, image, price, description, button_text } =
        services || {};

    const handlePrice = () => {

       

        const addedBuyArray = [];

        const buyItems = JSON.parse(localStorage.getItem('purchase')) 

        if(!buyItems){

            addedBuyArray.push(services)
            localStorage.setItem('purchase',JSON.stringify(addedBuyArray))
            toast.success('Check Your Purchase in Purchase section')

        }else{

            const isExist = buyItems.find(service => service.id === services.id)

            if(!isExist){

                addedBuyArray.push(...buyItems,services)
                localStorage.setItem('purchase',JSON.stringify(addedBuyArray))
                toast.success('Check Your Purchase in Purchase section')

            }else{

                toast.error('You Already Purchase this service')

            }


          

        }

       

    }


    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-zinc-100">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold font-teko">{name}</h1>
                        <p className="mb-5 text-lg font-outfit font-medium">{description}</p>
                        <button onClick={handlePrice} className="btn text-white border-none bg-gradient-to-r from-[#1C1F38] to-[#42D0D9] font-outfit">Price {price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;