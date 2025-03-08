'use client';

import { motion } from 'framer-motion';

const Education = () => {
  const educations = [
    {
      title: 'Professional track - Nanodegree program',
      institution: 'Udacity',
      period: 'Dec.2020 - Mars.2021',
    },
    {
      title: 'Advancer track - Nanodegree program',
      institution: 'Udacity',
      period: 'Aug.2022 - Nov.2022',
    },
    {
      title: 'Cross-Skilling track - Nanodegree program',
      institution: 'Udacity',
      period: 'Nov.2022 - Dec.2022',
    },
    {
      title: 'Software Engineer program',
      institution: 'ALX Africa',
      period: 'April.2023 - May.2024',
    },
    {
      title: 'Founder Academy Program',
      institution: 'ALX Egypt',
      period: 'March.2024 - July.2024',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="education" className="education section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          Education and Certifications
        </motion.h2>
        <motion.div 
          className="content-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="education-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {educations.map((edu, index) => (
              <motion.div 
                key={index} 
                className="education-item"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" 
                }}
              >
                <motion.div 
                  className="education-date"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {edu.period}
                </motion.div>
                <motion.h3 
                  className="education-title"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {edu.title}
                </motion.h3>
                <motion.div 
                  className="education-institution"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {edu.institution}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 