import { Button } from "@/components/ui/button"

const courses = [
    {
        title: "School Coaching (6-10)",
        description: "Complete syllabus coverage for CBSE and GBSE Boards. Focus on Math, Science, English, Social Science.",
        tags: ["Foundation", "Board Exams"],
    },
    {
        title: "Science Stream (11-12)",
        description: "Expert coaching for Physics, Chemistry, Mathematics, and Biology for 11th and 12th grades.",
        tags: ["Board Exams", "Competitive Base"],
    },
    {
        title: "Commerce Stream (11-12)",
        description: "Comprehensive guidance for Accountancy, Statistics, Economics, and Business Studies.",
        tags: ["Board Exams", "Professional Foundation"],
    },
    {
        title: "Competitive Exams",
        description: "Dedicated preparation for JEE (Main & Advanced) and NEET with expert faculty.",
        tags: ["JEE", "NEET", "Engineering", "Medical"],
    },
    {
        title: "Skill Development",
        description: "Spoken English and Personality Development programs to build confidence.",
        tags: ["Communication", "Soft Skills"],
    },
]

export function Courses() {
    return (
        <section id="academics" className="py-16 md:py-24">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Our Academic Programs
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Structured learning paths for every stage of your academic journey.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course) => (
                        <div key={course.title} className="flex flex-col rounded-lg border bg-card p-6 shadow-sm hover:border-primary/50 transition-colors">
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
                            </div>
                            <p className="mb-6 flex-1 text-muted-foreground">
                                {course.description}
                            </p>
                            <div className="mb-4 flex flex-wrap gap-2">
                                {course.tags.map(tag => (
                                    <span key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Button variant="secondary" className="w-full">Learn More</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
