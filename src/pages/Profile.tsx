import { useState, useEffect } from "react";
import { User, GraduationCap, BookOpen, Save, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Layout } from "@/components/layout/Layout";
import { fieldsOfStudy } from "@/data/scholarships";
import { toast } from "sonner";

interface UserProfile {
  fullName: string;
  email: string;
  department: string;
  level: string;
  cgpa: string;
}

const PROFILE_STORAGE_KEY = "bells-user-profile";

const defaultProfile: UserProfile = {
  fullName: "",
  email: "",
  department: "",
  level: "",
  cgpa: "",
};

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem(PROFILE_STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultProfile;
  });
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (saved) {
      setProfile(JSON.parse(saved));
    }
  }, []);

  const handleChange = (field: keyof UserProfile, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
    setIsSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    setIsSaved(true);
    toast.success("Profile saved successfully!");
  };

  const isProfileComplete = profile.fullName && profile.email && profile.department && profile.level;

  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-2">
            <User className="h-8 w-8 text-accent" />
            <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
              My Profile
            </h1>
          </div>
          <p className="text-primary-foreground/80">
            Complete your profile to get personalized scholarship recommendations.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Student Information
              </CardTitle>
              <CardDescription>
                This information helps us match you with relevant scholarships.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={profile.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={profile.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>

              {/* Department */}
              <div className="space-y-2">
                <Label htmlFor="department">Department / Field of Study</Label>
                <Select value={profile.department} onValueChange={(v) => handleChange("department", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your department" />
                  </SelectTrigger>
                  <SelectContent>
                    {fieldsOfStudy.filter((f) => f !== "All Fields").map((field) => (
                      <SelectItem key={field} value={field}>
                        {field}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Level */}
              <div className="space-y-2">
                <Label htmlFor="level">Academic Level</Label>
                <Select value={profile.level} onValueChange={(v) => handleChange("level", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100">100 Level</SelectItem>
                    <SelectItem value="200">200 Level</SelectItem>
                    <SelectItem value="300">300 Level</SelectItem>
                    <SelectItem value="400">400 Level</SelectItem>
                    <SelectItem value="500">500 Level</SelectItem>
                    <SelectItem value="postgraduate">Postgraduate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* CGPA */}
              <div className="space-y-2">
                <Label htmlFor="cgpa">Current CGPA (Optional)</Label>
                <Input
                  id="cgpa"
                  type="number"
                  step="0.01"
                  min="0"
                  max="5"
                  placeholder="e.g., 4.5"
                  value={profile.cgpa}
                  onChange={(e) => handleChange("cgpa", e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  On a 5.0 scale. This helps match you with merit-based scholarships.
                </p>
              </div>

              {/* Save Button */}
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {isSaved && (
                    <>
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>Changes saved</span>
                    </>
                  )}
                </div>
                <Button onClick={handleSave} className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Profile Status */}
          {isProfileComplete && (
            <Card className="mt-6 border-success/30 bg-success/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-success">Profile Complete!</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      You can now browse scholarships and we'll highlight ones that match your profile.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </Layout>
  );
}
