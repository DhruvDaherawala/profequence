"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-16 md:pt-20 lg:pt-24">
            <div className="container relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="mb-4 inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
                        Est. 2017 • Best Tuition Classes in Surat
                    </span>
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                        Redefining <span className="text-primary">Learning</span> <br />
                        for a Brighter Future
                    </h1>
                    <p className="mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                        "Make learning fun." We believe education should spark curiosity, not stress.
                        Join Profiquence Academy for expert coaching and a joyful learning journey.
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <Button size="lg" className="h-12 px-8 text-lg" asChild>
                            <Link href="/contact">
                                Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-lg" asChild>
                            <Link href="#academics">
                                View Courses
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 -z-10 h-full w-full overflow-hidden">
                <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
                <div className="absolute -right-[10%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[100px]" />
            </div>
        </section>
    )
}
