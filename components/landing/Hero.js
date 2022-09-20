export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Just design
        <br/>
        <span className="relative whitespace-nowrap text-blue-600">
          <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70" preserveAspectRatio="none">
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
          </svg>
          <span className="relative">
            whatever you want
          </span>
        </span>
        .
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Most design systems are so comprehensive, but hard to use. We make our design system minimal and easy to use, even for beginners.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900" href="/register">Get the free version</a>
        <a className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300" href="#pricing">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="ml-3">Purchase</span>
        </a>
      </div>
      <div className="mt-36 lg:mt-44 lg:mb-10">
        <p className="font-display text-base text-slate-900">
          Trusted by these six companies so far
        </p>
        <ul role="list" className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
          <li>
            <ul role="list" className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
              <li className="flex">
                <img src="/images/companies/transistor.svg" alt="Transistor" width="158" height="48" decoding="async" data-nimg="future" loading="lazy" />
              </li>
              <li className="flex">
                <img src="/images/companies/tuple.svg" alt="Transistor" width="105" height="48" decoding="async" data-nimg="future" loading="lazy" />
              </li>
              <li className="flex">
                <img src="/images/companies/statickit.svg" alt="Transistor" width="127" height="48" decoding="async" data-nimg="future" loading="lazy" />
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
              <li className="flex">
                <img src="/images/companies/mirage.svg" alt="Transistor" width="138" height="48" decoding="async" data-nimg="future" loading="lazy" />
              </li>
              <li className="flex">
                <img src="/images/companies/laravel.svg" alt="Transistor" width="136" height="48" decoding="async" data-nimg="future" loading="lazy" />
              </li>
              <li className="flex">
                <img src="/images/companies/statamic.svg" alt="Transistor" width="147" height="48" decoding="async" data-nimg="future" loading="lazy" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}