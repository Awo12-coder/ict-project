import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScholarshipCard } from "@/components/scholarships/ScholarshipCard";
import { SearchBar } from "@/components/scholarships/SearchBar";
import { FilterPanel, Filters } from "@/components/scholarships/FilterPanel";
import { scholarships } from "@/data/scholarships";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const defaultFilters: Filters = {
  field: "All Fields",
  level: "all",
  type: "all",
  location: "all",
  deadline: "all",
  amount: "all",
};

export default function Scholarships() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      setSearch(searchQuery);
    }
  }, [searchParams]);

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
    setSearch("");
  };

  const activeFilterCount = Object.entries(filters).filter(
    ([key, value]) => value !== defaultFilters[key as keyof Filters]
  ).length + (search ? 1 : 0);

  const filteredScholarships = useMemo(() => {
    return scholarships.filter((scholarship) => {
      // Search filter
      if (search) {
        const searchLower = search.toLowerCase();
        const matchesSearch =
          scholarship.title.toLowerCase().includes(searchLower) ||
          scholarship.description.toLowerCase().includes(searchLower) ||
          scholarship.provider.toLowerCase().includes(searchLower) ||
          scholarship.tags.some((tag) => tag.toLowerCase().includes(searchLower));
        if (!matchesSearch) return false;
      }

      // Field filter
      if (filters.field !== "All Fields") {
        const matchesField = scholarship.eligibility.fields.some(
          (f) => f.toLowerCase().includes(filters.field.toLowerCase()) || f === "All Fields"
        );
        if (!matchesField) return false;
      }

      // Level filter
      if (filters.level !== "all") {
        if (
          scholarship.eligibility.level !== filters.level &&
          scholarship.eligibility.level !== "both"
        ) {
          return false;
        }
      }

      // Type filter
      if (filters.type !== "all" && scholarship.providerType !== filters.type) {
        return false;
      }

      // Location filter
      if (filters.location !== "all" && scholarship.location !== filters.location) {
        return false;
      }

      // Deadline filter
      if (filters.deadline !== "all") {
        const deadline = new Date(scholarship.deadline);
        const now = new Date();
        const diffDays = Math.ceil(
          (deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
        );

        if (filters.deadline === "week" && diffDays > 7) return false;
        if (filters.deadline === "month" && diffDays > 30) return false;
        if (filters.deadline === "quarter" && diffDays > 90) return false;
      }

      // Amount type filter
      if (filters.amount !== "all" && scholarship.amountType !== filters.amount) {
        return false;
      }

      return true;
    });
  }, [search, filters]);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-2">
            Browse Scholarships
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl">
            Explore {scholarships.length}+ scholarship opportunities from universities, government bodies, and private organizations.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Filters */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24">
                <FilterPanel
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={clearFilters}
                  activeFilterCount={activeFilterCount}
                />
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Search & Controls */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <SearchBar
                  value={search}
                  onChange={setSearch}
                  placeholder="Search by keyword, e.g., STEM, engineering..."
                  className="flex-1"
                />

                <div className="flex gap-2">
                  {/* Mobile Filter Button */}
                  <Sheet open={showFilters} onOpenChange={setShowFilters}>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden gap-2">
                        <Filter className="h-4 w-4" />
                        Filters
                        {activeFilterCount > 0 && (
                          <span className="ml-1 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                            {activeFilterCount}
                          </span>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-80 p-0">
                      <div className="p-4">
                        <FilterPanel
                          filters={filters}
                          onFilterChange={handleFilterChange}
                          onClearFilters={clearFilters}
                          activeFilterCount={activeFilterCount}
                        />
                      </div>
                    </SheetContent>
                  </Sheet>

                  {/* View Toggle */}
                  <div className="hidden sm:flex border rounded-lg p-1">
                    <Button
                      variant={viewMode === "grid" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className="mb-6 text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{filteredScholarships.length}</span> scholarship
                {filteredScholarships.length !== 1 ? "s" : ""}
                {search && (
                  <span>
                    {" "}for "<span className="font-medium text-foreground">{search}</span>"
                  </span>
                )}
              </div>

              {/* Scholarships Grid/List */}
              {filteredScholarships.length > 0 ? (
                <div
                  className={
                    viewMode === "grid"
                      ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                      : "space-y-4"
                  }
                >
                  {filteredScholarships.map((scholarship, index) => (
                    <div
                      key={scholarship.id}
                      className="animate-fade-up"
                      style={{ animationDelay: `${Math.min(index * 0.05, 0.3)}s` }}
                    >
                      <ScholarshipCard
                        scholarship={scholarship}
                        featured={scholarship.featured}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2">No scholarships found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or search terms
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
