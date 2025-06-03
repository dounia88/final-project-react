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

            {/* About Content */}
            <div className="container mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Section */}
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <img 
                                src="../../public/images/shopy4.webp" 
                                alt="About Us" 
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
                        <div className="space-y-6 text-gray-600">
                            <p>
                                Welcome to Fashe, where fashion meets passion! We're dedicated to providing you with 
                                the best of both worlds: high-quality fashion pieces and an exceptional shopping experience. 
                                Our journey began with a simple idea - to create a space where style-conscious individuals 
                                could find unique, trendy pieces that reflect their personality.
                            </p>
                            <p>
                                What sets us apart is our commitment to quality and customer satisfaction. Each piece in 
                                our collection is carefully selected to ensure it meets our high standards. From casual 
                                everyday wear to statement pieces that turn heads, we offer a diverse range of clothing 
                                and accessories that cater to various styles and occasions.
                            </p>
                            <p>
                                Our team consists of passionate fashion enthusiasts who understand that great style is 
                                about more than just clothes - it's about how they make you feel. We're constantly 
                                updating our collection to bring you the latest trends while maintaining timeless classics 
                                that never go out of style.
                            </p>
                            <p>
                                We believe in sustainable fashion and ethical practices. That's why we partner with 
                                manufacturers who share our values and commitment to responsible production methods. 
                                When you shop with us, you're not just buying clothes; you're supporting a vision of 
                                fashion that respects both people and the planet.
                            </p>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-8 mt-12">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-red-500 mb-2">2k+</div>
                                <div className="text-sm text-gray-600">Happy Customers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-red-500 mb-2">500+</div>
                                <div className="text-sm text-gray-600">Products</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-red-500 mb-2">50+</div>
                                <div className="text-sm text-gray-600">Brands</div>
                            </div>
                        </div>
                    </div>
                </div>

              
            </div>
        </div>
    );
};

export default About; 