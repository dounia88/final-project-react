import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* About Header */}
            <div className="relative h-[300px] bg-black">
                <img 
                    src="/public/images/shopy4.webp" 
                    alt="About Banner" 
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">ABOUT</h1>
                </div>
            </div>

            
        </div>
    );
};

export default About; 