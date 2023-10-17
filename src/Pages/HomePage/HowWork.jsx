import { FaFlag,FaClipboardCheck } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const HowWork = () => {
    return (
        <div className="mt-10">
            <h1 className="font-teko font-extrabold text-center text-7xl mb-3">How We Work</h1> <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="text-7xl text-[#42D0D9]"><FaFlag></FaFlag></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center font-outfit font-bold text-xl">Find And Register for the Tournament</h2>
                        <p>We take tournament and orgainized it and we also Sell tickets for the tournament</p>
                       
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="text-7xl text-[#42D0D9]"><FaClipboardCheck></FaClipboardCheck></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center font-outfit font-bold text-xl">Check The Rules And Requirement</h2>
                        <p>We are serious about rules and regulation...We seriously follow this in our event</p>
                       
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="text-7xl text-[#42D0D9]"><FaPeopleGroup></FaPeopleGroup></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center font-outfit font-bold text-xl">Prepare and participate Tournament</h2>
                        <p>We take all organized in our hand and make sure people safety and participate...</p>
                       
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default HowWork;