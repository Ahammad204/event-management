import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Services from "./Services/Services";
import GameEvent from "./GameEvent/GameEvent";

import HowWork from "./HowWork";


const Home = () => {

    const services = useLoaderData()

    return (
        <div>
           
            <div className="mb-6">
            <Banner></Banner>
            </div>

            <Services services={services}></Services>

            <GameEvent></GameEvent>

            <HowWork></HowWork>

           
        </div>

        
    );
};

export default Home;