'use client';

import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Co-housing platform with React.js: ACC',
      description: [
        'Working with React.js and making the app responsive.',
        'Documenting and organizing the code on github.',
        'Connect the Front-end to the Back-end which works in Django.',
        'Working with the mobile version in React Native to develop it\'s Front-end',
      ],
    },
    {
      title: 'Founding Mentor.AI platform (Development phase): Landing page',
      description: [
        'Working with A team of Front-end & Back-end juniors to create our own software solution.',
        'Assigning tasks, Managing the repo and the platform code',
        'Making the market research, development life cycle and prioritizing specific parts of the development phase as needed',
        'Creating tests for each part of the project and managing merge conflicts and pull requests on Github.',
      ],
    },
    {
      title: 'ALX Egypt mentor',
      description: [
        'Officially working with ALX Egypt as a mentor for cohorts.',
        'Teaching C, Python languages to students with real-life situation code.',
        'Leading students through projects and help them by making walk through sessions.',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <motion.div 
          className="content-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="project-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.3)" 
                }}
              >
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {project.description.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (itemIndex * 0.1), duration: 0.3 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 