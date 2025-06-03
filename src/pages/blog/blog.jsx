import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Black Friday Guide: Best Sales & Discount Codes",
            image: "/images/blog-01.jpg",
            date: "22 Dec 2023",
            category: "Shopping Guide",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        },
        {
            id: 2,
            title: "The White Sneakers Nearly Every Fashion Girl Owns",
            image: "/images/blog-02.jpg",
            date: "18 Dec 2023",
            category: "Fashion",
            excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        }
    ];

    const featuredProducts = [
        {
            id: 1,
            name: "Boxy T-Shirt with Roll Sleeve",
            price: 20.00,
            image: "/images/item-02.jpg"
        },
        {
            id: 2,
            name: "Boxy1 T-Shirt with Roll Sleeve",
            price: 35.00,
            image: "/images/item-03.jpg"
        },
        {
            id: 3,
            name: "Boxy2 T-Shirt with Roll Sleeve",
            price: 15.00,
            image: "/images/item-05.jpg"
        },
        {
            id: 4,
            name: "Boxy3 T-Shirt with Roll Sleeve",
            price: 25.00,
            image: "/images/item-07.jpg"
        }
    ];

    const tags = ["Fashion", "Lifestyle", "Denim", "Streetstyle", "Crafts"];

    return (
        <div className="min-h-screen bg-white">
            {/* Blog Header */}
            <div className="relative h-[300px] bg-black">
                <img 
                    src="/images/blog-header.jpg" 
                    alt="Blog Banner" 
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">NEWS</h1>
                </div>
            </div>

            
                    

                       

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog; 