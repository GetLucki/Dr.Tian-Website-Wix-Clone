import { useState } from 'react'

const BOKADIREKT_URL =
  'https://www.bokadirekt.se/places/eriksbergs-halsoklinik-12294?sr=78B17C5C_B4CD_4DBB_A79C_FA29F1EECB05'

const faqs = [
  {
    question: 'Hur fungerar akupunktur?',
    answer:
      'Akupunktur förbättrar kroppens funktioner och främjar den naturliga självhelande processen genom att stimulera specifika anatomiska platser – ofta kallade akupunkturpunkter. Den vanligaste metoden som används för att stimulera akupunkturpunkter är att infoga fina, sterila nålar i huden. Tryck, värme eller elektrisk stimulering kan ytterligare förbättra effekterna. Andra akupunktstimuleringstekniker inkluderar: moxibustion eller värmeterapi, koppning och applicering av aktuella örtmediciner.',
  },
  {
    question: 'Hur många behandlingar behöver jag?',
    answer:
      'Frekvensen och antalet behandlingar skiljer sig från person till person. Vissa människor upplever dramatisk lättnad under den första behandlingen. Vid komplexa eller långvariga kroniska tillstånd kan en till två behandlingar per vecka under flera månader rekommenderas. För akuta problem krävs vanligtvis färre besök, vanligtvis åtta till tio besök totalt. En individualiserad behandlingsplan som inkluderar det förväntade antalet behandlingar kommer att diskuteras under ditt första besök.',
  },
  {
    question: 'Finns det några biverkningar av akupunktur?',
    answer:
      'Det finns vanligtvis inga biverkningar för behandlingen. När energi omdirigeras i kroppen balanseras och stimuleras interna kemikalier och hormoner, och läkningen börjar äga rum. Ibland kan de ursprungliga symtomen förvärras i några dagar. Andra allmänna förändringar i sömn, aptit, tarm, urinering eller känslomässigt tillstånd utlöses; emellertid indikerar dessa symptom helt enkelt att akupunktur börjar fungera.',
  },
  {
    question: 'Finns det några risker kopplat till akupunktur?',
    answer:
      'När akupunktur utförs av en professionellt utbildad akupunktör är akupunktur en mycket säker behandling med minimala biverkningar. Sällan upplever vissa människor milda, kortvariga biverkningar som: smärta där nålarna punkterar huden, blödning eller blåmärken där nålarna punkterar huden, känna sig sjuk, yr eller svimma, försämring av redan existerande symtom.',
  },
  {
    question: 'Vad ska man tänka på före, under och efter behandlingen?',
    answer:
      'Att besöka en akupunktör för första gången kan vara en spännande upplevelse. Akupunktur är mycket säker. Det är rekommenderat att inte komma fastande till behandlingen, bära bekväma kläder och undvika alkohol dagen före. Efter behandlingen kan du känna dig avslappnad eller något trött – detta är normalt. Undvik ansträngande träning direkt efter behandlingen.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-forest/10">
      <button
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-serif text-lg font-semibold text-forest group-hover:text-amber transition-colors">
          {question}
        </span>
        <span className="text-amber font-sans text-xl flex-shrink-0 mt-0.5">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <p className="font-sans text-text-mid text-sm leading-relaxed pb-5">
          {answer}
        </p>
      )}
    </div>
  )
}

export default function VanligaFragor() {
  return (
    <main>
      <section className="bg-cream py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <img src="/assets/yin-yang.svg" alt="" className="w-8 h-8 mb-4 opacity-40" />
              <h1 className="section-heading mb-4">Vanliga frågor</h1>
              <p className="font-sans text-text-mid leading-relaxed">
                Under mina verksamma år har jag fått en del frågor kring akupunktur från mina patienter.
                Nedan har jag samlat ett par av de populäraste frågorna samt mina svar till de.
              </p>
            </div>
            <div>
              <img
                src="/assets/Bagua.jpg"
                alt="Akupunktur"
                className="w-full h-56 object-cover rounded-sm shadow"
              />
            </div>
          </div>

          <div className="bg-white rounded-sm shadow-sm p-6 md:p-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="font-sans text-text-mid mb-4">Har du fler frågor? Kontakta oss gärna.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={BOKADIREKT_URL} target="_blank" rel="noopener noreferrer" className="btn-amber">
                Boka en tid
              </a>
              <a href="/boka#kontakt" className="btn-outline">
                Skicka meddelande
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
