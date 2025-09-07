import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Lightbulb, Trophy, Users } from 'lucide-react';
import consultant1 from '@/assets/consultant-1.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'We align every initiative with your core business objectives for maximum impact.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Drive',
      description: 'Cutting-edge solutions that position your business ahead of the competition.'
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      description: 'Track record of delivering measurable outcomes across diverse industries.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'Collaborative approach ensuring sustainable change and knowledge transfer.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={consultant1}
                alt="Professional consultant"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-accent rounded-2xl opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-primary rounded-full opacity-30"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <span className="text-accent font-semibold text-lg">About ConsultPro</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
                Empowering Businesses to 
                <span className="text-gradient block">Reach New Heights</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              With over 15 years of expertise in business transformation, we've helped 
              500+ companies navigate complex challenges and unlock their full potential. 
              Our proven methodologies and deep industry insights deliver results that 
              matter—sustainable growth, operational excellence, and competitive advantage.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-muted-foreground mb-12 leading-relaxed"
            >
              From Fortune 500 enterprises to innovative startups, we bring the same 
              level of strategic rigor and execution excellence to every engagement.
            </motion.p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;