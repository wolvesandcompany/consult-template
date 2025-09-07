import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail, Award, Users } from 'lucide-react';
import consultant1 from '@/assets/consultant-1.jpg';
import consultant2 from '@/assets/consultant-2.jpg';

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const teamMembers = [
    {
      name: 'James Mitchell',
      role: 'Managing Partner & CEO',
      image: consultant1,
      bio: 'Former McKinsey principal with 15+ years in strategy consulting. Led transformations for Fortune 500 companies across technology, manufacturing, and healthcare sectors.',
      expertise: ['Strategic Planning', 'Digital Transformation', 'Change Management'],
      achievements: '50+ successful transformations',
      linkedin: '#',
      email: 'james@consultpro.com'
    },
    {
      name: 'Sarah Anderson',
      role: 'Senior Partner, Operations',
      image: consultant2,
      bio: 'Operations excellence expert with deep experience in process optimization and supply chain management. Previously VP Operations at leading manufacturing companies.',
      expertise: ['Operational Excellence', 'Supply Chain', 'Performance Management'],
      achievements: '$100M+ in cost savings delivered',
      linkedin: '#',
      email: 'sarah@consultpro.com'
    },
    {
      name: 'Robert Chen',
      role: 'Partner, Technology',
      image: consultant1,
      bio: 'Technology transformation specialist with expertise in AI, cloud architecture, and digital innovation. Former CTO at multiple tech startups and enterprise companies.',
      expertise: ['Digital Strategy', 'AI Implementation', 'Technology Architecture'],
      achievements: '25+ digital transformations',
      linkedin: '#',
      email: 'robert@consultpro.com'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Partner, Organizational Development',
      image: consultant2,
      bio: 'Organizational psychology expert focused on culture transformation and leadership development. PhD in Industrial Psychology with consulting experience across diverse industries.',
      expertise: ['Culture Transformation', 'Leadership Development', 'Change Psychology'],
      achievements: '200+ leaders developed',
      linkedin: '#',
      email: 'maria@consultpro.com'
    }
  ];

  const stats = [
    { icon: Award, value: '150+', label: 'Projects Completed' },
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Award, value: '98%', label: 'Client Satisfaction' },
    { icon: Users, value: '15+', label: 'Years Experience' }
  ];

  return (
    <section id="team" className="py-20 lg:py-32 bg-gradient-subtle">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-lg">Our Team</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
            Meet the Experts Behind
            <span className="text-gradient block">Your Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our diverse team brings together decades of experience from top-tier 
            consulting firms, Fortune 500 companies, and innovative startups.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center card-premium"
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <div className="card-premium hover-lift">
                {/* Image */}
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl group-hover:from-accent/20 transition-all duration-300"></div>
                  
                  {/* Social Links Overlay */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-accent font-semibold mb-4">{member.role}</p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Achievement */}
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Award className="w-4 h-4 mr-2 text-accent" />
                    {member.achievements}
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Work with Industry Experts?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is ready to help you tackle your biggest challenges and 
            unlock new opportunities for growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;