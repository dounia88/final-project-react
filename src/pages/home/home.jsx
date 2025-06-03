import React, { useState, useEffect } from 'react';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showText, setShowText] = useState(false);
    const [countdown, setCountdown] = useState({
        days: 23,
        hours: 15,
        minutes: 37,
        seconds: 31
    });

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

    // Countdown timer effect
    useEffect(() => {
        const countdownTimer = setInterval(() => {
            setCountdown(prev => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else if (days > 0) {
                    days--;
                    hours = 23;
                    minutes = 59;
                    seconds = 59;
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(countdownTimer);
    }, []);

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
            image: "/public/images/banner-02.jpg",
            alt: "Classic black Converse"
        },
        {
            name: "ACCESSORIES",
            image: "/public/images/image.png",
            alt: "Black leather wallet"
        }
    ];

    const featuredProducts = [
        {
            name: "Boxy7 T-Shirt with Roll Sleeve",
            image: "/public/images/banner-02.jpg",
            price: "$20.00"
        },
        {
            name: "Boxy6 T-Shirt with Roll Sleeve",
            image: "/public/images/banner-07.jpg",
            price: "$20.00"
        },
        {
            name: "Boxy5 T-Shirt with Roll Sleeve",
            image: "/public/images/banner-08.jpg",
            price: "$20.00"
        },
        {
            name: "Boxy4 T-Shirt with Roll Sleeve",
            image: "/public/images/item-cart-01.jpg",
            price: "$20.00"
        }
    ];


    const OurBlog = [
        {
            name: "Black Friday Guide: Best Sales & Discount Codes",
            image: "/public/images/banner-02.jpg",
            price: "by fashe-theme Admin on Dec 28,2017"
        },
        {
            name: "Boxy6 T-Shirt with Roll Sleeve",
            image: "/public/images/banner-07.jpg",
            price: "lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        
        {
            name: "Boxy4 T-Shirt with Roll Sleeve",
            image: "/public/images/item-cart-01.jpg",
            price: "lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
    ];


    return (
        <main>
            {/* Carousel */}
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
                                <h3 className="text-xl md:text-2xl text-white mb-4">{slide.smallText}</h3>
                                <h2 className="text-4xl md:text-7xl font-bold text-white mb-8">{slide.largeText}</h2>
                                <button className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors z-20"
                >‹</button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/30 text-white hover:bg-white/50 transition-colors z-20"
                >›</button>

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

            {/* Categories */}
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

           
            {/* Featured Products Carousel */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">FEATURED PRODUCTS</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {featuredProducts.map((product, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[300px] object-cover mb-4"
                                />
                                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                                <p className="text-gray-600">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

 {/* The Beauty Look-Book Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left side - Image */}
                        <div className="relative">
                            <img
                                src="/public/images/banner-02.jpg"
                                alt="Fashion model with cap"
                                className="w-full h-[600px] object-cover rounded-lg"
                            />
                            {/* Overlay content */}
                            <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                                <div className="text-center text-white">
                                    <h3 className="text-lg md:text-xl font-light mb-2 tracking-wider">The Beauty</h3>
                                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider">LOOK-BOOK</h2>
                                    <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 tracking-wider">
                                        VIEW COLLECTION
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Product showcase */}
                        <div className="space-y-8">
                            {/* Product 1 */}
                            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-6">
                                    <img
                                        src="/public/images/banner-07.jpg"
                                        alt="Black sunglasses"
                                        className="w-24 h-24 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-xl font-medium mb-2">Boxy2 T-Shirt with Roll Sleeve</h3>
                                        <p className="text-2xl font-bold text-gray-800">$20.00</p>
                                    </div>
                                </div>

                                {/* Countdown timer */}
                                <div className="mt-6 flex justify-center gap-4">
                                    <div className="text-center">
                                        <div className="bg-gray-100 rounded-lg px-4 py-2 min-w-[60px]">
                                            <span className="text-2xl font-bold text-gray-800">{countdown.days}</span>
                                        </div>
                                        <span className="text-sm text-gray-600 mt-1 block">days</span>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-gray-100 rounded-lg px-4 py-2 min-w-[60px]">
                                            <span className="text-2xl font-bold text-gray-800">{countdown.hours}</span>
                                        </div>
                                        <span className="text-sm text-gray-600 mt-1 block">hrs</span>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-gray-100 rounded-lg px-4 py-2 min-w-[60px]">
                                            <span className="text-2xl font-bold text-gray-800">{countdown.minutes}</span>
                                        </div>
                                        <span className="text-sm text-gray-600 mt-1 block">mins</span>
                                    </div>
                                    <div className="text-center">
                                        <div className="bg-gray-100 rounded-lg px-4 py-2 min-w-[60px]">
                                            <span className="text-2xl font-bold text-gray-800">{countdown.seconds}</span>
                                        </div>
                                        <span className="text-sm text-gray-600 mt-1 block">secs</span>
                                    </div>
                                </div>
                            </div>

                            {/* Additional promotional content */}
                            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-lg p-8 text-white text-center">
                                <h3 className="text-2xl font-bold mb-2">Special Offer</h3>
                                <p className="text-lg mb-4">Get 30% off on selected items</p>
                                <button className="px-6 py-2 bg-white text-red-500 rounded-full hover:bg-gray-100 transition-colors font-semibold">
                                    Shop Now
                                </button>
                            </div>

                            {/* Newsletter signup */}
                            <div className="bg-white rounded-lg p-8 shadow-sm">
                                <h3 className="text-xl font-semibold mb-4 text-center">Stay Updated</h3>
                                <p className="text-gray-600 text-center mb-6">Subscribe to get special offers and updates</p>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                                    />
                                    <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


 {/* Our Blog */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Blog</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {OurBlog.map((product, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-[300px] object-cover mb-4"
                                />
                                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                                <p className="text-gray-600">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Instagram Follow Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-wider">
                            @ FOLLOW US ON INSTAGRAM
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-semibold mb-3">Free Delivery Worldwide</h3>
                            <p className="text-gray-600 italic">Mirum est notare quam littera gothica</p>
                        </div>
                        <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-semibold mb-3">30 Days Return</h3>
                            <p className="text-gray-600 italic">Simply return it within 30 days for an exchange.</p>
                        </div>
                        <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-semibold mb-3">Store Opening</h3>
                            <p className="text-gray-600 italic">Shop open from Monday to Sunday</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
