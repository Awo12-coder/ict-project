import { Link } from "react-router-dom";
import { Heart, Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScholarshipCard } from "@/components/scholarships/ScholarshipCard";
import { scholarships } from "@/data/scholarships";
import { useSavedScholarships } from "@/hooks/useSavedScholarships";

export default function Saved() {
  const { savedIds, removeSaved } = useSavedScholarships();

  const savedScholarships = scholarships.filter((s) => savedIds.includes(s.id));

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="h-8 w-8 text-accent fill-accent" />
            <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
              Saved Scholarships
            </h1>
          </div>
          <p className="text-primary-foreground/80">
            Keep track of scholarships you're interested in applying for.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container">
          {savedScholarships.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  You have <span className="font-medium text-foreground">{savedScholarships.length}</span> saved scholarship
                  {savedScholarships.length !== 1 ? "s" : ""}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive"
                  onClick={() => savedIds.forEach((id) => removeSaved(id))}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedScholarships.map((scholarship, index) => (
                  <div
                    key={scholarship.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <ScholarshipCard scholarship={scholarship} featured={scholarship.featured} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Heart className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-semibold mb-2">No saved scholarships yet</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Browse scholarships and click the heart icon to save them for later. Your saved scholarships will appear here.
              </p>
              <Link to="/scholarships">
                <Button className="gap-2">
                  Browse Scholarships
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
