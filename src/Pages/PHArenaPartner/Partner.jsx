import partner1 from '../../assets/PartnerImages/partner1.jpeg'
import partner2 from '../../assets/PartnerImages/partner2.jpeg'
import partner3 from '../../assets/PartnerImages/partner3.jpg'
import partner4 from '../../assets/PartnerImages/partner4.png'
import partner5 from '../../assets/PartnerImages/partner5.png'

const Partner = () => {
    return (
        <div>
            <h1 className="font-teko font-extrabold text-center text-7xl mb-3">PH Arena Partner</h1>
            <hr />
            <div className="mt-10">

                <div data-aos="flip-left" className=" bg-base-100 w-full gap-24  md:flex items-center">

                    <div className="card-body">
                        <h2 className="card-title">Twitch</h2>
                        <p> Twitch, a leading live streaming platform, supports esports with a dedicated gaming community. Their partnership enables fans to watch, engage, and connect with their favorite esports stars.</p>


                    </div>
                    <div className="card-actions justify-end">
                        <figure><img className='md:w-full md:h-60' src={partner1} alt="Movie" /></figure>
                    </div>

                </div>

                <div data-aos="fade-down" className=" bg-base-100 w-full gap-24 flex flex-col-reverse md:flex md:flex-row mt-8 text-center items-center">

                    <figure><img className='md:w-full md:h-80' src={partner2} alt="Movie" /></figure>

                    <div className="  justify-end text-center">
                        <h2 className="card-title">Red Bull</h2> <br />
                        <p>  Red Bull energizes esports athletes with their beverages and collaborates on unique content. They elevate esports events by showcasing the dedication and passion of gamers. </p>


                    </div>


                </div>
                <div data-aos="flip-left" className=" bg-base-100 w-full gap-24 md:flex items-center">

                    <div className="card-body">
                        <h2 className="card-title">Logitech G</h2>
                        <p> Logitech G offers esports athletes high-performance gaming peripherals. Their partnership enhances gameplay precision and comfort, contributing to the success of esports professionals.</p>


                    </div>
                    <div className="card-actions justify-end">
                        <figure><img className='md:w-full md:h-80' src={partner3} alt="Movie" /></figure>
                    </div>

                </div>
                <div data-aos="fade-down" className=" bg-base-100 w-full gap-24 flex flex-col-reverse md:flex md:flex-row mt-8 text-center items-center">

                    <figure><img className='md:w-full md:h-80' src={partner4} alt="Movie" /></figure>

                    <div className="  justify-end text-center">
                        <h2 className="card-title">ASUS ROG</h2>
                        <p>ASUS Republic of Gamers (ROG) provides esports athletes with top-tier gaming hardware. Their partnership ensures competitive advantage and elevates gaming experiences at esports tournaments.</p>


                    </div>


                </div>
                <div data-aos="flip-left" className=" bg-base-100 w-full gap-24 md:flex items-center">

                    <div className="card-body">
                        <h2 className="card-title">Intel</h2>
                        <p> Intel, a technology giant, powers esports with cutting-edge processors, delivering high-performance gaming experiences. They sponsor major tournaments and support esports growth through innovation.</p>


                    </div>
                    <div className="card-actions justify-end">
                        <figure><img className='md:w-full md:h-80' src={partner5} alt="Movie" /></figure>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Partner;