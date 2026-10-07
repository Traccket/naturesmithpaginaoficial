import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { DroppiLogo, MasterShopLogo } from "./LogosAliados";

export default function Confianza() {
  return (
    <section id="confianza" className="border-t border-line bg-paper py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          kicker="Confianza"
          title="Aliados de tiendas, vendedores digitales y marcas que buscan operar con respaldo."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {/* MasterShop */}
          <Reveal>
            <div className="flex h-full min-h-[120px] flex-col items-center justify-center gap-3 rounded-xl border border-line bg-white px-4 py-6 text-center transition-colors hover:border-ink/20">
              <MasterShopLogo className="h-7 w-auto text-ink" />
              <p className="text-[0.7rem] font-medium tracking-[0.12em] text-muted uppercase">
                Bodega insignia oro
              </p>
            </div>
          </Reveal>

          {/* Droppi */}
          <Reveal delay={0.06}>
            <div className="flex h-full min-h-[120px] flex-col items-center justify-center gap-3 rounded-xl border border-line bg-white px-4 py-6 text-center transition-colors hover:border-ink/20">
              <div className="flex items-center gap-2.5">
                <DroppiLogo className="h-9 w-9" />
                <span className="text-xl font-semibold text-ink">Droppi</span>
              </div>
              <p className="text-[0.7rem] font-medium tracking-[0.12em] text-muted uppercase">
                Bodega activa
              </p>
            </div>
          </Reveal>

          {/* Maquilas */}
          <Reveal delay={0.12}>
            <div className="flex h-full min-h-[120px] flex-col items-center justify-center gap-2 rounded-xl border border-line bg-white px-4 py-6 text-center transition-colors hover:border-ink/20">
              <p className="text-[1.05rem] font-semibold text-ink">Marcas de maquila</p>
              <p className="text-[0.7rem] font-medium tracking-[0.12em] text-muted uppercase">
                Producción y desarrollo
              </p>
            </div>
          </Reveal>

          {/* Canal naturista */}
          <Reveal delay={0.18}>
            <div className="flex h-full min-h-[120px] flex-col items-center justify-center gap-2 rounded-xl border border-line bg-white px-4 py-6 text-center transition-colors hover:border-ink/20">
              <p className="text-[1.05rem] font-semibold text-ink">Tiendas naturistas</p>
              <p className="text-[0.7rem] font-medium tracking-[0.12em] text-muted uppercase">
                Canal mayorista
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22}>
          <p className="mt-7 text-[0.75rem] text-muted/70">
            MasterShop y Droppi son marcas de sus respectivos titulares; se
            mencionan como plataformas donde Nature Smith opera como bodega.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
