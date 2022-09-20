export default function Features() {
  return (
    <section id="features" aria-label="Features of our design system" className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Simplify your design process.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Because you may be a little confused if our design system complicates your designing.
          </p>
        </div>
        <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6">
          <div>
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="h-6 w-6">
                      <path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12 18.664V8.668h3.332z"></path>
                      <circle cx="15.332" cy="12" r="3.332"></circle>
                    </svg>
                  </div>
                  <h3 className="mt-6 text-sm font-medium text-blue-600">Figma file</h3>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">The best way to look through all of our design system.</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">Our full version also include a Figma file. After you purchase the full version, the figma file will be sent right into your e-mail.</dd>
              </div>
              <div>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg aria-hidden="true" fill="none" className="h-9 w-9">
                      <path opacity=".5" d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z" fill="#FFF"></path>
                      <path d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z" fill="#FFF"></path>
                    </svg>
                  </div>
                  <h3 className="mt-6 text-sm font-medium text-blue-600">24/7 Support</h3>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Our support is always online and ready to answer your question.</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">If you have any problems while using our products, feel free to contact us for our support. This also isn&apos;t actually a feature, it&apos;s just some friendly advice.</dd>
              </div>
              <div>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="h-6 w-6">
                      <path d="M21 19v-9c0-1.103-.897-2-2-2h-3V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h3v3c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2zM5 14V5h9v3h-4c-1.103 0-2 .897-2 2v4H5zm9.001 0H10v-4h4.001v4zM10 16h4c1.103 0 2-.897 2-2v-4h3l.001 9H10v-3z"></path>
                    </svg>
                  </div>
                  <h3 className="mt-6 text-sm font-medium text-blue-600">Update</h3>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Stay on top of things with always up-to-date reporting features.</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">We will make sure that you receive the latest update of our design system and Figma files.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}