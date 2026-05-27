import { useMemo, useState } from "react";

type TrackId = "all" | "ai" | "android" | "vr";

type ProjectLink = {
  label: string;
  href: string;
  kind: "Demo" | "Code" | "Paper" | "Resume" | "Video";
};

type Project = {
  title: string;
  track: Exclude<TrackId, "all">;
  role: string;
  period: string;
  summary: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  demoState: string;
  highlights: string[];
  links: ProjectLink[];
};

const base = import.meta.env.BASE_URL;
const asset = (path: string) => `${base}${path.replace(/^\//, "")}`;

const tracks: { id: TrackId; label: string; headline: string; description: string }[] = [
  {
    id: "all",
    label: "All Work",
    headline: "One portfolio, three role stories.",
    description:
      "A single GitHub Pages site works better than three separate sites: recruiters get one URL, while filters and PDF resumes change the story for each role.",
  },
  {
    id: "ai",
    label: "AI Full-stack",
    headline: "AI applications, RAG systems and published ML research.",
    description:
      "React/FastAPI projects, LLM workflows, recommendation experiments and first-author research papers.",
  },
  {
    id: "android",
    label: "Android",
    headline: "Native Android apps, media playback and BLE data collection.",
    description:
      "Java/Kotlin Android work covering Activity, Service, ContentProvider, RecyclerView, MediaPlayer, permissions and sensor data capture.",
  },
  {
    id: "vr",
    label: "Game / VR",
    headline: "UE4 VR interaction and data-driven simulation systems.",
    description:
      "Gameplay logic, VR interaction modes, truck task systems, Blueprint refactoring and real-world data driven simulation.",
  },
];

const resumes = [
  {
    title: "AI Full-stack Resume",
    href: asset("resumes/qicheng-chen-ai-fullstack.pdf"),
    tag: "React / FastAPI / LLM",
    fit: "For AI application development, Python backend, RAG and data/ML-adjacent full-stack roles.",
  },
  {
    title: "Android Resume",
    href: asset("resumes/qicheng-chen-android.pdf"),
    tag: "Java / Kotlin / Android SDK",
    fit: "For Android, client-side development, mobile app and sensor data collection roles.",
  },
  {
    title: "Game / VR Resume",
    href: asset("resumes/qicheng-chen-game-vr.pdf"),
    tag: "UE4 / Blueprint / VR",
    fit: "For UE4, VR interaction, gameplay programming and simulation development roles.",
  },
];

