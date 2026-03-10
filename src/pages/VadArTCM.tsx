const BOKADIREKT_URL =
  'https://www.bokadirekt.se/places/eriksbergs-halsoklinik-12294?sr=78B17C5C_B4CD_4DBB_A79C_FA29F1EECB05'

export default function VadArTCM() {
  return (
    <main>
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="section-heading text-center mb-10">Vad är TCM och akupunktur?</h1>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="/assets/earacupuncture-1510407261.jpg"
                alt="Akupunkturbehandling — traditionell kinesisk medicin"
                className="w-full rounded-sm shadow-md object-cover h-80 mb-6"
              />
              <div className="bg-white rounded-sm p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <img src="/assets/yin-yang.svg" alt="" className="w-8 h-8 opacity-50" />
                  <h3 className="font-serif text-lg font-semibold text-forest">Yin & Yang</h3>
                </div>
                <p className="font-sans text-sm text-text-mid leading-relaxed">
                  Balansprincipen inom TCM – när Qi flödar fritt och yin/yang är i harmoni, är kroppen frisk.
                  Akupunktur hjälper till att återställa detta naturliga flöde.
                </p>
              </div>
            </div>

            <div className="space-y-5 font-sans text-text-mid leading-relaxed">
              <p>
                TCM som är den engelska förkortningen för traditionell kinesisk medicin, är ett medicinskt
                system som har använts i tusentals år för att förebygga, diagnostisera och behandla sjukdomar.
              </p>
              <p>
                TCM är baserad på en forntida filosofi som beskriver universum och kroppen i termer av två
                motsatta krafter: yin och yang. När dessa krafter är i balans är kroppen frisk. Energi, kallad
                "Qi" (uttalas "chee") flödar längs specifika vägar, kallade meridianer, genom hela kroppen.
                Detta konstanta energiflöde håller yin- och yang-krafterna balanserade. Men om flödet av
                energi blockeras, som att vatten fastnar bakom en damm, kan störningen leda till smärta, brist
                på funktion eller sjukdom.
              </p>
              <p>
                Nutida akupunktur har sitt ursprung i traditionell kinesisk medicin, genom att använda ett
                antal mycket tunna sterila nålar som sticks in i en så kallad akupunkturpunkt i muskler, kan
                frigöra blockerad Qi i kroppen och stimulera funktionen och framkalla kroppens naturliga
                helande svar genom olika fysiologiska system.
              </p>
              <p>
                Modern forskning har visat på akupunkturens effekter på nervsystemet, endokrina och
                immunsystemet, hjärt-kärlsystemet och matsmältningssystemet. Genom att stimulera kroppens
                olika system kan akupunktur hjälpa till att lösa smärta och förbättra sömn, matsmältnings
                funktion och känsla av välbefinnande.
              </p>
              <p>
                I Kina har akupunktur använts i tusentals år. I Sverige används akupunktur inom sjukvården
                sedan 1984 efter Socialstyrelsens beslut.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={BOKADIREKT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber"
                >
                  Boka en konsultation
                </a>
                <a
                  href={BOKADIREKT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Jag vill veta mer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
