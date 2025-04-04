import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    company: "GrowthMark Agency",
    text: "The team transformed our marketing strategy! Their insights and execution were game-changing.",
  },
  {
    id: 2,
    name: "Sophia Patel",
    company: "Brandify Solutions",
    text: "Their branding expertise is top-notch. Our brand identity now stands out beautifully.",
  },
  {
    id: 3,
    name: "Michael Lee",
    company: "NextGen Creatives",
    text: "From social media to ads, they handled everything flawlessly. Highly recommend!",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white text-black py-16">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl font-light mb-12 text-gray-600"
        >
          Real experiences from businesses that have worked with us.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
              className="bg-gray-100 p-6 rounded-2xl shadow-md"
            >
              <p className="text-lg italic text-gray-700">"{testimonial.text}"</p>
              <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
