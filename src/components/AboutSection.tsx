
import React from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import SkillBar from './SkillBar';
import { Shield, Brain, Terminal, Server, Code, Trophy, Zap, Database, Network, Router, HardDrive, Cpu, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'SOC Operations', percentage: 80, color: 'green' },
    { name: 'ML-based Threat Detection', percentage: 75, color: 'purple' },
    { name: 'SIEM Architecture', percentage: 75, color: 'green' },
    { name: 'Python Automation', percentage: 90, color: 'purple' },
    { name: 'Linux & Windows Security', percentage: 88, color: 'green' },
    { name: 'Wazuh & ELK Stack', percentage: 86, color: 'purple' },
    { name: 'Network Security Monitoring', percentage: 75, color: 'green' },
    { name: 'System Administration', percentage: 78, color: 'purple' },
    { name: 'Firewall Configuration', percentage: 70, color: 'green' },
    { name: 'CTF Challenges', percentage: 70, color: 'green' },
    { name: 'SSH Log Analysis', percentage: 89, color: 'purple' },
  ];

  const expertiseAreas = [
    { 
      title: 'Cybersecurity', 
      icon: Shield,
      description: 'Experienced in SOC operations, SIEM implementation, threat detection, and Sysmon configuration for enterprise environments.' 
    },
    { 
      title: 'Machine Learning', 
      icon: Brain,
      description: 'Development of AI-driven anomaly detection systems, SSH log analysis, and brute force detection models that identify patterns human analysts might miss.' 
    },
    { 
      title: 'Python Automation', 
      icon: Code,
      description: 'Creating scripts and tools to automate Wazuh tasks, parse logs, preprocess data, and streamline security monitoring workflows.' 
    },
    { 
      title: 'Linux & Windows Security', 
      icon: Server,
      description: 'System hardening, SSH configuration, agent monitoring, and implementation of defense-in-depth strategies across multiple platforms.' 
    },
    { 
      title: 'Network Administration', 
      icon: Router,
      description: 'Theoretical knowledge of secure network infrastructure, including concepts of VLANs, routing protocols, VPNs, and firewall configurations.' 
    },
    { 
      title: 'System Administration', 
      icon: HardDrive,
      description: 'Foundational knowledge of server deployment, patch management, user administration, and system optimization techniques.' 
    },
    { 
      title: 'CTF Challenges', 
      icon: Trophy,
      description: 'Active participant in Capture The Flag competitions, continuously honing skills in penetration testing, forensics, and cryptography.' 
    },
    { 
      title: 'SIEM Engineering', 
      icon: Database,
      description: 'Design and optimization of SIEM systems using Wazuh, ELK Stack, and custom correlation rules for effective threat detection.' 
    },
    { 
      title: 'Real-time Monitoring', 
      icon: Zap,
      description: 'Implementing real-time monitoring solutions that combine traditional rules-based alerting with advanced machine learning detection.' 
    },
    { 
      title: 'Security Scripting', 
      icon: Terminal,
      description: 'Development of custom scripts and tools to enhance security operations, automate repetitive tasks, and improve incident response times.' 
    },
    { 
      title: 'Virtualization', 
      icon: Cpu,
      description: 'Basic knowledge of hypervisor technologies, container concepts, and virtual network configuration principles.' 
    },
  ];

  return (
    <>
      <section id="about" className="py-24 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading">About Me</h2>
            
            <GlassmorphicCard 
              className="mb-12" 
              glowColor="green"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Profile image with glowing border effect */}
                <div className="relative flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-cyber-green relative z-10">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D4E03AQEcBjDZUuxWVQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724570428350?e=1746662400&v=beta&t=kFGweEdVGqOfIaGn9qNSIHjCDDaepxQJeloVoF_6cnc" 
                      alt=" Syed Jawad - Cybersecurity Specialist" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-cyber-green blur-md opacity-20 rounded-full"></div>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                   As a dedicated Cybersecurity Enthusiast and SOC Analyst, I specialize in security operations,
                   SIEM solutions, and AI-driven threat detection. With expertise in Wazuh, Elastic stack, and Python
                   automation, I focus on identifying and mitigating security risks through advanced monitoring and
                   anomaly detection techniques.             
                  </p>
                  <p className="text-lg leading-relaxed">
                    My cybersecurity journey has been shaped by hands-on experience in SOC environments, working with
                    threat detection models, and leveraging machine learning to enhance security analytics. I am passionate
                    about integrating AI with traditional security measures to detect anomalous SSH logins, brute force attempts,
                    and other potential threats in real time.                   
                  </p>
                </div>
              </div>
            </GlassmorphicCard>
            
            <h3 className="text-xl font-bold mb-6 font-sans mt-16">Areas of Expertise</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {expertiseAreas.map((area, index) => (
                <GlassmorphicCard 
                  key={area.title} 
                  className="h-full" 
                  glowColor={index % 2 === 0 ? 'green' : 'purple'}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      'p-3 rounded-full',
                      index % 2 === 0 ? 'bg-cyber-green/10' : 'bg-cyber-purple/10'
                    )}>
                      <area.icon className={cn(
                        'w-6 h-6',
                        index % 2 === 0 ? 'text-cyber-green' : 'text-cyber-purple'
                      )} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{area.title}</h4>
                      <p className="text-muted-foreground">{area.description}</p>
                    </div>
                  </div>
                </GlassmorphicCard>
              ))}
            </div>
            
            {/* Experience Section */}
            <h3 className="text-xl font-bold mb-6 font-sans mt-16">Experience</h3>
            
            {/* Final Year Project */}
            <GlassmorphicCard className="mb-6" glowColor="green">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h4 className="text-lg font-bold mb-2">Final Year Project</h4>
                  <div className="text-cyber-green font-bold">AI-based Anomaly Detection System</div>
                  <div className="text-sm text-muted-foreground mt-1 font-mono">NOV 2024 - PRESENT</div>
                </div>
                <div className="md:w-2/3">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Brain className="w-4 h-4 text-cyber-green mt-1 flex-shrink-0" />
                      <span>Developed AI-based anomaly detection system using Wazuh and Elastic Stack to identify security threats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Database className="w-4 h-4 text-cyber-green mt-1 flex-shrink-0" />
                      <span>Configured Elastic Stack (Elasticsearch, Filebeat, Kibana) for log collection, processing, and visualization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-cyber-green mt-1 flex-shrink-0" />
                      <span>Implemented Wazuh SIEM for real-time security monitoring and alert generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Code className="w-4 h-4 text-cyber-green mt-1 flex-shrink-0" />
                      <span>Created Python scripts to analyze security logs and detect patterns using machine learning algorithms</span>
                    </li>
                  </ul>
                </div>
              </div>
            </GlassmorphicCard>
            
            {/* Internship Experience */}
            <GlassmorphicCard className="mb-16" glowColor="purple">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h4 className="text-lg font-bold mb-2">Cybersecurity Intern</h4>
                  <div className="text-cyber-purple font-bold">Prodigy InfoTech</div>
                  <div className="text-sm text-muted-foreground mt-1 font-mono">NOV 2024 - DEC 2024</div>
                  <div className="text-xs text-muted-foreground mt-2 italic">Remote/Online</div>
                </div>
                <div className="md:w-2/3">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-cyber-purple mt-1 flex-shrink-0" />
                      <span>Developed a Python-based keylogger for educational purposes, enhancing understanding of endpoint security vulnerabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-cyber-purple mt-1 flex-shrink-0" />
                      <span>Built a simple network packet analyzer similar to Wireshark, learning network protocol analysis and traffic monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lock className="w-4 h-4 text-cyber-purple mt-1 flex-shrink-0" />
                      <span>Created an encryption tool implementing various cryptographic algorithms to secure sensitive data transmission</span>
                    </li>                    
                  </ul>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>
      
      <section id="skills" className="py-24 relative bg-cyber-darkblue">
        <div className="absolute inset-0 bg-glow-purple opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading">Skills Matrix</h2>
            
            <GlassmorphicCard>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {skills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    color={skill.color as 'green' | 'purple' | 'blue'}
                    delay={300 + index * 100}
                  />
                ))}
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
