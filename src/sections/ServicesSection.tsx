'use client';

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-950 px-4 text-white">
      <h2 className="text-3xl font-semibold text-center mb-10">Serviciile Noastre</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">Retapițare Fețe de Uși</div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">Retapițare Plafon</div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">Retapițare Stâlpi</div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">Vopsire Elemente Interioare</div>
      </div>
    </section>
  );
}
