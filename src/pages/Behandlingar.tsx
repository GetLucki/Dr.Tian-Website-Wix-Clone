const BOKADIREKT_URL =
  'https://www.bokadirekt.se/places/eriksbergs-halsoklinik-12294?sr=78B17C5C_B4CD_4DBB_A79C_FA29F1EECB05'

const treatments = [
  {
    title: 'Hälsokonsultation',
    image: '/assets/traditional-medicine.svg',
    isIcon: true,
    description:
      'Vid hälsokonsultationen ställs diagnos av patientens hälsotillstånd genom undersökning av puls och tunga. Efter diagnosen tas en skräddarsydd behandlingsplan fram tillsammans med patienten. I mån av tid erbjuds även en kortare prova-på-behandling.',
    duration: '30 min',
    price: '450 SEK',
  },
  {
    title: 'Akupunktur',
    image: '/assets/earacupuncture-1510407261.jpg',
    isIcon: false,
    description:
      'Akupunktur är en av behandlingsformerna inom traditionell kinesisk medicin (TKM) med flera tusen års historik. Genom att sätta akupunkturnålar i särskilda meridianpunktur kan en TCM-läkare inte bara lindra symptom utan även råda bort på grundorsaken.',
    duration: '60–70 min',
    price: 'Fr. 950 SEK',
  },
  {
    title: 'Kombinationsbehandling',
    image: '/assets/Akupunkturåterbesök.jpg',
    isIcon: false,
    description:
      'Kombinationsbehandling är en unik behandlingsform som Dr. Tian har utvecklat efter mer än 35 års erfarenhet inom både konventionell och traditionell kinesisk medicin. Den är särskild anpassad för patienter som önskar maximal effekt och snabb återhämtning.',
    duration: '60 min',
    price: '1 600 SEK',
  },
  {
    title: 'Koppning',
    image: '/assets/IMG_0294.jpg',
    isIcon: false,
    description:
      'Koppning sker med hjälp av sugkoppor som skapar ett undertryck vilket påverkar bindväven och ökar cirkulationen i muskler och underhud. Genom den kraftigt ökade cirkulationen rensas slaggprodukter och överskottsvätska effektivt ut samt främjar cellreparationen.',
    duration: '40 min',
    price: '700 SEK',
  },
  {
    title: 'Öronakupunktur',
    image: '/assets/earacupuncture-1510407261.jpg',
    isIcon: false,
    description:
      'Öronakupunktur är en form av akupunktur där akupunkturnålar eller runda frön placeras på specifika meridianpunkter på ytterörat för att behandla olika sjukdomstillstånd. Öronakupunktur är särskild effektiv vid olika smärttillstånd, inflammationer och behandling av närsynthet.',
    duration: '40 min',
    price: '700 SEK',
  },
  {
    title: 'Guasha',
    image: '/assets/different-stomach-pain.jpg',
    isIcon: false,
    description:
      'Guasha är en behandlingsform inom TKM där huden skrapas med ett massageverktyg tillsammans med massageolja. Syftet med behandlingen är att öka patientens blodcirkulation och frigöra blockerad Qi.',
    duration: '40 min',
    price: '700 SEK',
  },
]

export default function Behandlingar() {
  return (
    <main>
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="section-heading mb-4">Behandlingar och priser</h1>
          <p className="font-sans text-text-mid max-w-3xl mb-3 leading-relaxed">
            Välkommen till Dr. Tian Akupunktur i Göteborg! Här kan du räkna med att få professionell
            och individuellt anpassad behandling för dina besvär.
          </p>
          <p className="font-sans text-text-mid max-w-3xl mb-8 leading-relaxed">
            För varje ny patient börjar vi med att kartlägga din hälsostatus och levnadsvanor genom en
            hälsodiagnos, för att kunna utforma den bästa behandlingsplanen för just dig. Varje behandling
            tar mellan 30–60 minuter och förbättring brukar märkas efter 5–6 behandlingar. En genomsnittlig
            behandlingskur är mellan 6–12 besök.
          </p>
          <a href={BOKADIREKT_URL} target="_blank" rel="noopener noreferrer" className="btn-amber">
            Boka behandling
          </a>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t) => (
              <div key={t.title} className="bg-cream rounded-sm shadow-sm overflow-hidden flex flex-col">
                {t.isIcon ? (
                  <div className="bg-forest/10 h-48 flex items-center justify-center">
                    <img src={t.image} alt={t.title} className="w-20 h-20 opacity-50" />
                  </div>
                ) : (
                  <img
                    src={t.image}
                    alt={t.title}
                    className="h-48 w-full object-cover"
                  />
                )}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-serif text-xl font-semibold text-forest mb-2">{t.title}</h3>
                  <p className="font-sans text-sm text-text-mid leading-relaxed mb-4 flex-1">{t.description}</p>
                  <div className="border-t border-forest/10 pt-4 flex items-center justify-between">
                    <div>
                      <p className="font-sans text-xs text-text-light">{t.duration}</p>
                      <p className="font-sans font-semibold text-forest">{t.price}</p>
                    </div>
                    <a
                      href={BOKADIREKT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-amber text-xs px-4 py-2"
                    >
                      Boka tid
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
