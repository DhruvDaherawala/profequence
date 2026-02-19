import { Button } from "@/components/ui/button";
import { User, Trophy, Star, BookOpen } from "lucide-react";

export default function GeniusMindsPage() {
    const team = [
        {
            name: "Founder & Director",
            role: "Visionary Leader",
            description: "Driving the mission to make learning fun and effective for every student in Surat.",
            icon: User
        },
        {
            name: "Academic Head",
            role: "Curriculum Expert",
            description: "Ensuring our teaching methodologies stay ahead of the curve and result-oriented.",
            icon: BookOpen
        },
        {
            name: "Senior Faculty",
            role: "Subject Matter Expert",
            description: "Passionate educators with years of experience in shaping young minds.",
            icon: Star
        }
    ];

    const achievers = [
        { name: "Student A", rank: "AIR 150", exam: "JEE Advanced", year: "2024" },
        { name: "Student B", rank: "700/720", exam: "NEET", year: "2024" },
        { name: "Student C", rank: "98.5%", exam: "CBSE Class 12", year: "2024" },
        { name: "Student D", rank: "99.1%", exam: "GBSE Class 10", year: "2024" },
        { name: "Student E", rank: "AIR 500", exam: "JEE Main", year: "2024" },
        { name: "Student F", rank: "680/720", exam: "NEET", year: "2024" }
    ];

    return (
        <div className="container py-16 md:py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                    Genius Minds
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Meet the visionaries behind Profiquence Academy and the brilliant students who make us proud.
                </p>
            </div>

            <div className="mb-20">
                <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
                    <User className="h-8 w-8 text-primary" />
                    Our Leadership & Faculty
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {team.map((member) => (
                        <div key={member.name} className="flex flex-col items-center text-center p-6 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <member.icon className="h-12 w-12 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-sm font-medium text-primary mb-2">{member.role}</p>
                            <p className="text-muted-foreground">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
                    <Trophy className="h-8 w-8 text-secondary" />
                    Hall of Fame
                </h2>
                <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                    Celebrating the outstanding achievements of our students in Board Exams, JEE, and NEET.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {achievers.map((student, i) => (
                        <div key={i} className="relative overflow-hidden rounded-lg border bg-gradient-to-br from-card to-muted p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                <Trophy className="h-24 w-24" />
                            </div>
                            <div className="relative z-10">
                                <div className="mb-4 inline-flex items-center rounded-full bg-secondary/10 px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                                    {student.year}
                                </div>
                                <h3 className="text-xl font-bold mb-1">{student.name}</h3>
                                <p className="text-lg font-semibold text-primary">{student.rank}</p>
                                <p className="text-sm text-muted-foreground">{student.exam}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
