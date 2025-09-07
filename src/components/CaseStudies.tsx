import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, DollarSign, Users, Clock, ArrowRight } from 'lucide-react';
import caseStudyBg from '@/assets/case-study-bg.jpg';

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const caseStudies = [
    {
      title: 'Fortune 500 Digital Transformation',
      industry: 'Manufacturing',
      challenge: 'Legacy systems hindering operational efficiency and customer experience',
      solution: 'Comprehensive digital transformation with AI-powered automation and modern infrastructure',
      results: [
        { icon: TrendingUp, metric: '45%', description: 'Productivity Increase' },
        { icon: DollarSign, metric: '$2.3M', description: 'Annual Cost Savings' },
        { icon: Clock, metric: '60%', description: 'Faster Time-to-Market' }
      ],
      timeline: '18 months',
      testimonial: 'ConsultPro transformed our entire operation. The results exceeded every expectation.',
      client: 'Manufacturing Director'
    },
    {
      title: 'Tech Startup Scale-Up Strategy',
      industry: 'Technology',
      challenge: 'Rapid growth challenges with scaling team and operations',
      solution: 'Strategic planning, organizational restructuring, and performance management systems',
      results: [
        { icon: Users, metric: '300%', description: 'Team Growth' },
        { icon: TrendingUp, metric: '250%', description: 'Revenue Growth' },
        { icon: DollarSign, metric: '$50M', description: 'Series B Funding' }
      ],
      timeline: '12 months',
      testimonial: 'They helped us scale without losing our startup agility and culture.',
      client: 'CEO & Founder'
    },
    {
      title: 'Retail Chain Optimization',
      industry: 'Retail',
      challenge: 'Declining margins and inefficient supply chain operations',
      solution: 'End-to-end supply chain optimization and cost management strategy',
      results: [
        { icon: DollarSign, metric: '32%', description: 'Margin Improvement' },
        { icon: TrendingUp, metric: '28%', description: 'Inventory Turnover' },
        { icon: Clock, metric: '40%', description: 'Delivery Speed' }
      ],
      timeline: '10 months',
      testimonial: 'Outstanding results. Our supply chain is now our competitive advantage.',
      client: 'Operations Director'
    }
  ];

  return (
    <section id="case-studies" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-lg">Success Stories</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
            Proven Track Record of
            <span className="text-gradient block">Exceptional Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real transformations, measurable outcomes, and lasting partnerships 
            across diverse industries and business challenges.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                      {study.industry}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                      {study.title}
                    </h3>
                  </div>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                      <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.results.map((result, resultIndex) => (
                      <motion.div
                        key={resultIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.2 + resultIndex * 0.1 }}
                        className="text-center p-4 bg-card rounded-lg border border-border/50 hover-lift"
                      >
                        <result.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground mb-1">
                          {result.metric}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {result.description}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 border-l-4 border-accent">
                    <blockquote className="text-foreground italic mb-4">
                      "{study.testimonial}"
                    </blockquote>
                    <cite className="text-muted-foreground font-medium">
                      — {study.client}
                    </cite>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Timeline: {study.timeline}
                    </span>
                    <button className="text-accent hover:text-accent-light flex items-center space-x-2 font-semibold">
                      <span>View Full Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    <img
                      src={caseStudyBg}
                      alt="Case study visualization"
                      className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-elegant"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"></div>
                    
                    {/* Floating stats */}
                    <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                      <div className="text-2xl font-bold text-accent">{study.results[0].metric}</div>
                      <div className="text-sm text-muted-foreground">{study.results[0].description}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Write Your Success Story?
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-accent inline-flex items-center space-x-2"
          >
            <span>Start Your Transformation</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;