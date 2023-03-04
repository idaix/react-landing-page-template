import { SeactionHeader, TestimonialCard } from "../components"
import { testimonials } from "../utils/constants"
const Testimonials = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <SeactionHeader
            title="Don't take our word for it"
            description="Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare."
            h='h2'
          />

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 lg:max-w-none lg:grid-cols-3 lg:gap-6 items-center">
            {testimonials.map(item=>(
              <TestimonialCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials