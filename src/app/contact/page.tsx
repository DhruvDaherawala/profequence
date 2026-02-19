"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";

export default function ContactPage() {
    const branches = [
        {
            name: "Pal Branch",
            address: "M-15 to 25, Raj Corner, Near L.P Savani School, Pal, Surat.",
            phone: "+91 97378 79345",
            email: "admin@profiquence.com"
        },
        {
            name: "Althan Branch",
            address: "201, Magnuss Shopping Centre, Althan Canal Road, Surat.",
            phone: "+91 97240 49096",
            email: "profiquence@gmail.com"
        },
        {
            name: "Katargam Branch",
            address: "3rd Floor, Shyam Sundar Complex, Opp Nilkanth Soc, 2, Lalita Chowk to Aamba Talavadi Road, Katargam, Surat.",
            phone: "+91 84603 60147",
            email: "katargam.profiquence@gmail.com"
        },
        {
            name: "Mota Varachha Branch",
            address: "302, Sunshine Complex, opp. CNG pump, near Sudama Chowk, Hans Society, Mota Varachha, Surat.",
            phone: "+91 87807 85048",
            email: "mv.profiquence@gmail.com"
        }
    ];

    return (
        <div className="container py-16 md:py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                    Contact Us
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Have questions? We're here to help. Reach out to the nearest branch or send us a message.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Form */}
                <div className="rounded-2xl border bg-card p-8 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                    <form className="space-y-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                                <Input id="name" placeholder="First-name last-name " required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Phone</label>
                                <Input id="phone" placeholder="+91 12345 67890" required type="tel" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                            <Input id="email" placeholder="demo@example.com" required type="email" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
                            <select
                                id="subject"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="inquiry">General Inquiry</option>
                                <option value="admission">Admission</option>
                                <option value="feedback">Feedback</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                            <Textarea id="message" placeholder="How can we help you?" required className="min-h-[120px]" />
                        </div>

                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </div>

                {/* Branch Details */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Our Branches</h2>
                        <p className="text-muted-foreground mb-8">
                            Visit any of our centers for a personal consultation. We are open Monday to Saturday, 9:00 AM to 7:00 PM.
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {branches.map((branch) => (
                            <div key={branch.name} className="flex flex-col gap-3 rounded-lg border bg-muted/30 p-5 hover:bg-muted/50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <Building2 className="h-5 w-5 text-primary" />
                                    <h3 className="font-semibold text-lg">{branch.name}</h3>
                                </div>

                                <div className="ml-8 space-y-2 text-sm">
                                    <div className="flex items-start gap-2">
                                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                                        <span className="text-muted-foreground">{branch.address}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                                        <a href={`tel:${branch.phone}`} className="text-primary hover:underline">{branch.phone}</a>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                                        <a href={`mailto:${branch.email}`} className="text-primary hover:underline">{branch.email}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
