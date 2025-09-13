export const resumeDataEn = {
  name: "Qicheng Chen",
  career: "M.S. in Computer Science | Python Backend Development | Deep Learning | Software Architecture | Object-Oriented Programming",
  contact: {
    email: "wharrison832@gmail.com",
    phone: "2024984924",
    linkedin: "www.linkedin.com/in/qicheng-chen"
  },
  education: [
    {
      school: "The George Washington University, School of Engineering & Applied Science",
      location: "Washington, DC",
      degree: "Master of Science in Computer Science",
      gpa: "3.61/4.0",
      period: "August 2025",
      publications: [
        "Published paper as the first author in HCII 2025 Human Interface and the Management of Information conference proceedings (https://link.springer.com/chapter/10.1007/978-3-031-93828-3_13) (2025)"
      ]
    },
    {
      school: "University of Nottingham Ningbo China",
      location: "Ningbo, Zhejiang",
      degree: "Bachelor of Science in Computer Science",
      gpa: "3.53/4.0",
      period: "July 2022",
      projects: ["Conducted an independent project on VR container port using real-world port data"],
      awards: ["Awarded first prize in the 3rd Big Data Innovative Application Competition of Yinzhou District (2021)"],
      publications: [
        "Published as the first author in Sensors journal (doi: 10.3390/s23136099) (2023)"
      ]
    }
  ],
  internships: [
    {
      company: "Kineviz",
      location: "Ningbo Zhejiang",
      position: "Node.js Developer",
      period: "June 2021 - October 2022",
      responsibilities: [
        "Used Node.js to parse NGQL and SQL queries and JavaScript code to implement GUI to allow users to import data from Snowflake analytics platform and Nebula Graph into GraphXR",
        "Developed China Kineviz Office preliminary website by using HTML, CSS, Ghost, JavaScript, and Docker, enabled staff blog posting to introduce GraphXR case studies"
      ]
    }
  ],
  projects: [
    // Development projects
    {
      title: "Snake Game Implementation with Julia",
      link: "https://github.com/KTisKIM/csci_6221",
      location: "Washington, DC, USA",
      role: "Game Functions Development",
      period: "October 2023 – December 2023",
      description: [
        "Implemented Snake Game main functionalities such as apple generation, snake movement logics, GUI, collision, etc. with Julia",
        "Implemented map generation through reading txt files with Julia and added sound effects for apple eating, GUI button clicking, collision, etc."
      ],
      category: "development"
    },
    {
      title: "Information Visualization and Virtual Reality",
      location: "Ningbo, China",
      role: "Independent Developer",
      period: "September 2021 - May 2022",
      description: [
        "Used UE4 and UE4 Blueprint to test, debug, refactor, and enhanced substantial VR port project authored by a Ningbo company",
        "Processed over two millions of historical container port data with SQL and substituted randomly generated truck tasks in VR port to reproduce container port activities in VR port game",
        "Collaborated with the Ningbo company to integrated Ningbo port historical data into VR port game, and used the data to generate tasks for different positions in container port such as ship crane and gate crane to simulate port historical activity",
        "Added enhanced truck model into VR port and coded truck movement logic such as acceleration, swerving, braking. Added truck transportation task, scoreboard, and navigation line to guide players to deliver containers"
      ],
      category: "development"
    },
    {
      title: "NLP-Based Healthcare Chat Bot WeChat Mini Program",
      link: "https://github.com/Harrison832-beep/NingboBigDataCompetition",
      location: "Ningbo, China",
  role: "Python Backend Development",
      period: "October 2020 – May 2021",
      description: [
        "Worked with a team of 5 students, using UML and Visual Paradigm to design use cases, system communications, etc. for chat bot WeChat mini program from scratch",
        "Developed backend functionalities including chat history storage, GUI config storage, and integrated a simple NLP model with Git, Python, and Django. Collaborated with frontend group to design frontend-backend APIs",
        "Integrated healthcare NLP model with help of doctorate student, deployed backend on Ali server with IIS. Achieved first place in Yinzhou district on 3rd Ningbo Big Data Innovative Application Competition"
      ],
      category: "development"
    },
    {
      title: "Java Sokoban Game Refactoring and Extension",
      link: "https://github.com/Harrison832-beep/SokobanGame",
      location: "Ningbo, China",
      role: "Independent Developer",
      period: "October 2020 – December 2020",
      description: [
        "Applied design patterns such as Adapter, Singleton, Factory patterns to refactor Sokoban game released by professor with Java, JavaFX and Scenebuilder",
        "Refactor and added new components including level reset, scoreboard and menu based on MVC principles with Java, JavaFX, Scenebuilder",
        "Searched and used online Sokoban game materials such as character textures, icons, etc. to improve game experience"
      ],
      category: "development"
    },
    {
      title: "BOC App Design and Java Development",
      location: "Ningbo, China",
      role: "Java Development",
      period: "April 2020 - May 2020",
      description: [
        "Collaborated with team of 6 students to analyze user specifications and design BOC bank's system components with UML diagrams including use case diagrams, activity diagrams, sequence diagrams, state machine diagrams, etc., implemented using Java",
        "Applied Agile software engineering techniques to implement different system functions, unit tested as many test cases as possible to ensure proper operation under all circumstances. Achieved 3rd place in class"
      ],
      category: "development"
    },
    
    // Machine Learning projects
    {
      title: "Amazon-M2 Product Recommendation in Underrepresented Locales using LLMs",
      location: "Washington, DC, USA",
      role: "Independent Research",
      period: "September 2024 – June 2025",
      description: [
        "Experimented LLMs including ChatGPT4o-mini, Gemini-1.0-pro, Gemini-1.5-flash on next product prediction through Google Cloud and OpenAI APIs, achieved MRR@100 of 0.6787, Recall@100 of 0.9478, 20% higher than SOTA solution",
        "Converted product information into embeddings using OpenAI API, experimented models Lasso Regression, SVR, Linear Regression, simple CNN and transformer with PyTorch on next item prediction, achieved highest MRR@100 of 0.0106, and Recall@100 of 0.1014",
        "Paper accepted by HCII 2025 and presented research project in HCII 2025 conference"
      ],
      category: "machine-learning"
    },
    {
      title: "Game Theory Based Aeroplane Chess AI Agent",
      link: "https://github.com/Harrison832-beep/AeroplaneChessAI",
      location: "Washington, DC, USA",
      role: "Independent Research and Development",
      period: "October 2024 – December 2024",
      description: [
        "Designed and implemented text-based Aeroplane chess game, implemented different gaming AI algorithms such as Minimax, Expectimax, Monte Carlo Tree Search (MCTS), and Q-Learning",
        "Used different agents to play against random agent in game for 100 rounds, observed that Expectimax was best in Aeroplane chess game (82:18)"
      ],
      category: "machine-learning"
    },
    {
      title: "Jigsaw Puzzle Solver with Computer Vision and Backtracking Algorithm",
      link: "https://github.com/Harrison832-beep/JigsawPuzzleSolver",
      location: "Washington, DC, USA",
      role: "Independent Developer",
      period: "October 2023 – December 2023",
      description: [
        "Developed Jigsaw Puzzle solver with Python and OpenCV, the algorithm solves puzzle through moving puzzle piece up, down, left, or right and backtrack if current resemblance is incorrect",
        "Given screenshot of the Jigsaw Puzzle, OpenCV was first used to detect different puzzle pieces through grayscale, edge detection, and edge simplification. Different pieces were then stored as a Python object. Backtracking algorithm was finally applied to ensemble different pieces to solve the puzzle"
      ],
      category: "machine-learning"
    },
    {
      title: "Deep Learning Models for Stress Analysis in University Students: A Sudoku-Based Study",
      location: "Ningbo, China",
      role: "Independent Research",
      period: "June 2022 - May 2023",
      description: [
        "Reviewed stress experiment related research and designed Sudoku-based experiments, recruited 30 students in university and collected bio signals such as PPG, ECG, EEG from wearable sensors including Polar Verity Sense, NeuroSky headset during stress experiments",
        "Preprocessed collected data through resampling, denoising, feature extraction with Python, Pandas, and Numpy. Modified and finetuned stress prediction deep learning models including StressNeXt, LRN, self-supervised CNN from different stress experiment papers on collected dataset",
        "Enhanced DNNs including StressNeXt, LRCN, Self-Supervised CNN by refining model architectures, achieving a notable 95% accuracy and F1-score with LRCN, thus enabling precise stress prediction in educational environments"
      ],
      category: "machine-learning"
    },
    {
      title: "Explore CIFAR-10 Classification Effectiveness with Different Deep Learning Models",
      location: "Ningbo, China",
      role: "Independent Developer",
      period: "November 2021 – December 2022",
      description: [
        "Processed CIFAR-10 image dataset using Python and PyTorch, experimented classification effectiveness with traditional machine learning models such as decision trees, SVM, MLP, and PCA",
        "Designed and tested different CNN models including LeNet, AlexNet, VGG-16, and VGG-32 on CIFAR-10, achieved highest accuracy of 88%"
      ],
      category: "machine-learning"
    }
  ],
  skills: {
    languages: [
      { name: "Mandarin", level: "Native" },
      { name: "English", level: "Fluent" },
      { name: "Japanese", level: "Introductory" }
    ],
    programming: [
      "Python", "C", "C++", "Haskell", "SQL", "JavaScript", 
      "Kotlin", "Java", "UE4 Blueprint", "Julia", "Bash", "Clojure"
    ],
    technologies: [
      "Deep Learning", "PyTorch", "Scikit-learn", "NumPy", "Pandas", "OpenCV", 
      "OpenAI", "Google Gemini", "Computer Vision", "Transformer", "Attention", 
      "ResNet", "CNN", "Q-Learning", "Expectimax", "UE4 Experience", "Django", 
      "Flask", "JavaFX", "UNIX/Linux Systems", "PySpark", "Design Patterns", 
      "UML", "Git", "Graph Databases", "HTML", "CSS", "React", "Use Case Diagram", 
      "Activity Diagram", "Sequence Diagram", "Class Diagram"
    ]
  },
  publications: [
    {
      reference: "Chen, Q., Qu, X. (2025). Amazon-M2 Product Recommendation in Underrepresented Locales Using ChatGPT4o-Mini and Gemini Models. In: Mori, H., Asahi, Y. (eds) Human Interface and the Management of Information. HCII 2025. Lecture Notes in Computer Science, vol 15775. Springer, Cham.",
      link: "https://doi.org/10.1007/978-3-031-93828-3_13",
      year: "2025"
    },
    {
      reference: "Chen, Q., & Lee, B. G. (2023). Deep Learning Models for Stress Analysis in University Students: A Sudoku-Based Study. Sensors, 23(13), 6099.",
      link: "https://doi.org/10.3390/s23136099",
      year: "2023"
    }
  ],
  awards: [
    {
      title: "First Prize in the 3rd Big Data Innovative Application Competition of Yinzhou District",
      year: "2021"
    }
  ]
};