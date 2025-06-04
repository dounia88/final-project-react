import React from 'react';

const Sale = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-red-600 h-[300px] flex items-center justify-center">
                <h1 className="text-5xl font-bold text-white">SALE</h1>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-8">Promotions Exceptionnelles</h2>
                    <p className="text-gray-600 mb-8">Profitez de nos offres spéciales et réductions jusqu'à 70%</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4">MEGA SALE</h3>
                            <p className="text-lg mb-4">Jusqu'à 70% de réduction</p>
                            <button className="bg-white text-red-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                Voir les offres
                            </button>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4">FLASH SALE</h3>
                            <p className="text-lg mb-4">Offres limitées dans le temps</p>
                            <button className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                                Acheter maintenant
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sale;