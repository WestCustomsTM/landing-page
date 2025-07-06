'use client';

import { FaWhatsapp } from "react-icons/fa";
import { MapPin, Clock } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-16 bg-black px-4 text-center text-white">
      <h2 className="text-3xl font-semibold mb-6">Ne Găsești în Timișoara</h2>
      <div className="flex flex-col items-center space-y-2">
        <p><MapPin className="inline mr-2" />Str. Ilia Repin 32</p>
        <p><Clock className="inline mr-2" />Luni – Sâmbătă: 10:00 – 18:00</p>
        <button className="mt-4 text-lg px-6 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-black flex items-center gap-2 shadow-lg">
          <FaWhatsapp /> Scrie-ne pe WhatsApp
        </button>
      </div>
    </section>
  );
}
