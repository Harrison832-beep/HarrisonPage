import { useMemo, useState } from "react";

type Language = "en" | "zh";
type Localized = Record<Language, string>;
type TrackId = "all" | "ai" | "android" | "vr";

type ProjectLink = {
  label: Localized;
  href: string;
  kind: "Demo" | "Code" | "Paper" | "Resume" | "Video";
};

type DemoAsset = {
  title: Localized;
  src: string;
  kind: "gif" | "image";
  wide?: boolean;
};

type Project = {
  title: Localized;
  track: Exclude<TrackId, "all"> | Exclude<TrackId, "all">[];
  role: Localized;
  period: string;
  summary: Localized;
  stack: string[];
  image?: string;
  imageAlt?: Localized;
  mediaFit?: "cover" | "contain";
  fixedMedia?: boolean;
  mediaAssets?: DemoAsset[];
  video?: string;
  videos?: { label: Localized; src: string; kind?: "video" | "image" }[];
  demoState: Localized;
  demoAssets?: DemoAsset[];
  demoAssetDisplay?: "grid" | "carousel";
  hideDemoNote?: boolean;
  highlights: Localized[];
  links: ProjectLink[];
};

const base = import.meta.env.BASE_URL;
const asset = (path: string) => `${base}${path.replace(/^\//, "")}`;
const projectTracks = (project: Project) => (Array.isArray(project.track) ? project.track : [project.track]);

const ui = {
  en: {
    nav: ["Projects", "Resumes", "Contact"],
    eyebrow: "Portfolio / Demo Hub",
    heroTitle: "AI applications, Android apps and VR simulation systems.",
    heroLead:
      "Computer Science graduate with React/FastAPI AI projects, native Android work, first-author research papers and UE4 VR interaction experience.",
    viewProjects: "View Projects",
    featuredProjects: "Featured Projects",
    rolePdfs: "Role-specific PDFs",
    resumeSectionTitle: "One Site, Three Resume Paths",
    demoMaterial: "Demo material:",
    contactRole: "Android / AI full-stack / Game and VR development",
  },
  zh: {
    nav: ["项目展示", "简历", "联系方式"],
    eyebrow: "作品集 / Demo Hub",
    heroTitle: "个人项目/作品",
    heroLead:
      "计算机科学背景，项目覆盖 React/FastAPI AI 应用、原生 Android、第一作者论文，以及 UE4 VR 交互仿真。",
    viewProjects: "查看项目",
    resumeSectionTitle: "个人简历",
    demoMaterial: "Demo 素材：",
    contactRole: "Android / AI 全栈 / 游戏与 VR 开发",
  },
};

const tracks: { id: TrackId; label: Localized; headline: Localized; description: Localized }[] = [
  {
    id: "all",
    label: { en: "All Work", zh: "全部项目" },
    headline: { en: "One portfolio, three role stories.", zh: "所有项目" },
    description: {
      en: "All projects and demos",
      zh: "所有项目经历以及Demo",
    },
  },
  {
    id: "ai",
    label: { en: "AI Full-stack", zh: "AI 全栈" },
    headline: { en: "AI applications, RAG systems and published ML research.", zh: "AI 应用、RAG 系统与已发表机器学习相关研究" },
    description: {
      en: "React/FastAPI projects, LLM workflows, recommendation experiments and first-author research papers.",
      zh: "突出 React/FastAPI、LLM 工作流、推荐实验和第一作者论文，适合 AI 应用开发与 Python 后端方向。",
    },
  },
  {
    id: "android",
    label: { en: "Android", zh: "Android 客户端" },
    headline: { en: "Modern Android apps, media playback and BLE data collection.", zh: "现代 Android 应用、媒体播放与 BLE 数据采集。" },
    description: {
      en: "Kotlin/Java Android work covering Jetpack Compose, Room, MVVM, StateFlow, Service, MediaPlayer, permissions and sensor data capture.",
      zh: "覆盖 Kotlin/Java、Jetpack Compose、Room、MVVM、StateFlow、Service、MediaPlayer、权限适配和传感器数据采集。",
    },
  },
  {
    id: "vr",
    label: { en: "Game / VR", zh: "游戏 / VR" },
    headline: { en: "UE4 VR interaction and data-driven simulation systems.", zh: "UE4 VR 交互与数据驱动仿真系统。" },
    description: {
      en: "Gameplay logic, VR interaction modes, truck task systems, Blueprint refactoring and real-world data driven simulation.",
      zh: "突出 Gameplay 逻辑、VR 交互模式、卡车任务系统、蓝图重构和真实数据驱动仿真。",
    },
  },
];

