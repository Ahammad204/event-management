import ceo from '../../assets/TeamImages/ceo.jpg'
import team1 from '../../assets/TeamImages/member1.jpg'
import team2 from '../../assets/TeamImages/member2.jpg'
import team3 from '../../assets/TeamImages/member3.jpg'
import team4 from '../../assets/TeamImages/member4.jpg'

const TeamMember = () => {
    return (
        <div>
            <h1 className="font-teko font-extrabold text-center text-7xl mb-3">Team Members</h1>
            <hr />
            <div className="mt-10">

                <div data-aos="flip-left" className=" bg-base-100 w-full gap-24  md:flex items-center">

                    <div className="card-body">
                        <h2 className="card-title">CEO of PH Arena</h2>
                        <p>Kazi Ahammad Ullah is the CEO of PH Areana.... <br /> This orgainzetion doing Tech event since 2016</p>


                    </div>
                    <div className="card-actions justify-end">
                        <figure><img className='md:w-full md:h-60' src={ceo} alt="Movie" /></figure>
                    </div>

                </div>

                <div data-aos="fade-down" className=" bg-base-100 w-full gap-24 flex flex-col-reverse md:flex md:flex-row mt-8 text-center items-center">

                    <figure><img className='md:w-full md:h-80' src={team1} alt="Movie" /></figure>

                    <div className="  justify-end text-center">
                        <h2 className="card-title"> Event Manager of PH Arena</h2> <br />
                        <p> Mr.Ethen is the event Manger since 2018 in PH Arena <br /> He has much more experience of manegment </p>


                    </div>


                </div>
                <div data-aos="flip-left" className=" bg-base-100 w-full gap-24 md:flex items-center">

                    <div className="card-body">
                        <h2 className="card-title">ESport Tournament manager</h2>
                        <p>T<br /> Alexander is the top player in 2014 in ESport..He has much more experience for handle tournament</p>


                    </div>
                    <div className="card-actions justify-end">
                        <figure><img className='md:w-full md:h-80' src={team2} alt="Movie" /></figure>
                    </div>

                </div>
                <div data-aos="fade-down" className=" bg-base-100 w-full gap-24 flex flex-col-reverse md:flex md:flex-row mt-8 text-center items-center">

                    <figure><img className='md:w-full md:h-80' src={team3} alt="Movie" /></figure>

                    <div className="  justify-end text-center">
                        <h2 className="card-title">Social Media Marketing Expert</h2>
                        <p>Olivia is the social marketing expert since 2017...He works with PH Arena since 2019</p>


                    </div>


                </div>
                <div data-aos="flip-left" className=" bg-base-100 w-full gap-24 md:flex items-center">

                    <div className="card-body">
                        <h2 className="card-title">Marketing Expert</h2>
                        <p>Liam is the specialist in marketing.... <br /> He also love gaming and many experience in esport</p>


                    </div>
                    <div className="card-actions justify-end">
                        <figure><img className='md:w-full md:h-80' src={team4} alt="Movie" /></figure>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default TeamMember;