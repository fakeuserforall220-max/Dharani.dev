import { useProjects } from "../lib/useProjects";
import { RadialCarousel, type GalleryItem } from "./ui/radial-carousel";
import { motion } from "framer-motion";

const demo_images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80', title: 'Mountain Lake' },
    { id: 2, url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', title: 'Yosemite' },
    { id: 3, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80', title: 'Misty Forest' },
    { id: 4, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80', title: 'Sunlight Forest' },
    { id: 5, url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80', title: 'Grasslands' },
    { id: 6, url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80', title: 'Deer in Field' },
    { id: 7, url: 'https://images.unsplash.com/photo-1467830839049-11173e7b2755?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Autumn Road' },
    { id: 8, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80', title: 'Hills' },
    { id: 9, url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80', title: 'Morning mist' },
    { id: 10, url: 'https://images.unsplash.com/photo-1546882588-d9bd63f85a7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhdGVyJTIwZmFsbHxlbnwwfHwwfHx8MA%3D%3D', title: 'Waterfall' },
    { id: 11, url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80', title: 'Snowy Peak' },
    { id: 12, url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80', title: 'Culinary' },
];

export default function Projects() {
  const { projects, loading, error } = useProjects();

  if (loading) {
    return (
      <section id="projects" className="py-32 px-6 max-w-[1400px] mx-auto w-full flex justify-center">
        <div className="animate-pulse text-indigo-300 font-medium tracking-widest uppercase text-sm">
          Loading Portfolio...
        </div>
      </section>
    );
  }

  // Convert projects to the expected format for RadialCarousel, or fallback to default
  const carouselItems: GalleryItem[] = projects && projects.length > 0 
    ? projects.map((project, idx) => ({
        id: project.id || idx,
        url: project.image,
        title: project.title,
      }))
    : demo_images;

  return (
    <section id="projects" className="py-32 max-w-[1400px] mx-auto w-full font-sans relative z-10 overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center mb-10 max-w-2xl mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="flex items-center gap-2.5 bg-slate-900/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] text-slate-900 uppercase shadow-sm border border-slate-900/20">
            <span>005</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            <span>Selected Projects</span>
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-slate-900 mb-6"
        >
          Featured Work
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-lg md:text-xl max-w-xl mx-auto"
        >
          Explore some of my most recent and impactful projects.
        </motion.p>
      </div>

      {/* Radial Carousel */}
      <div className="sm:h-[650px] h-[500px] w-full flex flex-col items-center justify-center relative mt-12 z-10">
          <RadialCarousel
              items={carouselItems}
              radius={250}
              thumbnailSize={110}
              centerSize={350}
          />
      </div>
    </section>
  );
}