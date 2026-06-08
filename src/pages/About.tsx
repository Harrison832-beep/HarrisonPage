import { useState } from "react";

type Language = "zh" | "en";
type Localized = Record<Language, string>;
type CampusMediaItem = {
  title: Localized;
  src: string;
  kind: "video" | "image";
  poster?: string;
};
type CampusExperience = {
  id: string;
  title: Localized;
  text: Localized;
  tags: Localized[];
  media: CampusMediaItem[];
};
type EducationTimelineItem = {
  year: string;
  title: Localized;
  detail: Localized;
};

const base = import.meta.env.BASE_URL;
const asset = (path: string) => `${base}${path.replace(/^\//, "")}`;

const copy = {
  zh: {
    nav: ["项目展示", "关于我", "联系方式"],
    back: "返回项目主页",
    eyebrow: "About / Campus Life",
    title: "关于我",
    lead: [
      "Hi！我的名字是陈起成，英文名 Harrison，目前有乔治华盛顿大学（GWU）的计算机科学硕士学位，本科就读于宁波诺丁汉大学（UNNC），目前有两篇 AI 领域论文发表。",
      "在自己的专业之外，我还喜欢中国古典舞、声乐、钢琴。高中时期机缘巧合之下选择了学习中国古典舞，并在高三参加了半年的艺考集训。2017 年 12 月参加全海南省艺术生统考，成绩约 300 名；统考后去全国各地参加艺术学院校考和特长生考试，包括浙江音乐学院、星海音乐学院、北京师范大学、华东师范大学特长生、华南理工大学特长生、中山大学特长生，并在特长生考试中获得高考分数减免。之后我以出国留学为目标报考了宁波诺丁汉大学，也继续参加中国舞社团，以兴趣爱好的方式表演中国舞。",
    ],
    introTitle: "教育经历",
    intro:
      "",
    focusTitle: "我希望这个页面表达什么",
    focusItems: ["能长期投入一件事", "愿意在团队里沟通和协作", "不仅有项目结果，也有真实经历和表达能力"],
    videoTitle: "校园经历影像",
    videoText: "每段经历的视频和照片放在同一个固定展示框里，可以切换查看，避免素材全部堆在页面上。",
    timelineTitle: "经历关键词",
    previous: "上一张",
    next: "下一张",
    video: "视频",
    photo: "照片",
    contactRole: "Android / AI 全栈 / 游戏与 VR 开发",
  },
  en: {
    nav: ["Projects", "About", "Contact"],
    back: "Back to portfolio",
    eyebrow: "About / Campus Life",
    title: "Beyond projects: campus, stage and everyday life.",
    lead: [
      "This page keeps the material that does not fit neatly into a resume: a short introduction, campus experiences, activity videos and personal photos.",
      "Beyond my academic and technical background, I also want this page to show the stage, campus and personal experiences that shaped how I collaborate, practice and express myself.",
    ],
    introTitle: "About Me",
    intro:
      "I am Qicheng Chen, with a Computer Science background and project experience across AI applications, Android client development, data visualization and VR simulation. Beyond technical work, I want this site to show a more complete picture: campus activities, stage moments, photos and the kind of commitment, collaboration and communication that are hard to capture in bullet points.",
    focusTitle: "What This Page Adds",
    focusItems: ["Long-term commitment", "Communication and teamwork", "Real experiences beyond project outcomes"],
    videoTitle: "Campus Media",
    videoText: "Each experience keeps its own videos and photos in a fixed media frame with simple switching controls.",
    timelineTitle: "Experience Keywords",
    previous: "Previous",
    next: "Next",
    video: "Video",
    photo: "Photo",
    contactRole: "Android / AI full-stack / Game and VR development",
  },
};

