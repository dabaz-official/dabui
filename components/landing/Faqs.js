export default function Faqs() {
  return (
    <section id="faqs" aria-labelledby="faqs-title" className="relative overflow-hidden bg-slate-50 py-20 sm:py-32">
      <img src="/images/background-3.jpg" alt="Background 3" width="1558" height="946" decoding="async" data-nimg="future" className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4" loading="lazy" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 id="faqs-title" className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can&apos;t find what you&apos;re looking for, email our support team and someone will get back to you.
          </p>
        </div>
        <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          <li>
            <ul role="list" className="flex flex-col gap-y-8">
              <li>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  How many payments are supported?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Credit card, PayPal, Apple Pay, Cash App, and up to 6 payment methods.
                </p>
              </li>
              <li>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  What makes DabUI stands out?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  The starter version is perfectly designed for beginners, so it&apos;s easy for beginners to learn designing.
                </p>
              </li>
              <li>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  Where is DabUI based?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Let&apos;s just say it&apos;s not somewhere where the SEC is going to find us.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-8">
              <li>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  Isn&apos;t that a normal design system?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  When we are designing this design system, we believe that it&apos;s not the same as other design system. You may have to find out the difference by yourself.
                </p>
              </li>
              <li>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  How do I apply for a job at DabUI?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Now we only hire our customers, purchase one and then let&apos;s talk.
                </p>
              </li>
              <li>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  How do I become an insider?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Contact us with some details about your industry and the type of access you have to apply for an insider account.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-8">
              <li>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  How do I get into my account if I lose my password?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.
                </p>
              </li>
              <li>
                <h3 className="font-display text-lg leading-7 text-slate-900">
                  How often you update this design system?
                </h3>
                <p className="mt-4 text-sm text-slate-700">
                  It depends on the customers and our progress.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}