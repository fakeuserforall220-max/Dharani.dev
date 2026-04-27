import { motion } from "framer-motion";
import { 
  Cpu, Brain, Database, Sparkles, Binary, 
  Search, BarChart3, Terminal 
} from "lucide-react";

const skillCategories = [
  {
    title: "Mathematics for ML",
    icon: Binary,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80", 
    color: "bg-blue-50 text-blue-600",
    skills: ["Linear Algebra", "Calculus", "Probability", "Statistics", "Optimization"],
  },
  {
    title: "Python Ecosystem",
    icon: Terminal,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80", 
    color: "bg-emerald-50 text-emerald-600",
    skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "Jupyter"],
  },
  {
    title: "Deep Learning",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80", 
    color: "bg-purple-50 text-purple-600",
    skills: ["PyTorch", "TensorFlow", "Neural Networks", "CNNs", "RNNs/LSTMs"],
  },
  {
    title: "Generative AI & LLMs",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1675557009875-436f595b1812?auto=format&fit=crop&w=800&q=80", 
    color: "bg-orange-50 text-orange-600",
    skills: ["LangChain", "OpenAI API", "RAG", "Vector DBs", "Transformers"],
  },
  {
    title: "Computer Vision",
    icon: Search,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", 
    color: "bg-rose-50 text-rose-600",
    skills: ["OpenCV", "YOLOv8", "Object Detection", "Image Processing"],
  },
  {
    title: "Natural Language",
    icon: Database,
    image: "https://images.unsplash.com/photo-1544383023-53f2c64b13bd?auto=format&fit=crop&w=800&q=80", 
    color: "bg-cyan-50 text-cyan-600",
    skills: ["NLTK", "BERT", "Tokenization", "Sentiment Analysis", "HuggingFace"],
  },
  {
    title: "Data Engineering",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1551288049-bbda646267a4?auto=format&fit=crop&w=800&q=80", 
    color: "bg-amber-50 text-amber-600",
    skills: ["SQL", "ETL Pipelines", "Big Data", "Data Cleaning", "Feature Eng."],
  },
  {
    title: "MLOps & Deploy",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80", 
    color: "bg-slate-50 text-slate-600",
    skills: ["FastAPI", "Docker", "ONNX", "Streamlit", "Model Monitoring"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#FAFAFA]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-left max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-space font-bold text-gray-900 mb-6 tracking-tighter">
            AIML <span className="text-gray-400">Expertise</span>
          </h2>
          <p className="text-gray-500 text-xl font-sans leading-relaxed">
            As an AIML student, I focus on the intersection of deep mathematical 
            foundations and modern Generative AI implementations.
          </p>
        </motion.div>

        {/* Skills Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative aspect-square rounded-[2rem] bg-gray-100 overflow-hidden flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                  >
                    <img 
                      src={category.image} 
                      alt="" 
                      loading="lazy"
                      className="w-full h-full object-cover opacity-0 transition-opacity duration-700"
                      onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                    />
                  </motion.div>
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center text-gray-900 border border-white/50 z-20">
                    <Icon size={22} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="px-4 py-8 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <span className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase ${category.color}`}>
                      Domain
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-space font-bold text-gray-900 mb-5 tracking-tight group-hover:text-violet-600 transition-colors">
                    {category.title}
                  </h3>
                  
                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-[10px] font-bold bg-gray-50 text-gray-400 border border-gray-100 rounded-xl uppercase tracking-tighter group-hover:bg-white group-hover:border-gray-200 group-hover:text-gray-900 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
