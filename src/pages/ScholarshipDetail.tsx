import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  DollarSign,
  GraduationCap,
  Building2,
  MapPin,
  Mail,
  ExternalLink,
  CheckCircle,
  FileText,
  Heart,
  Share2,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Layout } from "@/components/layout/Layout";
import { scholarships } from "@/data/scholarships";
import { useSavedScholarships } from "@/hooks/useSavedScholarships";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function ScholarshipDetail() {
  const { id } = useParams();
  const { isSaved, toggleSave } = useSavedScholarships();

  const scholarship = scholarships.find((s) => s.id === id);

  if (!scholarship) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Scholarship Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The scholarship you're looking for doesn't exist.
          </p>
          <Link to="/scholarships">
            <Button>Browse Scholarships</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const saved = isSaved(scholarship.id);

  const formatAmount = (amount: number, currency: string) => {
    if (currency === "NGN") {
      return `₦${amount.toLocaleString()}`;
    }
    return `$${amount.toLocaleString()}`;
  };

  const formatDeadline = (deadline: string) => {
    const date = new Date(deadline);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return { text: "Expired", urgent: true, days: diffDays };
    if (diffDays <= 7) return { text: `${diffDays} days left`, urgent: true, days: diffDays };
    if (diffDays <= 30) return { text: `${diffDays} days left`, urgent: false, days: diffDays };
    return {
      text: date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }),
      urgent: false,
      days: diffDays,
    };
  };

  const deadline = formatDeadline(scholarship.deadline);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: scholarship.title,
        text: scholarship.description,
        url: window.location.href,
      });
    } catch {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const providerTypeColors = {
    university: "bg-primary/10 text-primary",
    government: "bg-success/10 text-success",
    private: "bg-accent/10 text-accent-foreground",
    international: "bg-purple-100 text-purple-700",
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-8 md:py-12">
        <div className="container">
          <Link
            to="/scholarships"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Scholarships
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge className={providerTypeColors[scholarship.providerType]}>
                  {scholarship.providerType.charAt(0).toUpperCase() + scholarship.providerType.slice(1)}
                </Badge>
                {scholarship.featured && (
                  <Badge className="bg-accent text-accent-foreground">⭐ Featured</Badge>
                )}
                <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
                  {scholarship.amountType === "full" ? "Full Funding" : "Partial Funding"}
                </Badge>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary-foreground">
                {scholarship.title}
              </h1>

              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Building2 className="h-4 w-4" />
                <span>{scholarship.provider}</span>
              </div>
            </div>

            <div className="flex gap-2 shrink-0">
              <Button
                variant="outline"
                size="icon"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className={cn(
                  "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2",
                  saved && "bg-red-500/20 border-red-500/50"
                )}
                onClick={() => toggleSave(scholarship.id)}
              >
                <Heart className={cn("h-4 w-4", saved && "fill-current text-red-400")} />
                {saved ? "Saved" : "Save"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {scholarship.fullDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Eligibility */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Eligibility Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">
                      {scholarship.eligibility.level === "both"
                        ? "All Levels"
                        : scholarship.eligibility.level.charAt(0).toUpperCase() +
                          scholarship.eligibility.level.slice(1)}
                    </Badge>
                    {scholarship.eligibility.fields.map((field) => (
                      <Badge key={field} variant="outline">
                        {field}
                      </Badge>
                    ))}
                  </div>
                  <Separator />
                  <ul className="space-y-2">
                    {scholarship.eligibility.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Application Process */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Application Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {scholarship.applicationProcess.map((step, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {/* Required Documents */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {scholarship.requiredDocuments.map((doc, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  {/* Amount */}
                  <div className="text-center pb-4 border-b">
                    <div className="text-sm text-muted-foreground mb-1">Scholarship Value</div>
                    <div className="text-3xl font-bold text-success">
                      {formatAmount(scholarship.amount, scholarship.currency)}
                    </div>
                    <Badge variant="secondary" className="mt-2">
                      {scholarship.amountType === "full" ? "Full Funding" : "Partial Funding"}
                    </Badge>
                  </div>

                  {/* Deadline */}
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg",
                        deadline.urgent ? "bg-destructive/10" : "bg-muted"
                      )}
                    >
                      <Calendar
                        className={cn("h-5 w-5", deadline.urgent ? "text-destructive" : "text-muted-foreground")}
                      />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Deadline</div>
                      <div className={cn("font-medium", deadline.urgent && "text-destructive")}>
                        {deadline.text}
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-medium">
                        {scholarship.location === "local" ? "Nigeria" : "International"}
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm text-muted-foreground">Contact</div>
                      <a
                        href={`mailto:${scholarship.contactEmail}`}
                        className="font-medium text-primary hover:underline truncate block"
                      >
                        {scholarship.contactEmail}
                      </a>
                    </div>
                  </div>

                  <Separator />

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <a href={scholarship.externalLink} target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full btn-gold gap-2">
                        Apply Now
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => toggleSave(scholarship.id)}
                    >
                      <Heart className={cn("h-4 w-4", saved && "fill-current text-red-500")} />
                      {saved ? "Remove from Saved" : "Save for Later"}
                    </Button>
                  </div>

                  {/* Tags */}
                  {scholarship.tags.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">Tags</div>
                        <div className="flex flex-wrap gap-1.5">
                          {scholarship.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