const resumes = [
  {
    title: { en: "AI Full-stack Resume", zh: "AI 全栈简历" },
    href: asset("resumes/qicheng-chen-ai-fullstack.pdf"),
    tag: "React / FastAPI / LLM",
    fit: {
      en: "AI application, Python backend, RAG and data/ML-adjacent full-stack",
      zh: "AI应用开发、Python后端、RAG、数据/ML",
    },
  },
  {
    title: { en: "Android Resume", zh: "Android 客户端简历" },
    href: asset("resumes/qicheng-chen-android.pdf"),
    tag: "Kotlin / Jetpack Compose / Room",
    fit: {
      en: "Android, mobile client, Jetpack Compose, media playback and sensor data collection",
      zh: "Android、移动客户端、Jetpack Compose、媒体播放和传感器数据采集",
    },
  },
  {
    title: { en: "Game / VR Resume", zh: "游戏 / VR 简历" },
    href: asset("resumes/qicheng-chen-game-vr.pdf"),
    tag: "UE4 / Blueprint / VR",
    fit: {
      en: "UE4, VR interaction, gameplay programming and simulation development",
      zh: "UE4、VR交互、Gameplay 编程和仿真开发",
    },
  },
];

const projects: Project[] = [
  {
    title: { en: "AI Document Q&A System", zh: "AI 文档问答系统" },
    track: "ai",
    role: { en: "Independent full-stack developer", zh: "独立全栈开发" },
    period: "2026.03 - 2026.05",
    summary: {
      en: "A React + FastAPI AI chat assistant that parses uploaded files, builds temporary retrieval indexes and answers questions through an LLM/RAG workflow.",
      zh: "基于 React + FastAPI 的 AI 聊天助手，支持上传文件解析、临时检索索引构建，并通过 LLM/RAG 流程回答问题。",
    },
    stack: ["React", "FastAPI", "LangGraph", "LangChain", "Kimi API", "Ollama", "RAG"],
    video: asset("media/AI-Chat-assistant.mp4"),
    demoState: {
      en: "Needs a 60-90s screen recording: upload a file, ask a question, show retrieval and answer generation.",
      zh: "建议补 60-90 秒录屏：上传文件、提问、展示检索过程和回答生成。",
    },
    hideDemoNote: true,
    highlights: [
      {
        en: "Supports PDF, CSV, Excel, TXT and Markdown upload parsing with chunking and temporary vector search.",
        zh: "支持 PDF、CSV、Excel、TXT、Markdown 上传解析，并进行切分和临时向量检索。",
      },
      {
        en: "FastAPI receives FormData uploads and exposes the /api/message endpoint for chat and RAG requests.",
        zh: "FastAPI 处理 FormData 文件上传，并通过 /api/message 接口承载聊天与 RAG 请求。",
      },
      {
        en: "Uses Ollama embeddings and LangChain InMemoryVectorStore for top-k retrieval.",
        zh: "使用 Ollama Embeddings 和 LangChain InMemoryVectorStore 完成 top-k 检索。",
      },
      {
        en: "LangGraph decides whether to call retrieval before generating the final answer through Kimi API.",
        zh: "通过 LangGraph 判断是否需要调用检索，再使用 Kimi API 生成最终回答。",
      },
    ],
    links: [
      { label: { en: "AI resume", zh: "AI 简历" }, href: asset("resumes/qicheng-chen-ai-fullstack.pdf"), kind: "Resume" },
      { label: { en: "AI chat demo", zh: "AI 聊天演示" }, href: asset("media/AI-Chat-assistant.mp4"), kind: "Video" },
    ],
  },
  {
    title: { en: "UE4 Port Logistics VR Simulation", zh: "UE4 港口物流 VR 交互仿真" },
    track: "vr",
    role: { en: "UE4 / VR gameplay developer", zh: "UE4 / VR Gameplay 开发" },
    period: "2021-2022",
    summary: {
      en: "A port logistics VR simulation extended from an existing UE4 base system with truck gameplay, task management and data-driven container transport flows.",
      zh: "在已有 UE4 港口 VR 基础系统上扩展卡车玩法、任务管理和数据驱动的集装箱运输流程。",
    },
    stack: ["Unreal Engine 4", "Blueprint", "VR", "Gameplay", "Flask", "MySQL"],
    image: asset("media/vr-port.png"),
    video: asset("media/truck-tracking.mp4"),
    videos: [
      { label: { en: "Truck Tracking", zh: "卡车跟踪" }, src: asset("media/truck-tracking.mp4") },
      { label: { en: "Port Overview", zh: "码头总览" }, src: asset("media/port-v8272.mp4") },
      { label: { en: "Class diagram", zh: "类图设计" }, src: asset("media/VR-port-class-diagram.png"), kind: "image" },
    ],
    imageAlt: { en: "UE4 port logistics VR simulation with cranes, containers and trucks", zh: "UE4 港口物流 VR 仿真截图" },
    demoState: {
      en: "Switch between Truck Tracking gameplay and the broader port overview demo video.",
      zh: "可在卡车跟踪玩法视频和码头总览视频之间切换播放。",
    },
    demoAssets: [
      { title: { en: "Truck movement", zh: "卡车移动" }, src: asset("media/truck.gif"), kind: "gif" },
      { title: { en: "Acceleration", zh: "加速逻辑" }, src: asset("media/Truck-acc.gif"), kind: "gif" },
      { title: { en: "Turning", zh: "转向逻辑" }, src: asset("media/truck-rot.gif"), kind: "gif" },
      { title: { en: "Skip waiting", zh: "跳过等待" }, src: asset("media/truck-skip-waiting.gif"), kind: "gif" },
    ],
    demoAssetDisplay: "grid",
    hideDemoNote: true,
    highlights: [
      {
        en: "Implemented truck driving logic including path following, acceleration, deceleration, turning and arrival detection.",
        zh: "实现卡车驾驶逻辑，包括路径跟随、加速/减速、转弯和到达检测。",
      },
      {
        en: "Added Mg_Auto task management to coordinate trucks, cranes and Terminal <-> Yard transport.",
        zh: "新增 Mg_Auto 任务管理逻辑，协调卡车、吊机和 Terminal <-> Yard 运输流程。",
      },
      {
        en: "Designed task prompts, timer, scoring, navigation path and skip/reset flow for player-controlled truck tasks.",
        zh: "设计任务提示、计时、评分、导航路径，以及玩家卡车任务的跳过/重置流程。",
      },
      {
        en: "Processed real port history data and mapped container positions into simulation task generation.",
        zh: "处理真实港口历史数据，将集装箱位置映射到仿真任务生成流程中。",
      },
    ],
    links: [
      { label: { en: "Game / VR resume", zh: "游戏 / VR 简历" }, href: asset("resumes/qicheng-chen-game-vr.pdf"), kind: "Resume" },
      { label: { en: "Truck Tracking", zh: "卡车跟踪" }, href: asset("media/truck-tracking.mp4"), kind: "Video" },
      { label: { en: "Port Overview", zh: "码头总览" }, href: asset("media/port-v8272.mp4"), kind: "Video" },
    ],
  },
  {
    title: { en: "Android Recipe Book Modernization", zh: "食谱管理 Android 应用重构" },
    track: "android",
    role: { en: "Independent Android developer", zh: "独立 Android 开发" },
    period: "2026.05",
    summary: {
      en: "A modernized Android recipe manager rebuilt from Java/XML/SQLite into Kotlin, Jetpack Compose, Room and MVVM while preserving recipe creation, media display and list/detail flows.",
      zh: "将旧版 Java/XML/SQLite 食谱应用重构为 Kotlin、Jetpack Compose、Room 与 MVVM 架构，保留食谱创建、媒体展示和列表/详情核心流程。",
    },
    stack: ["Kotlin", "Jetpack Compose", "Room", "MVVM", "StateFlow", "Material3", "VideoView"],

    video: asset("media/RecipeBook.mp4"),
    fixedMedia: true,
    imageAlt: { en: "Android Recipe Book app screenshot", zh: "Android 食谱管理应用截图" },
    demoState: {
      en: "Phone recording shows the rebuilt Compose UI, recipe list/detail flow, media display and deletion interaction.",
      zh: "手机录屏展示重构后的 Compose 界面、食谱列表/详情流程、媒体展示和删除交互。",
    },
    hideDemoNote: true,
    highlights: [
      {
        en: "Rebuilt the original Java + XML View + SQLite/ContentProvider implementation into Kotlin + Jetpack Compose + Room.",
        zh: "将原 Java + XML View + SQLite/ContentProvider 版本重构为 Kotlin + Jetpack Compose + Room 架构。",
      },
      {
        en: "Designed Recipe and Ingredient Room tables with foreign-key relationships and cascading deletion.",
        zh: "使用 Room 设计 Recipe / Ingredient 双表结构，通过外键关联食谱与食材并支持级联删除。",
      },
      {
        en: "Used DAO, Repository, ViewModel and StateFlow to manage local data, UI state and screen updates.",
        zh: "基于 DAO、Repository、ViewModel 和 StateFlow 管理本地数据、UI 状态与页面更新。",
      },
      {
        en: "Implemented dynamic ingredient forms, image/video URI selection, persisted URI permissions, Coil image loading and VideoView playback.",
        zh: "实现动态食材表单、图片/视频 URI 选择、持久化 URI 权限保存、Coil 图片加载和 VideoView 播放。",
      },
      {
        en: "Built LazyColumn recipe cards, card navigation and SwipeToDismiss deletion to improve the app workflow.",
        zh: "在列表页实现 LazyColumn 食谱卡片、点击跳转和 SwipeToDismiss 删除交互，提升操作体验。",
      },
    ],
    links: [
      { label: { en: "Android resume", zh: "Android 简历" }, href: asset("resumes/qicheng-chen-android.pdf"), kind: "Resume" },
      { label: { en: "RecipeBook demo", zh: "RecipeBook 演示" }, href: asset("media/RecipeBook.mp4"), kind: "Video" },
    ],
  },
  {
    title: { en: "Android Music Player", zh: "Android 音乐播放器" },
    track: "android",
    role: { en: "Independent Android developer", zh: "独立 Android 开发" },
    period: "2022",
    summary: {
      en: "A native Android MP3 player with foreground playback, Activity-Service messaging, notification entry and playback progress synchronization.",
      zh: "原生 Android MP3 播放器，支持前台服务播放、Activity-Service 通信、通知栏入口和播放进度同步。",
    },
    stack: ["Java", "Android SDK", "MediaPlayer", "Foreground Service", "Messenger"],
    image: asset("media/music-player.jpg"),
    imageAlt: { en: "Android Music Player app screenshot", zh: "Android 音乐播放器截图" },
    demoState: {
      en: "Add a phone recording: select local MP3, background the app, reopen from notification and seek progress.",
      zh: "建议补手机录屏：选择本地 MP3、切到后台、从通知栏返回、拖动进度条。",
    },
    highlights: [
      {
        en: "Foreground Service carries playback so music can continue after the Activity is backgrounded.",
        zh: "使用 Foreground Service 承载播放逻辑，使应用切后台后音乐仍可继续播放。",
      },
      {
        en: "Messenger handles play, pause, stop, duration sync, progress updates and current-song messages.",
        zh: "通过 Messenger 处理播放、暂停、停止、时长同步、进度更新和当前歌曲消息。",
      },
      {
        en: "Supports ACTION_VIEW implicit intents and Android 13 READ_MEDIA_AUDIO / notification permissions.",
        zh: "支持 ACTION_VIEW 隐式 Intent，并适配 Android 13 READ_MEDIA_AUDIO 和通知权限。",
      },
      {
        en: "Includes a settings screen with color picker and result callback to update the main UI.",
        zh: "实现设置页和颜色选择器，通过回调更新播放器主界面。",
      },
    ],
    links: [
      { label: { en: "Android resume", zh: "Android 简历" }, href: asset("resumes/qicheng-chen-android.pdf"), kind: "Resume" },
      { label: { en: "Demo slot", zh: "Demo 占位" }, href: "#demo-framework", kind: "Demo" },
    ],
  },
  {
    title: { en: "Wearable Stress Recognition Study", zh: "可穿戴生理信号压力识别研究" },
    track: ["ai", "android"],
    role: { en: "First author / mobile data collection developer", zh: "第一作者 / 移动端数据采集开发" },
    period: "2022.06 - 2023.05",
    summary: {
      en: "A first-author Sensors paper using wearable PPG, ECG and EEG signals collected from university students for stress recognition.",
      zh: "第一作者 Sensors 论文，基于大学生实验采集的 PPG、ECG、EEG 生理信号进行压力识别。",
    },
    stack: ["Python", "PyTorch", "Android/Kotlin", "Polar BLE SDK", "PPG", "ECG", "EEG"],
    image: asset("media/stress-paper.png"),
    imageAlt: { en: "Sensors paper page for the wearable stress recognition study", zh: "压力检测论文 Sensors 页面截图" },
    mediaFit: "contain",
    mediaAssets: [
      { title: { en: "Sensors paper", zh: "Sensors 论文" }, src: asset("media/stress-paper.png"), kind: "image" },
      { title: { en: "Polar BLE collection", zh: "Polar BLE 采集" }, src: asset("media/polar-ble.png"), kind: "image" },
    ],
    demoState: {
      en: "For the portfolio, show Polar BLE data collection plus one chart of filtered PPG/ECG/EEG signals.",
      zh: "主页上适合展示 Polar BLE 采集截图，以及一张滤波后的 PPG/ECG/EEG 信号图。",
    },
    hideDemoNote: true,
    highlights: [
      {
        en: "Modified Polar BLE Android/Kotlin callbacks to record timestamped PPG data from Polar Verity Sense.",
        zh: "修改 Polar BLE Android/Kotlin 回调，记录 Polar Verity Sense 的时间戳 PPG 数据。",
      },
      { en: "Collected data from 30 participants and organized self-reported stress labels.", zh: "采集 30 名参与者数据，并整理自报告压力标签。" },
      {
        en: "Built preprocessing with resampling, Butterworth filtering, segmentation and normalization.",
        zh: "完成重采样、Butterworth 滤波、分段和归一化等预处理流程。",
      },
      {
        en: "Compared CNN, Attention-LRCN, Self-Supervised CNN and StressNeXt models.",
        zh: "比较 CNN、Attention-LRCN、自监督 CNN 和 StressNeXt 等模型。",
      },
      {
        en: "Reached 93.42% accuracy / 88.11% F1 with ECG LRCN and 98.78% accuracy / 95.39% F1 with StressNeXt.",
        zh: "ECG LRCN 达到 93.42% Accuracy / 88.11% F1，StressNeXt 达到 98.78% Accuracy / 95.39% F1。",
      },
    ],
    links: [
      { label: { en: "Paper", zh: "论文" }, href: "https://doi.org/10.3390/s23136099", kind: "Paper" },
      { label: { en: "Android resume", zh: "Android 简历" }, href: asset("resumes/qicheng-chen-android.pdf"), kind: "Resume" },
    ],
  },
  {
    title: { en: "Amazon-M2 Multilingual Recommendation", zh: "Amazon-M2 多语言推荐研究" },
    track: "ai",
    role: { en: "Independent researcher", zh: "独立研究者" },
    period: "2024.09 - 2024.12",
    summary: {
      en: "A first-author HCII 2025 Springer LNCS paper on next-item recommendation with LLMs, embeddings and session-based product data.",
      zh: "第一作者 HCII 2025 Springer LNCS 论文，研究基于 LLM、Embedding 和会话数据的下一商品推荐。",
    },
    stack: ["Python", "OpenAI API", "Gemini API", "Embedding", "scikit-learn", "PyTorch"],
    image: asset("media/amazon-m2-paper.png"),
    imageAlt: { en: "Springer Nature Link page for the Amazon-M2 paper", zh: "Amazon-M2 论文 Springer Nature Link 页面截图" },
    mediaFit: "contain",
    demoState: {
      en: "Add one result table image and a compact pipeline diagram from session data to top-k recommendation.",
      zh: "建议补一张结果表图，以及从会话数据到 top-k 推荐的简洁流程图。",
    },
    hideDemoNote: true,
    highlights: [
      {
        en: "Converted session-based recommendation into next-item embedding prediction and top-k item recall.",
        zh: "将会话推荐问题转化为下一商品 embedding 预测和 top-k 商品召回。",
      },
      {
        en: "Used Pandas batch preprocessing and compared Lasso, SVR, CNN, Transformer, GPT-4o-mini and Gemini approaches.",
        zh: "使用 Pandas 进行批量预处理，并比较 Lasso、SVR、CNN、Transformer、GPT-4o-mini 和 Gemini 等方法。",
      },
      {
        en: "Reached MRR@100 0.6787 and Recall@100 0.9478 in experiments.",
        zh: "实验达到 MRR@100 0.6787 和 Recall@100 0.9478。",
      },
      { en: "Published as first-author work in HCII 2025 Springer LNCS.", zh: "作为第一作者论文发表于 HCII 2025 Springer LNCS。" },
    ],
    links: [
      { label: { en: "Paper", zh: "论文" }, href: "https://doi.org/10.1007/978-3-031-93828-3_13", kind: "Paper" },
      { label: { en: "AI resume", zh: "AI 简历" }, href: asset("resumes/qicheng-chen-ai-fullstack.pdf"), kind: "Resume" },
    ],
  },
  {
    title: { en: "GraphXR Data Source Integration", zh: "GraphXR 外部数据源集成 Demo" },
    track: "ai",
    role: { en: "Data visualization development intern", zh: "数据可视化开发实习生" },
    period: "2021.06 - 2022.10",
    summary: {
      en: "Interactive Grove notebook demos that import Snowflake and Nebula Graph data into GraphXR for graph exploration and visual analysis.",
      zh: "基于 Grove notebook 的交互式 Demo，将 Snowflake 和 Nebula Graph 数据导入 GraphXR 进行图探索与可视化分析。",
    },
    stack: ["JavaScript", "GraphXR API", "Snowflake", "Nebula Graph", "HTML", "CSS"],
    image: asset("media/graphxr-nebulagraph.jpg"),
    video: asset("media/GraphXR和NebulaGraph.mp4"),
    imageAlt: { en: "Graph-style data visualization screenshot", zh: "图数据可视化截图" },
    demoState: {
      en: "Add a screenshot or GIF of the Grove notebook importing data into the GraphXR canvas.",
      zh: "建议补 Grove notebook 将数据导入 GraphXR 画布的截图或 GIF。",
    },
    hideDemoNote: true,
    highlights: [
      {
        en: "Built Grove notebook demos and Observable-style input panels for connection parameters, graph spaces and custom queries.",
        zh: "开发 Grove notebook demo 和 Observable 风格输入面板，支持连接参数、graph space 和自定义查询配置。",
      },
      {
        en: "Called Nebula Graph / Snowflake APIs through fetch and parsed vertices, edges and attributes into GraphXR structures.",
        zh: "通过 fetch 调用 Nebula Graph / Snowflake API，并将点、边和属性解析为 GraphXR 可用结构。",
      },
      { en: "Created graph nodes and edges on the visual canvas through GraphXR APIs.", zh: "通过 GraphXR API 在可视化画布中创建节点和边。" },
      {
        en: "Also supported the temporary company website with HTML/CSS/JavaScript and Ghost.",
        zh: "同时参与临时公司官网的 HTML/CSS/JavaScript 和 Ghost 内容支持。",
      },
    ],
    links: [
      { label: { en: "GraphXR demo", zh: "GraphXR 演示" }, href: asset("media/GraphXR和NebulaGraph.mp4"), kind: "Video" },
      { label: { en: "AI resume", zh: "AI 简历" }, href: asset("resumes/qicheng-chen-ai-fullstack.pdf"), kind: "Resume" },
    ],
  },
  {
    title: { en: "Smart Campus Chatbot Mini Program Backend", zh: "智能校园助手微信小程序后端" },
    track: "android",
    role: { en: "Backend developer in a 6-person team", zh: "6 人团队后端开发成员" },
    period: "2020.10 - 2021.05",
    summary: {
      en: "A WeChat mini program backend for campus information chat, user settings, chat history and bot-generated responses.",
      zh: "面向校园信息查询的微信小程序后端，支持聊天、用户设置、历史记录和机器人回复生成。",
    },
    stack: ["Python", "Django", "SQLite", "REST API", "ChatterBot", "WeChat Mini Program"],
    image: asset("media/smart-campus/chat-text-message.png"),
    imageAlt: { en: "Smart Campus chatbot chat interface screenshot", zh: "智能校园助手聊天界面截图" },
    mediaFit: "contain",
    mediaAssets: [
      { title: { en: "Project poster", zh: "项目海报" }, src: asset("media/smart-campus/poster-open-day.png"), kind: "image" },
      { title: { en: "Chat home", zh: "聊天首页" }, src: asset("media/smart-campus/chat-home.png"), kind: "image" },
      { title: { en: "Text chat", zh: "文本聊天" }, src: asset("media/smart-campus/chat-text-message.png"), kind: "image" },
      { title: { en: "Voice chat", zh: "语音聊天" }, src: asset("media/smart-campus/chat-voice-message.png"), kind: "image" },
      { title: { en: "Settings page", zh: "设置页面" }, src: asset("media/smart-campus/settings-page.png"), kind: "image" },
      { title: { en: "Font color picker", zh: "字体颜色选择" }, src: asset("media/smart-campus/font-color-picker.png"), kind: "image" },
      { title: { en: "Green theme", zh: "绿色主题" }, src: asset("media/smart-campus/green-theme-chat.png"), kind: "image" },
      { title: { en: "Use case diagram", zh: "用例图" }, src: asset("media/smart-campus/use-case-diagram.png"), kind: "image" },
      { title: { en: "Activity diagram", zh: "活动图" }, src: asset("media/smart-campus/activity-diagram.png"), kind: "image" },
      { title: { en: "Sequence diagram", zh: "时序图" }, src: asset("media/smart-campus/sequence-diagram.png"), kind: "image" },
      { title: { en: "Class diagram", zh: "类图" }, src: asset("media/smart-campus/class-diagram.png"), kind: "image" },
    ],
    demoState: {
      en: "Screenshots and design diagrams show the chat flow, settings customization and backend response design.",
      zh: "截图和设计图展示聊天流程、设置项定制，以及后端回复生成设计。",
    },
    hideDemoNote: true,
    highlights: [
      {
        en: "Implemented chat-message saving, full history fetch, date search and clear-history endpoints.",
        zh: "实现消息保存、完整历史查询、按日期搜索和清空历史记录接口。",
      },
      {
        en: "Designed User and Chat models and serialized messages back to the mini program frontend.",
        zh: "设计 User 和 Chat 数据模型，并将消息序列化返回给小程序前端。",
      },
      {
        en: "Integrated ChatterBot response generation and stored bot replies with user messages.",
        zh: "接入 ChatterBot 生成回复，并将机器人回复与用户消息一起持久化。",
      },
    ],
    links: [{ label: { en: "Android resume", zh: "Android 简历" }, href: asset("resumes/qicheng-chen-android.pdf"), kind: "Resume" }],
  },
];

