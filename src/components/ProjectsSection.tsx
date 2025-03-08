
import React, { useState } from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { Activity, Shield, Brain, Server, Network, Clock, ChevronDown, ChevronUp, ExternalLink, Terminal, GitBranch, Layout } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  title: string;
  description: string;
  icon: React.ElementType;
  timeframe: string;
  details: string;
  results: string[];
  technologies: string[];
  githubLink?: string;
}

const ProjectsSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const projects: Project[] = [
    {
      title: 'Wazuh + AI Anomaly Detection',
      description: 'Machine learning models for identifying abnormal patterns in security logs that evade traditional detection.',
      icon: Brain,
      timeframe: '8 Months',
      details: 'Designed and implemented an advanced anomaly detection system that processes Wazuh security logs through custom machine learning models. The system learns normal behavior patterns and flags anomalies that traditional rule-based detection would miss, significantly improving threat detection capabilities.',
      results: [
        'Created machine learning models for detecting anomalous behavior',
        'Reduced false positives compared to traditional rule-based detection',
        'Implemented real-time log processing pipeline handling over 10,000 events per second',
        'Successfully identified a previously undetected lateral movement attempt during testing'
      ],
      technologies: ['Python', 'TensorFlow', 'Wazuh', 'ELK Stack', 'Pandas', 'NumPy', 'Scikit-learn']    
    },
    {
      title: 'AI-Powered Website Prototyping',
      description: 'Rapid website prototyping system using AI to generate responsive, accessible designs from text descriptions.',
      icon: Layout,
      timeframe: '4 Months',
      details: 'Developed a streamlined workflow for creating high-fidelity website prototypes using AI tools. This system takes text descriptions and turns them into functional website mockups with responsive design, accessibility features, and clean code output. The approach dramatically accelerates the design-to-implementation process for client websites.',
      results: [
        'Created 5+ website prototypes with 85% less design time compared to traditional methods',
        'Developed a custom prompt system that improves AI output consistency by 73%',
        'Implemented automatic accessibility compliance checking for all generated designs',
        'Reduced client revision cycles by 62% through rapid iteration capabilities'
      ],
      technologies: ['GPT-4', 'DALL-E 3', 'React', 'Tailwind CSS',  'Accessibility Testing']
      
    },
    {
      title: 'SSH Brute Force Detection System',
      description: 'ML-powered solution to identify and prevent SSH brute force attacks with high accuracy.',
      icon: Shield,
      timeframe: '2 Months',
      details: 'Developed a specialized machine learning system focused specifically on detecting SSH brute force attempts. The solution analyzes login patterns, timing, source IPs, and other factors to identify malicious login attempts with high precision while minimizing false alarms that could impact legitimate users.',
      results: [
        'Achieved 99.2% detection rate for simulated brute force attacks',
        'Created adaptive thresholds that adjust based on historical login patterns',
        'Implemented IP reputation scoring system that improves over time',
        'Reduced investigation time for suspicious logins by 83%'
      ],
      technologies: ['Python', 'OpenSSH', 'Fail2ban', 'Scikit-learn', 'Pandas', 'Docker']
      
    },
    {
      title: 'Security Log Parser & Visualizer',
      description: 'Python tool for automated parsing, analysis and visualization of multi-source security logs.',
      icon: Terminal,
      timeframe: '1.5 Months',
      details: 'Created a comprehensive logging solution that consolidates logs from multiple security tools, normalizes the data format, and provides interactive visualizations for easier threat hunting and pattern recognition. The tool supports custom parsing rules and can be extended to accommodate new log formats.',
      results: [
        'Built parsers for 15+ different log formats with 99.9% accuracy',
        'Implemented interactive dashboards showing threat patterns and trends',
        'Reduced time to analyze multi-source logs by 87%',
        'Added automated report generation for daily security reviews'
      ],
      technologies: ['Python', 'Elasticsearch', 'Kibana', 'Pandas', 'Plotly']
      
    },   
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="absolute inset-0 bg-cyber-grid bg-60px opacity-30"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Projects & Case Studies</h2>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <GlassmorphicCard 
                key={project.title}
                className={cn(
                  'transition-all duration-500',
                  expanded === index ? 'bg-opacity-15' : ''
                )}
                glowColor={index % 2 === 0 ? 'green' : 'purple'}
              >
                <div className="grid grid-cols-12 gap-4">
                  {/* Project icon */}
                  <div className="col-span-12 md:col-span-1 flex justify-center md:justify-start">
                    <div className={cn(
                      "p-3 rounded-full",
                      index % 2 === 0 ? 'bg-cyber-green/10' : 'bg-cyber-purple/10'
                    )}>
                      <project.icon className={cn(
                        "w-6 h-6",
                        index % 2 === 0 ? 'text-cyber-green' : 'text-cyber-purple'
                      )} />
                    </div>
                  </div>
                  
                  {/* Project summary */}
                  <div className="col-span-12 md:col-span-10">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="inline-flex items-center gap-1 bg-muted px-2 py-1 rounded text-xs font-mono">
                        <Clock className="w-3 h-3" />
                        <span>{project.timeframe}</span>
                      </div>
                      
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-muted hover:bg-muted/80 px-2 py-1 rounded text-xs font-mono transition-colors"
                        >
                          <GitBranch className="w-3 h-3" />
                          <span>View Code</span>
                        </a>
                      )}
                      
                      {/* Display first 3 technologies as badges */}
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="badge">
                          {tech}
                        </span>
                      ))}
                      
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-muted-foreground">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    {/* Expanded content */}
                    <div className={cn(
                      "overflow-hidden transition-all duration-500",
                      expanded === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                    )}>
                      <div className="pt-4 border-t border-muted">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Project Details</h4>
                        <p className="mb-6">{project.details}</p>
                        
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key Results</h4>
                        <ul className="space-y-2 mb-6">
                          {project.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Activity className="w-4 h-4 text-cyber-green mt-1 flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className={cn(
                              "badge",
                              index % 2 === 0 ? 'badge-primary' : 'badge-secondary'
                            )}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Toggle button */}
                  <div className="col-span-12 md:col-span-1 flex items-start justify-center md:justify-end">
                    <button
                      onClick={() => toggleExpand(index)}
                      className={cn(
                        "p-2 rounded-full transition-all",
                        expanded === index ? 'bg-muted' : '',
                        index % 2 === 0 ? 'hover:text-cyber-green' : 'hover:text-cyber-purple'
                      )}
                    >
                      {expanded === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
