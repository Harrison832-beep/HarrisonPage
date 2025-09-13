import React, { useState, useEffect, useCallback, useContext } from 'react';
import { resumeData } from '@/data/resume';
import { resumeDataEn } from '@/data/resume-en';
import { cn } from '@/lib/utils';
import { LanguageContext } from '@/contexts/languageContext.tsx';

// 个人主页组件
export default function Home() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('Home must be used within a LanguageProvider');
  }
  const { language, toggleLanguage } = context;
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({});
  
  // 根据当前语言选择简历数据
  const currentResumeData = language === 'zh' ? resumeData : resumeDataEn;
  
  // 导航栏和静态文本的翻译映射
  const translations = {
    nav: {
      about: { zh: '关于我', en: 'About' },
      education: { zh: '教育背景', en: 'Education' },
      experience: { zh: '实习经历', en: 'Experience' },
      projects: { zh: '项目经验', en: 'Projects' },
      skills: { zh: '技能', en: 'Skills' },
      publications: { zh: '发表与奖项', en: 'Publications & Awards' }
    },
    buttons: {
      viewMore: { zh: '查看更多', en: 'View More' },
      showLess: { zh: '收起', en: 'Show Less' },
      allProjects: { zh: '所有项目', en: 'All Projects' },
      devProjects: { zh: '开发项目', en: 'Development' },
      mlProjects: { zh: '机器学习项目', en: 'Machine Learning' }
    },
    sections: {
      aboutMe: { zh: '关于我', en: 'About Me' },
      education: { zh: '教育背景', en: 'Education' },
      experience: { zh: '实习经历', en: 'Internship Experience' },
      projects: { zh: '项目经验', en: 'Projects' },
      skills: { zh: '技能专长', en: 'Skills' },
      publications: { zh: '发表与奖项', en: 'Publications & Awards' },
      languageSkills: { zh: '语言技能', en: 'Languages' },
      programmingLanguages: { zh: '编程语言', en: 'Programming Languages' },
      technicalSkills: { zh: '技术能力', en: 'Technical Skills' },
      publicationsSection: { zh: '论文发表', en: 'Publications' },
      awards: { zh: '获得奖项', en: 'Awards' }
    }
  };
  
  // 监听滚动事件，用于导航栏样式变化
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 切换项目展开/折叠状态
  const toggleProjectExpand = useCallback((index: number) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  }, []);
  
  // 根据选择的类别筛选项目
  const filteredProjects = activeCategory === 'all' 
    ? currentResumeData.projects 
    : currentResumeData.projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      {/* 导航栏 */}
  <header className={cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"
  )}>
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex justify-between items-center">
        {/* 语言切换按钮 */}
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
        >
          {language === 'zh' ? 'English' : '中文'}
        </button>
        
        {/* 导航菜单 */}
        <nav>
          <ul className="flex space-x-1 md:space-x-6 text-sm md:text-base">
            {['about', 'education', 'experience', 'projects', 'skills', 'publications'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className="inline-block px-3 py-2 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {translations.nav[item as keyof typeof translations.nav][language]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  </header>

      <main className="container mx-auto px-4 md:px-6 pt-28 pb-20">
        {/* 个人信息头部 */}
        <section id="about" className="mb-20 text-center">
           <div className="relative inline-block mb-6">
           <img 
  src="https://lf-code-agent.coze.cn/obj/x-ai-cn/255345043714/attachment/2304d15d2777c8c920260d702845c547_20250912234233.jpg" 
  alt="陈起成头像" 
  className="w-64 h-48 md:w-96 md:h-72 rounded-xl object-cover border-4 border-white dark:border-gray-900 shadow-lg"
/>
            <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full w-10 h-10 flex items-center justify-center border-4 border-white dark:border-gray-900">
              <i className="fa-solid fa-check text-white"></i>
            </div>
          </div>
          
             <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 pb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
               {currentResumeData.name}
             </h1>
          
            <div className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              <p>{currentResumeData.career}</p>
            </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <i className="fa-regular fa-envelope"></i>
              <span>{resumeData.contact.email}</span>
            </a>
            <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <i className="fa-solid fa-phone"></i>
              <span>{resumeData.contact.phone}</span>
            </a>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <i className="fa-brands fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
               <a href="https://github.com/Harrison832-Beep" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <i className="fa-brands fa-github text-xl"></i>
                <span>GitHub</span>
              </a>
            </div>
          
           <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <i className="fa-solid fa-user-circle mr-2 text-blue-500"></i>{translations.sections.aboutMe[language]}
            </h2>
             <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
 {language === 'zh' 
   ? '我是一名毕业于美国乔治华盛顿大学的硕士，本科就读于宁波诺丁汉大学，本科和硕士都是计算机科学专业，目前正在上海寻找工作机会。我的研究兴趣包括深度学习、计算机视觉和自然语言处理，特别是深度学习在智慧设备或穿戴设备中的应用。同时我也感兴趣程序架构设计、重构、再开发等。在深度学习领域发表过两篇论文，有一次从0到1从设计到使用Python和Django开发、测试微信小程序后端的经历。' 
   : 'I am a master\'s graduate from The George Washington University with a Bachelor\'s degree from the University of Nottingham Ningbo China, both in Computer Science. I am currently seeking job opportunities in Shanghai. My research interests include deep learning, computer vision, and natural language processing, particularly the application of deep learning in smart devices or wearable devices. I am also interested in software development, software architecture, and software refactoring. I have published two papers in the field of deep learning and have experience developing and testing a WeChat mini-program backend from scratch using Python and Django.'}
            </p>
          </div>
        </section>
        
        {/* 教育背景 */}
        <section id="education" className="mb-20">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
              <i className="fa-solid fa-graduation-cap text-blue-600 dark:text-blue-400"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{translations.sections.education[language]}</h2>
          </div>
          
          <div className="space-y-6">
            {currentResumeData.education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">{edu.period}</span>
                </div>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium mb-3">
                  <i className="fa-solid fa-building mr-2"></i>
                  <span>{edu.school}</span>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                  <i className="fa-solid fa-map-marker-alt mr-2"></i>
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                  <i className="fa-solid fa-star mr-2"></i>
                  <span>GPA: {edu.gpa}</span>
                </div>
                
                {edu.projects && edu.projects.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">{language === 'zh' ? '独立项目:' : 'Independent Project:'}</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{edu.projects[0]}</p>
                  </div>
                )}
                
                {edu.publications && edu.publications.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">{language === 'zh' ? '论文发表:' : 'Publications:'}</h4>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
                      {edu.publications.map((pub, idx) => (
                        <li key={idx}>{pub}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        
        {/* 实习经历 */}
        <section id="experience" className="mb-20">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
              <i className="fa-solid fa-briefcase text-green-600 dark:text-green-400"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{translations.sections.experience[language]}</h2>
          </div>
          
          <div className="space-y-6">
             {currentResumeData.internships.map((internship, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{internship.position}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">{internship.period}</span>
                </div>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium mb-3">
                  <i className="fa-solid fa-building mr-2"></i>
                  <span>{internship.company}</span>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                  <i className="fa-solid fa-map-marker-alt mr-2"></i>
                  <span>{internship.location}</span>
                </div>
                
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">{language === 'zh' ? '工作职责:' : 'Responsibilities:'}</h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  {internship.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
        {/* 项目经验 */}
        <section id="projects" className="mb-20">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
              <i className="fa-solid fa-code text-purple-600 dark:text-purple-400"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{translations.sections.projects[language]}</h2>
          </div>
          
          {/* 项目分类筛选 */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === 'all' 
                  ? "bg-purple-600 text-white" 
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              {translations.buttons.allProjects[language]}
            </button>
            <button
              onClick={() => setActiveCategory('development')}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === 'development' 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              {translations.buttons.devProjects[language]}
            </button>
            <button
              onClick={() => setActiveCategory('machine-learning')}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeCategory === 'machine-learning' 
                  ? "bg-green-600 text-white" 
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              {translations.buttons.mlProjects[language]}
            </button>
          </div>
          
          {/* 项目列表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                      <i className="fa-brands fa-github text-2xl"></i>
                      </a>
                    )}
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                    <i className="fa-solid fa-user mr-1"></i>
                    <span>{project.role}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                    <i className="fa-solid fa-calendar mr-1"></i>
                    <span>{project.period}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <i className="fa-solid fa-map-marker-alt mr-1"></i>
                    <span>{project.location}</span>
                  </div>
                  
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2 text-sm">{language === 'zh' ? '项目描述:' : 'Description:'}</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1 mb-4">
                    {project.description.slice(0, expandedProjects[index] ? project.description.length : 2).map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                    {project.description.length > 2 && (
                      <button 
                        onClick={() => toggleProjectExpand(index)}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline text-sm font-medium transition-colors mt-1"
                      >
                        {expandedProjects[index] ? translations.buttons.showLess[language] : translations.buttons.viewMore[language]}
                      </button>
                    )}
                  </ul>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className={cn(
                      "inline-block px-3 py-1 rounded-full text-xs font-medium",
                      project.category === 'development' 
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" 
                        : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                    )}>
                      {project.category === 'development' 
                        ? translations.buttons.devProjects[language] 
                        : translations.buttons.mlProjects[language]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* 技能部分 */}
        <section id="skills" className="mb-20">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mr-3">
              <i className="fa-solid fa-cogs text-amber-600 dark:text-amber-400"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{translations.sections.skills[language]}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 语言技能 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <i className="fa-solid fa-language text-purple-500 mr-2"></i>
                {translations.sections.languageSkills[language]}
              </h3>
              <ul className="space-y-3">
                 {currentResumeData.skills.languages.map((lang, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{lang.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 编程语言 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <i className="fa-solid fa-code text-blue-500 mr-2"></i>
                {translations.sections.programmingLanguages[language]}
              </h3>
              <div className="flex flex-wrap gap-2">
                 {currentResumeData.skills.programming.map((lang, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            {/* 技术能力 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <i className="fa-solid fa-microchip text-green-500 mr-2"></i>
                {translations.sections.technicalSkills[language]}
              </h3>
              <div className="flex flex-wrap gap-2">
                 {currentResumeData.skills.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* 发表与奖项 */}
        <section id="publications" className="mb-20">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mr-3">
              <i className="fa-solid fa-trophy text-red-600 dark:text-red-400"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{translations.sections.publications[language]}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 论文发表 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <i className="fa-solid fa-book text-blue-500 mr-2"></i>
                {translations.sections.publicationsSection[language]}
              </h3>
                <ul className="space-y-6">{currentResumeData.publications.map((pub, index) => (
                   <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
                     <p className="mb-2">{pub.reference}</p>
                     <div className="flex items-center">
                       <a 
                         href={pub.link} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-blue-600 dark:text-blue-400 hover:underline mr-3"
                       >
                         <i className="fa-solid fa-link mr-1"></i>DOI: {pub.link.split('org/')[1]}
                       </a>
                       <span className="text-gray-500 dark:text-gray-400">({pub.year})</span>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>
            
            {/* 奖项 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <i className="fa-solid fa-award text-yellow-500 mr-2"></i>
                {translations.sections.awards[language]}
              </h3>
              <ul className="space-y-4">
                 {currentResumeData.awards.map((award, index) => (
                  <li key={index} className="flex items-start">
                    <div className="text-yellow-500 mr-3 mt-1">
                      <i className="fa-solid fa-medal"></i>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{award.title}</p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{award.year}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      {/* 页脚 */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
               <a href="https://github.com/Harrison832-Beep" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <i className="fa-brands fa-github text-xl"></i>
            </a>
            <a href={`mailto:${resumeData.contact.email}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <i className="fa-regular fa-envelope text-xl"></i>
            </a>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {currentResumeData.name}. {language === 'zh' ? '保留所有权利。' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  );
}