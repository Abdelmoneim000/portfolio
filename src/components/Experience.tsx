'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer freelancer',
      company: '',
      location: 'Remote',
      period: 'Aug. 2023 - Present',
      description: [
        'Successfully completed over 10 project with 4.9/5 star rating and satisfied customers',
        'Delivering every project on a running remote server and making sure it\'s working',
        'Making use of available resources on every server and configuring each one to work with a specified project',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: '',
      location: 'Remote, Africa',
      period: 'April 2023 - May 2024',
      description: [
        'Participated in an intensive software engineering program, Focusing on practical and advanced coding skills',
        'Learning how internet works and diving deeper into connection protocols and layers',
        'Maintaining Remote servers and practicing configuration skills on them. From load balancing to deployment and hosting',
      ],
    },
    {
      title: 'Junior Full-Stack developer',
      company: 'Selworthy',
      location: 'Remote, USA',
      period: 'January 2025 - Present',
      description: [
        'Working and communicating Under the management team directly to Understand the scope of each project',
        'Working on variety of projects from clients and specifying the requirements, deadlines and scopes of work',
        'Developing and maintaining every project and making sure it\'s reliable & easy to be used by the client',
        'Making customized apps to achieve clients\' needs by using external tools and api\'s like Hubspot, fishbowl',
        'Configuring, developing and maintaining virtual servers and environments to host each application and deploy every project during the development and production processes in order for the client to be able to see the progress',
        'Communicating with other teams such as UI/UX designers and marketing to understand and identify the client needs',
      ],
    },
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        <motion.div 
          className="content-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <motion.div 
                  className="timeline-content"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="timeline-date">{exp.period}</div>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <div className="timeline-location">{exp.location}</div>
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {exp.description.map((item, itemIndex) => (
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
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 