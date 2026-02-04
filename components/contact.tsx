import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat Kantor",
    content: "Jl. Terusan Jakarta No.30C, Cicaheum\nKec. Kiaracondong, Kota Bandung\nJawa Barat 40281\n(Dekat Antapani & Arcamanik)",
  },
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    content: "(022) 7231014\n0817 2314 288",
    href: "https://wa.me/628172314288",
  },
  {
    icon: Mail,
    title: "Email",
    content: "Hubungi kami via WhatsApp\nuntuk konsultasi",
    href: "https://wa.me/628172314288",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Jumat: 09.00 - 16.00 WIB\nSabtu & Minggu: Tutup",
  },
]

export function Contact() {
  return (
    <section id="kontak" className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Hubungi Kami
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary-foreground mb-4 text-balance">
              Notaris PPAT Terdekat di Bandung Antapani Arcamanik
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Konsultasi gratis untuk layanan notaris dan PPAT di wilayah Bandung Timur. Tim berpengalaman siap membantu Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/10"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/20 mb-4">
                    <info.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-medium text-primary-foreground mb-2">{info.title}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm text-primary-foreground/70 whitespace-pre-line hover:text-accent transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-primary-foreground/70 whitespace-pre-line">
                      {info.content}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg overflow-hidden border border-primary-foreground/10 min-h-[300px] lg:min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9029774168887!2d107.63847527461944!3d-6.901973593096397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c5e8866e5%3A0x37be7ac9d575f8a!2sJl.%20Terusan%20Jakarta%20No.30C%2C%20Cicaheum%2C%20Kec.%20Kiaracondong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040281!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kantor Notaris Yuliany Idawati, S.H. di Bandung"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-8"
            >
              <a href="https://wa.me/628172314288" target="_blank" rel="noopener noreferrer">
                Hubungi via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
