import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="relative px-6 py-20 md:py-32 border-t border-border/40">
      <div className="mx-auto max-w-4xl text-center">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Ready to Transform Your Contract Management?
          </h2>
          <p className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed">
            Join hundreds of legal teams using uqud.ai to streamline their contract workflows and boost productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-base">
              Start Your Free Trial
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-card/50 hover:text-gray-800 text-base"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
