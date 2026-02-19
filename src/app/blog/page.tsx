"use client"

import { blogPosts } from "@/lib/blog-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function BlogPage() {
    return (
        <div className="container py-16 md:py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                    Profiquence Blog
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Insights, study tips, and career guidance to help you excel in your academic journey.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                    <article
                        key={post.id}
                        className="group flex flex-col rounded-lg border bg-card shadow-sm transition-all hover:shadow-md overflow-hidden"
                    >
                        <div className="flex flex-col space-y-2 p-6">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                                <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {post.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    {post.author}
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                            </h2>
                            <div className="inline-block mt-2">
                                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                    {post.category}
                                </span>
                            </div>
                            <p className="flex-1 text-muted-foreground line-clamp-3 mt-4">
                                {post.excerpt}
                            </p>
                        </div>
                        <div className="mt-auto p-6 pt-0">
                            <Button asChild variant="ghost" className="w-full justify-between hover:bg-primary/5">
                                <Link href={`/blog/${post.slug}`}>
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
