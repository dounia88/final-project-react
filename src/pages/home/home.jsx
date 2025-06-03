import React, { useState, useEffect } from 'react';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showText, setShowText] = useState(false);

    const slides = [
        {
            image: '/images/carousel1.jpg',
            smallText: 'Women Collection 2024',
            largeText: 'NEW ARRIVALS',
            buttonText: 'SHOP NOW'
        },
        {
            image: '/images/carousel2.jpg',
            smallText: 'Men New-Season',
            largeText: 'JACKETS & COATS',
            buttonText: 'DISCOVER NOW'
        },
        {
            image: '/images/carousel3.webp',
            smallText: 'Spring 2024',
            largeText: 'NEW TRENDS',
            buttonText: 'SHOP NOW'
        }
    ];

    useEffect(() => {
        setShowText(false);
        const textTimer = setTimeout(() => setShowText(true), 500);

        const slideTimer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(slideTimer);
        };
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const categories = [
        {
            name: "DRESSES",
            image: "/public/images/banner-02.jpg",
            alt: "Floral white dress"
        },
        {
            name: "WATCHES",
            image: "/public/images/banner-07.jpg",
            alt: "Black elegant watch"
        },
        {
            name: "BAGS",
            image: "/public/images/cards3.webp",
            alt: "Grey modern backpack"
        },
        {
            name: "SUNGLASSES",
            image: "/public/images/cards2.webp",
            alt: "Black aviator sunglasses"
        },
        {
            name: "FOOTERWEAR",
            image: "/public/images/category-bag.jpg",
            alt: "Classic black Converse"
        },
        {
            name: "ACCESSORIES",
            image: "/public/images/image.png",
            alt: "Black leather wallet"
        }
    ];

    return (
        <main>
            
            <div className="relative h-[600px] overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        
                        <img 
                            src={slide.image}
                            alt={slide.smallText}
                            className="w-full h-full object-cover"
                        />
                        
                        
                        <div className="absolute inset-0 bg-black/30"></div>
                        
                        
                        <div className="absolute inset-0 flex items-center justify-center text-center">
                            <div className={`transform transition-all duration-500 ${
                                showText && currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                                <h3 className="text-xl md:text-2xl text-white mb-4">
                                    {slide.smallText}
                                </h3>
                                <h2 className="text-4xl md:text-7xl font-bold text-white mb-8">
                                    {slide.largeText}
                                </h2>
                                <button className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"id=''>
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors z-20"
                >
                    ‹
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors z-20"
                >
                    ›
                </button>

                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full border-2 border-white transition-colors ${
                                currentSlide === index ? 'bg-white' : 'bg-transparent'
                            }`}
                        />
                    ))}
                </div>
            </div>

            
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <div key={index} className="group relative overflow-hidden cursor-pointer">
                                <div className="aspect-[3/4] relative overflow-hidden">
                                    <img 
                                        src={category.image} 
                                        alt={category.alt} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <h3 className="text-white text-2xl font-semibold tracking-wider">
                                            {category.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-wider">
                            @ FOLLOW US ON INSTAGRAM
                        </h2>
                    </div>

                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-semibold mb-3">
                                Free Delivery Worldwide
                            </h3>
                            <p className="text-gray-600 italic">
                                Mirum est notare quam littera gothica
                            </p>
                        </div>

                        
                        <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-semibold mb-3">
                                30 Days Return
                            </h3>
                            <p className="text-gray-600 italic">
                                Simply return it within 30 days for an exchange.
                            </p>
                        </div>

                        
                        <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-semibold mb-3">
                                Store Opening
                            </h3>
                            <p className="text-gray-600 italic">
                                Shop open from Monday to Sunday
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home; 