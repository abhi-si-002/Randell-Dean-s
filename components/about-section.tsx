import { Scissors, Dumbbell, Heart, Users } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Scissors,
      title: "Professional Hair Services",
      description: "Expert stylists providing cuts, colors, treatments, and styling for all hair types.",
    },
    {
      icon: Dumbbell,
      title: "24/7 Fitness Access",
      description: "State-of-the-art gym equipment available around the clock to fit your schedule.",
    },
    {
      icon: Heart,
      title: "Wellness Focused",
      description: "We believe in total wellness - looking good and feeling great inside and out.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "A welcoming space where beauty and fitness enthusiasts come together.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Randell & Dean's</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Garden City, GA, we're revolutionizing the way you think about beauty and fitness.
            Our unique concept combines premium salon services with a fully equipped 24-hour gym facility.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Randell & Dean's was born from a simple idea: why should you have to choose between looking good and
              feeling good? Our founders recognized that true wellness comes from taking care of both your appearance
              and your physical health.
            </p>
            <p className="text-gray-600 mb-6">
              We've created a space where you can get a fresh haircut in the morning and hit the gym at midnight, or
              squeeze in a workout before your color appointment. It's convenience, quality, and community all in one
              place.
            </p>
            <div className="bg-purple-100 p-6 rounded-lg">
              <p className="text-purple-800 font-medium">
                "Your journey to looking and feeling your best starts here. We're not just a salon or just a gym - we're
                your partners in total wellness."
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://s3-media0.fl.yelpcdn.com/bphoto/uQnmgRXG7Bpt-9UMZMXJ-A/o.jpg"
              alt="About Randell & Dean's"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
