import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Code2, Brain, PenTool, Sun, Moon, ArrowUp, Mail, Phone, MapPin, Github, Linkedin, Globe, Sparkles, MonitorCog } from 'lucide-react'

const roles = ['Full-Stack Developer', 'AI Trainer', 'Content Strategist', 'Video Editor', 'Tech Enthusiast']
const navItems = ['about', 'skills', 'projects', 'experience', 'services', 'testimonials', 'contact']

const skillGroups = {
  'Frontend Development': ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
  'Backend Development': ['Node.js', 'Django', 'Express.js', 'REST APIs'],
  'Database & Tools': ['SQL', 'Supabase', 'Git', 'GitHub'],
  'AI & Technical Skills': ['AI Prompt Evaluation', 'Data Annotation', 'Technical Documentation', 'Debugging', 'Problem Solving'],
  'Digital Marketing': ['Meta Ads Manager', 'TikTok Ads', 'Instagram Analytics', 'Content Strategy'],
  'Creative Tools': ['Adobe Premiere Pro', 'CapCut', 'Canva', 'CorelDRAW'],
  'Soft Skills': ['Leadership', 'Team Collaboration', 'Technical Communication', 'Creativity', 'Project Coordination']
}

const experiences = [
  {
    role: 'AI Trainer', company: 'Outlier AI', date: 'March 2026 – April 2026',
    points: ['Evaluated AI responses for quality, reasoning, and clarity.', 'Performed prompt evaluation and data annotation tasks.', 'Contributed to quality assurance workflows for conversational AI.']
  },
  {
    role: 'Head of ICT / Social Media Manager / Graphics Designer / Videographer & Content Creator', company: 'Jolancleo Limited', date: 'August 2025 – March 2026',
    points: ['Oversaw ICT operations and maintained technology infrastructure.', 'Managed social campaigns and executed digital marketing strategies.', 'Created graphics and produced/editing promotional video content.']
  },
  {
    role: 'Content Creator / Social Media Manager', company: 'RNR Klothings', date: 'January 2025 – June 2025',
    points: ['Managed paid ads and social analytics.', 'Built content strategy across Instagram, Facebook, and TikTok.']
  },
  {
    role: 'Social Media Manager', company: 'Mewar International University', date: 'January 2023 – Present',
    points: ['Led digital engagement initiatives and campaign storytelling.', 'Promoted student activities, events, and programs with measurable growth.']
  },
  {
    role: 'Manager', company: 'Ayala Global Links', date: 'August 2020 – May 2021',
    points: ['Supervised staff coordination and daily operations.', 'Managed workflow quality, inventory, and service efficiency.']
  }
]

