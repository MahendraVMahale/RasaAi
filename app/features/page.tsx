import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Zap,
  Shield,
  Clock,
  BarChart3,
  Database,
  Cpu,
  Wifi,
  FlaskConical,
  Settings,
  Monitor,
  Download,
} from "lucide-react"
import Image from "next/image"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6 text-balance">Features & Specifications</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive technical specifications and advanced features that make Rasa-AI the industry leader in herbal
            quality assurance technology.
          </p>
        </div>
      </section>

      {/* Key Features Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Advanced capabilities designed for professional herbal quality assurance applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Rapid Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Complete quality assessment in under 5 minutes per sample
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-lg">High Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {"> 95% correlation with traditional analytical methods"}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">Cloud Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Seamless data sync with global quality database</p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-lg">Real-time Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Instant quality reports with detailed analytics</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Technical Specifications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Detailed technical specifications for the Rasa-AI electronic tongue system.
            </p>
          </div>

          <Tabs defaultValue="hardware" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="hardware">Hardware</TabsTrigger>
              <TabsTrigger value="software">Software</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="connectivity">Connectivity</TabsTrigger>
            </TabsList>

            <TabsContent value="hardware" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Cpu className="h-5 w-5 mr-2 text-primary" />
                      Sensor Array
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Number of Sensors:</span>
                        <span className="font-medium">7 electrochemical sensors</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sensor Type:</span>
                        <span className="font-medium">Potentiometric</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Detection Range:</span>
                        <span className="font-medium">10⁻⁶ to 10⁻¹ M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Response Time:</span>
                        <span className="font-medium">&lt; 30 seconds</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Operating Temperature:</span>
                        <span className="font-medium">15-35°C</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="h-5 w-5 mr-2 text-primary" />
                      Physical Specifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Dimensions:</span>
                        <span className="font-medium">45 × 30 × 15 cm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Weight:</span>
                        <span className="font-medium">12 kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Power Supply:</span>
                        <span className="font-medium">100-240V AC, 50-60Hz</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Power Consumption:</span>
                        <span className="font-medium">150W maximum</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sample Volume:</span>
                        <span className="font-medium">50-200 mL</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="software" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Monitor className="h-5 w-5 mr-2 text-primary" />
                      Analysis Software
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Operating System:</span>
                        <span className="font-medium">Windows 10/11, Linux</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Interface:</span>
                        <span className="font-medium">Intuitive GUI</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Data Export:</span>
                        <span className="font-medium">CSV, PDF, XML</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Languages:</span>
                        <span className="font-medium">English, Hindi, Chinese</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Updates:</span>
                        <span className="font-medium">Automatic OTA updates</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FlaskConical className="h-5 w-5 mr-2 text-primary" />
                      AI/ML Engine
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Algorithm Type:</span>
                        <span className="font-medium">Deep Neural Networks</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Training Data:</span>
                        <span className="font-medium">{"> 10,000 samples"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Model Updates:</span>
                        <span className="font-medium">Continuous learning</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Processing:</span>
                        <span className="font-medium">Edge + Cloud hybrid</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Validation:</span>
                        <span className="font-medium">Cross-validated models</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                      Analytical Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Accuracy:</span>
                        <span className="font-medium">{"> 95% vs LC-MS"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Precision (RSD):</span>
                        <span className="font-medium">&lt;5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Detection Limit:</span>
                        <span className="font-medium">μg/mL level</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Linear Range:</span>
                        <span className="font-medium">3-4 orders of magnitude</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Reproducibility:</span>
                        <span className="font-medium">{"> 98% between instruments"}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      Operational Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Analysis Time:</span>
                        <span className="font-medium">&lt;5 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sample Throughput:</span>
                        <span className="font-medium">{"> 50 samples/day"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Calibration Frequency:</span>
                        <span className="font-medium">Weekly</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Maintenance:</span>
                        <span className="font-medium">Monthly cleaning</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sensor Lifetime:</span>
                        <span className="font-medium">{"> 12 months"}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="connectivity" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wifi className="h-5 w-5 mr-2 text-primary" />
                      Network & Connectivity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">WiFi:</span>
                        <span className="font-medium">802.11ac, dual-band</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Ethernet:</span>
                        <span className="font-medium">Gigabit Ethernet</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">USB:</span>
                        <span className="font-medium">USB 3.0 ports (2x)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Cloud Sync:</span>
                        <span className="font-medium">Real-time data backup</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Security:</span>
                        <span className="font-medium">AES-256 encryption</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Database className="h-5 w-5 mr-2 text-primary" />
                      Data Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Local Storage:</span>
                        <span className="font-medium">1TB SSD</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Cloud Storage:</span>
                        <span className="font-medium">Unlimited</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Data Retention:</span>
                        <span className="font-medium">{"> 10 years"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Backup:</span>
                        <span className="font-medium">Automatic daily backup</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Compliance:</span>
                        <span className="font-medium">21 CFR Part 11 ready</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Advanced Features</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge capabilities that set Rasa-AI apart from traditional testing methods.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Multi-Rasa Detection</h3>
                  <p className="text-muted-foreground mb-3">
                    Simultaneously detects all six Ayurvedic tastes (Sweet, Sour, Salty, Bitter, Pungent, Astringent) in
                    a single analysis.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Sweet (Madhura)</Badge>
                    <Badge variant="secondary">Sour (Amla)</Badge>
                    <Badge variant="secondary">Salty (Lavana)</Badge>
                    <Badge variant="secondary">Bitter (Tikta)</Badge>
                    <Badge variant="secondary">Pungent (Katu)</Badge>
                    <Badge variant="secondary">Astringent (Kashaya)</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Adulteration Detection</h3>
                  <p className="text-muted-foreground mb-3">
                    Advanced pattern recognition algorithms identify even trace amounts of adulterants and contaminants.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Synthetic Compounds</Badge>
                    <Badge variant="outline">Heavy Metals</Badge>
                    <Badge variant="outline">Pesticide Residues</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Predictive Analytics</h3>
                  <p className="text-muted-foreground mb-3">
                    Machine learning models predict shelf life, stability, and optimal storage conditions based on taste
                    profiles.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Shelf Life Prediction</Badge>
                    <Badge variant="outline">Stability Analysis</Badge>
                    <Badge variant="outline">Storage Optimization</Badge>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Batch Comparison</h3>
                  <p className="text-muted-foreground mb-3">
                    Compare current samples against historical data to ensure batch-to-batch consistency and quality
                    control.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Historical Comparison</Badge>
                    <Badge variant="outline">Trend Analysis</Badge>
                    <Badge variant="outline">Quality Drift Detection</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/advanced-electronic-tongue-device-with-sensors.jpg"
                alt="Advanced Electronic Tongue Device with Multiple Sensors"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Compliance & Standards</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Rasa-AI meets international quality and regulatory standards for pharmaceutical and nutraceutical
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg text-primary">ISO 9001:2015</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Quality Management Systems</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg text-primary">ISO 13485:2016</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Medical Devices Quality Management</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg text-primary">21 CFR Part 11</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Electronic Records & Signatures</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg text-primary">GMP Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Good Manufacturing Practices</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Advanced Quality Assurance?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Get detailed specifications and see how Rasa-AI can transform your quality control processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Specifications
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Request Technical Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
