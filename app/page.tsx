import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Zap, Shield, Target, Users, GraduationCap, Building } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 text-balance">
                Objective Herbal Analysis is Here.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Rasa-AI combines Electronic Tongue technology with AI to deliver instant, reliable quality assessment of
                your herbal raw materials. Say goodbye to subjectivity.
              </p>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-4"
              >
                Request a Live Demo
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/modern-ai-device-in-clean-laboratory-setting.jpg"
                alt="Rasa-AI Electronic Tongue Device"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* As Featured In Section */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-muted-foreground mb-8">As Featured In</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-lg font-semibold">PharmaTech Weekly</div>
            <div className="text-lg font-semibold">Journal of Ayurveda</div>
            <div className="text-lg font-semibold">ISO</div>
            <div className="text-lg font-semibold">GMP</div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                <p className="text-muted-foreground">
                  Subjective, inconsistent quality checks leading to batch variation and adulteration.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-secondary">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Solution</h3>
                <p className="text-muted-foreground">
                  An AI-powered e-tongue that provides an objective, digital fingerprint of each sample's Rasa and
                  chemical profile.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">The Benefit</h3>
                <p className="text-muted-foreground">
                  Ensure authenticity, guarantee consistency, and build consumer trust with data-driven quality control.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Prepare Sample</h3>
              <p className="text-muted-foreground">Simple liquid herbal sample preparation in minutes.</p>
              <Image
                src="/liquid-herbal-sample-in-laboratory-vial.jpg"
                alt="Sample Preparation"
                width={200}
                height={200}
                className="mx-auto mt-4 rounded-lg"
              />
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Analyze with Rasa-AI</h3>
              <p className="text-muted-foreground">
                AI-powered sensor analysis provides instant digital fingerprinting.
              </p>
              <Image
                src="/electronic-sensor-dipping-into-sample-with-data-vi.jpg"
                alt="Analysis Process"
                width={200}
                height={200}
                className="mx-auto mt-4 rounded-lg"
              />
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Instant Results</h3>
              <p className="text-muted-foreground">
                Comprehensive report with Pass/Fail, taste profile, and adulteration alerts.
              </p>
              <Image
                src="/digital-dashboard-showing-test-results-and-graphs.jpg"
                alt="Results Dashboard"
                width={200}
                height={200}
                className="mx-auto mt-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-primary">Target Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <Building className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Ayurvedic & Herbal Manufacturing</h3>
                <p className="text-sm text-muted-foreground">Quality control for traditional medicine producers</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Nutraceuticals</h3>
                <p className="text-sm text-muted-foreground">Supplement industry quality assurance</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Regulatory & Pharmacopeia</h3>
                <p className="text-sm text-muted-foreground">Standards development and compliance</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <GraduationCap className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Academic Research</h3>
                <p className="text-sm text-muted-foreground">University and research institution applications</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl lg:text-3xl font-light mb-8 text-balance">
            "Rasa-AI has transformed our QC process. We can now screen raw materials in minutes, not days. It's a
            game-changer."
          </blockquote>
          <cite className="text-primary-foreground/80">— Head of Quality, Reputable Herbal Co.</cite>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-balance">
            Ready to Standardize Your Quality Control?
          </h2>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary text-lg px-8 py-4"
          >
            Request a Live Demo
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
