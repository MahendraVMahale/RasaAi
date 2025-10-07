import Link from "next/link"
import { Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold">Rasa-AI</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Bridging Ancient Wisdom with Modern Science to revolutionize herbal quality assurance through AI-powered
              electronic tongue technology.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/applications" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>sales@rasa-ai.com</li>
              <li>+91 [Phone Number]</li>
              <li>Pune, Maharashtra, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 Rasa-AI Technologies. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
