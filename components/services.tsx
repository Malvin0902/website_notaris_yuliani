import { FileText, Home, Building2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: FileText,
    title: "Notaris",
    description: "Pembuatan akta autentik untuk berbagai keperluan hukum",
    items: [
      "Akta Pendirian PT, CV, Firma",
      "Akta Perjanjian & Kontrak",
      "Akta Wasiat & Waris",
      "Perubahan Anggaran Dasar",
      "Akta Kuasa & Pernyataan",
    ],
  },
  {
    icon: Home,
    title: "PPAT",
    description: "Layanan pembuatan akta terkait hak atas tanah",
    items: [
      "Akta Jual Beli Tanah & Bangunan",
      "Akta Hibah",
      "Akta Pembagian Hak Bersama",
      "Balik Nama Sertifikat",
      "Akta Pemberian Hak Tanggungan",
    ],
  },
  {
    icon: Building2,
    title: "NPAK",
    description: "Layanan khusus untuk badan usaha koperasi",
    items: [
      "Pendirian Koperasi",
      "Perubahan Anggaran Dasar Koperasi",
      "Akta Rapat Anggota",
      "Pembubaran Koperasi",
      "Konsultasi Hukum Koperasi",
    ],
  },
]

export function Services() {
  return (
    <section id="layanan" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Layanan Kami
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4 text-balance">
              Layanan Notaris PPAT Terlengkap di Bandung
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Melayani Antapani, Arcamanik, dan seluruh Bandung Timur dengan layanan notaris dan PPAT profesional untuk kebutuhan hukum Anda
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary mb-4">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
