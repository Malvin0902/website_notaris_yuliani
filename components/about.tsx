import { Award, ShieldCheck, BookOpen, Users } from "lucide-react"

const highlights = [
  {
    icon: Award,
    title: "Berpengalaman",
    description: "Lebih dari satu dekade melayani kebutuhan hukum masyarakat Indonesia",
  },
  {
    icon: ShieldCheck,
    title: "Integritas Tinggi",
    description: "Menjunjung tinggi etika profesi dan kejujuran dalam setiap layanan",
  },
  {
    icon: BookOpen,
    title: "Ketelitian",
    description: "Memastikan setiap dokumen disusun dengan cermat dan akurat",
  },
  {
    icon: Users,
    title: "Kerahasiaan",
    description: "Menjamin kerahasiaan informasi dan data klien sepenuhnya",
  },
]

export function About() {
  return (
    <section id="tentang" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
                Tentang Kami
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-6 text-balance">
                Yuliani Idawati, S.H., Sp.N.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sebagai Notaris, PPAT (Pejabat Pembuat Akta Tanah), dan NPAK (Notaris Pembuat Akta Koperasi) yang berlisensi dan berpengalaman di Bandung, Yuliani Idawati, S.H., Sp.N. berkomitmen untuk memberikan layanan hukum terbaik dengan standar profesionalisme tertinggi.
                </p>
                <p>
                  Berlokasi strategis di Bandung, kantor kami mudah diakses dari berbagai wilayah di kota Bandung. Dengan pemahaman mendalam tentang hukum Indonesia dan regulasi properti, kami siap membantu Anda dalam berbagai kebutuhan legal, mulai dari akta jual beli tanah, pendirian badan usaha, hingga layanan koperasi.
                </p>
                <p>
                  Kami memahami pentingnya kepercayaan dalam setiap transaksi hukum. Oleh karena itu, kami selalu mengutamakan transparansi, kepatuhan terhadap peraturan Kementerian Agraria dan Tata Ruang, serta kerahasiaan klien dalam setiap layanan notaris dan PPAT yang kami berikan.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-secondary p-6 rounded-lg border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
