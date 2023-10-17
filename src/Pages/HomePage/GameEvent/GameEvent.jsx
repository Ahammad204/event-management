import torn1 from '../../../assets/images/tor1.jpg'
import torn2 from '../../../assets/images/tor2.jpg'
import torn3 from '../../../assets/images/tor3.jpg'
import torn4 from '../../../assets/images/preEvent1.png'
import torn5 from '../../../assets/images/preevent2.png'

const GameEvent = () => {
    return (
        <div>
            <h1 className="font-teko font-extrabold text-center text-7xl mb-3">Previous PH Arena Event</h1>
            <hr />
            <div className="mt-10">
              
                <div data-aos="fade-up" className=" bg-base-100 w-full gap-24  md:flex items-center">
                    
                    <div className="card-body">
                        <h2 className="card-title">PUBG Tournament Every Friday</h2>
                        <p>Every Friday PUBG Tournament held in PH Arena youtube channel...</p>
                      
                        
                    </div>
                    <div className="card-actions justify-end">
                    <figure><img className='md:w-60 md:h-80' src={torn1} alt="Movie" /></figure>
                    </div>
                   
                </div>
                
                <div data-aos="fade-down" className=" bg-base-100 w-full gap-24 flex flex-col-reverse md:flex md:flex-row mt-8 text-center items-center">
                    
                <figure><img className='md:w-60 md:h-80' src={torn2} alt="Movie" /></figure>
                    
                    <div className="  justify-end text-center">
                        <h2 className="card-title">Gaming Tournament in Thailand</h2> <br />
                        <p>This tournament held in Thailand in previous... <br /> This is the huge tournament organized by PH Arena Team </p>
                      
                        
                    </div>
                  
                   
                </div>
                <div data-aos="fade-up" className=" bg-base-100 w-full gap-24 md:flex items-center">
                    
                    <div className="card-body">
                        <h2 className="card-title">ESport Tournament In april 2022</h2>
                        <p>This tournament held in April 2022... <br /> This is the huge tournament Sponserd by PH Arena Team and also partner Areana X team</p>
                      
                        
                    </div>
                    <div className="card-actions justify-end">
                    <figure><img className='md:w-60 md:h-80' src={torn3} alt="Movie" /></figure>
                    </div>
                   
                </div>
                <div data-aos="fade-down" className=" bg-base-100 w-full gap-24 flex flex-col-reverse md:flex md:flex-row mt-8 text-center items-center">
                    
                <figure><img className='md:w-96 md:h-80' src={torn4} alt="Movie" /></figure>
                    
                    <div className="  justify-end text-center">
                        <h2 className="card-title">Hackathon Event 2021</h2> 
                        <p>This series held in 2021 April...PH Arena and Arena X patnar in this Series</p>
                      
                        
                    </div>
                  
                   
                </div>
                <div data-aos="fade-up" className=" bg-base-100 w-full gap-24 md:flex items-center">
                    
                    <div className="card-body">
                        <h2 className="card-title">Lot Tech Expo Event 2021</h2>
                        <p>This program orgnaized by point Lot Tech....In this program PH Arena partnership and sponser</p>
                      
                        
                    </div>
                    <div className="card-actions justify-end">
                    <figure><img className='md:w-96 md:h-80' src={torn5} alt="Movie" /></figure>
                    </div>
                   
                </div>
                
            </div>
        </div>
    );
};

export default GameEvent;