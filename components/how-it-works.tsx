import { Card, CardContent } from '@/components/ui/card'
import { Upload, Zap, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    number: '1',
    title: 'Upload Contract',
    description: 'Simply upload any contract in PDF, DOCX, or image format',
  },
  {
    icon: Zap,
    number: '2',
    title: 'AI Analysis',
    description: 'Our AI instantly analyzes the document and extracts key information',
  },
  {
    icon: CheckCircle,
    number: '3',
    title: 'Take Action',
    description: 'Review insights, set reminders, and manage your obligations effortlessly',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-6 py-20 md:py-32 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <Card className="border-border/60 bg-card/50 backdrop-blur-sm h-full">
                  <CardContent className="pt-8">
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 text-primary font-bold mb-4">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <Icon size={32} className="text-primary mb-4" />

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary/60 to-transparent"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
