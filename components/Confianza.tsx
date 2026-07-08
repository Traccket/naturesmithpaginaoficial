import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { DroppiLogo, MasterShopLogo } from "./LogosAliados";

export default function Confianza() {
  return (
    <section id="confianza" className="border-t border-cream/6 bg-ink-2 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          kicker="Confianza"
          title="Aliados de tiendas, vendedores digitales y marcas que buscan operar con respaldo."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* MasterShop */}
          <Reveal>
            <div className="card-shine flex h-full min-h-[130px] flex-col items-center justify-center gap-3 rounded-xl border border-cream/8 bg-ink px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cream/25">
              <MasterShopLogo className="h-8 w-auto text-cream" />
              <p className="text-[0.7rem] tracking-[0.14em] text-mineral uppercase">
                Bodega insignia oro
              </p>
            </div>
          </Reveal>

          {/* Droppi */}
          <Reveal delay={0.07}>
            <div className="card-shine flex h-full min-h-[130px] flex-col items-center justify-center gap-3 rounded-xl border border-cream/8 bg-ink px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cream/25">
              <div className="flex items-center gap-2.5">
                <DroppiLogo className="h-10 w-10" />
                <span className="font-display text-2xl text-cream/90">Droppi</span>
              </div>
              <p className="text-[0.7rem] tracking-[0.14em] text-mineral uppercase">
                Bodega activa
              </p>
            </div>
          </Reveal>

          {/* Maquilas */}
          <Reveal delay={0.14}>
            <div className="card-shine flex h-full min-h-[130px] flex-col items-center justify-center gap-2 rounded-xl border border-cream/8 bg-ink px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cream/25">
              <p className="font-display text-lg text-cream/85">Marcas de maquila</p>
              <p className="text-[0.7rem] tracking-[0.14em] text-mineral uppercase">
                Producción y desarrollo
              </p>
            </div>
          </Reveal>

          {/* Canal naturista */}
          <Reveal delay={0.21}>
            <div className="card-shine flex h-full min-h-[130px] flex-col items-center justify-center gap-2 rounded-xl border border-cream/8 bg-ink px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cream/25">
              <p className="font-display text-lg text-cream/85">Tiendas naturistas</p>
              <p className="text-[0.7rem] tracking-[0.14em] text-mineral uppercase">
                Canal mayorista
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <p className="mt-8 text-[0.75rem] text-mineral/60">
            MasterShop y Droppi son marcas de sus respectivos titulares; se
            mencionan como plataformas donde Nature Smith opera como bodega.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
