/* eslint-disable react/prop-types */

import ServiceCard from './ServiceCard';

const Services = ({services}) => {
    return (
        <div>
            <h1 className="font-teko font-extrabold text-center text-7xl mb-3">Services</h1>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                {

                    services?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)

                }
            </div>

        </div>
    );
};

export default Services;