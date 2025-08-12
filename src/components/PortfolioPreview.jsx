import ModernTemplate from './templates/ModernTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import ExecutiveTemplate from './templates/ExecutiveTemplate';
import TechTemplate from './templates/TechTemplate';
import ConsultantTemplate from './templates/ConsultantTemplate';

function PortfolioPreview({ template, content, isPreview }) {
  const getTemplate = () => {
    switch (template) {
      case 'executive':
        return <ExecutiveTemplate content={content} isPreview={isPreview} />;
      case 'creative':
        return <CreativeTemplate content={content} isPreview={isPreview} />;
      case 'tech':
        return <TechTemplate content={content} isPreview={isPreview} />;
      case 'consultant':
        return <ConsultantTemplate content={content} isPreview={isPreview} />;
      case 'minimal':
        return <MinimalTemplate content={content} isPreview={isPreview} />;
      case 'modern':
        return <ModernTemplate content={content} isPreview={isPreview} />;
      default:
        return <ExecutiveTemplate content={content} isPreview={isPreview} />;
    }
  };

  return (
    <div className={`portfolio-preview ${isPreview ? 'preview-mode' : 'full-mode'}`}>
      {getTemplate()}
    </div>
  );
}

export default PortfolioPreview;