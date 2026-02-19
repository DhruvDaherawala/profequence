import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-muted py-12 text-muted-foreground">
            <div className="container grid gap-8 md:grid-cols-4">
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">Profiquence Academy</h4>
                    <p className="text-sm">
                        Redefining tuition classes in Surat. Making learning fun and effective.
                    </p>
                </div>
                <div>
                    <h4 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:text-primary">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/academics" className="hover:text-primary">
                                Academics
                            </Link>
                        </li>
                        <li>
                            <Link href="/genius-minds" className="hover:text-primary">
                                Genius Minds
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-primary">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-primary">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-4 text-sm font-semibold text-foreground">Programs</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Radical Wing (Class 6-10)</li>
                        <li>Science Wing (11-12)</li>
                        <li>Commerce Wing (11-12)</li>
                        <li>Competitive Exams (JEE/NEET)</li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-4 text-sm font-semibold text-foreground">Contact Us</h4>
                    <address className="space-y-2 text-sm not-italic">
                        <p>Multiple locations in Surat</p>
                        <p>Phone: +91 97232 55555</p>
                        <p>Email: admin@profiquence.com</p>
                    </address>
                </div>
            </div>
            <div className="container mt-8 border-t pt-8 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Profiquence Academy. All rights reserved.</p>
            </div>
        </footer>
    )
}
