import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:py-32">
      {/* Grid background effect */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="mx-auto max-w-4xl text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1 mb-6 backdrop-blur-sm">
          <Sparkles size={14} className="text-primary" />
          <span className="text-xs font-medium text-muted-foreground">AI-Powered Contract Intelligence</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance mb-6">
          Contract Intelligence <span className="text-primary">Reimagined</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
          Unlock the power of AI to analyze contracts in seconds. Identify key events, track deadlines, manage correspondence, and stay ahead of critical dates—all in one intelligent platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-base">
            Start Free Trial
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-card/50 text-base hover:text-gray-800"
          >
            Watch Demo
          </Button>
        </div>

        {/* Trust line */}
        <p className="text-sm text-muted-foreground mt-8">
          No credit card required • Free for 14 days • Enterprise support available
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-32 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