const campusExperiences: CampusExperience[] = [
  {
    id: "love-in-the-dark",
    title: { zh: "Love in the Dark", en: "Love in the Dark" },
    text: {
      zh: "校园舞台活动素材，适合作为个人经历和舞台参与的补充展示。",
      en: "A campus stage clip that adds a personal and collaborative layer beyond technical projects.",
    },
    tags: [{ zh: "现代舞", en: "Modern Dance" }],
    media: [
      {
        title: { zh: "Love in the Dark 视频", en: "Love in the Dark Video" },
        src: asset("media/Love in the Dark.mp4"),
        kind: "video",
        poster: asset("media/Love in the Dark封面.jpg"),
      },
    ],
  },
  {
    id: "zai-shui-yi-fang",
    title: { zh: "在水一方", en: "By the Water" },
    text: {
      zh: "校园活动视频和对应照片放在同一组里，切换时能看到完整的舞台片段和静态画面。",
      en: "A campus activity video paired with its related still image in the same switchable module.",
    },
    tags: [{ zh: "古典舞", en: "Classical Dance" }],
    media: [
      {
        title: { zh: "在水一方视频", en: "By the Water Video" },
        src: asset("media/在水一方.mp4"),
        kind: "video",
        poster: asset("media/在水一方封面.jpg"),
      },
    ],
  },
  {
    id: "hong-lou-meng",
    title: { zh: "又见红楼梦", en: "Dream of the Red Chamber Revisited" },
    text: {
      zh: "新加入的校园舞台视频和三张现场照片，放在同一模块中切换查看。",
      en: "A newly added stage video grouped with three related event photos.",
    },
    tags: [
      { zh: "现代舞", en: "Modern Dance" },
      { zh: "古典舞", en: "Classical Dance" },
    ],
    media: [
      {
        title: { zh: "又见红楼梦视频", en: "Red Chamber Video" },
        src: asset("media/又见红楼梦.mp4"),
        kind: "video",
        poster: asset("media/又见红楼梦封面.jpg"),
      },
      {
        title: { zh: "又见红楼梦照片 1", en: "Red Chamber Photo 1" },
        src: asset("media/微信图片_20260608104532_53_42.jpg"),
        kind: "image",
      },
      {
        title: { zh: "又见红楼梦照片 2", en: "Red Chamber Photo 2" },
        src: asset("media/微信图片_20260608104537_54_42.jpg"),
        kind: "image",
      },
      {
        title: { zh: "又见红楼梦照片 3", en: "Red Chamber Photo 3" },
        src: asset("media/微信图片_20260608104542_55_42.jpg"),
        kind: "image",
      },
    ],
  },
  {
    id: "mens-acrobatics",
    title: { zh: "男子技巧", en: "Men's Acrobatics" },
    text: {
      zh: "展示训练、配合和现场表现力的一段校园经历视频。",
      en: "A clip that reflects practice, coordination and stage presence.",
    },
    tags: [{ zh: "古典舞", en: "Classical Dance" }],
    media: [
      {
        title: { zh: "男子技巧视频", en: "Men's Acrobatics Video" },
        src: asset("media/男子技巧.mp4"),
        kind: "video",
        poster: asset("media/男子技巧封面.jpg"),
      },
    ],
  },
  {
    id: "fanghua",
    title: { zh: "芳华", en: "Fanghua" },
    text: {
      zh: "校园舞台和活动素材，可用于补充个人表达、参与经历和现场完成度。",
      en: "A campus stage/activity clip that adds context around expression and participation.",
    },
    tags: [{ zh: "现代舞", en: "Modern Dance" }],
    media: [
      {
        title: { zh: "芳华视频", en: "Fanghua Video" },
        src: asset("media/芳华.mp4"),
        kind: "video",
        poster: asset("media/芳华封面.jpg"),
      },
    ],
  },
];

const educationTimeline: EducationTimelineItem[] = [
  {
    year: "2015",
    title: { zh: "起点", en: "Starting Point" },
    detail: { zh: "占位文字：这一年开始接触新的学习方向，也为后续经历埋下伏笔。", en: "Placeholder: this year opened a new direction and set up later experiences." },
  },
  {
    year: "2017",
    title: { zh: "艺考与选择", en: "Art Exam and Choice" },
    detail: { zh: "占位文字：这里之后可以补充艺考集训、统考、校考或特长生考试相关经历。", en: "Placeholder: add art training, provincial exam, school auditions or special-talent exam details here." },
  },
  {
    year: "2018",
    title: { zh: "本科阶段", en: "Undergraduate Stage" },
    detail: { zh: "占位文字：这里可以写宁波诺丁汉大学、本科专业、社团和早期项目经历。", en: "Placeholder: add UNNC, undergraduate study, societies and early project experiences here." },
  },
  {
    year: "2022",
    title: { zh: "研究与项目", en: "Research and Projects" },
    detail: { zh: "占位文字：这里可以补充研究项目、课程项目、VR 或 AI 相关经历。", en: "Placeholder: add research projects, coursework, VR or AI-related experience here." },
  },
  {
    year: "2023",
    title: { zh: "论文发表", en: "Publication" },
    detail: { zh: "占位文字：这里可以放第一作者论文、压力检测项目和相关实验经历。", en: "Placeholder: add first-author publication, stress analysis project and experiment details here." },
  },
  {
    year: "2025",
    title: { zh: "硕士与求职", en: "Master's and Career" },
    detail: { zh: "占位文字：这里可以写 GWU 硕士、AI 全栈/客户端方向作品集和求职目标。", en: "Placeholder: add GWU master's study, AI full-stack/client portfolio and career goals here." },
  },
];

const timeline: { label: Localized; text: Localized }[] = [
  {
    label: { zh: "校园活动", en: "Campus Activities" },
    text: { zh: "把活动视频和照片集中到一个页面，作为简历之外的个人侧面。", en: "Campus photos and clips collected as a personal layer beyond the resume." },
  },
  {
    label: { zh: "舞台经历", en: "Stage Experience" },
    text: { zh: "展示训练、协作、表达和现场完成度。", en: "Practice, coordination, expression and live delivery." },
  },
  {
    label: { zh: "技术主页补充", en: "Portfolio Context" },
    text: { zh: "主站仍然以项目为核心，这一页补充更完整的人。", en: "The main site stays project-focused; this page adds the human context." },
  },
];