const projects: Project[] = [
  {
    title: "AI Document Q&A System",
    track: "ai",
    role: "Independent full-stack developer",
    period: "2026",
    summary:
      "A React + FastAPI AI application that parses uploaded files, builds temporary retrieval indexes and answers questions through an LLM/RAG workflow.",
    stack: ["React", "FastAPI", "LangGraph", "LangChain", "Kimi API", "Ollama", "RAG"],
    demoState: "Needs a 60-90s screen recording: upload a file, ask a question, show retrieval and answer generation.",
    highlights: [
      "Supports PDF, CSV, Excel, TXT and Markdown parsing with chunking and temporary vector search.",
      "Uses Ollama embeddings and LangChain InMemoryVectorStore for top-k retrieval.",
      "LangGraph decides whether to call retrieval before generating the final answer through Kimi API.",
      "FastAPI provides API routes and serves the React build for a local one-command demo.",
    ],
    links: [
      { label: "AI resume", href: asset("resumes/qicheng-chen-ai-fullstack.pdf"), kind: "Resume" },
      { label: "Demo slot", href: "#demo-framework", kind: "Demo" },
    ],
  },
  {
    title: "UE4 Port Logistics VR Simulation",
    track: "vr",
    role: "UE4 / VR gameplay developer",
    period: "2021-2022",
    summary:
      "A port logistics VR simulation extended from an existing UE4 base system with truck gameplay, task management and data-driven container transport flows.",
    stack: ["Unreal Engine 4", "Blueprint", "VR", "Gameplay", "Flask", "MySQL"],
    image: asset("media/vr-port.png"),
    imageAlt: "UE4 port logistics VR simulation with cranes, containers and trucks",
    demoState: "Best first video to add: 30-60s gameplay cut showing truck task, crane coordination, VR interaction and score feedback.",
    highlights: [
      "Implemented truck driving logic including path following, acceleration, deceleration, turning and arrival detection.",
      "Added Mg_Auto task management to coordinate trucks, cranes and Terminal <-> Yard transport.",
      "Designed task prompts, timer, scoring, navigation path and skip/reset flow for player-controlled truck tasks.",
      "Processed real port history data and mapped container positions into simulation task generation.",
    ],
    links: [
      { label: "Game / VR resume", href: asset("resumes/qicheng-chen-game-vr.pdf"), kind: "Resume" },
      { label: "Video slot", href: "#demo-framework", kind: "Video" },
    ],
  },
  {
    title: "Android Recipe Book",
    track: "android",
    role: "Independent Android developer",
    period: "2022",
    summary:
      "A native Android recipe manager with local persistence, multi-Activity flows, dynamic recipe forms, image selection and cooking video playback.",
    stack: ["Java", "Android SDK", "SQLite", "ContentProvider", "RecyclerView", "VideoView"],
    image: asset("media/recipe-book.jpg"),
    imageAlt: "Android Recipe Book app screenshot",
    demoState: "Add a short phone recording: create recipe, choose image/video, rate recipe and delete from the list.",
    highlights: [
      "SQLite + ContentProvider storage layer accessed through ContentResolver for CRUD operations.",
      "RecyclerView + Adapter renders recipe cards with rating, image preview, deletion and detail navigation.",
      "Dynamic ingredient form collects variable-length fields and stores structured recipe content.",
      "Handles image/video URI selection and Android 13 media read permissions.",
    ],
    links: [
      { label: "Android resume", href: asset("resumes/qicheng-chen-android.pdf"), kind: "Resume" },
      { label: "Demo slot", href: "#demo-framework", kind: "Demo" },
    ],
  },
  {
    title: "Android Music Player",
    track: "android",
    role: "Independent Android developer",
    period: "2022",
    summary:
      "A native Android MP3 player with foreground playback, Activity-Service messaging, notification entry and playback progress synchronization.",
    stack: ["Java", "Android SDK", "MediaPlayer", "Foreground Service", "Messenger"],
    image: asset("media/music-player.jpg"),
    imageAlt: "Android Music Player app screenshot",
    demoState: "Add a phone recording: select local MP3, background the app, reopen from notification and seek progress.",
    highlights: [
      "Foreground Service carries playback so music can continue after the Activity is backgrounded.",
      "Messenger handles play, pause, stop, duration sync, progress updates and current-song messages.",
      "Supports ACTION_VIEW implicit intents and Android 13 READ_MEDIA_AUDIO / notification permissions.",
      "Includes a settings screen with color picker and result callback to update the main UI.",
    ],
    links: [
      { label: "Android resume", href: asset("resumes/qicheng-chen-android.pdf"), kind: "Resume" },
      { label: "Demo slot", href: "#demo-framework", kind: "Demo" },
    ],
  },
  {
    title: "Wearable Stress Recognition Study",
    track: "android",
    role: "First author / mobile data collection developer",
    period: "2022-2023",
    summary:
      "A first-author Sensors paper using wearable PPG, ECG and EEG signals collected from university students for stress recognition.",
    stack: ["Kotlin", "Polar BLE SDK", "Python", "PyTorch", "PPG", "ECG", "EEG"],
    image: asset("media/polar-ble.png"),
    imageAlt: "Polar BLE data collection screenshot",
    demoState: "For the portfolio, show Polar BLE data collection plus one chart of filtered PPG/ECG/EEG signals.",
    highlights: [
      "Modified Polar BLE Android/Kotlin callbacks to record timestamped PPG data from Polar Verity Sense.",
      "Collected data from 30 participants and organized self-reported stress labels.",
      "Built preprocessing with resampling, Butterworth filtering, segmentation and normalization.",
      "Compared CNN, Attention-LRCN, Self-Supervised CNN and StressNeXt models.",
    ],
    links: [
      { label: "Paper", href: "https://doi.org/10.3390/s23136099", kind: "Paper" },
      { label: "Android resume", href: asset("resumes/qicheng-chen-android.pdf"), kind: "Resume" },
    ],
  },
  {
    title: "Amazon-M2 Multilingual Recommendation",
    track: "ai",
    role: "Independent researcher",
    period: "2024-2025",
    summary:
      "A first-author HCII 2025 Springer LNCS paper on next-item recommendation with LLMs, embeddings and session-based product data.",
    stack: ["Python", "OpenAI API", "Gemini API", "Embeddings", "scikit-learn", "PyTorch"],
    demoState: "Add one result table image and a compact pipeline diagram from session data to top-k recommendation.",
    highlights: [
      "Converted session-based recommendation into next-item embedding prediction and top-k item recall.",
      "Compared Lasso, SVR, CNN, Transformer, GPT-4o-mini and Gemini approaches.",
      "Reached MRR@100 0.6787 and Recall@100 0.9478 in experiments.",
      "Published as first-author work in HCII 2025 Springer LNCS.",
    ],
    links: [
      { label: "Paper", href: "https://doi.org/10.1007/978-3-031-93828-3_13", kind: "Paper" },
      { label: "AI resume", href: asset("resumes/qicheng-chen-ai-fullstack.pdf"), kind: "Resume" },
    ],
  },
  {
    title: "GraphXR Data Source Integration",
    track: "ai",
    role: "Data visualization development intern",
    period: "2021-2022",
    summary:
      "Interactive Grove notebook demos that import Snowflake and Nebula Graph data into GraphXR for graph exploration and visual analysis.",
    stack: ["JavaScript", "GraphXR API", "Snowflake", "Nebula Graph", "HTML", "CSS"],
    image: asset("media/vr-task-system.png"),
    imageAlt: "Graph-style data visualization screenshot",
    demoState: "Add a screenshot or GIF of the Grove notebook importing data into the GraphXR canvas.",
    highlights: [
      "Built input panels for connection parameters, graph spaces, categories and custom queries.",
      "Parsed vertices, edges and attributes into GraphXR-compatible node and relationship structures.",
      "Created graph nodes and edges on the visual canvas through GraphXR APIs.",
      "Also supported the temporary company website with HTML/CSS/JavaScript and Ghost.",
    ],
    links: [
      { label: "AI resume", href: asset("resumes/qicheng-chen-ai-fullstack.pdf"), kind: "Resume" },
    ],
  },
  {
    title: "Smart Campus Chatbot Mini Program Backend",
    track: "android",
    role: "Backend developer in a 6-person team",
    period: "2020-2021",
    summary:
      "A WeChat mini program backend for campus information chat, user settings, chat history and bot-generated responses.",
    stack: ["Python", "Django", "SQLite", "REST API", "ChatterBot", "WeChat Mini Program"],
    demoState: "If kept on the site, add one screenshot of the chat page and one API diagram for the backend.",
    highlights: [
      "Implemented chat-message saving, full history fetch, date search and clear-history endpoints.",
      "Designed User and Chat models and serialized messages back to the mini program frontend.",
      "Integrated ChatterBot response generation and stored bot replies with user messages.",
    ],
    links: [
      { label: "Android resume", href: asset("resumes/qicheng-chen-android.pdf"), kind: "Resume" },
    ],
  },
];

