import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  BarChart3, 
  Target, 
  Cog, 
  TrendingUp, 
  Users, 
  Shield,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: BarChart3,
      title: 'Strategic Planning',
      description: 'Comprehensive business strategy development with clear roadmaps and measurable outcomes.',
      features: ['Market Analysis', 'Competitive Intelligence', 'Growth Strategy', 'Risk Assessment']
    },
    {
      icon: Target,
      title: 'Digital Transformation',
      description: 'End-to-end digital solutions that modernize operations and enhance customer experience.',
      features: ['Technology Integration', 'Process Automation', 'Digital Culture', 'Change Management']
    },
    {
      icon: Cog,
      title: 'Operational Excellence',
      description: 'Streamline processes, eliminate inefficiencies, and optimize resource allocation.',
      features: ['Process Optimization', 'Cost Reduction', 'Quality Improvement', 'Supply Chain']
    },
    {
      icon: TrendingUp,
      title: 'Performance Management',
      description: 'Data-driven approaches to measure, monitor, and enhance business performance.',
      features: ['KPI Development', 'Dashboard Creation', 'Performance Analytics', 'Continuous Improvement']
    },
    {
      icon: Users,
      title: 'Organizational Development',
      description: 'Build high-performing teams and cultures that drive sustainable success.',
      features: ['Leadership Development', 'Team Building', 'Culture Transformation', 'Talent Strategy']
    },
    {
      icon: Shield,
      title: 'Risk & Compliance',
      description: 'Comprehensive risk management and regulatory compliance frameworks.',
      features: ['Risk Assessment', 'Compliance Strategy', 'Governance Framework', 'Crisis Management']
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-lg">Our Services</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
            Comprehensive Solutions for
            <span className="text-gradient block">Business Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We deliver end-to-end consulting services that transform challenges into 
            competitive advantages and drive measurable business results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-service group"
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Discuss Your Needs</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;