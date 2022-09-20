export default function Preview() {
  return (
    <section id="preview" aria-label="Preview of our design system" className="relative overflow-hidden bg-blue-600 pt-18 pb-36 sm:pt-40 sm:pb-60">
      <img src="/images/background.jpg" alt="background" width="2245" height="1636" decoding="async" data-nimg="future" className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]" loading="lazy" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">Our design system</h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Simple, simple, simple.
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
          <img
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src="/images/preview.png"
            alt="Preview"
          />
        </div>
      </div>
    </section>
  )
}