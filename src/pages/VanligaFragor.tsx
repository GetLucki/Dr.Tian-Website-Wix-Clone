const BOKADIREKT_URL =
  'https://www.bokadirekt.se/places/eriksbergs-halsoklinik-12294?sr=78B17C5C_B4CD_4DBB_A79C_FA29F1EECB05'

const faqs = [
  {
    question: 'Hur fungerar akupunktur?',
    image: '/assets/earacupuncture-1510407261.jpg',
    imageAlt: 'Akupunkturbehandling med nålar',
    answer: 'Akupunktur förbättrar kroppens funktioner och främjar den naturliga självhelande processen genom att stimulera specifika anatomiska platser — akupunkturpunkter. Den vanligaste metoden är att infoga fina, sterila nålar i huden. Tryck, värme eller elektrisk stimulering kan ytterligare förbättra effekterna. Andra tekniker inkluderar moxibustion, koppning och applicering av örtmediciner.',
  },
  {
    question: 'Hur många behandlingar behöver jag?',
    image: '/assets/Back pain.jpg',
    imageAlt: 'Patient som får behandling för ryggsmärta',
    answer: 'Frekvensen och antalet behandlingar skiljer sig från person till person. Vissa upplever dramatisk lättnad under den första behandlingen. Vid komplexa kroniska tillstånd rekommenderas 1–2 behandlingar per vecka under flera månader. För akuta problem räcker vanligtvis 8–10 besök totalt. En individuell behandlingsplan diskuteras under ditt första besök.',
  },
  {
    question: 'Finns det några biverkningar av akupunktur?',
    image: '/assets/different-stomach-pain.jpg',
    imageAlt: 'Välmående patient efter behandling',
    answer: 'Det finns vanligtvis inga biverkningar. Ibland kan ursprungssymtomen tillfälligt förvärras i några dagar. Allmänna förändringar i sömn, aptit, tarm, urinering eller känslomässigt tillstånd kan utlösas — dessa indikerar att akupunkturen börjar fungera och är ett gott tecken.',
  },
  {
    question: 'Finns det några risker kopplat till akupunktur?',
    image: '/assets/earacupuncture-1510407261.jpg',
    imageAlt: 'Säker öronakupunktur',
    answer: 'När akupunktur utförs av en professionellt utbildad akupunktör är det en mycket säker behandling med minimala biverkningar. Sterila engångsnålar används alltid. Sällsynta, milda biverkningar kan vara lätt ömhet eller ett blåmärke vid nålstick — dessa är kortvariga och går över av sig självt.',
  },
  {
    question: 'Vad ska man tänka på före, under och efter behandlingen?',
    image: '/assets/Stressed Man_edited.jpg',
    imageAlt: 'Avslappnad patient',
    answer: 'Kom inte fastande — ät något lätt 1–2 timmar innan. Bär bekväma kläder och undvik alkohol dagen före. Ta med en lista på eventuella mediciner. Under behandlingen är det viktigt att du är avslappnad och meddelar terapeuten om du känner obehag. Efter behandlingen är det bra att ta det lugnt och undvika ansträngande träning samma dag.',
  },
]

export default function VanligaFragor() {
  return (
    <main>
      {/* Hero — full-width image with teal overlay, matching Wix original */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="/assets/Bagua.jpg"
          alt="Vanliga frågor om akupunktur och TCM i Göteborg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/65" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <img src="/assets/yin-yang.svg" alt="" className="w-10 h-10 mb-4 opacity-60 invert" />
          <h1 className="font-serif text-3xl md:text-4xl text-white font-semibold mb-2">
            Vanliga frågor
          </h1>
          <p className="font-sans text-white/80 max-w-xl text-sm">
            Under mina verksamma år har jag fått frågor från patienter. Här har jag samlat de vanligaste.
          </p>
        </div>
      </section>

      {/* Q&A sections — alternating image/text layout */}
      {faqs.map((faq, i) => (
        <section
          key={faq.question}
          className={`py-14 ${i % 2 === 0 ? 'bg-cream' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              style={i % 2 !== 0 ? { direction: 'rtl' } : {}}>
              {/* Image */}
              <div style={{ direction: 'ltr' }}>
                <img
                  src={faq.image}
                  alt={faq.imageAlt}
                  className="w-full h-60 md:h-72 object-cover rounded-sm shadow-md"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src = '/assets/Bagua.jpg'
                  }}
                />
              </div>
              {/* Text */}
              <div style={{ direction: 'ltr' }}>
                <h2 className="font-serif text-2xl font-semibold text-forest mb-4">
                  {faq.question}
                </h2>
                <p className="font-sans text-text-mid leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA strip */}
      <section className="bg-forest py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <img src="/assets/yin-yang.svg" alt="" className="w-10 h-10 mx-auto mb-4 opacity-60 invert" />
          <p className="font-serif text-xl text-white mb-2">Hittade du inte svaret du sökte?</p>
          <p className="font-sans text-white/70 text-sm mb-6">
            Kontakta mig direkt eller boka en konsultation så svarar jag på alla dina frågor.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={BOKADIREKT_URL} target="_blank" rel="noopener noreferrer" className="btn-amber">
              Boka konsultation
            </a>
            <a href="mailto:fei.tian.akp@gmail.com" className="btn-outline">
              Skicka e-post
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
