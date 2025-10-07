import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Users, Award, Globe, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              Bridging Ancient Wisdom with Modern Innovation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Founded on the principle that traditional Ayurvedic knowledge combined with cutting-edge AI technology can
              revolutionize herbal quality assurance for the modern world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Award className="w-4 h-4 mr-2" />
                ISO 9001:2015 Certified
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Globe className="w-4 h-4 mr-2" />
                Global Reach
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Users className="w-4 h-4 mr-2" />
                Expert Team
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Rasa-AI was born from a simple yet profound realization: the ancient science of Ayurveda, with its
                  sophisticated understanding of taste (Rasa) and its therapeutic properties, could be enhanced and
                  standardized using modern artificial intelligence and sensor technology.
                </p>
                <p>
                  Our founders, a team of Ayurvedic practitioners, food scientists, and AI researchers, recognized that
                  while traditional methods of herbal quality assessment were deeply insightful, they lacked the
                  consistency and scalability needed for modern pharmaceutical and nutraceutical industries.
                </p>
                <p>
                  By developing the world's first AI-powered electronic tongue specifically designed for herbal
                  analysis, we've created a bridge between ancient wisdom and modern quality assurance standards.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/ayurvedic-herbs-and-modern-laboratory-equipment.jpg"
                alt="Traditional Ayurvedic herbs alongside modern laboratory equipment"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Purpose</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Driven by a commitment to excellence, innovation, and the preservation of traditional knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Mission</h3>
                <p className="text-muted-foreground">
                  To revolutionize herbal quality assurance by combining ancient Ayurvedic wisdom with cutting-edge AI
                  technology, ensuring consistent, reliable, and scientifically-backed quality control for the global
                  herbal industry.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Vision</h3>
                <p className="text-muted-foreground">
                  To become the global standard for herbal quality assessment, bridging traditional knowledge systems
                  with modern scientific rigor to ensure the highest quality herbal products reach consumers worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Values</h3>
                <ul className="text-muted-foreground space-y-2 text-left">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 mr-2 flex-shrink-0" />
                    Respect for traditional knowledge
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 mr-2 flex-shrink-0" />
                    Scientific rigor and accuracy
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 mr-2 flex-shrink-0" />
                    Innovation with purpose
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-accent mt-1 mr-2 flex-shrink-0" />
                    Commitment to quality
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our diverse team brings together expertise in Ayurveda, food science, artificial intelligence, and
              business leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Image
                  src="/professional-headshot-of-ayurvedic-doctor-and-c.jpg"
                  alt="Dr. Priya Sharma, CEO & Co-Founder"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Dr. Priya Sharma</h3>
                <p className="text-primary font-medium mb-2">CEO & Co-Founder</p>
                <p className="text-sm text-muted-foreground mb-4">
                  BAMS, PhD in Ayurvedic Medicine. 15+ years in traditional medicine and modern pharmaceutical
                  integration.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">
                    Ayurveda
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Leadership
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Strategy
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Image
                  src="/professional-headshot-of-ai-researcher-and-cto.jpg"
                  alt="Dr. Rajesh Kumar, CTO & Co-Founder"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Dr. Rajesh Kumar</h3>
                <p className="text-primary font-medium mb-2">CTO & Co-Founder</p>
                <p className="text-sm text-muted-foreground mb-4">
                  PhD in AI/ML, IIT Delhi. Former senior researcher at Google AI with 20+ patents in sensor technology.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">
                    AI/ML
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Sensors
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Innovation
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Image
                  src="/professional-headshot-of-food-scientist-and-ch.jpg"
                  alt="Dr. Sarah Chen, Chief Science Officer"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Dr. Sarah Chen</h3>
                <p className="text-primary font-medium mb-2">Chief Science Officer</p>
                <p className="text-sm text-muted-foreground mb-4">
                  PhD in Food Science, UC Davis. 12+ years in flavor chemistry and sensory analysis at major food
                  companies.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline" className="text-xs">
                    Food Science
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Chemistry
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    R&D
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Key milestones in our mission to revolutionize herbal quality assurance
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-right">
                  <Badge variant="secondary" className="px-3 py-1">
                    2019
                  </Badge>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2">Company Founded</h3>
                  <p className="text-muted-foreground">
                    Rasa-AI founded by a team of Ayurvedic practitioners and AI researchers with a vision to modernize
                    herbal quality assessment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-right">
                  <Badge variant="secondary" className="px-3 py-1">
                    2020
                  </Badge>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2">First Prototype</h3>
                  <p className="text-muted-foreground">
                    Developed and tested the first AI-powered electronic tongue prototype specifically designed for
                    herbal analysis.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-right">
                  <Badge variant="secondary" className="px-3 py-1">
                    2021
                  </Badge>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2">Series A Funding</h3>
                  <p className="text-muted-foreground">
                    Secured $5M in Series A funding to accelerate product development and expand the team.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-right">
                  <Badge variant="secondary" className="px-3 py-1">
                    2022
                  </Badge>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2">First Commercial Deployment</h3>
                  <p className="text-muted-foreground">
                    Successfully deployed our technology at leading pharmaceutical companies, processing over 10,000
                    herbal samples.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-right">
                  <Badge variant="secondary" className="px-3 py-1">
                    2023
                  </Badge>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2">ISO Certification</h3>
                  <p className="text-muted-foreground">
                    Achieved ISO 9001:2015 certification and expanded to serve clients across 15 countries.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-right">
                  <Badge variant="secondary" className="px-3 py-1">
                    2024
                  </Badge>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2">Next Generation Platform</h3>
                  <p className="text-muted-foreground">
                    Launched our advanced multi-Rasa detection platform with enhanced AI capabilities and cloud
                    integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Join Us in Revolutionizing Herbal Quality</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Whether you're a pharmaceutical company, research institution, or quality control laboratory, discover how
              Rasa-AI can transform your herbal analysis processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 bg-transparent">
                <Link href="/technology">Learn More About Our Technology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
