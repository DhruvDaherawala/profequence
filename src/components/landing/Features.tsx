import { CheckCircle2, Users, Trophy, BookOpen, Clock, HeartHandshake } from "lucide-react"

const features = [
    {
        icon: CheckCircle2,
        title: "Attendance Calling",
        description: "We ensure parents are informed if a student is absent to ensure safety and regularity.",
    },
    {
        icon: Clock,
        title: "Remedial Classes",
        description: "Automatic enrollment in remedial classes for students scoring below threshold in weekly exams.",
    },
    {
        icon: Users,
        title: "Guiding Teacher",
        description: "Dedicated guiding teachers provide extra support, clear doubts, and offer personal attention.",
    },
    {
        icon: HeartHandshake,
        title: "We Care",
        description: "A supportive environment where students feel valued and cared for by their mentors.",
    },
    {
        icon: Trophy,
        title: "Reward System",
        description: "Recognizing hard work to motivate students to strive for excellence.",
    },
    {
        icon: BookOpen,
        title: "Holistic Development",
        description: "Focus on overall growth with initiatives like Duende, Paramount Awards, and Shark Tank.",
    },
]

export function Features() {
    return (
        <section className="bg-muted/50 py-16 md:py-24">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Why Choose Profiquence?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We go beyond traditional teaching to ensure every student succeeds.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                        >
                            <feature.icon className="mb-4 h-10 w-10 text-primary" />
                            <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
