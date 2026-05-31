'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

type Message = {
  id: number;
  role: 'bot' | 'user';
  text: string;
  links?: { label: string; url: string }[];
};

export default function KnowledgeAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'bot',
      text: 'Hello! I am the Nandini Internal Navigation Bot. What specific information or page are you looking for today?',
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleAssistant = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      text: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    
    // Simulate bot thinking delay
    setTimeout(() => {
      generateResponse(userMessage.text);
    }, 600);
  };

  const generateResponse = (query: string) => {
    const q = query.toLowerCase();
    let botMessage: Message = {
      id: Date.now() + 1,
      role: 'bot',
      text: 'I can help you navigate to Projects, Services, Contact details, or Company Information. Could you clarify what you are looking for?',
    };

    if (q.includes('project') || q.includes('case') || q.includes('proof') || q.includes('execution')) {
      botMessage = {
        id: Date.now() + 1,
        role: 'bot',
        text: 'We have over 500+ Large-Scale Turnkey EPC Projects commissioned nationwide. You can view the complete execution log and case studies here:',
        links: [{ label: 'View All Projects', url: '/projects' }],
      };
    } else if (q.includes('service') || q.includes('automation') || q.includes('panel') || q.includes('vfd')) {
      botMessage = {
        id: Date.now() + 1,
        role: 'bot',
        text: 'We specialize in Industrial Automation, Panel Manufacturing, SCADA Systems, and VFD solutions. Check our complete service pipeline:',
        links: [
          { label: 'All Services', url: '/services' },
          { label: 'Control Panels', url: '/services/control-panels' },
          { label: 'Industrial Automation', url: '/services/industrial-automation' }
        ],
      };
    } else if (q.includes('contact') || q.includes('phone') || q.includes('email') || q.includes('quote')) {
      botMessage = {
        id: Date.now() + 1,
        role: 'bot',
        text: 'You can reach our engineering team directly via phone (+91-40-23190131) or email (info@nandiniautomation.com). Need a quote?',
        links: [{ label: 'Contact Support Desk', url: '/contact' }],
      };
    } else if (q.includes('about') || q.includes('company') || q.includes('profile')) {
      botMessage = {
        id: Date.now() + 1,
        role: 'bot',
        text: 'Nandini Enterprises is an ISO 9001:2015 certified engineering partner for heavy-scale industries across India.',
        links: [{ label: 'About Us', url: '/about' }],
      };
    } else if (q.includes('industry') || q.includes('sectors') || q.includes('where')) {
      botMessage = {
        id: Date.now() + 1,
        role: 'bot',
        text: 'We provide robust automation and electrical solutions for core sectors like Steel, Cement, Oil & Gas, Water Treatment, and Pharma.',
        links: [{ label: 'View Industries', url: '/industries' }],
      };
    }

    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 font-sans">
      {isOpen && (
        <div className="w-[340px] bg-white border border-slate-200 rounded-xl shadow-2xl flex flex-col transition-all duration-300 h-[480px] overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[var(--color-ne-blue-corp)] to-[var(--color-ne-blue-steel)] px-4 py-3 border-b border-slate-200 flex justify-between items-center text-white shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-white font-bold font-mono">
                  Site Assistant
                </h4>
                <span className="text-[9px] text-blue-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online
                </span>
              </div>
            </div>
            <button
              className="text-white hover:text-blue-100 transition-colors p-1 focus:outline-none"
              onClick={toggleAssistant}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Chat History */}
          <div className="flex-1 p-4 bg-[#f7f9fc] overflow-y-auto flex flex-col gap-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div 
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-[var(--color-ne-blue-corp)] text-white rounded-br-none shadow-sm' 
                      : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="leading-relaxed">{msg.text}</p>
                </div>
                
                {msg.links && (
                  <div className="flex flex-col gap-2 mt-2 w-[85%]">
                    {msg.links.map((link, idx) => (
                      <Link 
                        key={idx} 
                        href={link.url}
                        onClick={() => setIsOpen(false)}
                        className="inline-block text-center px-4 py-2 bg-white border border-[var(--color-ne-blue-corp)] text-[var(--color-ne-blue-corp)] hover:bg-[var(--color-ne-blue-corp)] hover:text-white rounded-lg text-xs font-bold transition-colors shadow-sm"
                      >
                        {link.label} &rarr;
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-200">
            <form onSubmit={handleSend} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[var(--color-ne-blue-corp)] focus:ring-1 focus:ring-[var(--color-ne-blue-corp)] transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 bg-[var(--color-ne-blue-corp)] hover:bg-[var(--color-ne-blue-steel)] disabled:bg-slate-300 text-white rounded-lg shadow-sm transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FAB Button */}
      {!isOpen && (
        <button
          onClick={toggleAssistant}
          className="bg-white hover:bg-slate-50 text-[var(--color-ne-blue-corp)] border border-slate-200 p-4 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center hover:scale-105 transition-all duration-300 relative group"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
          </svg>
          <span className="absolute right-full mr-4 bg-slate-800 text-white text-[11px] px-3 py-1.5 rounded-lg shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium flex items-center gap-2">
            Ask Assistant
            <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-800 transform rotate-45"></span>
          </span>
        </button>
      )}
    </div>
  );
}