const proofItems = [
  {
    title: "Video",
    text: "Short clips should prove the project in under one minute: run the app, show the key workflow, then show the result.",
  },
  {
    title: "Screenshot",
    text: "Use screenshots for UI states, model outputs, GraphXR canvas views, UE4 tasks and Android screens.",
  },
  {
    title: "Write-up",
    text: "Each project can have a short page later: problem, role, architecture, hard part, result and what you would improve.",
  },
  {
    title: "Link",
    text: "Prefer stable links: PDF resumes, published papers, GitHub repositories, hosted demos and unlisted video URLs.",
  },
];

export default function Home() {
  const [activeTrack, setActiveTrack] = useState<TrackId>("all");
  const currentTrack = tracks.find((track) => track.id === activeTrack) ?? tracks[0];

  const visibleProjects = useMemo(() => {
    if (activeTrack === "all") return projects;
    return projects.filter((project) => project.track === activeTrack);
  }, [activeTrack]);

  return (
    <main className="site-shell">
      <nav className="top-nav">
        <a href="#top" className="brand-link">
          Qicheng Chen
        </a>
        <div className="nav-links" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#resumes">Resumes</a>
          <a href="#demo-framework">Demo Framework</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio / Demo Hub</p>
          <h1>AI applications, Android apps and VR simulation systems.</h1>
          <p className="hero-lede">
            Computer Science graduate with React/FastAPI AI projects, native Android work,
            first-author research papers and UE4 VR interaction experience.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#projects">
              View Projects
            </a>
            <a className="secondary-action" href={asset("resumes/qicheng-chen-ai-fullstack.pdf")} target="_blank" rel="noreferrer">
              AI Resume
            </a>
            <a className="secondary-action" href={asset("resumes/qicheng-chen-android.pdf")} target="_blank" rel="noreferrer">
              Android Resume
            </a>
            <a className="secondary-action" href={asset("resumes/qicheng-chen-game-vr.pdf")} target="_blank" rel="noreferrer">
              Game / VR Resume
            </a>
          </div>
        </div>
        <figure className="hero-media">
          <img src={asset("media/vr-port.png")} alt="UE4 VR port simulation screenshot" />
          <figcaption>
            <span>Featured Proof</span>
            <strong>UE4 VR simulation demo material is ready to become the first video showcase.</strong>
          </figcaption>
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
            <span>{track.label}</span>
            <strong>{track.headline}</strong>
            <p>{track.description}</p>
          </button>
        ))}
      </section>

      <section id="projects" className="content-section">
        <div className="section-heading">
          <p>{currentTrack.label}</p>
          <h2>Featured Projects</h2>
          <span>{currentTrack.description}</span>
        </div>

        <div className="project-list">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-media">
                {project.image ? (
                  <img src={project.image} alt={project.imageAlt ?? `${project.title} preview`} />
                ) : (
                  <div className="project-placeholder">
                    <span>{project.track.toUpperCase()}</span>
                    <strong>{project.title}</strong>
                    <p>{project.demoState}</p>
                  </div>
                )}
              </div>
              <div className="project-body">
                <div className="project-meta">
                  <span>{project.role}</span>
                  <span>{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="stack-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="demo-note">
                  <strong>Demo material:</strong> {project.demoState}
                </div>
                <div className="link-row">
                  {project.links.map((link) => (
                    <a
                      href={link.href}
                      key={`${project.title}-${link.label}`}
                      target={link.href.startsWith("#") ? undefined : "_blank"}
                      rel={link.href.startsWith("#") ? undefined : "noreferrer"}
                    >
                      <span>{link.kind}</span>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="resumes" className="content-section">
        <div className="section-heading">
          <p>Role-specific PDFs</p>
          <h2>One Site, Three Resume Paths</h2>
          <span>
            I would keep one personal site instead of three separate websites. The filters, project ordering and
            resume PDFs give each employer the version they need without splitting traffic across multiple URLs.
          </span>
        </div>
        <div className="resume-grid">
          {resumes.map((resume) => (
            <a href={resume.href} className="resume-card" key={resume.title} target="_blank" rel="noreferrer">
              <span>{resume.tag}</span>
              <strong>{resume.title}</strong>
              <p>{resume.fit}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="demo-framework" className="demo-framework">
        <div className="section-heading compact">
          <p>How Projects Should Be Shown</p>
          <h2>Proof First, Resume Text Second</h2>
          <span>
            This site should not repeat the PDF line by line. It should show evidence: videos, screenshots, papers,
            code links and short technical write-ups.
          </span>
        </div>
        <div className="proof-grid">
          {proofItems.map((item) => (
            <div className="proof-card" key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="demo-roadmap">
          <div>
            <strong>Best next additions</strong>
            <p>1. UE4 VR 30-60s video. 2. AI Q&A screen recording. 3. Android RecipeBook and MusicPlayer phone clips. 4. GraphXR screenshot/GIF.</p>
          </div>
          <div>
            <strong>Where to put links</strong>
            <p>Each project card already has a link row. Replace the demo placeholders with GitHub, Bilibili/YouTube, hosted demo or paper links when ready.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Chen Qicheng</h2>
          <span>Android / AI full-stack / Game and VR development</span>
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
