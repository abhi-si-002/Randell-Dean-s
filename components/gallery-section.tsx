"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function GallerySection() {
  const [activeTab, setActiveTab] = useState("salon")

  const salonImages = [
    { src: "https://s3-media0.fl.yelpcdn.com/bphoto/61TR5pDxOl5sbjJKay0xhg/348s.jpg", alt: "Hair Styling" },
    { src: "https://s3-media0.fl.yelpcdn.com/bphoto/k-xstukZxgW39e7a5plNcw/348s.jpg", alt: "Hair Coloring" },
    { src: "https://s3-media0.fl.yelpcdn.com/bphoto/Bqv3hThS5QuP5Huqb7ep-A/348s.jpg", alt: "Hair Treatment" },
  ]

  const gymImages = [
    { src: "https://s3-media0.fl.yelpcdn.com/bphoto/wCWlsGMIVLFqLk18g_4dtg/348s.jpg", alt: "Cardio Equipment" },
    { src: "https://s3-media0.fl.yelpcdn.com/bphoto/bz8gSFpYwJ256Si3P-8p9w/348s.jpg", alt: "Weight Training" },
    { src: "https://s3-media0.fl.yelpcdn.com/bphoto/_p2pUnuD8eidofl79nC27A/348s.jpg", alt: "Free Weights" },
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Facilities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at our modern salon and state-of-the-art gym facilities designed for your comfort and success.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            <Button
              variant={activeTab === "salon" ? "default" : "ghost"}
              onClick={() => setActiveTab("salon")}
              className={activeTab === "salon" ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              Salon Gallery
            </Button>
            <Button
              variant={activeTab === "gym" ? "default" : "ghost"}
              onClick={() => setActiveTab("gym")}
              className={activeTab === "gym" ? "bg-purple-600 hover:bg-purple-700" : ""}
            >
              Gym Gallery
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === "salon" ? salonImages : gymImages).map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
