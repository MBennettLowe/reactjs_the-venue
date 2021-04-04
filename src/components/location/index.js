import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6241725.23957!2d-83.63517639260743!3d40.193102144482076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2ccea4887fd15%3A0xfd2c514fc3475503!2sShea%20Stadium!5e0!3m2!1sen!2sus!4v1617307905510!5m2!1sen!2sus" 
                width="100%" 
                height="500px" 
                frameBorder="0"
                allowFullScreen="">
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
            
        </div>
    );
};

export default Location;