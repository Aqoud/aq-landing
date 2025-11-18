import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FileCheck, Calendar, Mail, AlertCircle, Zap, Shield } from 'lucide-react'

const features = [
  {
    icon: FileCheck,
    title: 'Smart Contract Analysis',
    description: 'AI instantly analyzes contracts and extracts critical information, obligations, and terms in seconds.',
  },
  {
    icon: Calendar,
    title: 'Deadline Tracking',
    description: 'Never miss an important deadline. Automatic alerts for renewal dates, payment schedules, and key events.',
  },
  {
    icon: Mail,
    title: 'Letter Management',
    description: 'Draft, receive, and track correspondence. AI assists in composing professional letters and responses.',
  },
  {
    icon: AlertCircle,
    title: 'Event Detection',
    description: 'Identify critical events within contracts automatically. From milestones to obligations, nothing slips through.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process contracts in real-time. From upload to analysis, get actionable insights instantly.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance. Your sensitive contract data stays secure and private.',
  },
]

export function Features() {
  return (
    <section id="features" className="relative px-6 py-20 md:py-32 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Powerful Features for Modern Legal Teams
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Everything you need to manage contracts with confidence and efficiency
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-border/60 bg-card/50 hover:bg-card/80 transition-colors backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon size={24} className="text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
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
