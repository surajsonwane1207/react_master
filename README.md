# 🚀 ReactMaster | 2026 Mastery Roadmap

ReactMaster is a high-performance, interactive learning platform designed to take developers from absolute beginners to production-ready React engineers. It features a comprehensive **18-Phase Curriculum** covering everything from basic JSX to advanced DevOps with Kubernetes.

---

## 🛠 Tech Stack

- **Frontend:** [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) (Utility-first, Dark Mode)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) (Persistent Progress Tracking)
- **Routing:** [React Router 7](https://reactrouter.com/) (Dynamic & Nested Routes)
- **Typography:** [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)

---

## ✨ Key Features

- **Comprehensive Curriculum:** 18 Phases of learning, from foundations to advanced deployment.
- **Interactive Sandbox:** Live code examples for core concepts (State, Props, Effects, Forms, etc.).
- **Progress Tracking:** Persistent tracking of mastered topics using Redux and `localStorage`.
- **Dark Mode:** System-aware dark mode with manual toggle support.
- **Modern Architecture:** Built with the latest 2026 standards (React 19, Vite 8, Tailwind 4).

---

## 📂 Project Structure

```text
/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and icons
│   ├── chapters/        # Curriculum content engine
│   │   ├── examples/    # Interactive example components
│   │   └── chapterData.js # Main curriculum data structure
│   ├── components/      # Shared UI components (Header, Footer, Layout)
│   ├── pages/           # Page-level components (Home, ChapterPage)
│   ├── routes/          # Routing configuration
│   ├── store/           # Redux Toolkit store and slices
│   ├── index.css        # Global styles (Tailwind 4 configuration)
│   └── main.jsx         # Application entry point
├── eslint.config.js     # ESLint configuration
└── vite.config.js       # Vite configuration (Tailwind & React plugins)
```

> **Note:** This project uses **Tailwind CSS 4**, which leverages a CSS-first configuration. Instead of a `tailwind.config.js` file, configuration and custom variants are handled directly in `src/index.css` using CSS variables and `@theme` blocks.

---

## 📈 Software Development Life Cycle (SDLC)

This project follows a modern, agile SDLC to ensure scalability and maintainability.

### 1. Planning
Structured roadmap with 18 phases, focusing on incremental skill building.

### 2. Implementation
- **Data-Driven UI:** The entire curriculum is rendered from `chapterData.js`.
- **Component Isolation:** Each example is a standalone component in `src/chapters/examples/`.
- **State Persistence:** Progress is automatically saved to the browser's storage.

### 3. Testing
Comprehensive testing suite implemented using **Vitest** and **React Testing Library**:
- **Unit Testing:** Verified Redux store logic and persistence (`src/store/progressSlice.test.js`).
- **Integration Testing:** Verified page-level behavior and navigation (`src/pages/Home.test.jsx`, `src/pages/ChapterPage.test.jsx`).

To run the tests:
```bash
# Run tests in watch mode
npm run test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v20+)
- npm / yarn / pnpm

### Installation
```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Run in development mode
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 📝 Adding New Content

To add a new chapter or example:

1. **Create an Example Component:** Add a new `.jsx` file in `src/chapters/examples/`.
2. **Update chapterData.js:**
   - Import your new component.
   - Add a new entry to the `curriculum` array in the appropriate phase.
   - Use the `content` field for Markdown-based theory.
   - Use the `ExampleComponent` field to link your interactive demo.

---

## 🏆 Progress Tracking
Every topic can be marked as "Mastered." Your progress is saved locally and visualized through the dashboard. This ensures you can pick up exactly where you left off.

---

## 📄 License
MIT License - Feel free to use this for your own learning journey!
