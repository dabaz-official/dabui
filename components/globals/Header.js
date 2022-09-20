export default function Header() {
  return (
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <a aria-label="Home" href="/">
              <img src="/images/logo-text.svg" alt="Logo" className="h-10 w-auto" />
            </a>
            <div className="hidden md:flex md:gap-x-6">
              <a className="inline-block rounded-lg py-1 px-2 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/#preview">Preview</a>
              <a className="inline-block rounded-lg py-1 px-2 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/#features">Features</a>
              <a className="inline-block rounded-lg py-1 px-2 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/#pricing">Pricing</a>              
              <a className="inline-block rounded-lg py-1 px-2 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/#faqs">Faqs</a>              
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <a className="inline-block rounded-lg py-1 px-2 text-md text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/login">Sign in</a>
            </div>
            <a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600" href="/register">
              <span>
                Get started
                {' '}
                <span className="hidden lg:inline">
                  today
                </span>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}