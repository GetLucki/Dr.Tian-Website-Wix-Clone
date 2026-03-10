const BOKADIREKT_URL =
  'https://www.bokadirekt.se/places/eriksbergs-halsoklinik-12294?sr=78B17C5C_B4CD_4DBB_A79C_FA29F1EECB05'

export default function OmDrTian() {
  return (
    <main>
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img src="/assets/yin-yang.svg" alt="" className="w-8 h-8 mb-4 opacity-40" />
            <h1 className="section-heading mb-2">Dr. Tian</h1>
            <p className="font-serif text-xl text-forest-light italic mb-6">
              4:e generationens TCM-utövare med doktorsexamen från Sahlgrenska
            </p>
            <div className="space-y-4 font-sans text-text-mid leading-relaxed">
              <p>
                För mig är traditionell kinesisk medicin (TCM) mer än ett yrke. Det är en familjetradition i 4
                generationer. Redan som 16-åring valde jag att följa familjens väg och påbörjade en medicinsk
                examen i Kina inom både konventionell medicin och TCM, en kombination som i Kina kallas
                integrativ medicin.
              </p>
              <p>
                Efter examen 1985 arbetade jag vid några av Kinas mest ansedda universitetssjukhus. Där
                behandlade jag patienter med smärta, stress, migrän, fertilitetsproblem och kroniska sjukdomar.
                Jag har också erfarenhet av att behandla sjukdomar orsakade av centrala nervsystemets
                förändringar, till exempel Parkinsons sjukdom, demens och andra degenerativa sjukdomar i
                hjärnan. Många patienter hade redan sökt hjälp inom vården men behövde en annan väg till
                lindring, och det var där TCM gjorde skillnad.
              </p>
              <p>
                Med över 40 års erfarenhet och som 4:e generationens TCM-utövare kombinerar jag familjens
                långa arv med modern kunskap. År 2008 disputerade jag vid Sahlgrenska och erhöll en
                doktorsexamen (PhD) i kardiovaskulär forskning. Min forskarbakgrund gör det möjligt att
                förena forskningens tyngd med TCM:s helhetssyn på kropp och sinne.
              </p>
              <p>
                Idag driver jag Dr. Tian Akupunktur i Göteborg, där du får ett tryggt, naturligt och personligt
                komplement till sjukvården. Mitt mål är att hjälpa dig hitta balans, lindring och en väg mot
                bättre hälsa när du söker en väg till balans och långvarig förbättring.
              </p>
            </div>
            <a
              href={BOKADIREKT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber inline-block mt-8"
            >
              Boka en behandling
            </a>
          </div>
          <div>
            <img
              src="/assets/Dr Tian Profile Pic"
              alt="Dr. Tian"
              className="rounded-sm object-cover w-full max-w-md shadow-lg"
            />
            <div className="mt-6 bg-white rounded-sm p-5 shadow-sm space-y-2">
              <h3 className="font-serif text-lg font-semibold text-forest mb-3">Meriter</h3>
              {[
                'Medicinsk examen, Kina (konventionell medicin + TCM), 1985',
                'Klinisk erfarenhet vid Kinas ledande universitetssjukhus',
                'PhD, Sahlgrenska Akademin, 2008 (kardiovaskulär forskning)',
                '40+ års klinisk erfarenhet inom TCM',
                '4:e generationens TCM-utövare',
              ].map((merit) => (
                <div key={merit} className="flex items-start gap-2 text-sm font-sans text-text-mid">
                  <span className="text-amber mt-0.5 flex-shrink-0">✓</span>
                  <span>{merit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
