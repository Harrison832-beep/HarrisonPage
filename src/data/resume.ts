export const resumeData = {
  name: "陈起成",
  career: "计算机科学硕士 | Python后端开发 | 深度学习 | 软件架构 | 面向对象编程",
  contact: {
    email: "wharrison832@gmail.com",
    phone: "+86 17389794618",
    linkedin: "www.linkedin.com/in/qicheng-chen" 
  },
  education: [
    {
      school: "乔治华盛顿大学-工程与应用科学学院",
      location: "美国，华盛顿哥伦比亚特区",
      degree: "计算机科学硕士",
      gpa: "3.61/4.0",
      period: "2023.08 – 2025.08",
      publications: [
        "作为第一作者在 HCII 2025 的 Human Interface and the Management of Information conference proceedings 上发表论文（https://doi.org/10.1007/978-3-031-93828-3_13）（2025 年）"
      ]
    },
    {
      school: "宁波诺丁汉大学",
      location: "中国，宁波",
      degree: "计算机科学学士",
      gpa: "3.53/4.0",
      period: "2018.09 – 2022.07",
      projects: ["使用真实港口数据开发 VR 集装箱港口"],
      awards: ["2021 获 “第三届鄞州区大数据创新应用大赛一等奖 ”"],
      publications: [
        "作为第一作者在《Sensors》期刊发表论文（doi: 10.3390/s23136099）（2023 年）"
      ]
    }
  ],
  internships: [
    {
      company: "Kineviz",
      location: "中国，宁波",
      position: "Node.js 开发",
      period: "2021.06 - 2022.10",
      responsibilities: [
        "使用 Node.js 编写 NGQL、SQL 语句理解还有 JavaScript 编码 GUI 让 GraphXR 用户能将 Snowflake 和 Nebula Graph 数据导入到 GraphXR 中。",
        "使用 HTML、CSS、Ghost、JavaScript 和 Docker 开发了 Kineviz 中国办公室的初版网站，使员工能够发布博客介绍 GraphXR 案例研究。"
      ]
    }
  ],
  projects: [
    // 开发相关项目
    {
      title: "Julia 贪吃蛇游戏",
      link: "https://github.com/KTisKIM/csci_6221",
      location: "美国，华盛顿特区",
      role: "Julia 开发",
      period: "2023.10 – 2022.12",
      description: [
        "与小组 4 人使用 Julia 语言开发并展示贪吃蛇游戏。独自开发贪吃蛇游戏主要功能，包括苹果生成、贪吃蛇基本逻辑、GUI、碰撞。",
        "自学 Julia 并和小组一起制作 PPT 演讲展示 Julia 的语言特征还有贪吃蛇游戏开发计划。",
        "用 Julia 语言处理 txt 文件生成贪吃蛇地图，独自添加了贪吃蛇吃到苹果时的音效、GUI 点击特效、贪吃蛇与障碍物碰撞的音效。"
      ],
      category: "development"
    },
    {
       title: "集装箱港口作业流程VR模拟与优化系统",
      location: "中国，宁波",
      role: "UE4 重构与再开发",
      period: "2021.09 – 2022.05",
      description: [
        "使用 UE4 和 UE 蓝图语言对由宁波公司开发的基础 VR 港口项目进行测试、Debug、重构和再开发，让程序干净和易扩展。",
        "与宁波公司合作将宁波港口活动真实历史数据接入 VR 港口游戏，并通过历史数据生成 VR 港口游戏中的各个岗位任务如龙门吊和船吊，以重现集装箱港口活动。",
        "使用宁波公司设计好的卡车建模，在 VR 游戏中加入卡车模型并编写了卡车加速度、转弯、减速、刹车逻辑，添加了玩家运送任务指引，添加卡车集装箱运送任务，玩家可以操纵卡车根据任务指引运送集装箱到指定位置完成任务得分，或者是以第三人称视角观看港口卡车活动。",
        "向包括集装箱港口经理和政府人员在内的宁波港口数字实验室访客展示了优化后的项目，并撰写了一篇 15000 字的毕业论文。"
      ],
      category: "development"
    },
    {
       title: "基于NLP的智能医疗问诊微信小程序",
      link: "https://github.com/Harrison832-beep/NingboBigDataCompetition",
      location: "中国，宁波",
      role: "Python 后端开发",
      period: "2020.10 – 2021.05",
      description: [
        "与小组 5 人使用 UML 和 Visual Paradigm 设计微信聊天机器人小程序使用场景、系统结构、系统互动、GUI 等。",
        "使用 Git、Python、Django 与前端小组合作实现后端功能包括后端聊天记录数据存储、用户界面设置的数据存储，以及融入聊天机器人模型，与前端小组沟通设计了前后端交流 API。并使用 Python 单元测试确保开发时系统的正常运行。",
        "在博士生帮助下融入能诊断病症的 NLP 模型，使用 IIS 将后端部署到了阿里远程服务器上。与小组获得宁波大数据应用创新比赛鄞州区第一名。"
      ],
      category: "development"
    },
    {
      title: "Java推箱子游戏重构与再开发",
      link: "https://github.com/Harrison832-beep/SokobanGame",
      location: "中国，宁波",
      role: "Java 重构与再开发",
      period: "2020.10 – 2020.12",
      description: [
        "独自使用 Java、JavaFX、SceneBuilder、UML 和软件工程多种设计模式如 Adapter、Factory、Singleton 重构和再开发由老师发布的推箱子游戏。",
        "使用 SceneBuilder、JavaFX 设计菜单，基于 MVC 原则和设计模式重构 Java 推箱子游戏，并在基础上添加多种功能如重置关卡、计分板、菜单。",
        "搜索推箱子游戏素材并添加人物、箱子、地图背景等到游戏中以优化推箱子游戏交互界面。"
      ],
      category: "development"
    },
    {
       title: "基于Java的银行核心业务系统模块化设计与实现",
      location: "中国，宁波",
      role: "Java 开发",
      period: "2020.4 – 2020.5",
      description: [
        "与小组 6 人使用 UML 和 Visual Paradigm 分析需求并设计用例图、活动图、时序图并分工使用 Java 对程序不同部分进行开发。",
        "运用 Agile 开发中的 Sprint 和 Peer Coding 模式进行开发，以及对系统设计单元测试确保系统在各个案例下正常运行，最终获得班里第三名成绩。"
      ],
      category: "development"
    },
    
    // 机器学习相关项目
    {
      title: "应用大语言模型对 Amazon-M2 数据集中数据匮乏地区的多语言产品推荐",
      location: "美国，华盛顿特区",
      role: "独立研究",
      period: "2024.09 – 2025.06",
      description: [
        "通过 OpenAI 和 Google Cloud API 使用 ChatGPT4o-mini、Gemini-1.0-pro、Gemini-1.5-flash 预测 Amazon-M2 数据集中用户的未来产品互动，最终 MRR@100 达到 0.6787，Recall@100 达到 0.9478，高于现有模型 20%。",
        "将商品信息通过 OpenAI 转换成小型 Embeddings 再使用基础模型 Lasso Regression、SVR、Linear Regression 和深度模型 CNN、Transformer 对未来产品预测实验，最高 MRR@100 达到 0.0106，Recall@100 达到 0.1014。",
        "撰写 800 字论文并在 HCII 2025 上展示项目，论文在《Human Interface and the Management of Information》proceedings 上发表。"
      ],
      category: "machine-learning"
    },
    {
      title: "飞行棋博弈AI系统设计与实现",
      link: "https://github.com/Harrison832-beep/AeroplaneChessAI",
      location: "美国，华盛顿特区",
      role: "独立开发",
      period: "2024.10 – 2024.12",
      description: [
        "使用 Python 编写文字版飞行棋游戏，并实现不同的 AI Agent 算法例如 Minimax、Expectimax、Monte-Carlo Tree Search（MCTS）以及 Q-Learning。",
        "对不同的 AI 算法进行实验，通过不同 Agent 与随机 Agent 对战 100 场得出在飞行棋游戏中 Expectimax 算法的胜率最高（82：18）。"
      ],
      category: "machine-learning"
    },
    {
      title: "基于机器视觉的拼图还原算法",
      link: "https://github.com/Harrison832-beep/JigsawPuzzleSolver",
      location: "美国，华盛顿特区",
      role: "独立开发",
      period: "2023.10 – 2023.12",
      description: [
        "使用 Python 和 OpenCV 开发了一个简单拼图解谜算法，通过上下左右移动拼图块和 Backtracking 算法将拼图块还原成完整图案。",
        "使用 OpenCV 预处理，通过转化图片成 grayscale 图片来识别边缘，再通过简化边缘识别可进行拼接的拼图缺口位置，最后将每一块拼图块存储为一个拼图块对象。最后通过 Backtracking 算法通过寻找合适邻居拼图还原完整图案。"
      ],
      category: "machine-learning"
    },
    {
      title: "用于大学生压力分析的深度学习模型-基于数独的研究",
      location: "中国，宁波",
      role: "独立研究",
      period: "2022.06 - 2023.05",
      description: [
        "搜索相关压力试验论文并设计了基于数独的压力测试实验，招募 30 名校内学生，使用 Android Studio 和 Kotlin 编写程序，采集包括 Polar Verity Sense 和 NeuroSky 头戴设备在内的可穿戴传感器的 PPG、ECG、EEG 等生物信号，作为学校场景下的压力数据集。",
        "使用 Python、Numpy、Pandas 对信号数据进行处理如 Resample、去噪、特征提取，再使用 PyTorch 参考复现了 50 多篇与压力相关的学术文献中使用的深度学习模型包括 StressNeXt、LRCN、Self-supervised CNN，对收集到的压力数据集进行不同测试。",
        "通过改进模型架构优化了包括 StressNeXt、LRCN、自监督 CNN 在内的深度学习模型，实现了 95%的准确率和 F1 评分，从而实现了在教育环境中精确的压力预测。"
      ],
      category: "machine-learning"
    },
    {
      title: "探究不同深度模型对 CIFAR-10 数据集的图片分类",
      location: "中国，宁波",
      role: "独立开发",
      period: "2021.11 – 2021.12",
      description: [
        "使用 Python 和 PyTorch 处理 CIFAR-10 图片数据集并使用不同的机器学习模型例如 SVM、MLP、决策树还有 PVC 对数据集中的图片进行分类。",
        "实验多种经典 CNN 模型如 LeNet、AlexNet、VGG-16、VGG-32 等对 CIFAR-10 进行图片分类，最高准确率达到 88%。"
      ],
      category: "machine-learning"
    }
  ],
  skills: {
    languages: [
      { name: "普通话", level: "母语" },
      { name: "英语", level: "托福 102" },
      { name: "日语", level: "基础日语" }
    ],
    programming: [
      "Python", "Java", "C", "C++", "Haskell", "SQL", "JavaScript", 
      "Kotlin", "UE4 Blueprint", "Julia", "Bash", "Clojure"
    ],
    technologies: [
      "深度学习", "PyTorch", "Sklearn", "Numpy", "Pandas", "OpenCV", 
      "OpenAI", "Google Gemini", "计算机视觉", "Transformer", "Attention", 
      "ResNet", "CNN", "Q 学习", "Expectimax", "UE4 经验", "Django", 
      "Flask", "JavaFX", "UNIX/Linux 系统", "PySpark", "设计模式", 
      "UML", "Git", "图数据库", "HTML", "CSS", "React", "用例图", 
      "活动图", "时序图", "类图"
    ]
  },
  publications: [
    {
      reference: "Chen, Q., Qu, X. (2025). Amazon-M2 Product Recommendation in Underrepresented Locales Using ChatGPT4o-Mini and Gemini Models. In: Mori, H., Asahi, Y. (eds) Human Interface and the Management of Information. HCII 2025. Lecture Notes in Computer Science, vol 15775. Springer, Cham. https://doi.org/10.1007/978-3-031-93828-3_13",
      link: "https://doi.org/10.1007/978-3-031-93828-3_13",
      year: "2025"
    },
    {
      reference: "Chen, Q., & Lee, B. G. (2023). Deep Learning Models for Stress Analysis in University Students: A Sudoku-Based Study. Sensors, 23(13), 6099. https://doi.org/10.3390/s23136099",
      link: "https://doi.org/10.3390/s23136099",
      year: "2023"
    }
  ],
  awards: [
    {
      title: "第三届鄞州区大数据创新应用大赛一等奖",
      year: "2021 年"
    }
  ]
};