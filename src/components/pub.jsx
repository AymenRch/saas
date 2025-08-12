import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <>
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Build Your
                <span className="gradient-text"> Portfolio?</span>
              </h2>
              <p className="cta-description">
                Join thousands of creators who have already built amazing portfolios. 
                Start for free, no credit card required.
              </p>
              <div className="cta-buttons">
                <Link size="lg" className="primary-btn">
                  Start Building Now
                  <ArrowRight className="arrow-icon" />
                </Link>
                <Link size="lg" variant="outline" className="secondary-btn">
                  View Live Examples
                </Link>
              </div>
              <p className="cta-note">Free forever plan available • No credit card required</p>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          .cta-section {
            padding: 5rem 1rem;
            color: white;
          }
          .container {
            max-width: 768px; /* max-w-4xl */
            margin: 0 auto;
            text-align: center;
          }
          .cta-card {
            background: linear-gradient(to right, rgba(168,85,247,0.2), rgba(59,130,246,0.2)); /* from-purple-500/20 to-blue-500/20 */
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 8px;
          }
          .cta-content {
            padding: 3rem; /* p-12 */
          }
          .cta-title {
            font-size: 2.5rem; /* text-4xl md:text-5xl */
            font-weight: bold;
            color: white;
            margin-bottom: 1.5rem;
          }
          .gradient-text {
            background: linear-gradient(to right, #a78bfa, #60a5fa); /* from-purple-400 to-blue-400 */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .cta-description {
            font-size: 1.25rem; /* text-xl */
            color: rgba(255,255,255,0.8);
            margin-bottom: 2rem;
            max-width: 640px; /* max-w-2xl */
            margin-left: auto;
            margin-right: auto;
          }
          .cta-buttons {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
          }
          @media (min-width: 640px) {
            .cta-buttons {
              flex-direction: row;
            }
          }
          .primary-btn {
            background: linear-gradient(to right, #a855f7, #3b82f6); /* from-purple-500 to-blue-500 */
            color: white;
            border: none;
            padding: 1.5rem 3rem; /* px-12 py-6 */
            font-size: 1.125rem; /* text-lg */
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.375rem;
            cursor: pointer;
            transition: background 0.3s ease;
          }
          .primary-btn:hover {
            background: linear-gradient(to right, #9333ea, #2563eb); /* hover:from-purple-600 hover:to-blue-600 */
          }
          .arrow-icon {
            margin-left: 0.5rem; /* ml-2 */
            width: 1.25rem; /* h-5 w-5 */
            height: 1.25rem;
            transition: transform 0.3s ease;
          }
          .primary-btn:hover .arrow-icon {
            transform: translateX(0.25rem); /* translate-x-1 */
          }
          .secondary-btn {
            background-color: rgba(255,255,255,0.1); /* bg-white/10 */
            color: white;
            border: 1px solid rgba(255,255,255,0.2);
            padding: 1.5rem 3rem; /* px-12 py-6 */
            font-size: 1.125rem;
            backdrop-filter: blur(4px);
            border-radius: 0.375rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .secondary-btn:hover {
            background-color: rgba(255,255,255,0.2); /* hover:bg-white/20 */
          }
          .cta-note {
            color: rgba(255,255,255,0.6); /* text-white/60 */
            font-size: 0.875rem; /* text-sm */
            margin-top: 1.5rem;
          }
        `}
      </style>
    </>
  );
};

export default CallToActionSection;
