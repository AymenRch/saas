import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import TemplateSelector from '../components/TemplateSelector';
import ContentEditor from '../components/ContentEditor';
import PortfolioPreview from '../components/PortfolioPreview';
import { defaultContent } from '../data/defaultContent';
import '../App.css';
import { red } from '@mui/material/colors';

function Build() {
  const [selectedTemplate, setSelectedTemplate] = useState('executive');
  const [content, setContent] = useState(defaultContent);
  const [currentView, setCurrentView] = useState('builder'); // 'builder' or 'preview'

  const handleContentUpdate = (section, updatedData) => {
    setContent(prev => ({
      ...prev,
      [section]: updatedData
    }));
  };

  const handleTemplateChange = (templateId) => {
    setSelectedTemplate(templateId);
  };
  return (
    <div className="app">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Portfolio Builder Pro
          </Typography>
          <Button
            color="inherit"
            onClick={() => setCurrentView('builder')}
            variant={currentView === 'builder' ? 'contained' : 'text'}
          >
            Builder
          </Button>
          <Button
            color="inherit"
            onClick={() => setCurrentView('preview')}
            variant={currentView === 'preview' ? 'contained' : 'text'}
          >
            Preview
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <AnimatePresence mode="wait">
          {currentView === 'builder' ? (
            <motion.div
              key="builder"
              className="builder-layout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <aside className="builder-sidebar">
                <TemplateSelector
                  selectedTemplate={selectedTemplate}
                  onTemplateChange={handleTemplateChange}
                />
                <ContentEditor
                  content={content}
                  onContentUpdate={handleContentUpdate}
                />
              </aside>
              <div className="builder-preview">
                <div className="preview-header">
                  <h3>Live Preview</h3>
                  <span className="template-indicator">
                    Template: {selectedTemplate.charAt(0).toUpperCase() + selectedTemplate.slice(1)}
                  </span>
                </div>
                <div className="preview-container">
                  <PortfolioPreview
                    template={selectedTemplate}
                    content={content}
                    isPreview={true}
                  />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              className="full-preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioPreview
                template={selectedTemplate}
                content={content}
                isPreview={false}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
}

export default Build;