import { HelpCircle, Mail, Phone, MapPin, GraduationCap, FileText, Clock, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";

const faqs = [
  {
    question: "What scholarships are available at Bells University?",
    answer:
      "Bells University offers several scholarship programs including Academic Excellence Awards for students with high CGPAs, Sports Excellence Scholarships for student athletes, and Need-Based Grants for students facing financial hardship. Additionally, we list external scholarships from government bodies and private organizations.",
  },
  {
    question: "How do I apply for a scholarship?",
    answer:
      "Each scholarship has its own application process. Generally, you'll need to: 1) Check eligibility requirements, 2) Gather required documents (transcripts, recommendation letters, etc.), 3) Complete the application form, and 4) Submit before the deadline. Visit the scholarship detail page for specific instructions.",
  },
  {
    question: "What documents are typically required?",
    answer:
      "Common documents include: Academic transcripts, admission letter, passport photographs, recommendation letters from lecturers or HOD, personal statement or essay, proof of Nigerian citizenship (for local scholarships), and proof of financial need (for need-based awards).",
  },
  {
    question: "Can I apply for multiple scholarships?",
    answer:
      "Yes, you can apply for multiple scholarships unless a specific scholarship explicitly states otherwise. However, some scholarships require you to declare other awards you're receiving. Always read the terms and conditions carefully.",
  },
  {
    question: "When are scholarship deadlines?",
    answer:
      "Deadlines vary by scholarship. University scholarships typically open at the start of each academic year, while external scholarships have varying timelines. We recommend checking the portal regularly and enabling notifications for scholarships you're interested in.",
  },
  {
    question: "How are scholarship recipients selected?",
    answer:
      "Selection criteria vary by scholarship type. Merit-based scholarships prioritize academic performance (CGPA). Need-based awards consider financial circumstances. Sports scholarships evaluate athletic achievement. Most involve a review committee that assesses applications holistically.",
  },
  {
    question: "What happens after I'm awarded a scholarship?",
    answer:
      "Once selected, you'll receive an official notification. For university scholarships, the award is typically credited to your school fees. External scholarships may be disbursed directly to you or to the institution. You'll need to maintain eligibility requirements to keep the scholarship.",
  },
  {
    question: "Can international students apply?",
    answer:
      "Most Bells University scholarships are for Nigerian students. However, some external scholarships, particularly those from international organizations, are open to students regardless of nationality. Check the eligibility section of each scholarship for details.",
  },
];

const features = [
  {
    icon: GraduationCap,
    title: "Comprehensive Database",
    description: "Access scholarships from universities, government, and private organizations all in one place.",
  },
  {
    icon: FileText,
    title: "Easy Application Tracking",
    description: "Save scholarships, track deadlines, and manage your applications efficiently.",
  },
  {
    icon: Clock,
    title: "Deadline Alerts",
    description: "Never miss a deadline with our visual countdown and deadline indicators.",
  },
  {
    icon: Users,
    title: "Personalized Matches",
    description: "Complete your profile to get scholarship recommendations tailored to your field and level.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-2">
            About & FAQ
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl">
            Learn about how scholarships work at Bells University and find answers to common questions.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              About the Scholarship Portal
            </h2>
            <p className="text-muted-foreground text-lg">
              The Bells University Scholarship Portal is designed to help students discover, track, and apply for scholarship opportunities. Our mission is to ensure no student misses out on funding opportunities due to lack of information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-display font-bold">Frequently Asked Questions</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Contact the Scholarship Office</CardTitle>
                <CardDescription>
                  Have questions that aren't answered here? Get in touch with our scholarship office.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Address</div>
                    <div className="font-medium">
                      Scholarship Office, Admin Block, Bells University of Technology, Ota, Ogun State
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <a
                      href="mailto:scholarships@bellsuniversity.edu.ng"
                      className="font-medium text-primary hover:underline"
                    >
                      scholarships@bellsuniversity.edu.ng
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium">+234 803 123 4567</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