const heroImages: { src: string; alt: Localized }[] = [
  {
    src: asset("media/ai-chat-assistant.jpg"),
    alt: { en: "AI document Q&A assistant demo screenshot", zh: "AI 文档问答助手演示截图" },
  },
  {
    src: asset("media/vr-port.png"),
    alt: { en: "UE4 VR port simulation screenshot", zh: "UE4 VR 港口仿真截图" },
  },
  {
    src: asset("media/recipe-book.png"),
    alt: { en: "Android RecipeBook app screenshot", zh: "Android RecipeBook 应用截图" },
  },
  {
    src: asset("media/music-player.jpg"),
    alt: { en: "Android Music Player app screenshot", zh: "Android 音乐播放器应用截图" },
  },
  {
    src: asset("media/stress-paper.png"),
    alt: { en: "Wearable stress recognition paper screenshot", zh: "可穿戴压力识别论文截图" },
  },
  {
    src: asset("media/amazon-m2-paper.png"),
    alt: { en: "Amazon-M2 recommendation paper screenshot", zh: "Amazon-M2 推荐论文截图" },
  },
  {
    src: asset("media/graphxr-nebulagraph.jpg"),
    alt: { en: "GraphXR Nebula Graph demo screenshot", zh: "GraphXR Nebula Graph 演示截图" },
  },
  {
    src: asset("media/smart-campus/chat-text-message.png"),
    alt: { en: "Smart Campus chatbot screenshot", zh: "智能校园助手聊天界面截图" },
  },
];


