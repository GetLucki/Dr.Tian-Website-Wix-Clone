import { Link } from 'react-router-dom'

const BOKADIREKT_URL =
  'https://www.bokadirekt.se/places/eriksbergs-halsoklinik-12294?sr=78B17C5C_B4CD_4DBB_A79C_FA29F1EECB05'

const conditionGroups = [
  {
    icon: '/assets/001-decreased-concentration.svg',
    title: 'Allmänmedicinska besvär',
    items: ['Allergi', 'Astma', 'Spänningshuvudvärk', 'Dålig matsmältning', 'Irritabel tarm', 'Illamående', 'Stress'],
  },
  {
    icon: '/assets/007-uterus.svg',
    title: 'Gynekologiska besvär',
    items: ['Endometrios', 'Infertilitet', 'Klimakteriebesvär', 'Menstruella besvär', 'Ägglosningsrubbningar'],
  },
  {
    icon: '/assets/004-pain-in-joints.svg',
    title: 'Muskel- och ledbesvär',
    items: ['Ont i ryggen', 'Ont i nacken', 'Ont i axlar', 'Ont i armar och händer', 'Ont i benen och fötterna', 'Återhämtning från Whiplash'],
  },
  {
    icon: '/assets/009-urology.svg',
    title: 'Urologiska besvär',
    items: ['Erektil dysfunktion', 'Infertilitet', 'Prostatit', 'Återkommande urinvägsinfektioner'],
  },
  {
    icon: '/assets/005-eye.svg',
    title: 'Ögonbesvär',
    items: ['Torra ögon', 'Gula fläcken', 'Akut ögoninfektion', 'Stressrelaterad näthinneinflamation', 'Retinal kärlsjukdom'],
  },
  {
    icon: '/assets/010-brain.svg',
    title: 'Neurologiska besvär',
    items: ['Multipel skleros MS', 'Trigeminusneuralgi', 'Pares efter stroke', 'Parkinsons sjukdom', 'Sömnstörningar', 'Migrän'],
  },
  {
    icon: '/assets/006-sore-throat.svg',
    title: 'Öron-näsa-halsbesvär',
    items: ['Tinnitus', 'Rinit (Snuva)', 'Bihåleinflammation', 'Tandvärk', 'Rehabilitering'],
  },
]

const reviews = [
  {
    name: 'Annis',
    photo: '/assets/Annis.JPG',
    stars: 5,
    text: 'Jag har haft fantastiska resultat med Dr. Tians behandlingar. Hon är mycket professionell och omtänksam.',
  },
  {
    name: 'Melissa',
    photo: '/assets/Melissa.jpg',
    stars: 5,
    text: 'Dr. Tian har hjälpt mig med min migrän som jag lidit av i många år. Rekommenderar varmt!',
  },
  {
    name: 'Maria',
    photo: '/assets/Woman%20with%20Gray%20Hair_edited.jpg',
    stars: 5,
    text: 'En utomordentlig läkare med djup kunskap inom TCM. Behandlingarna har verkligen gjort skillnad.',
  },
  {
    name: 'Johan',
    photo: '/assets/IMG_5157.JPG',
    stars: 5,
    text: 'Professionell och lugn miljö. Märker tydlig förbättring efter varje behandling.',
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-forest font-semibold leading-tight mb-4">
              Välkommen till Dr. Tian Akupunktur i Göteborg
            </h1>
            <p className="text-forest-light font-serif text-xl italic mb-3">
              TCM-specialist med doktorsexamen från Sahlgrenska
            </p>
            <p className="font-sans text-text-mid leading-relaxed mb-8 max-w-lg">
              Hos Dr. Tian Akupunktur i Göteborg får du hjälp med smärta, stress och infertilitet.
              Med över 40 års erfarenhet inom traditionell kinesisk medicin (TCM), en doktorsexamen
              från Sahlgrenska och en medicinsk examen från Kina, erbjuder Dr. Tian behandlingar som
              förenar forskning, tradition och omtanke.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/om-dr-tian" className="btn-outline">
                Läs mer och boka
              </Link>
              <a href={BOKADIREKT_URL} target="_blank" rel="noopener noreferrer" className="btn-amber">
                Boka tid
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/Dr Tian Profile Pic"
              alt="Dr. Tian"
              className="rounded-sm object-cover w-full max-w-md h-[420px] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/assets/560986_edited.jpg"
              alt="Dr. Tian"
              className="rounded-sm object-cover w-full h-80 shadow"
            />
          </div>
          <div>
            <img src="/assets/yin-yang.svg" alt="" className="w-8 h-8 mb-4 opacity-40" />
            <h2 className="section-heading mb-2">Dr. Tian</h2>
            <p className="font-serif text-lg text-forest-light italic mb-4">
              TCM-specialist och 4:e generationens akupunkturutövare
            </p>
            <p className="font-sans text-text-mid leading-relaxed mb-4">
              Dr. Tian har över 40 års erfarenhet inom både traditionell kinesisk medicin (TCM) och konventionell
              medicin, en kombination som i Kina kallas integrativ medicin.
            </p>
            <p className="font-sans text-text-mid leading-relaxed mb-6">
              År 2008 disputerade hon vid Sahlgrenska och erhöll en doktorsexamen (PhD) i kardiovaskulär forskning.
              Denna unika kombination av forskning, klinisk erfarenhet och tradition gör att patienter vänder sig
              till henne när konventionella behandlingar inte räckt till.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/om-dr-tian" className="btn-outline">Läs mer om mig</Link>
              <a href={BOKADIREKT_URL} target="_blank" rel="noopener noreferrer" className="btn-amber">
                Boka en konsultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <img src="/assets/acupuncture.svg" alt="" className="w-10 h-10 mx-auto mb-4 opacity-50" />
            <h2 className="section-heading">Hur kan vi hjälpa dig?</h2>
            <p className="font-sans text-text-mid mt-3 max-w-2xl mx-auto">
              Många av nedanstående tillstånd kan Dr. Tian behandla med enbart TCM-behandlingar såsom akupunktur,
              men vid vissa besvär används TCM-terapi som komplement till din ordinarie behandling.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {conditionGroups.map((group) => (
              <div key={group.title} className="bg-white rounded-sm p-5 shadow-sm">
                <img src={group.icon} alt="" className="w-9 h-9 mb-3 opacity-70" />
                <h3 className="font-serif text-base font-semibold text-forest mb-3">{group.title}</h3>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="font-sans text-sm text-text-mid flex items-start gap-1">
                      <span className="text-amber mt-0.5">·</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={BOKADIREKT_URL} target="_blank" rel="noopener noreferrer" className="btn-amber">
              Boka en konsultation
            </a>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="bg-white py-16" id="omdomen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <img src="/assets/google-reviews.svg" alt="Google Reviews" className="h-8" />
          </div>
          <h2 className="section-heading mb-8">Vad våra patienter säger</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-cream rounded-sm p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={r.photo}
                    alt={r.name}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/assets/Original on Transparent.png' }}
                  />
                  <div>
                    <p className="font-sans font-medium text-sm text-text-dark">{r.name}</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {Array.from({ length: r.stars }).map((_, i) => (
                        <span key={i} className="text-amber text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="font-sans text-sm text-text-mid leading-relaxed italic">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
