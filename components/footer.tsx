import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <h3 className="font-serif text-xl font-semibold text-background">
                  Yuliany Idawati, S.H.
                </h3>
                <p className="text-background/60 text-sm">Notaris di Bandung, Jawa Barat</p>
              </div>
              <p className="text-background/60 text-sm leading-relaxed">
                Memberikan layanan hukum yang terpercaya dengan profesionalisme dan integritas tinggi.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-medium text-background mb-4">Navigasi</h4>
              <nav className="flex flex-col gap-2">
                <Link href="#tentang" className="text-sm text-background/60 hover:text-accent transition-colors">
                  Tentang Kami
                </Link>
                <Link href="#layanan" className="text-sm text-background/60 hover:text-accent transition-colors">
                  Layanan
                </Link>
                <Link href="#keunggulan" className="text-sm text-background/60 hover:text-accent transition-colors">
                  Keunggulan
                </Link>
                <Link href="#kontak" className="text-sm text-background/60 hover:text-accent transition-colors">
                  Kontak
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium text-background mb-4">Kontak</h4>
              <div className="space-y-2 text-sm text-background/60">
                <p>Jl. Terusan Jakarta No.30C, Cicaheum</p>
                <p>Kec. Kiaracondong, Kota Bandung 40281</p>
                <p className="mt-3">(022) 7231014</p>
                <p>WA: 0817 2314 288</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-background/50">
                © {currentYear} Yuliany Idawati, S.H. Hak Cipta Dilindungi.
              </p>
              <p className="text-xs text-background/40 max-w-xl text-center md:text-right">
                Informasi di situs ini bersifat umum dan tidak dapat dianggap sebagai nasihat hukum. 
                Konsultasikan kebutuhan hukum Anda secara langsung dengan kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
