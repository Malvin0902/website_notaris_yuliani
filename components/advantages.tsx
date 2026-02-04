import { GraduationCap, Clock, Lock, Scale } from "lucide-react"

const advantages = [
  {
    icon: GraduationCap,
    title: "Profesional dan Berpengalaman",
    description:
      "Tim kami terdiri dari tenaga ahli hukum yang berpengalaman dan terus mengikuti perkembangan regulasi terbaru di Indonesia.",
  },
  {
    icon: Clock,
    title: "Proses Transparan dan Tepat Waktu",
    description:
      "Kami berkomitmen untuk memberikan layanan yang transparan dengan estimasi waktu yang jelas dan penyelesaian yang tepat waktu.",
  },
  {
    icon: Lock,
    title: "Kerahasiaan Klien Terjamin",
    description:
      "Informasi dan data klien dijaga kerahasiaannya sesuai dengan kode etik profesi dan peraturan yang berlaku.",
  },
  {
    icon: Scale,
    title: "Sesuai Peraturan Perundang-undangan",
    description:
      "Setiap layanan yang kami berikan senantiasa mengacu pada peraturan perundang-undangan yang berlaku di Indonesia.",
  },
]

export function Advantages() {
  return (
    <section id="keunggulan" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Keunggulan Kami
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4 text-balance">
              Mengapa Memilih Kami
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kepercayaan klien adalah prioritas utama kami dalam memberikan layanan hukum terbaik
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="flex gap-5 p-6 bg-secondary rounded-lg border border-border hover:border-primary/20 transition-colors"
              >
                <div className="shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary">
                    <advantage.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
