import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-tight">Bells University</span>
                <span className="text-xs text-primary-foreground/70 leading-tight">Scholarship Portal</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 max-w-xs">
              Helping students discover and secure scholarships for their educational journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/scholarships" className="hover:text-accent transition-colors">
                  Browse Scholarships
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About & FAQ
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-accent transition-colors">
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="/saved" className="hover:text-accent transition-colors">
                  Saved Scholarships
                </Link>
              </li>
            </ul>
          </div>

          {/* Scholarship Types */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Scholarship Types</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/scholarships?type=university" className="hover:text-accent transition-colors">
                  University Scholarships
                </Link>
              </li>
              <li>
                <Link to="/scholarships?type=government" className="hover:text-accent transition-colors">
                  Government Scholarships
                </Link>
              </li>
              <li>
                <Link to="/scholarships?type=private" className="hover:text-accent transition-colors">
                  Private Scholarships
                </Link>
              </li>
              <li>
                <Link to="/scholarships?type=international" className="hover:text-accent transition-colors">
                  International Scholarships
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Bells University of Technology, Ota, Ogun State, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:scholarships@bellsuniversity.edu.ng" className="hover:text-accent transition-colors">
                  scholarships@bellsuniversity.edu.ng
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+234 803 123 4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2025 Bells University of Technology. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
