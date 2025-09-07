import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechVision Inc.',
      company: 'Technology',
      content: 'ConsultPro transformed our entire digital infrastructure. Their strategic approach and execution excellence delivered results beyond our expectations. Revenue increased by 150% within 12 months.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Operations Director',
      company: 'Manufacturing',
      content: 'The operational efficiency improvements were remarkable. They streamlined our processes and reduced costs by 40% while improving quality. Exceptional team with deep industry expertise.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Emily Watson',
      role: 'Managing Partner',
      company: 'Professional Services',
      content: 'Outstanding strategic guidance during our expansion. Their market analysis and competitive intelligence helped us enter new markets successfully with a 300% ROI on consulting investment.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'David Kim',
      role: 'Founder & CEO',
      company: 'FinTech Startup',
      content: 'ConsultPro helped us scale from startup to Series B funding. Their organizational development and performance management systems were crucial to our growth journey.',
      rating: 5,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Lisa Thompson',
      role: 'Chief Strategy Officer',
      company: 'Retail Chain',
      content: 'Their supply chain optimization saved us millions and improved customer satisfaction scores by 45%. The team\'s expertise and dedication to results is unmatched.',
      rating: 5,
      image: '/api/placeholder/80/80'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const clientLogos = [
    { src: '/logos/logo-1.svg', alt: 'TechVision' },
    { src: '/logos/logo-2.svg', alt: 'Manufacturing Co' },
    { src: '/logos/logo-3.svg', alt: 'RetailChain' },
    { src: '/logos/logo-4.svg', alt: 'FinTech Pro' },
    { src: '/logos/logo-5.svg', alt: 'Service Group' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-lg">Client Testimonials</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
            What Our Clients
            <span className="text-gradient block">Say About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders across diverse sectors. Their success stories 
            speak to our commitment to delivering exceptional results.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto px-12 sm:px-16"
        >
          {/* Main Testimonial */}
          <div className="relative bg-gradient-to-br from-card to-secondary/30 rounded-2xl p-8 lg:p-12 shadow-elegant border border-border/30 overflow-hidden min-h-[320px]">
            {/* Quote Icon */}
            <Quote className="absolute top-6 right-6 w-12 h-12 text-accent/20" />
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-accent text-sm font-medium">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="absolute left-0 sm:-left-4 lg:-left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-background border border-border rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-secondary/50 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
          </button>
          
          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="absolute right-0 sm:-right-4 lg:-right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-background border border-border rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-secondary/50 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
          </button>
        </motion.div>

        {/* Dots Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-2 mt-8"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-accent w-6' 
                  : 'bg-border hover:bg-accent/50 w-2.5'
              }`}
            />
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-8">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 items-center opacity-80">
            {clientLogos.map((logo) => (
              <div key={logo.src} className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;