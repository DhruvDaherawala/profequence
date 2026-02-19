import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Courses } from "@/components/landing/Courses";
import { Locations } from "@/components/landing/Locations";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <Features />
        <Courses />
        <Locations />
        {/* Locations and Contact can be added here */}
        <section id="contact" className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join the best tuition classes in Surat today. Contact us or visit one of our branches to enroll.
            </p>
            {/* Contact CTA or Form placeholder */}
          </div>
        </section>
      </main>
    </div>
  );
}
