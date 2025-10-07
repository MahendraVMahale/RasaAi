import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  FlaskConical,
  ShieldCheck,
  Truck,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  Factory,
  GraduationCap,
  Stethoscope,
} from "lucide-react"
import Image from "next/image"

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 text-balance">
            Applications Across Industries
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From pharmaceutical manufacturing to research institutions, Rasa-AI technology transforms herbal quality
            assurance across diverse sectors.
          </p>
        </div>
      </section>

      {/* Industry Applications Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Industry Applications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our technology serves multiple industries with tailored solutions for each sector's unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pharmaceutical Manufacturing */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Factory className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">Pharmaceutical Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ensure consistent quality of herbal raw materials for pharmaceutical formulations and supplements.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Raw material verification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Batch-to-batch consistency</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Regulatory compliance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Nutraceutical Companies */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Stethoscope className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl text-primary">Nutraceutical Companies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Validate the potency and authenticity of herbal ingredients in dietary supplements and functional
                  foods.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Ingredient authentication</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Potency verification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Label claim validation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Research Institutions */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">Research Institutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Accelerate herbal research with rapid, standardized quality assessment for academic and clinical
                  studies.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Standardized protocols</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Rapid screening</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Data reproducibility</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quality Control Labs */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <FlaskConical className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl text-primary">Quality Control Labs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Streamline testing workflows with automated quality assessment and comprehensive reporting.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Automated testing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Detailed reporting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Workflow integration</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Supply Chain Management */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">Supply Chain Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ensure quality throughout the supply chain from cultivation to final product distribution.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Supplier verification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Incoming inspection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Traceability</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Regulatory Bodies */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl text-primary">Regulatory Bodies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Support regulatory oversight with standardized, scientifically validated quality assessment methods.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Standardized methods</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Scientific validation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Compliance monitoring</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Key Use Cases</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how Rasa-AI technology addresses critical challenges in herbal quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Raw Material Verification */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Raw Material Verification</h3>
                  <p className="text-muted-foreground mb-4">
                    Instantly verify the identity and quality of incoming herbal raw materials before they enter your
                    production process.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2">
                      Species Authentication
                    </Badge>
                    <Badge variant="secondary" className="mr-2">
                      Grade Classification
                    </Badge>
                    <Badge variant="secondary">Adulteration Detection</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Batch Release Testing</h3>
                  <p className="text-muted-foreground mb-4">
                    Ensure every batch meets quality specifications before release to market with rapid, comprehensive
                    testing.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2">
                      Quality Scoring
                    </Badge>
                    <Badge variant="secondary" className="mr-2">
                      Consistency Check
                    </Badge>
                    <Badge variant="secondary">Compliance Verification</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Supplier Qualification</h3>
                  <p className="text-muted-foreground mb-4">
                    Evaluate and qualify new suppliers based on consistent quality metrics and performance data.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2">
                      Performance Tracking
                    </Badge>
                    <Badge variant="secondary" className="mr-2">
                      Quality Benchmarking
                    </Badge>
                    <Badge variant="secondary">Risk Assessment</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <Image
                src="/quality-control-laboratory-with-herbal-samples.jpg"
                alt="Quality Control Laboratory with Herbal Samples"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits by Industry */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Benefits by Industry</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each industry gains specific advantages from implementing Rasa-AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Factory className="h-5 w-5 mr-2" />
                  Manufacturing Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                    <span>Reduce testing time from days to minutes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                    <span>Lower cost per test by 70%</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                    <span>Eliminate batch rejections due to quality issues</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                    <span>Improve supplier relationships through data transparency</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  Research Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                    <span>Standardize quality assessment across studies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                    <span>Increase sample throughput by 10x</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                    <span>Generate reproducible, publishable data</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-4 w-4 text-secondary" />
                    <span>Access global database for comparative studies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Quality Assurance?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Discover how Rasa-AI can revolutionize quality control in your industry with a personalized demonstration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Schedule a Demo
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