export default function App() {
  const [dark, setDark] = useState(true)
  const [idx, setIdx] = useState(0)
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const year = new Date().getFullYear()

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 1700)
    return () => clearInterval(t)
  }, [])
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(t)
  }, [])

  const skillLevels = useMemo(() => Object.fromEntries(Object.values(skillGroups).flat().map((s) => [s, 74 + (s.length * 3) % 25])), [])

  if (loading) return <div className="h-screen grid place-content-center bg-brand-black text-white"><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.1, ease: 'linear' }} className="w-16 h-16 rounded-full border-4 border-brand-green border-t-transparent" /></div>

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-slate-900 dark:bg-brand-black dark:text-white transition-colors duration-300">
        <motion.div style={{ scaleX: scrollYProgress }} className="fixed top-0 left-0 right-0 z-50 h-1 bg-brand-green origin-left" />
        <nav className="fixed top-0 w-full z-40 glass">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="#hero" className="font-black tracking-wide">Bulama<span className="text-brand-green">.dev</span></a>
            <div className="hidden md:flex gap-4 text-sm">{navItems.map((s) => <a key={s} href={`#${s}`} className="capitalize hover:text-brand-green">{s}</a>)}</div>
            <button onClick={() => setDark((v) => !v)} className="glass p-2 rounded-lg">{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
          </div>
        </nav>

        <main className="bg-grid">
          <section id="hero" className="max-w-6xl mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
              <div>
                <p className="text-brand-green font-semibold">Mela Benjamin Bulama (Bulama)</p>
                <h1 className="text-5xl md:text-6xl font-black my-4 leading-tight">Software Engineer | AI Trainer | Digital Creative</h1>
                <p className="text-slate-300 max-w-xl">Building intelligent digital experiences through code, creativity, and innovation.</p>
                <p className="mt-4 text-brand-green font-semibold h-6"><AnimatePresence mode="wait"><motion.span key={roles[idx]} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>{roles[idx]} |</motion.span></AnimatePresence></p>
                <div className="flex flex-wrap gap-3 mt-7">
                  <a href="#projects" className="px-5 py-2 rounded-full glass hover:shadow-glow">View Projects</a>
                  <a href="/Mela_Benjamin_Bulama_CV.pdf" download className="px-5 py-2 rounded-full bg-brand-green text-white hover:shadow-glow">Download CV</a>
                  <a href="#contact" className="px-5 py-2 rounded-full border border-white/20 hover:border-brand-green">Hire Me</a>
                </div>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-8 relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-green/40 via-white/5 to-transparent grid place-content-center text-8xl font-black">MB</div>
                <Code2 className="absolute top-6 left-6 text-brand-green" /><Brain className="absolute top-10 right-10 text-brand-green" /><Sparkles className="absolute bottom-8 right-8 text-brand-green" />
              </motion.div>
            </div>
          </section>

          {section('about', 'About Me', <div><p className="max-w-3xl">Software Engineering graduate from Mewar International University, passionate about solving real-world problems with technology, AI, web development, digital innovation, and storytelling. I bring strong teamwork and communication to every project.</p><div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">{[['Years of Experience', 6], ['Projects Completed', 35], ['Technologies Used', 30], ['Creative Campaigns', 20]].map(([k, v]) => <div key={k} className="glass p-4 rounded-xl text-center"><div className="text-3xl text-brand-green font-bold">{v}+</div><div className="text-sm">{k}</div></div>)}</div></div>)}

          {section('skills', 'Skills', <div className="grid md:grid-cols-2 gap-4">{Object.entries(skillGroups).map(([cat, list]) => <div key={cat} className="glass p-4 rounded-xl"><h3 className="font-bold mb-3">{cat}</h3>{list.map((skill) => <div key={skill} className="mb-2"><div className="text-sm mb-1">{skill}</div><div className="h-2 bg-white/10 rounded"><motion.div initial={{ width: 0 }} whileInView={{ width: `${skillLevels[skill]}%` }} className="h-full bg-brand-green rounded" /></div></div>)}</div>)}</div>)}

          {section('projects', 'Projects', <div className="grid md:grid-cols-3 gap-4">{[
            ['Web-Based Event Ticketing Platform', ['Real-time seat reservation', 'QR code verification', 'Dynamic ticket pricing', 'Organizer dashboard', 'Protocol staff ticket scanning'], ['React', 'Node.js', 'Socket.IO', 'Supabase', 'Paystack']],
            ['Offline Smart Notes Recorder', ['Offline speech-to-text transcription', 'Vosk ASR integration', 'Audio recording', 'Note export system', 'NLP keyword extraction'], ['Python', 'Flask', 'SQLite', 'JavaScript']],
            ['Social Media Campaign Management', ['Meta Ads campaigns', 'Content strategy', 'Engagement analytics', 'Brand growth campaigns'], ['Meta Ads', 'Analytics', 'Content Strategy']]
          ].map(([name, features, tags]) => <div key={name} className="glass rounded-2xl p-5 hover:-translate-y-1 transition"><h3 className="font-bold mb-2">{name}</h3><ul className="text-sm text-slate-300 list-disc pl-5">{features.map((f) => <li key={f}>{f}</li>)}</ul><div className="flex flex-wrap gap-2 my-3">{tags.map((t) => <span key={t} className="text-xs px-2 py-1 bg-brand-green/20 rounded">{t}</span>)}</div><div className="flex gap-2"><button className="px-3 py-1 rounded bg-brand-green text-white">Live Preview</button><button className="px-3 py-1 rounded border border-white/25">GitHub</button></div></div>)}</div>)}

          {section('experience', 'Experience', <div className="space-y-4 border-l border-brand-green pl-6">{experiences.map((e) => <div key={e.role + e.company} className="relative glass p-4 rounded-xl"><span className="absolute -left-[34px] top-6 w-3 h-3 bg-brand-green rounded-full" /><h4 className="font-bold">{e.role}</h4><p className="text-brand-green text-sm">{e.company}</p><p className="text-xs text-slate-400 mb-2">{e.date}</p><ul className="text-sm list-disc pl-5 text-slate-300">{e.points.map((p) => <li key={p}>{p}</li>)}</ul></div>)}</div>)}

          {section('services', 'Services', <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">{[['Web Development', Code2], ['AI Training & Prompt Evaluation', Brain], ['Social Media Management', Globe], ['Video Editing', PenTool], ['Content Strategy', Sparkles], ['Digital Branding', MonitorCog]].map(([name, Icon]) => <div key={name} className="glass p-5 rounded-2xl hover:shadow-glow"><Icon className="text-brand-green mb-3" /><h4 className="font-bold">{name}</h4><p className="text-sm text-slate-400">Professional service with strategic execution and measurable outcomes.</p></div>)}</div>)}

          {section('testimonials', 'Testimonials', <div className="grid md:grid-cols-3 gap-4">{['Bulama transformed our online presence with technical brilliance.', 'A rare blend of engineering depth and creative storytelling.', 'Professional, fast, and obsessed with quality delivery.'].map((t) => <blockquote key={t} className="glass p-5 rounded-xl">“{t}”</blockquote>)}</div>)}

          {section('contact', 'Contact', <div className="grid md:grid-cols-2 gap-6"><form className="glass p-5 rounded-xl space-y-3"><input placeholder="Your Name" className="w-full p-2 rounded bg-white/5 border border-white/10" /><input placeholder="Email" className="w-full p-2 rounded bg-white/5 border border-white/10" /><textarea rows="4" placeholder="Message" className="w-full p-2 rounded bg-white/5 border border-white/10" /><button className="bg-brand-green px-4 py-2 rounded text-white">Send Message</button></form><div className="space-y-3"><p className="flex gap-2 items-center"><Mail size={16} /> bmeela400@gmail.com</p><p className="flex gap-2 items-center"><Phone size={16} /> +2349037619923</p><p className="flex gap-2 items-center"><MapPin size={16} /> Abuja, Nigeria</p><div className="glass rounded-xl h-40 grid place-content-center text-brand-green">Interactive contact glow area</div></div></div>)}
        </main>

        <footer className="border-t border-white/10 py-8 text-center">
          <div className="flex justify-center gap-3 mb-3"><Github /><Linkedin /><Globe /></div>
          <p>© {year} Mela Benjamin Bulama. All rights reserved.</p>
        </footer>
        <a href="#hero" className="fixed bottom-5 right-5 glass p-3 rounded-full"><ArrowUp size={16} /></a>
      </div>
    </div>
  )
}

function section(id, title, content) {
  return <section id={id} className="max-w-6xl mx-auto px-4 py-16"><motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-black mb-6">{title}</motion.h2>{content}</section>
import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Code2, Brain, PenTool, Sun, Moon, ArrowUp, Mail, Phone, MapPin, Github, Linkedin, Globe } from 'lucide-react'

const roles = ['Full-Stack Developer','AI Trainer','Content Strategist','Video Editor','Tech Enthusiast']
const skills = {
  'Frontend Development': ['HTML5','CSS3','JavaScript','React','Tailwind CSS'],
  'Backend Development': ['Node.js','Django','Express.js','REST APIs'],
  'Database & Tools': ['SQL','Supabase','Git','GitHub'],
  'AI & Technical Skills': ['AI Prompt Evaluation','Data Annotation','Technical Documentation','Debugging','Problem Solving'],
  'Digital Marketing': ['Meta Ads Manager','TikTok Ads','Instagram Analytics','Content Strategy'],
  'Creative Tools': ['Adobe Premiere Pro','CapCut','Canva','CorelDRAW'],
  'Soft Skills': ['Leadership','Team Collaboration','Technical Communication','Creativity','Project Coordination']
}

export default function App(){
  const [dark, setDark] = useState(true)
  const [roleIdx, setRoleIdx] = useState(0)
  const [loading, setLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  useEffect(()=>{const t=setInterval(()=>setRoleIdx(i=>(i+1)%roles.length),1800);return()=>clearInterval(t)},[])
  useEffect(()=>{const t=setTimeout(()=>setLoading(false),1200);return()=>clearTimeout(t)},[])

  if (loading) return <div className="h-screen grid place-content-center bg-brand-black text-white"><motion.div animate={{rotate:360}} transition={{repeat:Infinity,duration:1.2,ease:'linear'}} className="w-16 h-16 rounded-full border-4 border-brand-green border-t-transparent"/></div>

  return <div className={dark ? 'dark' : ''}>
    <div className="bg-white text-slate-900 dark:bg-brand-black dark:text-white min-h-screen transition-colors">
      <motion.div style={{scaleX:scrollYProgress}} className="fixed top-0 left-0 right-0 h-1 bg-brand-green origin-left z-50"/>
      <nav className="fixed w-full top-0 z-40 glass">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#hero" className="font-black">Bulama<span className="text-brand-green">.dev</span></a>
          <div className="hidden md:flex gap-4 text-sm">{['about','skills','projects','experience','services','testimonials','contact'].map(s=><a key={s} href={`#${s}`} className="hover:text-brand-green capitalize">{s}</a>)}</div>
          <button onClick={()=>setDark(!dark)}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
        </div>
      </nav>

      <main className="bg-grid">
        <section id="hero" className="max-w-6xl mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
            <div>
                                                      <p className="text-brand-green">Hello, I am</p><h1 className="text-5xl font-black my-4">Software Engineer | AI Trainer | Digital Creative</h1>
              <p className="text-slate-400 dark:text-slate-300">Building intelligent digital experiences through code, creativity, and innovation.</p>
              <p className="mt-4 text-brand-green font-semibold">{roles[roleIdx]}<span className="animate-pulse">|</span></p>
              <div className="flex flex-wrap gap-3 mt-6">{['View Projects','Download CV','Hire Me'].map((c,i)=><a key={c} href={i===0?'#projects':'#contact'} className="px-5 py-2 rounded-full glass hover:shadow-glow transition">{c}</a>)}</div>
            </div>
            <div className="relative">
              <div className="glass rounded-3xl p-8">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-green/40 to-transparent grid place-content-center text-8xl font-black">MB</div>
              </div>
            </div>
          </div>
        </section>

        {section('about','About Me',<div><p>Software Engineering graduate from Mewar International University passionate about solving real-world problems with technology. I blend software development, AI training, digital marketing, and media production into high-impact experiences.</p><div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-6'>{[['Years',4],['Projects',35],['Technologies',30],['Campaigns',20]].map(([k,v])=><div key={k} className='glass p-4 rounded-xl text-center'><div className='text-3xl text-brand-green font-bold'>{v}+</div><div>{k}</div></div>)}</div></div>)}

        {section('skills','Skills',<div className='grid md:grid-cols-2 gap-4'>{Object.entries(skills).map(([c,arr])=><div key={c} className='glass p-4 rounded-xl'><h3 className='font-bold mb-3'>{c}</h3>{arr.map(s=><div key={s} className='mb-2'><div className='text-sm'>{s}</div><div className='h-2 bg-white/10 rounded'><motion.div initial={{width:0}} whileInView={{width:`${70+Math.random()*30}%`}} className='h-full bg-brand-green rounded'/></div></div>)}</div>)}</div>)}

        {section('projects','Projects',<div className='grid md:grid-cols-3 gap-4'>{[
          ['Web-Based Event Ticketing Platform',['React','Node.js','Socket.IO','Supabase','Paystack']],
          ['Offline Smart Notes Recorder',['Python','Flask','SQLite','JavaScript']],
          ['Social Media Campaign Management',['Meta Ads','Content Strategy','Analytics']]
        ].map(([name,tags])=><div key={name} className='glass rounded-2xl p-5 hover:-translate-y-1 transition'><h3 className='font-bold'>{name}</h3><div className='flex flex-wrap gap-2 my-3'>{tags.map(t=><span key={t} className='text-xs px-2 py-1 bg-brand-green/20 rounded'>{t}</span>)}</div><div className='flex gap-2'><button className='px-3 py-1 rounded bg-brand-green'>Live</button><button className='px-3 py-1 rounded border'>GitHub</button></div></div>)}</div>)}

        {section('experience','Experience',<div className='space-y-4 border-l border-brand-green pl-6'>{[
          'AI Trainer at Outlier AI','Content Creator & Social Media Manager at RNR Klothings','Social Media Manager at Mewar International University','Videographer & Editor at Abuja PR Network'
        ].map((e,i)=><div key={e} className='relative glass p-4 rounded-xl'><span className='absolute -left-[34px] top-6 w-3 h-3 bg-brand-green rounded-full'/><h4 className='font-bold'>{e}</h4><p className='text-sm text-slate-400'>2022 - Present • Delivered measurable impact through innovation and cross-functional collaboration.</p></div>)}</div>)}

        {section('services','Services',<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>{[['Web Development',Code2],['AI Training & Prompt Evaluation',Brain],['Social Media Management',Globe],['Video Editing',PenTool],['Content Strategy',PenTool],['Digital Branding',Code2]].map(([n,I])=><div key={n} className='glass p-5 rounded-2xl hover:shadow-glow transition'><I className='text-brand-green mb-3'/><h4 className='font-bold'>{n}</h4><p className='text-sm text-slate-400'>Premium service with strategic execution and measurable outcomes.</p></div>)}</div>)}

        {section('testimonials','Testimonials',<div className='grid md:grid-cols-3 gap-4'>{['Bulama transformed our online presence with technical brilliance.','A rare blend of engineering depth and creative storytelling.','Professional, fast, and obsessed with quality delivery.'].map(t=><blockquote key={t} className='glass p-5 rounded-xl'>“{t}”</blockquote>)}</div>)}

        {section('contact','Contact',<div className='grid md:grid-cols-2 gap-6'><form className='glass p-5 rounded-xl space-y-3'><input placeholder='Your Name' className='w-full p-2 rounded bg-white/5 border border-white/10'/><input placeholder='Email' className='w-full p-2 rounded bg-white/5 border border-white/10'/><textarea rows='4' placeholder='Message' className='w-full p-2 rounded bg-white/5 border border-white/10'/><button className='bg-brand-green px-4 py-2 rounded'>Send Message</button></form><div className='space-y-3'><p className='flex gap-2 items-center'><Mail size={16}/> bulama.dev@mail.com</p><p className='flex gap-2 items-center'><Phone size={16}/> +234 000 000 0000</p><p className='flex gap-2 items-center'><MapPin size={16}/> Abuja, Nigeria</p><div className='glass rounded-xl h-40 grid place-content-center text-brand-green'>Interactive map glow area</div></div></div>)}
      </main>
      <footer className='border-t border-white/10 py-8 text-center'>
        <div className='flex justify-center gap-3 mb-3'><Github/><Linkedin/><Globe/></div>
        <p>© {new Date().getFullYear()} Mela Benjamin Bulama. All rights reserved.</p>
      </footer>
      <a href='#hero' className='fixed bottom-5 right-5 glass p-3 rounded-full'><ArrowUp size={16}/></a>
    </div>
  </div>
}

function section(id,title,content){
  return <section id={id} className='max-w-6xl mx-auto px-4 py-16'><motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} className='text-3xl font-black mb-6'>{title}</motion.h2>{content}</section>
}
