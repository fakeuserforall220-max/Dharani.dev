import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import DepthText from '../components/ui/DepthText';
import { TextGenerateEffect } from '../components/ui/text-generate-effect';
import { Navbar } from '../components/Navbar';

import AcademeCaseStudy from '../components/case-studies/AcademeCaseStudy';
import SeatSyncCaseStudy from '../components/case-studies/SeatSyncCaseStudy';
import SnapNestCaseStudy from '../components/case-studies/SnapNestCaseStudy';
import TractorConnectCaseStudy from '../components/case-studies/TractorConnectCaseStudy';
import WolfTheoryCaseStudy from '../components/case-studies/WolfTheoryCaseStudy';

// Load all project markdown files as raw strings
const projectFiles = import.meta.glob('/Projects/details/*.md', { query: '?raw', import: 'default' });

// Motion variants for markdown elements
const mdVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const [markdown, setMarkdown] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find matching markdown file
    const loadContent = async () => {
      try {
        setLoading(true);
        const matchKey = Object.keys(projectFiles).find(key => key.includes(`${id}-report`) || key.includes(`${id}`));
        
        if (matchKey) {
          const content = await projectFiles[matchKey]();
          setMarkdown(content as string);
        } else {
          setMarkdown('# Project Not Found\n\nCould not find details for this project.');
        }
      } catch (err) {
        setMarkdown('# Error\n\nFailed to load project details.');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [id]);

  // Extract title and summary for the animated hero section
  const lines = markdown.split('\n');
  const title = lines.find(line => line.startsWith('# '))?.replace('# ', '').trim() || 'Project Details';
  
  // Find a good summary paragraph (skip short lines, headers, lists, and basic label lines like **Title:**)
  let summary = '';
  const summaryLine = lines.find((line) => {
    const trimmed = line.trim();
    if (trimmed.length < 40 || trimmed.startsWith('#') || trimmed.startsWith('-') || trimmed.startsWith('|')) {
      return false;
    }
    if (trimmed.startsWith('**Tagline:**')) {
      return true;
    }
    if (trimmed.startsWith('**') && trimmed.split(':').length > 1 && trimmed.length < 60) {
      return false;
    }
    return true;
  });
  
  if (summaryLine) {
    summary = summaryLine.replace('**Tagline:**', '').trim();
  } else {
    summary = `Explore the technical details and architecture of ${title}.`;
  }

  // The rest of the markdown to render normally (excluding the title which we animate)
  let remainingMarkdown = markdown.replace(`# ${title}`, '');
  
  if (summaryLine) {
    // Strip the exact summary line
    remainingMarkdown = remainingMarkdown.replace(summaryLine, '');
  }
  
  // Clean up any dangling horizontal rules at the very top of the text left behind
  remainingMarkdown = remainingMarkdown.replace(/^\s*---\s*/, '');

  if (loading) {
    return (
      <div className="min-h-screen bg-[#7A9EBA] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const isAcademe = id?.toLowerCase().includes('academe') || title.toLowerCase().includes('academe');
  const isSeatSync = id?.toLowerCase().includes('seatsync') || title.toLowerCase().includes('seatsync');
  const isSnapNest = id?.toLowerCase().includes('snapnest') || title.toLowerCase().includes('snapnest');
  const isTractorConnect = id?.toLowerCase().includes('tractorconnect') || title.toLowerCase().includes('tractor');
  const isWolfTheory = id?.toLowerCase().includes('wolf') || title.toLowerCase().includes('wolf');

  return (
    <div className="relative min-h-screen text-slate-900 font-sans selection:bg-brand-purple/30 selection:text-brand-purple bg-[#7A9EBA]">
      <Navbar />
      
      <main className="pt-24 pb-32">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          <Link to="/#projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-12 font-medium bg-white/10 px-5 py-2.5 rounded-full border border-white/20 backdrop-blur-sm shadow-sm hover:shadow-md">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>

          {isAcademe ? (
            <AcademeCaseStudy />
          ) : isSeatSync ? (
            <SeatSyncCaseStudy />
          ) : isSnapNest ? (
            <SnapNestCaseStudy />
          ) : isTractorConnect ? (
            <TractorConnectCaseStudy />
          ) : isWolfTheory ? (
            <WolfTheoryCaseStudy />
          ) : (
            <div className="max-w-4xl mx-auto">
              {/* Hero Section with Animations */}
              <div className="flex flex-col items-center text-center mb-16">
                
                {/* 3D App Name Animation */}
                <div className="mb-12 cursor-pointer relative z-10 pointer-events-auto h-32 md:h-48 flex items-center justify-center w-full">
                  <DepthText
                    text={title}
                    layers={25}
                    depth={1.5}
                    faceColor="#ffffff"
                    depthColor="#3b82f6"
                    tilt={15}
                    pointerTracking={true}
                    perspective={1000}
                    autoOrbit={true}
                    fontSize="clamp(3.5rem, 8vw, 7rem)"
                    fontWeight={900}
                    shadow={true}
                  />
                </div>

                {/* Staggered Text Generation for Summary */}
                <div className="w-full max-w-3xl mb-12">
                  <TextGenerateEffect 
                    words={summary} 
                    className="text-left md:text-center text-white font-medium"
                    duration={0.6}
                  />
                </div>
                
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mt-20"></div>
              </div>

              {/* Render the rest of the Markdown file with Framer Motion Staggered Animations */}
              <motion.div 
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1, delayChildren: 1 }}
                className="font-urbanist prose prose-lg prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline prose-code:text-emerald-300 prose-code:bg-slate-900/50 prose-code:px-1 prose-code:rounded prose-pre:bg-slate-900/80 prose-pre:border prose-pre:border-white/10 prose-img:rounded-2xl prose-img:shadow-xl prose-li:marker:text-blue-400"
              >
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({node, ...props}) => <motion.h2 variants={mdVariants} {...props} />,
                    h3: ({node, ...props}) => <motion.h3 variants={mdVariants} {...props} />,
                    p: ({node, ...props}) => {
                      // Don't animate the tagline paragraph again if it's already at the top
                      if (props.children && typeof props.children[0] === 'string' && props.children[0].includes('Tagline:')) {
                        return null;
                      }
                      return <motion.p variants={mdVariants} {...props} />
                    },
                    ul: ({node, ...props}) => <motion.ul variants={mdVariants} {...props} />,
                    ol: ({node, ...props}) => <motion.ol variants={mdVariants} {...props} />,
                    li: ({node, ...props}) => <motion.li variants={mdVariants} {...props} />,
                  }}
                >
                  {remainingMarkdown}
                </ReactMarkdown>
              </motion.div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
