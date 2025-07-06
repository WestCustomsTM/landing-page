'use client';

import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      className="bg-cover bg-center min-h-[80vh] flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: 'url("/images/hero-placeholder.jpg")' }}
    >
      <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
        Retapițări Auto Profesionale în Timișoara
      </h1>
      <p className="mt-4 text-lg md:text-xl max-w-xl">
        Plafon, fețe de uși, stâlpi și vopsiri interioare cu materiale textile & alcantara. Garanție 5 ani.
      </p>
      <button
        className="mt-6 text-lg px-6 py-4 rounded-2xl shadow-lg bg-green-500 hover:bg-green-600 text-black flex items-center gap-2"
      >
        <FaWhatsapp className="mr-2" />
        Programează pe WhatsApp
      </button>
    </section>
  );
}
