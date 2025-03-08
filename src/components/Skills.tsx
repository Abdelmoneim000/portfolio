'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Proficient',
      skills: ['Linux', 'HTML5', 'CSS', 'Javascript (ES6)', 'Git'],
    },
    {
      title: 'Moderate',
      skills: ['Node.js', 'React.js', 'Typescript', 'React', 'Python', 'Flask', 'Bash', 'Next.Js'],
    },
    {
      title: 'Beginner',
      skills: ['SQL', 'mySQL', 'PostgreSQL', 'Webpack', 'Redux', 'Jasmine & JEST for Unit tests'],
    },
    {
      title: 'DevOps tools',
      skills: ['CircleCi', 'Docker', 'Github Actions', 'AWS CLI'],
    },
    {
      title: 'Configuration Management',
      skills: ['Puppet'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <motion.div 
          className="content-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="skills-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className="skill-category"
                variants={itemVariants}
              >
                <h3>{category.title}</h3>
                <ul className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li 
                      key={skillIndex} 
                      className="skill-item"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * skillIndex, duration: 0.3 }}
                    >
                      <span>●</span> {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 