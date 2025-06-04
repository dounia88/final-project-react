import React from 'react';

const Features = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-blue-600 h-[300px] flex items-center justify-center">
                <h1 className="text-5xl font-bold text-white">FEATURES</h1>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-8">Nos Fonctionnalités</h2>
                    <p className="text-gray-600 mb-8">Découvrez les avantages de notre plateforme e-commerce</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-8 bg-gray-50 rounded-lg">
                        <div className="text-4xl text-blue-500 mb-4">🚚</div>
                        <h3 className="text-xl font-semibold mb-4">Livraison Gratuite</h3>
                        <p className="text-gray-600">Livraison gratuite pour toute commande supérieure à 500 DH</p>
                    </div>
                    <div className="text-center p-8 bg-gray-50 rounded-lg">
                        <div className="text-4xl text-green-500 mb-4">🔒</div>
                        <h3 className="text-xl font-semibold mb-4">Paiement Sécurisé</h3>
                        <p className="text-gray-600">Vos transactions sont protégées par un cryptage SSL</p>
                    </div>
                    <div className="text-center p-8 bg-gray-50 rounded-lg">
                        <div className="text-4xl text-red-500 mb-4">↩️</div>
                        <h3 className="text-xl font-semibold mb-4">Retour Facile</h3>
                        <p className="text-gray-600">Retour gratuit sous 30 jours sans justification</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;