import { Link } from "react-router-dom";
import { Search, GraduationCap, Award, Globe, ArrowRight, TrendingUp, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/layout/Layout";
import { ScholarshipCard } from "@/components/scholarships/ScholarshipCard";
import { scholarships } from "@/data/scholarships";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const featuredScholarships = scholarships.filter((s) => s.featured).slice(0, 4);

const stats = [
  { icon: Award, value: "₦50M+", label: "Available Funding" },
  { icon: Users, value: "1,000+", label: "Students Helped" },
  { icon: BookOpen, value: "16+", label: "Active Scholarships" },
  { icon: Globe, value: "8+", label: "Countries" },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/scholarships?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
        
        <div className="container relative py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium animate-fade-up">
              <GraduationCap className="h-4 w-4" />
              <span>Bells University of Technology</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight animate-fade-up stagger-1">
              Discover Scholarships at{" "}
              <span className="gold-gradient">Bells University</span>{" "}
              and Beyond
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up stagger-2">
              Your gateway to funding opportunities. Explore local and international scholarships tailored for university students in Nigeria.
            </p>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto animate-fade-up stagger-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search scholarships, e.g., STEM, merit-based..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-white text-foreground border-0 shadow-lg"
                />
              </div>
              <Button type="submit" size="lg" className="btn-gold h-12 px-8">
                Search
              </Button>
            </form>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up stagger-4">
              <Link to="/scholarships">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 gap-2">
                  Browse All Scholarships
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" size="lg" className="text-white/80 hover:text-white hover:bg-white/10">
                  Create Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(210 40% 98%)" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background relative -mt-1">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-card border shadow-soft animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Scholarships */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 text-accent mb-2">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">Featured</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Top Scholarship Opportunities
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl">
                Handpicked scholarships with high funding amounts and upcoming deadlines.
              </p>
            </div>
            <Link to="/scholarships">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredScholarships.map((scholarship, index) => (
              <div key={scholarship.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ScholarshipCard scholarship={scholarship} featured />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
                Ready to Fund Your Education?
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Create your profile today and get personalized scholarship recommendations based on your field of study and eligibility.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/profile">
                  <Button size="lg" className="btn-gold px-8">
                    Create Your Profile
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
