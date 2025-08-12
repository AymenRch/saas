import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiGlobe, 
  FiLinkedin, 
  FiGithub,
  FiExternalLink,
  FiAward,
  FiTrendingUp,
  FiUsers,
  FiDollarSign
} from 'react-icons/fi';
import '../../style/templates/ExecutiveTemplate.css';

function ExecutiveTemplate({ content, isPreview }) {
  const { personalInfo, skills, experience, projects, testimonials, awards } = content;
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    { label: 'Years Experience', value: 8, icon: FiTrendingUp },
    { label: 'Projects Completed', value: 50, icon: FiAward },
    { label: 'Team Members Led', value: 120, icon: FiUsers },
    { label: 'Revenue Generated', value: 50, prefix: '$', suffix: 'M', icon: FiDollarSign }
  ];

  return (
    <div className={`executive-template ${isPreview ? 'preview' : 'full'}`}>
      {/* Hero Section */}
      <section className="executive-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="executive-badge">
              <span>Executive Leader</span>
            </div>
            <h1 className="executive-name">{personalInfo.name}</h1>
            <h2 className="executive-title">{personalInfo.title}</h2>
            <p className="executive-bio">{personalInfo.bio}</p>
            
            <div className="hero-actions">
              <motion.a 
                href={`mailto:${personalInfo.email}`} 
                className="cta-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail />
                Schedule Meeting
              </motion.a>
              <motion.a 
                href={`tel:${personalInfo.phone}`} 
                className="cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPhone />
                {personalInfo.phone}
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-profile"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-card-executive">
              <div className="profile-image">
                {personalInfo.avatar ? (
                  <img src={personalInfo.avatar} alt={personalInfo.name} />
                ) : (
                  <div className="avatar-placeholder">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              
              <div className="contact-info-executive">
                <div className="contact-item-executive">
                  <FiMail className="contact-icon" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="contact-item-executive">
                  <FiMapPin className="contact-icon" />
                  <span>{personalInfo.location}</span>
                </div>
                {personalInfo.website && (
                  <div className="contact-item-executive">
                    <FiGlobe className="contact-icon" />
                    <span>{personalInfo.website}</span>
                  </div>
                )}
              </div>
              
              <div className="social-links-executive">
                {personalInfo.linkedin && (
                  <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                  </a>
                )}
                {personalInfo.github && (
                  <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="executive-stats" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="stat-icon">
                    <IconComponent />
                  </div>
                  <div className="stat-content">
                    <div className="stat-number">
                      {statsInView && (
                        <>
                          {stat.prefix}
                          <CountUp 
                            end={stat.value} 
                            duration={2} 
                            delay={index * 0.2}
                          />
                          {stat.suffix}
                        </>
                      )}
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="executive-competencies">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Core Competencies</h2>
            <p className="section-subtitle">Strategic expertise across multiple domains</p>
          </motion.div>
          
          <div className="competencies-grid">
            {skills.slice(0, 8).map((skill, index) => (
              <motion.div 
                key={index}
                className="competency-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="competency-header">
                  <h3>{skill.name}</h3>
                  <span className="competency-level">{skill.level}%</span>
                </div>
                <div className="competency-bar">
                  <motion.div 
                    className="competency-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <div className="competency-category">{skill.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Experience */}
      <section className="executive-experience">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Executive Leadership</h2>
            <p className="section-subtitle">Proven track record of driving organizational success</p>
          </motion.div>
          
          <div className="experience-timeline">
            {experience.map((exp, index) => (
              <motion.div 
                key={exp.id}
                className="timeline-item-executive"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker-executive">
                  <div className="marker-dot"></div>
                  <div className="marker-line"></div>
                </div>
                
                <div className="experience-card-executive">
                  <div className="experience-header-executive">
                    <div className="experience-meta">
                      <h3>{exp.title}</h3>
                      <h4>{exp.company}</h4>
                      <div className="experience-details">
                        <span className="period">{exp.period}</span>
                        <span className="location">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="experience-description-executive">{exp.description}</p>
                  
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="achievements-executive">
                      <h5>Key Achievements</h5>
                      <ul>
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="technologies-executive">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag-executive">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Projects */}
      <section className="executive-projects">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Strategic Initiatives</h2>
            <p className="section-subtitle">Transformational projects that delivered measurable impact</p>
          </motion.div>
          
          <div className="projects-grid-executive">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="project-card-executive"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image-executive">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    <div className="project-placeholder-executive">
                      <FiTrendingUp />
                    </div>
                  )}
                  <div className="project-overlay-executive">
                    <div className="project-links-executive">
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <FiExternalLink />
                          View Project
                        </a>
                      )}
                      {project.caseStudyUrl && (
                        <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                          <FiExternalLink />
                          Case Study
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="project-content-executive">
                  <div className="project-meta-executive">
                    <span className="project-category">{project.category}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  {project.results && project.results.length > 0 && (
                    <div className="project-results">
                      <h5>Results Achieved</h5>
                      <ul>
                        {project.results.slice(0, 3).map((result, resultIndex) => (
                          <li key={resultIndex}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="project-technologies-executive">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge-executive">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <section className="executive-testimonials">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Executive Endorsements</h2>
              <p className="section-subtitle">What industry leaders say about my work</p>
            </motion.div>
            
            <div className="testimonials-grid-executive">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div 
                  key={testimonial.id}
                  className="testimonial-card-executive"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="testimonial-content-executive">
                    <div className="quote-mark">"</div>
                    <p>{testimonial.content}</p>
                    <div className="rating-executive">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="testimonial-author-executive">
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                      <p className="company">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="executive-footer">
        <div className="container">
          <div className="footer-content-executive">
            <div className="footer-text-executive">
              <h3>Ready to Drive Your Next Strategic Initiative?</h3>
              <p>Let's discuss how my executive leadership can accelerate your organization's growth and transformation.</p>
            </div>
            
            <div className="footer-actions">
              <a href={`mailto:${personalInfo.email}`} className="footer-cta">
                <FiMail />
                Schedule Executive Consultation
              </a>
              <div className="footer-contact">
                <span>{personalInfo.email}</span>
                <span>{personalInfo.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ExecutiveTemplate;