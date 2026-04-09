import { motion, useScroll, useTransform } from "motion/react";
import { 
  Camera, 
  ArrowRight, 
  Instagram, 
  Youtube, 
  Twitter, 
  ChevronRight, 
  ArrowUpRight,
  ChevronLeft
} from "lucide-react";
import { useRef, useState } from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-lime font-display text-xl tracking-tighter"
      >
        SOCIAL MEDIA AGENCY
      </motion.div>
      <div className="hidden md:flex gap-12">
        {["About", "Works", "Gallery", "Contact"].map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-xs uppercase tracking-widest text-white/70 hover:text-lime transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-lime transition-all group-hover:w-full" />
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="hero" ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      {/* Background Text */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-20"
      >
        <h1 className="text-[18vw] leading-none text-lime font-display">SOCIAL</h1>
        <h1 className="text-[18vw] leading-none text-lime font-display -mt-[3vw]">MEDIA</h1>
        <h1 className="text-[18vw] leading-none text-lime font-display -mt-[3vw]">AGENCY</h1>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lime text-xs uppercase tracking-[0.3em] mb-4">Media Management</p>
            <h2 className="text-6xl md:text-8xl font-display leading-[0.9] text-white">
              ELEVATE <br />
              <span className="text-lime">YOUR BRAND</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-white/60 max-w-xs text-sm leading-relaxed"
          >
            We deliver results-driven media strategies that help businesses grow their online presence and brand value.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4"
          >
            {[Instagram, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-lime hover:text-lime transition-all group">
                <Icon size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-3 flex flex-col items-end text-right space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-white/80 text-sm max-w-xs ml-auto">
              Strategic promotion, customer engagement, and performance-driven campaigns for modern businesses.
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-4 bg-transparent border border-lime text-lime px-8 py-4 rounded-full overflow-hidden transition-all hover:bg-lime hover:text-forest"
          >
            <span className="relative z-10 font-bold uppercase text-xs tracking-widest">Explore Works</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>

        <div className="lg:col-span-4 flex justify-end relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-square max-w-[300px]"
          >
            <div className="absolute inset-0 border border-lime/30 rounded-full scale-110 animate-pulse" />
            <div className="w-full h-full bg-forest-light border border-lime/20 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-noise opacity-20" />
              <img 
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop" 
                alt="Media" 
                className="w-full h-full object-cover opacity-100 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-forest/40 group-hover:bg-forest/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                <span className="text-lime font-display text-2xl tracking-tighter text-glow drop-shadow-[0_0_15px_rgba(163,230,53,0.8)] text-center leading-none">SOCIAL MEDIA AGENCY</span>
              </div>
            </div>
            
            {/* Floating snippets */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/4 bg-lime text-forest px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-tighter shadow-xl z-20"
            >
              Growth Experts
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-4 bottom-1/4 bg-white text-forest px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-tighter shadow-xl z-20"
            >
              Results Driven
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-lime/50"
      >
        <div className="w-px h-12 bg-gradient-to-b from-lime to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-[12vw] lg:text-[10vw] leading-none text-lime opacity-20 absolute -top-12 -left-8 pointer-events-none">ABOUT</h2>
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Rotating Text Ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-lime/30 rounded-full flex items-center justify-center"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text className="text-[6px] uppercase tracking-[0.2em] fill-lime font-bold">
                      <textPath href="#circlePath">
                        MY GEAR • MY GEAR • MY GEAR • MY GEAR • MY GEAR • MY GEAR •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-forest-light shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Agency Team" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-6xl font-display text-white mb-6">STRATEGIC <br /><span className="text-lime">BRAND GROWTH</span></h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Our team  is a results-driven media management service dedicated to helping businesses grow their online presence and brand value. We specialize in strategic promotion, customer engagement, and performance-driven campaigns. Our goal is to deliver trust, visibility, and measurable success for every client.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Experience", value: "8+ Years" },
                { label: "Projects", value: "250+" },
                { label: "Awards", value: "12" },
                { label: "Countries", value: "15" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-l border-lime/30 pl-6"
                >
                  <p className="text-lime text-2xl font-display">{stat.value}</p>
                  <p className="text-white/50 text-xs uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 text-lime uppercase text-xs font-bold tracking-widest group"
            >
              Learn More About Me
              <div className="w-10 h-10 rounded-full border border-lime flex items-center justify-center group-hover:bg-lime group-hover:text-forest transition-all">
                <ArrowUpRight size={16} />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Works = () => {
  const works = [
    { year: "2024", title: "Digital Transformation", desc: "Helping global brands transition to a digital-first approach with customized strategies.", featured: false },
    { year: "2023", title: "Brand Identity", desc: "Crafting unique visual identities that resonate with target audiences and build lasting value.", featured: false },
    { year: "2023", title: "Performance Media", desc: "Data-driven campaigns that delivered 300% ROI for our clients through precision targeting.", featured: true },
    { year: "2022", title: "Social Strategy", desc: "Building community and engagement through strategic social media management and content.", featured: false },
  ];

  return (
    <section id="works" className="py-32 bg-forest-light/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl md:text-9xl font-display text-white leading-none">WORKS</h2>
            <p className="text-lime/60 mt-4 uppercase tracking-[0.4em] text-sm">Portfolio Timeline</p>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/50 max-w-sm text-sm leading-relaxed"
          >
            Google map reviews<br />
            Justdial reviews<br />
            Logo design<br />
            Poster design<br />
            Website design<br />
            Instagram services<br />
            Facebook services<br />
            YouTube services<br />
            Meta ads
          </motion.p>
        </div>

        <div className="space-y-0">
          {works.map((work, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative py-12 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 transition-all hover:bg-white/5 px-6 -mx-6 rounded-xl ${work.featured ? 'bg-lime/5 border-lime/20' : ''}`}
            >
              <div className="text-lime font-display text-4xl opacity-40 group-hover:opacity-100 transition-opacity">
                {work.year}
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-2xl md:text-3xl font-display text-white group-hover:text-lime transition-colors">
                  {work.title}
                </h3>
                <p className="text-white/50 text-sm max-w-xl">
                  {work.desc}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className={`px-8 py-3 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all ${work.featured ? 'bg-lime text-forest border-lime' : 'border-white/20 text-white hover:border-lime hover:text-lime'}`}
              >
                Discover
              </motion.button>
              
              {work.featured && (
                <div className="absolute top-4 right-4 bg-lime text-forest text-[8px] font-black px-2 py-1 rounded uppercase tracking-tighter">
                  Featured
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 text-white/40 hover:text-lime transition-colors uppercase text-xs font-bold tracking-[0.3em]"
          >
            View All Projects
            <div className="w-12 h-px bg-white/20 group-hover:bg-lime transition-colors" />
            <ArrowUpRight size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl md:text-9xl font-display text-white leading-none">GALLERY</h2>
            <p className="text-lime/60 mt-4 uppercase tracking-[0.4em] text-sm">Visual Journey</p>
          </motion.div>
          <div className="flex gap-4">
            <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:border-lime hover:text-lime transition-all">
              <ChevronLeft size={24} />
            </button>
            <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:border-lime hover:text-lime transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 aspect-video rounded-3xl overflow-hidden group relative"
          >
            <img 
              src={images[0]} 
              alt="Gallery 1" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
              <div className="space-y-2">
                <p className="text-lime font-display text-2xl">Data Analytics</p>
                <p className="text-white/70 text-sm">Strategic insights for global growth, 2024</p>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-4 grid grid-rows-2 gap-6">
            {images.slice(1, 3).map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="rounded-3xl overflow-hidden group"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i+2}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>

          {images.slice(3).map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="md:col-span-6 aspect-[16/10] rounded-3xl overflow-hidden group"
            >
              <img 
                src={img} 
                alt={`Gallery ${i+4}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-lime/5 -skew-y-6 origin-top-left" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-8xl md:text-[12vw] font-display text-white leading-none mb-8">
              CONTACT <span className="text-lime">ME</span>
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's collaborate and create something extraordinary together.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="space-y-4">
              <motion.a
                href="mailto:hello@asaagency.com"
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-lime text-forest px-12 py-6 rounded-full font-bold uppercase tracking-widest text-sm shadow-2xl shadow-lime/20"
              >
                Email: asaagency.com
              </motion.a>
              <div className="block text-white/80 font-display text-2xl">
                Contact: <a href="tel:9241895447" className="text-lime hover:underline">9241895447</a>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex gap-6"
            >
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-white/40 hover:text-lime transition-colors">
                  <Icon size={32} />
                </a>
              ))}
            </motion.div>
          </div>

          <div className="pt-24 relative">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 max-w-md mx-auto"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Team Collaboration" 
                className="w-full rounded-2xl shadow-2xl border-4 border-forest-light"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-lime rounded-full flex items-center justify-center text-forest animate-spin-slow">
                <Camera size={48} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-display text-lime tracking-tighter">SOCIAL MEDIA AGENCY</h2>
            <p className="text-white/30 text-xs uppercase tracking-widest">© 2026 SOCIAL MEDIA AGENCY. All rights reserved.</p>
          </div>
          
          <div className="flex gap-12">
            {["About", "Works", "Gallery", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-lime transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="text-right hidden md:block">
            <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">Designed for</p>
            <p className="text-lime font-display text-lg">CREATIVE EXCELLENCE</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <main className="relative bg-forest selection:bg-lime selection:text-forest overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Gallery />
      <Contact />
      <Footer />
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-lime/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-lime/5 blur-[120px] rounded-full" />
      </div>
    </main>
  );
}
