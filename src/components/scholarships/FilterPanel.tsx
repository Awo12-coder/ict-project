import { X, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { fieldsOfStudy, providerTypes } from "@/data/scholarships";

export interface Filters {
  field: string;
  level: string;
  type: string;
  location: string;
  deadline: string;
  amount: string;
}

interface FilterPanelProps {
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string) => void;
  onClearFilters: () => void;
  activeFilterCount: number;
}

export function FilterPanel({ filters, onFilterChange, onClearFilters, activeFilterCount }: FilterPanelProps) {
  return (
    <div className="space-y-4 p-4 bg-card rounded-lg border">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">Filters</span>
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="bg-accent/10 text-accent-foreground">
              {activeFilterCount}
            </Badge>
          )}
        </div>
        {activeFilterCount > 0 && (
          <Button variant="ghost" size="sm" onClick={onClearFilters} className="text-muted-foreground h-8">
            <X className="h-3 w-3 mr-1" />
            Clear
          </Button>
        )}
      </div>

      <div className="grid gap-4">
        {/* Field of Study */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Field of Study</Label>
          <Select value={filters.field} onValueChange={(v) => onFilterChange("field", v)}>
            <SelectTrigger>
              <SelectValue placeholder="All Fields" />
            </SelectTrigger>
            <SelectContent>
              {fieldsOfStudy.map((field) => (
                <SelectItem key={field} value={field}>
                  {field}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Level */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Level</Label>
          <Select value={filters.level} onValueChange={(v) => onFilterChange("level", v)}>
            <SelectTrigger>
              <SelectValue placeholder="All Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="undergraduate">Undergraduate</SelectItem>
              <SelectItem value="postgraduate">Postgraduate</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Provider Type */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Provider Type</Label>
          <Select value={filters.type} onValueChange={(v) => onFilterChange("type", v)}>
            <SelectTrigger>
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {providerTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Location</Label>
          <Select value={filters.location} onValueChange={(v) => onFilterChange("location", v)}>
            <SelectTrigger>
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="local">Local (Nigeria)</SelectItem>
              <SelectItem value="international">International</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Deadline */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Deadline</Label>
          <Select value={filters.deadline} onValueChange={(v) => onFilterChange("deadline", v)}>
            <SelectTrigger>
              <SelectValue placeholder="Any Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Time</SelectItem>
              <SelectItem value="week">Next 7 Days</SelectItem>
              <SelectItem value="month">Next 30 Days</SelectItem>
              <SelectItem value="quarter">Next 3 Months</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Amount */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">Funding Type</Label>
          <Select value={filters.amount} onValueChange={(v) => onFilterChange("amount", v)}>
            <SelectTrigger>
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="full">Full Funding</SelectItem>
              <SelectItem value="partial">Partial Funding</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
