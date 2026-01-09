<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Déo-gracias David Tonon</title>

  <style>
    :root {
      --bg: #ffffff;
      --text: #111111;
      --link: #1a5cff;
      --muted: #666666;
      --card: #f6f6f6;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #0e0e0e;
        --text: #eaeaea;
        --link: #7aa2ff;
        --muted: #999999;
        --card: #1a1a1a;
      }
    }

    body.dark {
      --bg: #0e0e0e;
      --text: #eaeaea;
      --link: #7aa2ff;
      --muted: #999999;
      --card: #1a1a1a;
    }

    body {
      font-family: Georgia, "Times New Roman", serif;
      margin: 48px;
      max-width: 720px;
      line-height: 1.55;
      background: var(--bg);
      color: var(--text);
      transition: opacity ease-in 0.2s;
      opacity: 0; display: block; overflow: hidden; position: relative;
    }

    

    h1 { font-size: 2rem; margin-bottom: 0.4rem; }
    h2 { font-size: 1.2rem; margin-top: 2.2rem; }

    a {
      color: var(--link);
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .links a {
      margin-right: 14px;
      font-size: 0.95rem;
    }

    .toggle {
      cursor: pointer;
      font-size: 0.9rem;
      color: var(--muted);
    }

    ul { padding-left: 1.2rem; }

    li { margin-bottom: 0.35rem; }

    .project {
      padding: 0.5rem;
      border-radius: 6px;
      transition: background 0.15s ease;
    }

    .project:hover {
      background: var(--card);
    }

    .recent {
      display: flex;
      gap: 12px;
      margin-top: 1rem;
    }

    .recent img {
      width: 220px;
      border-radius: 6px;
    }

    footer {
      margin-top: 3rem;
      font-size: 0.9rem;
      color: var(--muted);
    }
  </style>
</head>

<body>

  <!-- INTRO -->
  <h1>Hey, I'm Déo-gracias David Tonon...</h1>

  <div class="links">
    <a href="https://github.com/YOUR_GITHUB" target="_blank">GitHub</a>
    <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank">LinkedIn</a>
    <a href="mailto:contact@david-tonon.me">Email</a>
    <a href="/resume.pdf" target="_blank">Resume</a>
    <span class="toggle" onclick="toggleDark()">Toggle dark</span>
  </div>

  <p>
    I’m an AI student based in Cotonou, Benin, majoring in Artificial Intelligence with a minor in Mathematics.
    I build applied ML systems, full-stack products, and AI-driven tools focused on education,
    robotics, and impact in Africa’s growing tech ecosystem.
  </p>

  <p>
    I’m especially interested in practical systems that evolve with users and solve real problems.
  </p>

  <!-- MAIN QUESTS -->
  <h2>Main Quests</h2>
  <ul>
    <li class="project">
      <a href="https://sulufy-beta.vercel.app/" target="_blank">
        <strong>Sulufy</strong> — AI-powered math revision platform using gamification
      </a>
    </li>
    <li class="project">
      <a href="https://face-id-eta.vercel.app/" target="_blank">
        <strong>Face-ID ETA</strong> — AI-based authentication & identity verification system
      </a>
    </li>
    <li class="project">
      <strong>Breakin Direct</strong> — Proof-of-work hiring platform (Top 10 @ lablab AI 2025)
    </li>
  </ul>

  <!-- PROJECTS -->
  <h2>Projects</h2>
  <ul>
    <li class="project">
      <strong>The LITE Method</strong> — NASA Space Apps Challenge 2022 communication framework
    </li>
    <li class="project">
      <strong>GlobalNominee</strong> — NASA Space Apps Challenge 2022 project
    </li>
    <li class="project">
      <strong>Agricultural Evaluation Tool</strong> — React, Symfony & MySQL platform
    </li>
    <li class="project">
      <strong>Robotics Rover Interface</strong> — Python, C++, ROS, Firebase, KivyMD
    </li>
  </ul>

  <!-- SIDEQUESTS -->
  <h2>Sidequests</h2>
  <ul>
    <li>Founding team member — Sirius Space Association</li>
    <li>Robotics systems with ROS, Arduino & autonomous navigation</li>
    <li>Interest in AI education, space science & African tech ecosystems</li>
  </ul>

  <!-- RECENT -->
  <h2>recently...</h2>
  <div class="recent">
    <img src="img1.png" alt="recent 1">
    <img src="img2.png" alt="recent 2">
    <img src="img3.png" alt="recent 3">
  </div>

  <!-- FOOTER -->
  <footer>
    Support my work →
    <a href="https://assist-me.mychariow.shop/prd_fosg4t" target="_blank">
      Buy me a coffee ☕
    </a>
  </footer>

  <script>
    function toggleDark() {
      document.body.classList.toggle("dark");
    }
  </script>

</body>
</html>
