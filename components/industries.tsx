import { Building2, HardHat, Briefcase, ShoppingCart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const industries = [
  {
    icon: HardHat,
    title: 'Construction & Engineering',
    description: 'Manage complex FIDIC contracts, track claims, monitor delays, and draft formal correspondence automatically.',
  },
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'Streamline lease abstraction, track critical renewal dates, and manage property maintenance obligations.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Legal',
    description: 'Accelerate NDA reviews, standardize employment agreements, and ensure compliance across all entities.',
  },
  {
    icon: ShoppingCart,
    title: 'Procurement',
    description: 'Optimize vendor agreements, track deliverables, and monitor supply chain compliance obligations.',
  },
]

export function Industries() {
  return (
    <section id='foryou' className="relative px-6 py-20 md:py-32 border-t border-border/40 bg-muted/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Tailored for Your Industry
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Specialized AI models trained to understand the nuances of your specific sector
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon
            return (
              <Card key={index} className="border-border/60 bg-card/50 hover:bg-card/80 transition-colors backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon size={24} className="text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
