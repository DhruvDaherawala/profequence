import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const locations = [
    {
        name: "Main Branch (Adajan)",
        address: "101, Profiquence House, Near Adajan Circle, Surat, Gujarat 395009",
        phone: "+91 97232 55555",
        email: "adajan@profiquence.com",
    },
    {
        name: "Vesu Branch",
        address: "205, Excellence Plaza, Vesu Main Road, Surat, Gujarat 395007",
        phone: "+91 97232 66666",
        email: "vesu@profiquence.com",
    },
    {
        name: "Varachha Branch",
        address: "303, Success Square, Varachha Road, Surat, Gujarat 395006",
        phone: "+91 97232 77777",
        email: "varachha@profiquence.com",
    }
]

export function Locations() {
    return (
        <section className="py-16 md:py-24 bg-muted/30">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Our Locations
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Conveniently located centers across Surat for easy access.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {locations.map((location) => (
                        <div key={location.name} className="flex flex-col space-y-4 rounded-lg border bg-card p-6 shadow-sm">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold">{location.name}</h3>
                            <address className="space-y-2 text-sm not-italic text-muted-foreground">
                                <p>{location.address}</p>
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4" />
                                    <span>{location.phone}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4" />
                                    <span>{location.email}</span>
                                </div>
                            </address>
                            <Button variant="outline" className="w-full mt-auto">Get Directions</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
