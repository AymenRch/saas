import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiUser, 
  FiSettings, 
  FiBriefcase, 
  FiFolder, 
  FiAward, 
  FiMessageSquare,
  FiBookOpen,
  FiFileText,
  FiPlus,
  FiTrash2
} from 'react-icons/fi';
import '../style/ContentEditor.css';

function ContentEditor({ content, onContentUpdate }) {
  const [activeSection, setActiveSection] = useState('personal');

  const handlePersonalInfoChange = (field, value) => {
    onContentUpdate('personalInfo', {
      ...content.personalInfo,
      [field]: value
    });
  };

  const handleSkillChange = (index, field, value) => {
    const updatedSkills = content.skills.map((skill, i) => 
      i === index ? { ...skill, [field]: value } : skill
    );
    onContentUpdate('skills', updatedSkills);
  };

  const addSkill = () => {
    onContentUpdate('skills', [
      ...content.skills,
      { name: 'New Skill', level: 70, category: 'General' }
    ]);
  };

  const removeSkill = (index) => {
    onContentUpdate('skills', content.skills.filter((_, i) => i !== index));
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = content.experience.map((exp, i) => 
      i === index ? { ...exp, [field]: value } : exp
    );
    onContentUpdate('experience', updatedExperience);
  };

  const handleAchievementChange = (expIndex, achIndex, value) => {
    const updatedExperience = content.experience.map((exp, i) => {
      if (i === expIndex) {
        const updatedAchievements = [...(exp.achievements || [])];
        updatedAchievements[achIndex] = value;
        return { ...exp, achievements: updatedAchievements };
      }
      return exp;
    });
    onContentUpdate('experience', updatedExperience);
  };

  const addAchievement = (expIndex) => {
    const updatedExperience = content.experience.map((exp, i) => {
      if (i === expIndex) {
        return { 
          ...exp, 
          achievements: [...(exp.achievements || []), 'New achievement'] 
        };
      }
      return exp;
    });
    onContentUpdate('experience', updatedExperience);
  };

  const removeAchievement = (expIndex, achIndex) => {
    const updatedExperience = content.experience.map((exp, i) => {
      if (i === expIndex) {
        const updatedAchievements = exp.achievements.filter((_, idx) => idx !== achIndex);
        return { ...exp, achievements: updatedAchievements };
      }
      return exp;
    });
    onContentUpdate('experience', updatedExperience);
  };

  const addExperience = () => {
    onContentUpdate('experience', [
      ...content.experience,
      {
        id: Date.now(),
        title: 'Job Title',
        company: 'Company Name',
        period: '2023 - Present',
        location: 'City, State',
        description: 'Job description here...',
        achievements: [],
        technologies: []
      }
    ]);
  };

  const removeExperience = (index) => {
    onContentUpdate('experience', content.experience.filter((_, i) => i !== index));
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = content.projects.map((project, i) => 
      i === index ? { ...project, [field]: value } : project
    );
    onContentUpdate('projects', updatedProjects);
  };

  const addProject = () => {
    onContentUpdate('projects', [
      ...content.projects,
      {
        id: Date.now(),
        title: 'Project Title',
        description: 'Project description here...',
        longDescription: 'Detailed project description...',
        technologies: ['React', 'CSS'],
        category: 'Web Development',
        year: '2023',
        client: 'Client Name',
        duration: '3 months',
        role: 'Lead Developer',
        team: '4 people',
        demoUrl: '',
        caseStudyUrl: '',
        image: '',
        gallery: [],
        results: []
      }
    ]);
  };

  const removeProject = (index) => {
    onContentUpdate('projects', content.projects.filter((_, i) => i !== index));
  };

  const handleTestimonialChange = (index, field, value) => {
    const updatedTestimonials = content.testimonials.map((testimonial, i) => 
      i === index ? { ...testimonial, [field]: value } : testimonial
    );
    onContentUpdate('testimonials', updatedTestimonials);
  };

  const addTestimonial = () => {
    onContentUpdate('testimonials', [
      ...(content.testimonials || []),
      {
        id: Date.now(),
        name: 'Client Name',
        role: 'Position',
        company: 'Company',
        content: 'Testimonial content...',
        avatar: '',
        rating: 5
      }
    ]);
  };

  const removeTestimonial = (index) => {
    onContentUpdate('testimonials', content.testimonials.filter((_, i) => i !== index));
  };

  const sections = [
    { id: 'personal', label: 'Personal', icon: FiUser },
    { id: 'skills', label: 'Skills', icon: FiSettings },
    { id: 'experience', label: 'Experience', icon: FiBriefcase },
    { id: 'projects', label: 'Projects', icon: FiFolder },
    { id: 'testimonials', label: 'Testimonials', icon: FiMessageSquare },
    { id: 'awards', label: 'Awards', icon: FiAward },
    { id: 'education', label: 'Education', icon: FiBookOpen },
    { id: 'certifications', label: 'Certifications', icon: FiFileText }
  ];

  return (
    <div className="content-editor">
      <div className="editor-tabs">
        {sections.map(section => {
          const IconComponent = section.icon;
          return (
            <motion.button
              key={section.id}
              className={`tab-button ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconComponent className="tab-icon" />
              <span className="tab-label">{section.label}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="editor-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeSection === 'personal' && (
              <div className="editor-section">
                <h3>Personal Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      value={content.personalInfo.name}
                      onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Professional Title *</label>
                    <input
                      type="text"
                      value={content.personalInfo.title}
                      onChange={(e) => handlePersonalInfoChange('title', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      value={content.personalInfo.email}
                      onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      value={content.personalInfo.phone}
                      onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <input
                      type="text"
                      value={content.personalInfo.location}
                      onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Website</label>
                    <input
                      type="url"
                      value={content.personalInfo.website}
                      onChange={(e) => handlePersonalInfoChange('website', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>LinkedIn</label>
                    <input
                      type="text"
                      value={content.personalInfo.linkedin}
                      onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>GitHub</label>
                    <input
                      type="text"
                      value={content.personalInfo.github}
                      onChange={(e) => handlePersonalInfoChange('github', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Avatar URL</label>
                    <input
                      type="url"
                      value={content.personalInfo.avatar || ''}
                      onChange={(e) => handlePersonalInfoChange('avatar', e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group full-width">
                  <label>Bio / Summary *</label>
                  <textarea
                    rows="4"
                    value={content.personalInfo.bio}
                    onChange={(e) => handlePersonalInfoChange('bio', e.target.value)}
                    placeholder="Write a compelling professional summary..."
                  />
                </div>
              </div>
            )}

            {activeSection === 'skills' && (
              <div className="editor-section">
                <div className="section-header">
                  <h3>Skills & Expertise</h3>
                  <motion.button 
                    className="btn btn-primary" 
                    onClick={addSkill}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiPlus /> Add Skill
                  </motion.button>
                </div>
                <div className="skills-list">
                  {content.skills.map((skill, index) => (
                    <motion.div 
                      key={index} 
                      className="skill-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="skill-inputs">
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                          placeholder="Skill name"
                        />
                        <select
                          value={skill.category || 'General'}
                          onChange={(e) => handleSkillChange(index, 'category', e.target.value)}
                        >
                          <option value="Design">Design</option>
                          <option value="Development">Development</option>
                          <option value="Research">Research</option>
                          <option value="Strategy">Strategy</option>
                          <option value="Systems">Systems</option>
                          <option value="General">General</option>
                        </select>
                        <div className="skill-level">
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={skill.level}
                            onChange={(e) => handleSkillChange(index, 'level', parseInt(e.target.value))}
                          />
                          <span>{skill.level}%</span>
                        </div>
                      </div>
                      <motion.button
                        className="remove-btn"
                        onClick={() => removeSkill(index)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiTrash2 />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="editor-section">
                <div className="section-header">
                  <h3>Work Experience</h3>
                  <motion.button 
                    className="btn btn-primary" 
                    onClick={addExperience}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiPlus /> Add Experience
                  </motion.button>
                </div>
                <div className="experience-list">
                  {content.experience.map((exp, index) => (
                    <motion.div 
                      key={exp.id} 
                      className="experience-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="experience-header">
                        <h4>Experience {index + 1}</h4>
                        <motion.button
                          className="remove-btn"
                          onClick={() => removeExperience(index)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiTrash2 />
                        </motion.button>
                      </div>
                      <div className="form-grid">
                        <div className="form-group">
                          <label>Job Title</label>
                          <input
                            type="text"
                            value={exp.title}
                            onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Company</label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Period</label>
                          <input
                            type="text"
                            value={exp.period}
                            onChange={(e) => handleExperienceChange(index, 'period', e.target.value)}
                            placeholder="e.g., 2020 - Present"
                          />
                        </div>
                        <div className="form-group">
                          <label>Location</label>
                          <input
                            type="text"
                            value={exp.location || ''}
                            onChange={(e) => handleExperienceChange(index, 'location', e.target.value)}
                            placeholder="City, State"
                          />
                        </div>
                      </div>
                      <div className="form-group full-width">
                        <label>Description</label>
                        <textarea
                          rows="3"
                          value={exp.description}
                          onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                        />
                      </div>
                      
                      <div className="achievements-section">
                        <div className="section-header">
                          <label>Key Achievements</label>
                          <motion.button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={() => addAchievement(index)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FiPlus /> Add Achievement
                          </motion.button>
                        </div>
                        {(exp.achievements || []).map((achievement, achIndex) => (
                          <div key={achIndex} className="achievement-item">
                            <input
                              type="text"
                              value={achievement}
                              onChange={(e) => handleAchievementChange(index, achIndex, e.target.value)}
                              placeholder="Describe a key achievement..."
                            />
                            <motion.button
                              type="button"
                              className="remove-btn-sm"
                              onClick={() => removeAchievement(index, achIndex)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <FiTrash2 />
                            </motion.button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'projects' && (
              <div className="editor-section">
                <div className="section-header">
                  <h3>Projects & Portfolio</h3>
                  <motion.button 
                    className="btn btn-primary" 
                    onClick={addProject}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiPlus /> Add Project
                  </motion.button>
                </div>
                <div className="projects-list">
                  {content.projects.map((project, index) => (
                    <motion.div 
                      key={project.id} 
                      className="project-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="project-header">
                        <h4>Project {index + 1}</h4>
                        <motion.button
                          className="remove-btn"
                          onClick={() => removeProject(index)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiTrash2 />
                        </motion.button>
                      </div>
                      <div className="form-grid">
                        <div className="form-group">
                          <label>Project Title</label>
                          <input
                            type="text"
                            value={project.title}
                            onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Category</label>
                          <input
                            type="text"
                            value={project.category || ''}
                            onChange={(e) => handleProjectChange(index, 'category', e.target.value)}
                            placeholder="e.g., Web App, Mobile App"
                          />
                        </div>
                        <div className="form-group">
                          <label>Year</label>
                          <input
                            type="text"
                            value={project.year || ''}
                            onChange={(e) => handleProjectChange(index, 'year', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Client</label>
                          <input
                            type="text"
                            value={project.client || ''}
                            onChange={(e) => handleProjectChange(index, 'client', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Demo URL</label>
                          <input
                            type="url"
                            value={project.demoUrl}
                            onChange={(e) => handleProjectChange(index, 'demoUrl', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Case Study URL</label>
                          <input
                            type="url"
                            value={project.caseStudyUrl || ''}
                            onChange={(e) => handleProjectChange(index, 'caseStudyUrl', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Project Image URL</label>
                          <input
                            type="url"
                            value={project.image || ''}
                            onChange={(e) => handleProjectChange(index, 'image', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-group full-width">
                        <label>Short Description</label>
                        <textarea
                          rows="2"
                          value={project.description}
                          onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                        />
                      </div>
                      <div className="form-group full-width">
                        <label>Detailed Description</label>
                        <textarea
                          rows="4"
                          value={project.longDescription || ''}
                          onChange={(e) => handleProjectChange(index, 'longDescription', e.target.value)}
                          placeholder="Detailed project description for case studies..."
                        />
                      </div>
                      <div className="form-group full-width">
                        <label>Technologies (comma-separated)</label>
                        <input
                          type="text"
                          value={project.technologies.join(', ')}
                          onChange={(e) => handleProjectChange(index, 'technologies', e.target.value.split(', ').filter(t => t.trim()))}
                          placeholder="React, Node.js, MongoDB"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'testimonials' && (
              <div className="editor-section">
                <div className="section-header">
                  <h3>Client Testimonials</h3>
                  <motion.button 
                    className="btn btn-primary" 
                    onClick={addTestimonial}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiPlus /> Add Testimonial
                  </motion.button>
                </div>
                <div className="testimonials-list">
                  {(content.testimonials || []).map((testimonial, index) => (
                    <motion.div 
                      key={testimonial.id} 
                      className="testimonial-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="testimonial-header">
                        <h4>Testimonial {index + 1}</h4>
                        <motion.button
                          className="remove-btn"
                          onClick={() => removeTestimonial(index)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiTrash2 />
                        </motion.button>
                      </div>
                      <div className="form-grid">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            value={testimonial.name}
                            onChange={(e) => handleTestimonialChange(index, 'name', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Role</label>
                          <input
                            type="text"
                            value={testimonial.role}
                            onChange={(e) => handleTestimonialChange(index, 'role', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Company</label>
                          <input
                            type="text"
                            value={testimonial.company}
                            onChange={(e) => handleTestimonialChange(index, 'company', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Rating (1-5)</label>
                          <input
                            type="number"
                            min="1"
                            max="5"
                            value={testimonial.rating}
                            onChange={(e) => handleTestimonialChange(index, 'rating', parseInt(e.target.value))}
                          />
                        </div>
                      </div>
                      <div className="form-group full-width">
                        <label>Testimonial Content</label>
                        <textarea
                          rows="4"
                          value={testimonial.content}
                          onChange={(e) => handleTestimonialChange(index, 'content', e.target.value)}
                          placeholder="What did they say about your work?"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Add other sections (awards, education, certifications) with similar patterns */}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ContentEditor;