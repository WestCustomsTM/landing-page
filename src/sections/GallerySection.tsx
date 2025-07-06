'use client';

export default function GallerySection() {
  return (
    <section className="py-16 bg-black px-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Galerie – Înainte & După</h2>
      <p className="mb-10 text-gray-400">Imagini reprezentative cu transformări recente (vor fi adăugate ulterior)</p>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="h-48 bg-gray-800 rounded-xl">Imagine 1</div>
        <div className="h-48 bg-gray-800 rounded-xl">Imagine 2</div>
        <div className="h-48 bg-gray-800 rounded-xl">Imagine 3</div>
      </div>
    </section>
  );
}
