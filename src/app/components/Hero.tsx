import React from "react";

export const Hero = () => {
  return (
    <div className="bg-gray-900 text-white py-20 px-6 sm:px-12 md:px-24 lg:px-48 xl:px-64">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl leading-none font-extrabold text-white tracking-tight mb-8">
          Bienvenidos!
        </h1>
        <p className="max-w-xl mx-auto text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6">
          Encuentra los mejores portales de empleo en un solo lugar. Explora,
          busca y encuentra tu próximo desafío aquí.
        </p>
      </div>
    </div>
  );
};
