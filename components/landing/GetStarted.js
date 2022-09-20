export default function GetStarted() {
  return (
    <section id="get-started-today" className="relative overflow-hidden bg-blue-600 py-32">
      <img src="/images/background-2.jpg" alt="Background 2" width="2347" height="1244" decoding="async" data-nimg="future" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" loading="lazy" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It&apos;s time to get started and change the way you design. You don&apos;t need to use a complicated design system anymore.
          </p>
          <a className="group inline-flex items-center justify-center rounded-full py-3 px-5 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10" href="/register">
            Get the free version
          </a>
        </div>
      </div>
    </section>
  )
}