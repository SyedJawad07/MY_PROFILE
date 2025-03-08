
import React, { useState } from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { Lock, Send, Shield, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Check } from "lucide-react";
import { toast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here we would normally connect to an email service
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Message Sent",
        description: "Your message has been sent successfully.",
      });
      
      // Reset form after delay
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-glow-purple opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Contact Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left column: Contact form */}
            <div className="md:col-span-2">
              <GlassmorphicCard glowColor="purple">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyber-purple" />
                  <span>Send Me a Message</span>
                </h3>
                
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyber-green/20 mb-4">
                      <Check className="w-8 h-8 text-cyber-green" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Message Sent Successfully</h4>
                    <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you shortly.</p>
                    <p className="text-xs text-muted-foreground mt-2">Your message was sent to Message@gmail.com</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-muted/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-cyber-purple"
                        />
                      </div>
                      <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <div className="relative">
                          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground/20 pointer-events-none text-sm">
                            Write your Mail Here
                          </span>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-muted/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-cyber-purple relative z-10"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-muted/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-cyber-purple"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-muted/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-cyber-purple"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center text-xs text-muted-foreground">
                        <Lock className="w-3 h-3 mr-1" />
                        Your message is encrypted and secure
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                          "inline-flex items-center gap-2 px-5 py-2 font-medium rounded-md transition-all duration-300 relative overflow-hidden group",
                          isSubmitting ? "bg-muted cursor-not-allowed" : "cyber-border bg-cyber-purple/20 hover:bg-cyber-purple/30"
                        )}
                      >
                        <span>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </form>
                )}
              </GlassmorphicCard>
            </div>
            
            {/* Right column: Social links only */}
            <div>
              <GlassmorphicCard>
                <h3 className="text-lg font-bold mb-4">Connect</h3>
                <div className="space-y-4">
                  <a href="https://github.com/SyedJawad07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-md hover:bg-muted/50 transition-colors">
                    <div className="p-2 rounded-full bg-muted">
                      <Github className="w-5 h-5" />
                    </div>
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/syed-jawad-741aa4316/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-md hover:bg-muted/50 transition-colors">
                    <div className="p-2 rounded-full bg-muted">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:wazuh110@gmail.com" className="flex items-center gap-3 p-3 rounded-md hover:bg-muted/50 transition-colors">
                    <div className="p-2 rounded-full bg-muted">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span>Email</span>
                  </a>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
