import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Scissors, Palette, Sparkles, Dumbbell, Users, Clock } from "lucide-react"

export function ServicesSection() {
  const salonServices = [
    {
      icon: Scissors,
      title: "Hair Cuts & Styling",
      description: "Professional cuts and styling for all hair types.",
      price: "Starting at $35",
    },
    {
      icon: Palette,
      title: "Hair Coloring",
      description: "Full color, highlights, lowlights, and color corrections",
      price: "Starting at $65",
    },
    {
      icon: Sparkles,
      title: "Hair Treatments",
      description: "Deep conditioning, keratin treatments, and hair repair",
      price: "Starting at $45",
    },
  ]

  const gymServices = [
    {
      icon: Dumbbell,
      title: "24/7 Gym Access",
      description: "Full access to all equipment around the clock",
      price: "$29/month",
    },
    {
      icon: Users,
      title: "Personal Training",
      description: "One-on-one training sessions with certified trainers",
      price: "$60/session",
    },
    {
      icon: Clock,
      title: "Group Classes",
      description: "Yoga, HIIT, spinning, and strength training classes",
      price: "$15/class",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From head-turning hairstyles to body-transforming workouts, we offer comprehensive services for your
            complete wellness journey.
          </p>
        </div>

        <div className="space-y-16">
          {/* Salon Services */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Salon Services</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {salonServices.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-pink-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-pink-600 mb-4">{service.price}</p>
                    <Button className="w-full bg-pink-600 hover:bg-pink-700">Book Appointment</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gym Services */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Fitness Services</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {gymServices.map((service, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-purple-600 mb-4">{service.price}</p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Combo Packages Available!</h3>
            <p className="text-lg mb-6">
              Save when you combine salon and gym services. Ask about our monthly packages.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-purple-900"
            >
              Learn More About Packages
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
