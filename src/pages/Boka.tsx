const BOKADIREKT_URL =
  'https://www.bokadirekt.se/places/eriksbergs-halsoklinik-12294?sr=78B17C5C_B4CD_4DBB_A79C_FA29F1EECB05'

export default function Boka() {
  return (
    <main>
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="section-heading mb-6">Boka behandling</h1>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <img
                src="/assets/Eriksberg.jpeg"
                alt="Eriksberg, Göteborg"
                className="w-full h-64 object-cover rounded-sm shadow mb-6"
              />
              <img
                src="/assets/Eriksbergskranen.jpeg"
                alt="Eriksberg"
                className="w-full h-48 object-cover rounded-sm shadow"
              />
            </div>

            <div>
              <div className="bg-white rounded-sm p-6 shadow-sm mb-6">
                <p className="font-sans text-text-mid leading-relaxed mb-4">
                  Välkommen till vår klinik där vi hjälper dig på din resa mot ett holistiskt välbefinnande
                  när andra konventionella behandlingar har misslyckats.
                </p>
                <p className="font-sans text-text-mid leading-relaxed mb-6">
                  Beläget precis intill vattnet och Eriksbergs promennadstråk kan du njuta av en avkopplande
                  promenad längs kajen och utforska det stora utbudet av restauranger, kaféer, glassbarer och
                  fiskvagnar som finns i området.
                </p>
                <div className="font-sans text-sm text-text-mid space-y-1 mb-6">
                  <p className="font-semibold text-forest">Dr. Tian Akupunktur</p>
                  <p>Sjöporten 4, Eriksberg</p>
                  <p>417 64 Göteborg</p>
                  <a href="mailto:fei.tian.akp@gmail.com" className="block text-amber hover:underline">
                    fei.tian.akp@gmail.com
                  </a>
                  <a href="tel:0707136805" className="block text-amber hover:underline">
                    070-7136805
                  </a>
                </div>
                <a
                  href={BOKADIREKT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber inline-block text-base px-8 py-3"
                >
                  Boka nu →
                </a>
              </div>

              <p className="font-sans text-xs text-text-light">
                Du bokas direkt via Bokadirekt, Sveriges ledande bokningssystem för hälsa och välmående.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
