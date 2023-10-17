import event1 from '../../assets/UpcomingEvents/event1.jpg'
import event2 from '../../assets/UpcomingEvents/event2.jpg'
import event3 from '../../assets/UpcomingEvents/event3.jpg'
import event4 from '../../assets/UpcomingEvents/event4.jpg'
import event5 from '../../assets/UpcomingEvents/event5.jpg'

const AboutUs = () => {
    return (
        <div>
            <h1 className="font-teko font-extrabold text-center text-7xl mb-3">Upcoming PH Arena Event</h1>
            <hr />
            <div className="mt-10">

                <div data-aos="zoom-in" className=" bg-base-100 w-full gap-24  md:flex items-center">

                    <div className="card-body">
                        <h2 className="card-title">Netease connect 2023</h2>
                        <p>Netease connect event will be held in 2023.....</p>


                    </div>
                    <div className="card-actions justify-end">
                        <figure><img className='md:w-full md:h-80' src={event1} alt="Movie" /></figure>
                    </div>

                </div>

                <div data-aos="zoom-in-up" className=" bg-base-100 w-full gap-24 flex flex-col-reverse md:flex md:flex-row mt-8 text-center items-center">

                    <figure><img className='md:w-full md:h-80' src={event2} alt="Movie" /></figure>

                    <div className="  justify-end text-center">
                        <h2 className="card-title">Fight or fright</h2> <br />
                        <p>This Event will be held in 2024 <br /> Ticket will be available PH Arena Soon </p>


                    </div>


                </div>
                <div data-aos="zoom-in" className=" bg-base-100 w-full gap-24 md:flex items-center">

                    <div className="card-body">
                        <h2 className="card-title">HR Tech Expo</h2>
                        <p>This Expo held will be November<br /> VIP Tickets available in PH Arena Website</p>


                    </div>
                    <div className="card-actions justify-end">
                        <figure><img className='md:w-full md:h-80' src={event3} alt="Movie" /></figure>
                    </div>

                </div>
                <div data-aos="zoom-in-up" className=" bg-base-100 w-full gap-24 flex flex-col-reverse md:flex md:flex-row mt-8 text-center items-center">

                    <figure><img className='md:w-full md:h-80' src={event4} alt="Movie" /></figure>

                    <div className="  justify-end text-center">
                        <h2 className="card-title">Hackathon Event </h2>
                        <p>This Event will be held in USA, 2024... <br /> PH Arena Also Partner in this event</p>


                    </div>


                </div>
                <div data-aos="zoom-in" className=" bg-base-100 w-full gap-24 md:flex items-center">

                    <div className="card-body">
                        <h2 className="card-title">Game Of Thrones Event 2024</h2>
                        <p>This program orgnaized by point shoping mall....In this program PH Arena partnership and sponser</p>


                    </div>
                    <div className="card-actions justify-end">
                        <figure><img className='md:w-full md:h-80' src={event5} alt="Movie" /></figure>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AboutUs;