import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Cpu, Database, FlaskConical, Zap } from "lucide-react"
import Image from "next/image"

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            Science Behind the Sensation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover how Rasa-AI combines cutting-edge electronic tongue technology with artificial intelligence to
            revolutionize herbal quality assessment.
          </p>
        </div>
      </section>

      {/* Electronic Tongue Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">The Electronic Tongue (E-Tongue)</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our multi-sensor array mimics human taste receptors with unprecedented precision. Each sensor is
                specifically designed to detect different taste profiles and threshold concentrations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">7-sensor electrochemical array (Potentiometric)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Detects all six Ayurvedic tastes (Rasa)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Sub-threshold sensitivity for trace compounds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Real-time electrochemical response</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/sensor-array-diagram-with-taste-receptors.jpg"
                alt="Electronic Tongue Sensor Array Diagram"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI/ML Core Engine Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">The AI/ML Core Engine</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our powerful AI analyzes the complex data from the sensors, transforming raw electrochemical signals into
              actionable insights.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 mb-16">
            <Card className="text-center w-full lg:w-auto lg:flex-1 max-w-xs">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Raw Sensor Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Multi-dimensional electrochemical signals from sensor array
                </p>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-muted-foreground rotate-90 lg:rotate-0" />
            </div>

            <Card className="text-center w-full lg:w-auto lg:flex-1 max-w-xs">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Feature Extraction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Advanced signal processing and pattern recognition</p>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-muted-foreground rotate-90 lg:rotate-0" />
            </div>

            <Card className="text-center w-full lg:w-auto lg:flex-1 max-w-xs">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">AI Pattern Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Machine learning algorithms identify quality markers</p>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-muted-foreground rotate-90 lg:rotate-0" />
            </div>

            <Card className="text-center w-full lg:w-auto lg:flex-1 max-w-xs">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-lg">Actionable Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Quality scores, authenticity verification, adulteration alerts
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key AI Functions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Classification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automatically categorizes samples by species, grade, and quality level using supervised learning
                  algorithms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Quantification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Measures concentration levels of key bioactive compounds and taste-active molecules with high
                  precision.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Anomaly Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Identifies adulterants, contaminants, and quality deviations through advanced outlier detection
                  methods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Phytochemical Correlation Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/correlation-graph-showing-bitterness-score-vs-co.jpg"
                alt="Correlation Graph: E-Tongue Bitterness Score vs LC-MS Compound Concentration"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Phytochemical Correlation</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We validate our e-tongue data with gold-standard analytical methods like HPTLC and LC-MS to ensure
                scientific accuracy and regulatory compliance.
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-lg mb-2">Validated Correlations</h3>
                  <p className="text-muted-foreground">
                    Our bitterness scores correlate with bitter compound concentrations measured by LC-MS with R² &gt;
                    0.95 accuracy.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-2">Scientific Credibility</h3>
                  <p className="text-muted-foreground">
                    Every taste profile is backed by quantitative phytochemical analysis, ensuring regulatory
                    acceptance.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="font-semibold text-lg mb-2">Continuous Validation</h3>
                  <p className="text-muted-foreground">
                    Regular cross-validation with reference methods maintains measurement traceability and accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Database Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">The Cloud Database: Network Effect</h2>
            <p className="text-xl max-w-4xl mx-auto text-primary-foreground/90 text-pretty">
              Every sample analyzed contributes to a growing, ever-smarter global library of herbal fingerprints,
              continuously improving accuracy for all users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardHeader>
                <CardTitle className="text-primary-foreground">Growing Database</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80">
                  Each analysis adds to our comprehensive library of authenticated herbal samples, creating an
                  ever-expanding reference database.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardHeader>
                <CardTitle className="text-primary-foreground">Collective Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80">
                  Machine learning algorithms improve with every sample, benefiting all users through enhanced pattern
                  recognition and accuracy.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardHeader>
                <CardTitle className="text-primary-foreground">Global Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80">
                  Contributing to the development of universal quality standards for herbal materials across different
                  regions and suppliers.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Learn More About Our Technology
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
