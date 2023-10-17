import { useEffect, useState } from "react";
import PurchaseCard from './PurchaseCard';


const Purchase = () => {

    const[buy,setBuy] = useState([])
    const [noBuy,setNoBuy] = useState(false)
    const [isShow,setIsShow] = useState(false)

    useEffect(()=>{

        const buyItems =JSON.parse(localStorage.getItem('purchase'));
        if(buyItems){

            setBuy(buyItems)

        }else{

            setNoBuy("You are not Buy Any Service")

        }

    },[])

    return (
        <div>
            {

                noBuy ? <p className="h-16 flex justify-center items-center font-semibold text-2xl">{noBuy}</p>: <div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {

                       isShow ? buy.map(serviceDetails => <PurchaseCard key={serviceDetails.id} serviceDetails={serviceDetails}></PurchaseCard>):
                       buy.slice(0,4).map(serviceDetails => <PurchaseCard key={serviceDetails.id} serviceDetails={serviceDetails}></PurchaseCard>)
                    }
                </div>

                {buy.length > 4 && <button onClick={()=> setIsShow(!isShow)}  className="px-5 btn text-white border-none bg-gradient-to-r from-[#1C1F38] to-[#42D0D9] mx-auto block mt-3">{isShow ? "See Less": "See All"}</button>}
                </div>

            }
        </div>
    );
};

export default Purchase;