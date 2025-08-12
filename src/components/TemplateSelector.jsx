import { motion } from 'framer-motion';
import '../style/TemplateSelector.css';

const templates = [
  {
    id: 'executive',
    name: 'Executive',
    description: 'Premium corporate design for C-level executives and senior professionals',
    preview: '/api/placeholder/300/200',
    features: ['Corporate styling', 'Achievement highlights', 'Professional metrics', 'Executive summary']
  },
  {
    id: 'creative',
    name: 'Creative Pro',
    description: 'Bold and artistic design perfect for designers and creative professionals',
    preview: '/api/placeholder/300/200',
    features: ['Portfolio showcase', 'Visual storytelling', 'Interactive elements', 'Creative layouts']
  },
  {
    id: 'tech',
    name: 'Tech Leader',
    description: 'Modern technical design for developers, engineers, and tech professionals',
    preview: '/api/placeholder/300/200',
    features: ['Code snippets', 'Technical skills', 'Project demos', 'GitHub integration']
  },
  {
    id: 'consultant',
    name: 'Consultant',
    description: 'Professional consulting design emphasizing expertise and client results',
    preview: '/api/placeholder/300/200',
    features: ['Case studies', 'Client testimonials', 'Service offerings', 'Results metrics']
  },
  {
    id: 'minimal',
    name: 'Minimal Elite',
    description: 'Clean and sophisticated design focusing on content and achievements',
    preview: '/api/placeholder/300/200',
    features: ['Clean typography', 'Content focus', 'Elegant spacing', 'Subtle animations']
  },
  {
    id: 'modern',
    name: 'Modern Professional',
    description: 'Contemporary design with dynamic elements and engaging visuals',
    preview: '/api/placeholder/300/200',
    features: ['Dynamic layouts', 'Engaging visuals', 'Interactive sections', 'Modern aesthetics']
  }
];

function TemplateSelector({ selectedTemplate, onTemplateChange }) {
  return (
    <div className="template-selector">
      <div className="selector-header">
        <h3>Choose Your Template</h3>
        <p>Select a professional template that matches your industry and style</p>
      </div>
      
      <div className="template-grid">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            className={`template-card ${selectedTemplate === template.id ? 'selected' : ''}`}
            onClick={() => onTemplateChange(template.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="template-preview">
              <div className={`template-demo ${template.id}-demo`}>
                <div className="demo-header"></div>
                <div className="demo-content">
                  <div className="demo-line long"></div>
                  <div className="demo-line medium"></div>
                  <div className="demo-line short"></div>
                </div>
                <div className="demo-footer">
                  <div className="demo-dot"></div>
                  <div className="demo-dot"></div>
                  <div className="demo-dot"></div>
                </div>
              </div>
            </div>
            
            <div className="template-info">
              <h4>{template.name}</h4>
              <p>{template.description}</p>
              
              <div className="template-features">
                {template.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>
            
            {selectedTemplate === template.id && (
              <motion.div 
                className="selected-indicator"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelector;