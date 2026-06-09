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
type TravelPhotoGroup = {
  id: string;
  title: Localized;
  photos: string[];
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
      "Hi！我的名字是陈起成，英文名 Harrison，目前有乔治华盛顿大学（GWU）的计算机科学硕士学位和宁波诺丁汉大学（UNNC）的计算机科学学士学位，在AI领域有两篇论文发表，主要想发展的技术方向是AI应用开发、客户端开发或者是游戏类开发。",
      "除了专业之外，我还喜欢中国古典舞、声乐、钢琴。高中时期机缘巧合之下选择了学习中国古典舞，并在高三参加了半年的艺考集训。2017 年 12 月参加全海南省艺术生统考，成绩约 300 名；统考后去全国各地参加艺术学院校考和特长生考试，包括浙江音乐学院、星海音乐学院、北京师范大学、华东师范大学特长生、华南理工大学特长生、中山大学特长生，并在特长生考试中获得高考分数减免。之后我以出国留学为目标报考了宁波诺丁汉大学，虽然最后没有在古典舞专业这条路上走，我也继续以中国舞为兴趣，参加了UNNC的民舞队和UNNC合唱团，继续在舞台上表演。",
      "去美国读硕士期间也在假期自驾从DC去了美国和加拿大的很多地方，包括Virginia的仙纳度（shenandoah）国家公园、卢雷（Luray）洞穴、黄石公园、尼亚加拉瀑布（加拿大+Buffalo两岸都去过）、多伦多、纽约、魁北克城堡、蒙特利尔、罗切斯特、奥兰多环球影城。"
    ],
    introTitle: "教育经历",
    intro:
      "",
    focusTitle: "我希望这个页面表达什么",
    focusItems: ["能长期投入一件事", "愿意在团队里沟通和协作", "不仅有项目结果，也有真实经历和表达能力"],
    travelTitle: "旅行照片",
    travelText: "读硕士期间自驾和旅行留下的一些照片，按地区分组横向滚动浏览。",
    videoTitle: "校园经历影像",
    videoText: "每段经历的视频和照片放在同一个固定展示框里，可以切换查看，避免素材全部堆在页面上。",
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
    travelTitle: "Travel Photos",
    travelText: "A few travel photos from my master's years, grouped by location and browsable horizontally.",
    videoTitle: "Campus Media",
    videoText: "Each experience keeps its own videos and photos in a fixed media frame with simple switching controls.",
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

const travelPhotoGroups: TravelPhotoGroup[] = [
  {
    id: "dc",
    title: { zh: "DC", en: "DC" },
    photos: [
      "微信图片_20260609164921_85_42.jpg",
      "微信图片_20260609164923_86_42.jpg",
      "微信图片_20260609164924_87_42.jpg",
      "微信图片_20260609164925_88_42.jpg",
      "微信图片_20260609164926_89_42.jpg",
      "微信图片_20260609165416_95_42.jpg",
      "微信图片_20260609165417_96_42.jpg",
      "微信图片_20260609165418_97_42.jpg",
      "微信图片_20260609165419_98_42.jpg",
      "微信图片_20260609165420_99_42.jpg",
      "微信图片_20260609165421_100_42.jpg",
    ],
  },
  {
    id: "grand-teton",
    title: { zh: "Grand Teton", en: "Grand Teton" },
    photos: [
      "微信图片_20260609165658_112_42.jpg",
      "微信图片_20260609165659_113_42.jpg",
      "微信图片_20260609165700_114_42.jpg",
      "微信图片_20260609165701_115_42.jpg",
      "微信图片_20260609165702_116_42.jpg",
      "微信图片_20260609165703_117_42.jpg",
      "微信图片_20260609165704_118_42.jpg",
      "微信图片_20260609165705_119_42.jpg",
      "微信图片_20260609165706_120_42.jpg",
      "微信图片_20260609165707_121_42.jpg",
      "微信图片_20260609165708_122_42.jpg",
    ],
  },
  {
    id: "montreal",
    title: { zh: "Montreal", en: "Montreal" },
    photos: [
      "微信图片_20260609164848_65_42.jpg",
      "微信图片_20260609164849_66_42.jpg",
      "微信图片_20260609164850_67_42.jpg",
      "微信图片_20260609164851_68_42.jpg",
      "微信图片_20260609164852_69_42.jpg",
      "微信图片_20260609164853_70_42.jpg",
      "微信图片_20260609164902_71_42.jpg",
      "微信图片_20260609164903_72_42.jpg",
      "微信图片_20260609164904_73_42.jpg",
      "微信图片_20260609164906_74_42.jpg",
    ],
  },
  {
    id: "quebec",
    title: { zh: "Quebec", en: "Quebec" },
    photos: [
      "微信图片_20260609164909_75_42.jpg",
      "微信图片_20260609164910_76_42.jpg",
      "微信图片_20260609164911_77_42.jpg",
      "微信图片_20260609164912_78_42.jpg",
      "微信图片_20260609164913_79_42.jpg",
      "微信图片_20260609164914_80_42.jpg",
      "微信图片_20260609164916_81_42.jpg",
      "微信图片_20260609164917_82_42.jpg",
      "微信图片_20260609164918_83_42.jpg",
      "微信图片_20260609164921_84_42.jpg",
    ],
  },
  {
    id: "rochester",
    title: { zh: "Rochester", en: "Rochester" },
    photos: [
      "微信图片_20260609164844_61_42.jpg",
      "微信图片_20260609164845_62_42.jpg",
      "微信图片_20260609164846_63_42.jpg",
      "微信图片_20260609164847_64_42.jpg",
      "微信图片_20260609164928_90_42.jpg",
      "微信图片_20260609164929_91_42.jpg",
      "微信图片_20260609164931_92_42.jpg",
      "微信图片_20260609164932_93_42.jpg",
      "微信图片_20260609164933_94_42.jpg",
    ],
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

      <section className="about-section travel-photo-section">
        <div className="about-section-heading">
          <div>
            <p className="section-kicker">{text.travelTitle}</p>
          </div>
          <span>{text.travelText}</span>
        </div>
        <div className="travel-photo-groups">
          {travelPhotoGroups.map((group) => (
            <article className="travel-photo-group" key={group.id}>
              <div className="travel-photo-heading">
                <strong>{group.title[language]}</strong>
                <span>
                  {group.photos.length} {language === "zh" ? "张照片" : "photos"}
                </span>
              </div>
              <div className="travel-photo-strip" aria-label={`${group.title[language]} ${text.travelTitle}`}>
                {group.photos.map((photo, index) => {
                  const src = asset(`media/pictures/${group.title.en}/${photo}`);
                  return (
                    <a href={src} key={photo} target="_blank" rel="noreferrer">
                      <img src={src} alt={`${group.title[language]} ${index + 1}`} loading="lazy" />
                    </a>
                  );
                })}
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
