import { Link } from "react-router-dom";
import { Calendar, DollarSign, GraduationCap, Building2, MapPin, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Scholarship } from "@/data/scholarships";
import { cn } from "@/lib/utils";
import { useSavedScholarships } from "@/hooks/useSavedScholarships";

interface ScholarshipCardProps {
  scholarship: Scholarship;
  featured?: boolean;
}

export function ScholarshipCard({ scholarship, featured = false }: ScholarshipCardProps) {
  const { isSaved, toggleSave } = useSavedScholarships();
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

    if (diffDays < 0) return { text: "Expired", urgent: true };
    if (diffDays <= 7) return { text: `${diffDays} days left`, urgent: true };
    if (diffDays <= 30) return { text: `${diffDays} days left`, urgent: false };
    return { text: date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }), urgent: false };
  };

  const deadline = formatDeadline(scholarship.deadline);

  const providerTypeColors = {
    university: "bg-primary/10 text-primary border-primary/20",
    government: "bg-success/10 text-success border-success/20",
    private: "bg-accent/10 text-accent-foreground border-accent/20",
    international: "bg-purple-100 text-purple-700 border-purple-200",
  };

  return (
    <Card className={cn(
      "group card-hover overflow-hidden border",
      featured && "ring-2 ring-accent/50 bg-gradient-to-br from-accent/5 to-transparent"
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1 flex-1">
            {featured && (
              <Badge className="bg-accent text-accent-foreground mb-2">
                ⭐ Featured
              </Badge>
            )}
            <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
              {scholarship.title}
            </h3>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Building2 className="h-3.5 w-3.5" />
              <span className="line-clamp-1">{scholarship.provider}</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "shrink-0 h-8 w-8",
              saved && "text-red-500 hover:text-red-600"
            )}
            onClick={(e) => {
              e.preventDefault();
              toggleSave(scholarship.id);
            }}
          >
            <Heart className={cn("h-4 w-4", saved && "fill-current")} />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pb-3 space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {scholarship.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          <Badge variant="outline" className={providerTypeColors[scholarship.providerType]}>
            {scholarship.providerType.charAt(0).toUpperCase() + scholarship.providerType.slice(1)}
          </Badge>
          <Badge variant="outline" className="bg-muted/50">
            <GraduationCap className="h-3 w-3 mr-1" />
            {scholarship.eligibility.level === "both" ? "All Levels" : 
              scholarship.eligibility.level.charAt(0).toUpperCase() + scholarship.eligibility.level.slice(1)}
          </Badge>
          {scholarship.location === "international" && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              <MapPin className="h-3 w-3 mr-1" />
              International
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
            <DollarSign className="h-4 w-4 text-success" />
            <span>{formatAmount(scholarship.amount, scholarship.currency)}</span>
            <Badge variant="secondary" className="text-xs ml-1">
              {scholarship.amountType === "full" ? "Full" : "Partial"}
            </Badge>
          </div>
          <div className={cn(
            "flex items-center gap-1.5 text-sm",
            deadline.urgent ? "text-destructive font-medium" : "text-muted-foreground"
          )}>
            <Calendar className="h-3.5 w-3.5" />
            <span>{deadline.text}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Link to={`/scholarship/${scholarship.id}`} className="w-full">
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