export default function Home() {
  const [activeTrack, setActiveTrack] = useState<TrackId>("all");
  const [language, setLanguage] = useState<Language>("zh");
  const [activeVideos, setActiveVideos] = useState<Record<string, string>>({});
  const [activeDemoAssets, setActiveDemoAssets] = useState<Record<string, number>>({});
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const text = ui[language];
  const currentTrack = tracks.find((track) => track.id === activeTrack) ?? tracks[0];
  const heroImage = heroImages[activeHeroImage];

  const visibleProjects = useMemo(() => {
    if (activeTrack === "all") return projects;
    return projects.filter((project) => projectTracks(project).includes(activeTrack));
  }, [activeTrack]);

  return (
    <main className="site-shell">
      <nav className="top-nav">
        <a href="#top" className="brand-link">
          Qicheng Chen
        </a>
        <div className="nav-actions">
          <div className="nav-links" aria-label="Primary navigation">
            <a href="#projects">{text.nav[0]}</a>
            <a href="#resumes">{text.nav[1]}</a>
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

      <section id="top" className="hero-section">
        <div className="hero-copy">
          
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>{text.heroTitle}</h1>
          <p className="hero-lede">{text.heroLead}</p>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">
              {text.viewProjects}
            </a>
            {resumes.map((resume) => (
              <a className="secondary-action" href={resume.href} key={resume.href} target="_blank" rel="noreferrer">
                {resume.title[language]}
              </a>
            ))}
          </div>
        </div>
        <figure className="hero-media">
          <img src={heroImage.src} alt={heroImage.alt[language]} />
          <button
            className="hero-image-arrow previous"
            onClick={() => setActiveHeroImage((current) => (current - 1 + heroImages.length) % heroImages.length)}
            type="button"
            aria-label={language === "en" ? "Previous project image" : "上一张项目图片"}
          >
            ‹
          </button>
          <button
            className="hero-image-arrow next"
            onClick={() => setActiveHeroImage((current) => (current + 1) % heroImages.length)}
            type="button"
            aria-label={language === "en" ? "Next project image" : "下一张项目图片"}
          >
            ›
          </button>
        </figure>
      </section>

      <section className="track-section" aria-label="Role filters">
        {tracks.map((track) => (
          <button
            type="button"
            key={track.id}
            className={activeTrack === track.id ? "track-card active" : "track-card"}
            onClick={() => setActiveTrack(track.id)}
          >
            <strong>{track.headline[language]}</strong>
            <p>{track.description[language]}</p>
          </button>
        ))}
      </section>

      <section id="projects" className="content-section">
        <div className="section-heading">
          <p>{currentTrack.label[language]}</p>
          
        </div>

        <div className="project-list">
          {visibleProjects.map((project) => {
            const projectKey = project.title.en;
            const mediaOptions =
              project.videos ??
              (project.video
                ? [{ label: { en: "Demo Video", zh: "Demo 视频" }, src: project.video }]
                : project.mediaAssets?.map((assetItem) => ({
                    label: assetItem.title,
                    src: assetItem.src,
                    kind: "image" as const,
                  })) ?? []);
            const activeMediaSrc = activeVideos[projectKey] ?? mediaOptions[0]?.src;
            const activeMediaIndex = Math.max(
              0,
              mediaOptions.findIndex((media) => media.src === activeMediaSrc),
            );
            const activeMedia = mediaOptions[activeMediaIndex];
            const previousMedia = mediaOptions[(activeMediaIndex - 1 + mediaOptions.length) % mediaOptions.length];
            const nextMedia = mediaOptions[(activeMediaIndex + 1) % mediaOptions.length];
            const demoAssetIndex = activeDemoAssets[projectKey] ?? 0;
            const activeDemoAsset = project.demoAssets?.[demoAssetIndex];

            return (
              <article className="project-card" key={projectKey}>
                <div className={project.mediaAssets || project.fixedMedia ? "project-media fixed-media" : "project-media"}>
                  {activeMediaSrc ? (
                    <div className="media-carousel">
                      <div className="media-frame">
                      {activeMedia?.kind === "image" ? (
                        <img className="fit-contain-media" src={activeMediaSrc} alt={activeMedia.label[language]} />
                      ) : (
                        <video
                          key={activeMediaSrc}
                          controls
                          controlsList="nodownload"
                          disablePictureInPicture
                          onContextMenu={(event) => event.preventDefault()}
                          preload="metadata"
                          poster={project.image}
                          aria-label={`${project.title[language]} demo video`}
                        >
                          <source src={activeMediaSrc} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                      </div>
                      {mediaOptions.length > 1 ? (
                        <>
                          <button
                            className="video-arrow previous"
                            onClick={() =>
                              setActiveVideos((current) => ({
                                ...current,
                                [projectKey]: previousMedia.src,
                              }))
                            }
                            type="button"
                            aria-label={`${language === "en" ? "Show previous media" : "显示上一个素材"}: ${previousMedia.label[language]}`}
                          >
                            ‹
                          </button>
                          <button
                            className="video-arrow next"
                            onClick={() =>
                              setActiveVideos((current) => ({
                                ...current,
                                [projectKey]: nextMedia.src,
                              }))
                            }
                            type="button"
                            aria-label={`${language === "en" ? "Show next media" : "显示下一个素材"}: ${nextMedia.label[language]}`}
                          >
                            ›
                          </button>
                          <div className="media-status" aria-live="polite">
                            <span>{mediaOptions[activeMediaIndex]?.label[language]}</span>
                            <strong>
                              {activeMediaIndex + 1} / {mediaOptions.length}
                            </strong>
                          </div>
                        </>
                      ) : null}
                    </div>
                  ) : project.image ? (
                    <img
                      className={project.mediaFit === "contain" ? "contain-media" : undefined}
                      src={project.image}
                      alt={project.imageAlt?.[language] ?? `${project.title[language]} preview`}
                    />
                  ) : (
                    <div className="project-placeholder">
                      <span>{projectTracks(project).join(" / ").toUpperCase()}</span>
                      <strong>{project.title[language]}</strong>
                      <p>{project.demoState[language]}</p>
                    </div>
                  )}
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span>{project.role[language]}</span>
                    <span>{project.period}</span>
                  </div>
                  <h3>{project.title[language]}</h3>
                  <p>{project.summary[language]}</p>
                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight.en}>{highlight[language]}</li>
                    ))}
                  </ul>
                  <div className="stack-row">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  {project.hideDemoNote ? null : (
                    <div className="demo-note">
                      <strong>{text.demoMaterial}</strong> {project.demoState[language]}
                    </div>
                  )}
                  {project.demoAssets && project.demoAssetDisplay === "grid" ? (
                    <div className="demo-gallery" aria-label={`${project.title[language]} demo assets`}>
                      {project.demoAssets.map((item) => (
                        <a
                          className={item.wide ? "wide" : undefined}
                          href={item.src}
                          key={item.src}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={item.src} alt={item.title[language]} loading="lazy" />
                          <span>{item.title[language]}</span>
                        </a>
                      ))}
                    </div>
                  ) : null}
                  {project.demoAssets && project.demoAssetDisplay !== "grid" ? (
                    <div className="demo-carousel" aria-label={`${project.title[language]} demo assets`}>
                      <a href={activeDemoAsset?.src} target="_blank" rel="noreferrer">
                        <img src={activeDemoAsset?.src} alt={activeDemoAsset?.title[language]} loading="lazy" />
                      </a>
                      {project.demoAssets.length > 1 ? (
                        <>
                          <button
                            className="demo-carousel-arrow previous"
                            onClick={() =>
                              setActiveDemoAssets((current) => ({
                                ...current,
                                [projectKey]: (demoAssetIndex - 1 + project.demoAssets!.length) % project.demoAssets!.length,
                              }))
                            }
                            type="button"
                            aria-label={language === "en" ? "Previous image" : "上一张图片"}
                          >
                            ‹
                          </button>
                          <button
                            className="demo-carousel-arrow next"
                            onClick={() =>
                              setActiveDemoAssets((current) => ({
                                ...current,
                                [projectKey]: (demoAssetIndex + 1) % project.demoAssets!.length,
                              }))
                            }
                            type="button"
                            aria-label={language === "en" ? "Next image" : "下一张图片"}
                          >
                            ›
                          </button>
                        </>
                      ) : null}
                      <div className="demo-carousel-caption">
                        <span>{activeDemoAsset?.title[language]}</span>
                        <strong>
                          {demoAssetIndex + 1} / {project.demoAssets.length}
                        </strong>
                      </div>
                    </div>
                  ) : null}
                  <div className="link-row">
                    {project.links.map((link) => (
                      <a
                        href={link.href}
                        key={`${projectKey}-${link.label.en}`}
                        target={link.href.startsWith("#") ? undefined : "_blank"}
                        rel={link.href.startsWith("#") ? undefined : "noreferrer"}
                      >
                        {link.label[language]}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="resumes" className="content-section">
        <div className="section-heading">
          <h2>{text.resumeSectionTitle}</h2>
        </div>
        <div className="resume-grid">
          {resumes.map((resume) => (
            <a href={resume.href} className="resume-card" key={resume.href} target="_blank" rel="noreferrer">
              <span>{resume.tag}</span>
              <strong>{resume.title[language]}</strong>
              <p>{resume.fit[language]}</p>
            </a>
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
