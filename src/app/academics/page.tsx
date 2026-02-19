import { Button } from "@/components/ui/button";
import { BookOpen, FlaskConical, Calculator, GraduationCap, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function AcademicsPage() {
  const wings = [
    {
      id: "radical",
      title: "Radical Wing (Class 6-10)",
      description: "Building strong foundations for school examinations and future competitive exams. We cover CBSE and GBSE syllabi comprehensively.",
      icon: BookOpen,
      features: [
        "Complete Syllabus Coverage",
        "Weekly Tests & Assessments",
        "Foundation for IIT-JEE/NEET",
        "Doubt Solving Sessions"
      ],
      color: "text-blue-600",
      bg: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      id: "science",
      title: "Science Wing (Class 11-12)",
      description: "Expert coaching for Physics, Chemistry, Mathematics, and Biology. Specialized preparation for Board exams as well as JEE and NEET.",
      icon: FlaskConical,
      features: [
        "Deep Concept Clarity",
        "Numerical Problem Solving",
        "Regular Mock Tests",
        "Entrance Exam Strategy"
      ],
      color: "text-green-600",
      bg: "bg-green-100 dark:bg-green-900/20"
    },
    {
      id: "commerce",
      title: "Commerce Wing (Class 11-12)",
      description: "Mastering the world of business and finance. Coaching for Accounts, Statistics, Economics, and Business Studies.",
      icon: Calculator,
      features: [
        "Conceptual Understanding",
        "Practical Application",
        "Board Exam Preparation",
        "Career Guidance (CA/CS/CMA)"
      ],
      color: "text-orange-600",
      bg: "bg-orange-100 dark:bg-orange-900/20"
    },
    {
      id: "competitive",
      title: "Competitive Exams",
      description: "Dedicated batches for JEE (Main & Advanced) and NEET. Structured curriculum to help you secure top ranks.",
      icon: GraduationCap,
      features: [
        "Topic-wise Assignments",
        "Previous Year Questions Analysis",
        "Time Management Techniques",
        "Personalized Mentoring"
      ],
      color: "text-purple-600",
      bg: "bg-purple-100 dark:bg-purple-900/20"
    }
  ];

  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Academic Programs
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          "If you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid." - Einstein. We help every student realize their genius.
        </p>
      </div>

      <div className="grid gap-12">
        {wings.map((wing, index) => (
          <div 
            key={wing.id} 
            className={`flex flex-col gap-8 rounded-2xl border bg-card p-8 shadow-sm transition-all md:flex-row md:items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl ${wing.bg}`}>
              <wing.icon className={`h-12 w-12 ${wing.color}`} />
            </div>
            
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold">{wing.title}</h2>
              <p className="text-lg text-muted-foreground">{wing.description}</p>
              
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {wing.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Button asChild>
                  <Link href="/contact">
                    Enroll in {wing.title.split(' ')[0]} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 rounded-2xl bg-primary p-8 text-center text-primary-foreground md:p-12">
        <h2 className="mb-4 text-3xl font-bold">Unsure which path to choose?</h2>
        <p className="mb-8 text-lg opacity-90 max-w-2xl mx-auto">
          Our expert counselors can help you identify your strengths and choose the right stream and career path.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/contact">
            Schedule a Counseling Session
          </Link>
        </Button>
      </div>
    </div>
  );
}