export default function About() {
  const [language, setLanguage] = useState<Language>("zh");
  const [activeMediaByExperience, setActiveMediaByExperience] = useState<Record<string, number>>({});
  const text = copy[language];

  const setExperienceMedia = (experienceId: string, index: number) => {
    setActiveMediaByExperience((current) => ({ ...current, [experienceId]: index }));
  };

  return (
    <main className="site-shell about-page">
      <nav className="top-nav">
        <a href={asset("")} className="brand-link">
          Qicheng Chen
        </a>
        <div className="nav-actions">
          <div className="nav-links" aria-label="About page navigation">
            <a href={asset("")}>{text.nav[0]}</a>
            <a href={asset("about")}>{text.nav[1]}</a>
            <a href="#contact">{text.nav[2]}</a>
          </div>
          <div className="language-toggle" aria-label="Language switcher">
            <button className={language === "zh" ? "active" : ""} onClick={() => setLanguage("zh")} type="button">
              中文
            </button>
            <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} type="button">
              EN
            </button>
          </div>
        </div>
      </nav>

      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>{text.title}</h1>
          {text.lead.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <figure className="about-portrait">
          <img src={asset("media/微信图片_20260603104953_34_42.jpg")} alt={language === "zh" ? "生活合照" : "Personal photo"} />
        </figure>
      </section>

      <section className="about-section education-section">
        <p className="section-kicker">{text.introTitle}</p>
        <div className="education-necklace" aria-label={language === "zh" ? "教育经历时间线" : "Education timeline"}>
          {educationTimeline.map((item) => (
            <article className="education-necklace-item" key={item.year} tabIndex={0}>
              <span className="education-node" aria-hidden="true" />
              <span className="education-year">{item.year}</span>
              <div className="education-detail">
                <strong>{item.title[language]}</strong>
                <p>{item.detail[language]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section">
        <div className="about-section-heading">
          <div>
            <p className="section-kicker">{text.videoTitle}</p>
          </div>
        </div>
        <div className="campus-experience-grid">
          {campusExperiences.map((experience) => {
            const activeIndex = activeMediaByExperience[experience.id] ?? 0;
            const activeItem = experience.media[activeIndex];
            const previousIndex = (activeIndex - 1 + experience.media.length) % experience.media.length;
            const nextIndex = (activeIndex + 1) % experience.media.length;

            return (
              <article className="campus-experience-card" key={experience.id}>
                <div className="experience-media-frame">
                  {activeItem.kind === "video" ? (
                    <video
                      key={activeItem.src}
                      controls
                      controlsList="nodownload"
                      disablePictureInPicture
                      poster={activeItem.poster}
                      preload="metadata"
                      onContextMenu={(event) => event.preventDefault()}
                    >
                      <source src={activeItem.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={activeItem.src} alt={activeItem.title[language]} />
                  )}
                  {experience.media.length > 1 ? (
                    <>
                      <button
                        className="experience-media-arrow previous"
                        onClick={() => setExperienceMedia(experience.id, previousIndex)}
                        type="button"
                        aria-label={`${text.previous}: ${experience.title[language]}`}
                      >
                        ‹
                      </button>
                      <button
                        className="experience-media-arrow next"
                        onClick={() => setExperienceMedia(experience.id, nextIndex)}
                        type="button"
                        aria-label={`${text.next}: ${experience.title[language]}`}
                      >
                        ›
                      </button>
                    </>
                  ) : null}
                </div>
                <div className="experience-body">
                  <div>
                    <span>
                      {activeIndex + 1} / {experience.media.length} · {activeItem.kind === "video" ? text.video : text.photo}
                    </span>
                    <strong>{experience.title[language]}</strong>
                    <div className="experience-tag-row" aria-label={language === "zh" ? "舞种标签" : "Dance tags"}>
                      {experience.tags.map((tag) => (
                        <span key={`${experience.id}-${tag.en}`}>{tag[language]}</span>
                      ))}
                    </div>
                    <p>{experience.text[language]}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-section about-timeline-section">
        <p className="section-kicker">{text.timelineTitle}</p>
        <div className="about-timeline">
          {timeline.map((item) => (
            <div key={item.label.en}>
              <strong>{item.label[language]}</strong>
              <p>{item.text[language]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>{language === "en" ? "Chen Qicheng" : "陈起成"}</h2>
          <span>{text.contactRole}</span>
        </div>
        <div className="contact-links">
          <a href="mailto:wharrison832@gmail.com">wharrison832@gmail.com</a>
          <a href="https://www.linkedin.com/in/qicheng-chen" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Harrison832-Beep" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
