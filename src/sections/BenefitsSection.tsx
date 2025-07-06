'use client';

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-black text-center px-4">
      <h2 className="text-3xl font-semibold mb-10">De ce să alegi West Customs?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">✅ Prețuri accesibile</div>
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">✅ Garanție 5 ani</div>
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">✅ Materiale premium</div>
      </div>
    </section>
  );
}
