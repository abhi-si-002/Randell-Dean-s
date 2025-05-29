import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white pt-16"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Beauty & Fitness
                <span className="block text-pink-300">Under One Roof</span>
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 mt-6">
                Transform your look and your body at Randell & Dean's - where premium hair salon services meet 24/7
                fitness excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                Book Salon Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-purple-900"
              >
                Start Gym Membership
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-pink-300" />
                <div>
                  <p className="font-semibold">24/7 Gym Access</p>
                  <p className="text-sm text-purple-200">Always open for you</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-pink-300" />
                <div>
                  <p className="font-semibold">Garden City, GA</p>
                  <p className="text-sm text-purple-200">Convenient location</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-pink-300" />
                <div>
                  <p className="font-semibold">(912) 964-0215</p>
                  <p className="text-sm text-purple-200">Call us today</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-pink-400 to-purple-600 p-1">
              <img
                src="https://s3-media0.fl.yelpcdn.com/bphoto/2cW_ZqEYEtHl9eevCQ3GxQ/348s.jpg"
                alt="Salon and Gym Facility"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
              <p className="text-2xl font-bold text-purple-600">2-in-1</p>
              <p className="text-sm font-medium">Salon & Gym</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
