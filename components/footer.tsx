import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="uqud.ai logo" width={150} height={50} />
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered contract intelligence for modern legal teams.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Terms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Compliance</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 text-sm text-muted-foreground">
          <p>&copy; {currentYear} uqud.ai. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition">Twitter</a>
            <a href="#" className="hover:text-foreground transition">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
