import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      service: "Salon Client",
      rating: 5,
      text: "The stylists at Randell & Dean's are absolutely amazing! They transformed my hair and I love the convenience of being able to work out right after my appointment.",
      image: "",
    },
    {
      name: "Emily Chen",
      service: "Salon & Gym",
      rating: 5,
      text: "I love that I can get my hair done and maintain my fitness routine all in one place. The staff is friendly and professional across both services.",
      image: "",
    },
    {
      name: "David Thompson",
      service: "Personal Training",
      rating: 5,
      text: "The personal trainers here are knowledgeable and motivating. I've seen incredible results since starting my fitness journey here.",
      image: "",
    },
    
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with
            us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                {testimonial.image ? (
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    ) : (
                    <div className="w-12 h-12 rounded-full bg-[#00754a] text-white mr-4 flex items-center justify-center font-bold text-sm uppercase">
                        {testimonial.name?.slice(0, 2) || "NA"}
                    </div>
                )}

                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Community?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Experience the difference of combining beauty and fitness in one convenient location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Book Salon Appointment
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Start Gym Membership
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
