// Comprehensive 18-Phase React Mastery Curriculum (2026 Edition)
import CounterExample from './examples/CounterExample';
import ToggleExample from './examples/ToggleExample';
import ListExample from './examples/ListExample';
import FormExample from './examples/FormExample';
import PropsExample from './examples/PropsExample';
import EffectExample from './examples/EffectExample';
import TailwindExample from './examples/TailwindExample';
import MenuToggleExample from './examples/MenuToggleExample';

export const curriculum = [
  {
    phase: 1,
    title: "Phase 1 — Introduction & Setup",
    chapters: [
      {
        id: "what-is-react",
        title: "1. What is React?",
        description: "Foundational concepts and the React mental model.",
        content: `
### Why React?
React is a declarative, component-based library for building user interfaces. It solves the "messy" state management problems of traditional imperative DOM manipulation.

### Core Concepts to Master:
- **SPA vs MPA:** Understanding why Single Page Applications provide better UX.
- **Virtual DOM:** How React uses a lightweight copy of the DOM to batch updates (Diffing/Reconciliation).
- **Declarative UI:** Telling React *what* the UI should look like for a given state, not *how* to change it.

### Understand:
- **The React Mental Model:** Data flows down (unidirectional), events flow up.
- **Why Vite over CRA:** Modern native ESM-based development for 2026.
        `,
        ExampleComponent: CounterExample
      },
      {
        id: "react-setup",
        title: "2. Environment Setup",
        description: "Vite, toolchains, and project structure.",
        content: `
### Modern Tooling
- **Vite 8:** The lightning-fast build tool replacing Webpack.
- **pnpm/yarn:** Efficient package management.

### Project Structure (Industry Standard):
\`\`\`text
src/
 ├── api/ (Services)
 ├── components/ (Shared UI)
 ├── features/ (Domain logic)
 ├── hooks/ (Custom logic)
 ├── layouts/ (Wrappers)
 ├── pages/ (Route views)
 └── store/ (Global state)
\`\`\`
        `
      }
    ]
  },
  {
    phase: 2,
    title: "Phase 2 — React Fundamentals",
    chapters: [
      {
        id: "jsx-and-components",
        title: "3. JSX & Components",
        description: "The building blocks of React applications.",
        content: `
### JSX Deep Dive
JSX is JavaScript XML. It allows you to write HTML-like syntax that compiles to \`React.createElement\` calls.

### Master these:
- **JSX Rules:** Single root, camelCase attributes, closing tags.
- **Expressions:** Injecting JS values using \`{}\`.
- **Component Architecture:** Functional components as pure functions of props.

### Understand:
- **Reusable components:** Breaking UI into independent pieces.
- **Presentational vs Container components:** Separating logic from UI.
- **Composition patterns:** Using \`props.children\` effectively.
        `,
        exampleCode: `const Welcome = ({ name }) => {
  return <h1 className="text-blue-500">Hello, {name}</h1>;
};`,
        ExampleComponent: PropsExample
      },
      {
        id: "props-and-state",
        title: "4. Props & State",
        description: "Managing data and interactivity.",
        content: `
### Data Management
- **Props:** External data passed into components (Immutable).
- **State:** Internal data owned by the component (Mutable via updater).

### Master these:
- **useState:** The primary tool for local state.
- **Event Handling:** Synthetic events and passing functions as props.
- **Lifting State Up:** Moving state to a common ancestor.

### Understand:
- **Render Cycles:** How state changes trigger the Reconciliation process.
- **One-way Data Flow:** Why React avoids two-way binding.
        `,
        ExampleComponent: ToggleExample,
        exampleCode: `const [count, setCount] = useState(0);
return <button onClick={() => setCount(c => c + 1)}>{count}</button>;`
      },
      {
        id: "rendering-logic",
        title: "5. Conditional Rendering & Lists",
        description: "Dynamic UI generation.",
        content: `
### Dynamic Rendering
- **Conditional Rendering:** Using ternary operators and \`&&\` logic.
- **Lists:** Transforming arrays into JSX using \`.map()\`.

### Master these:
- **Keys:** Why unique, stable keys are CRITICAL for performance.
- **Logical AND (&&):** Short-circuiting for conditional UI.

### Understand:
- **Diffing Algorithm:** How keys help React identify changed items.
- **Fragment (<>):** Avoiding unnecessary DOM nodes.
        `,
        ExampleComponent: ListExample,
        exampleCode: `<ul>
  {items.map(item => (
    <li key={item.id}>{item.name}</li>
  ))}
</ul>`
      }
    ]
  },
  {
    phase: 3,
    title: "Phase 3 — Advanced React Hooks",
    chapters: [
      {
        id: "hook-mastery-basic",
        title: "6. Core Hook Mastery",
        description: "useState, useEffect, and useRef.",
        content: `
### The Foundation
Modern React is all about Hooks. They allow you to use state and other React features without writing a class.

### Master these:
- **useState:** Local state management.
- **useEffect:** Handling side effects (API calls, subscriptions).
- **useRef:** Accessing DOM nodes and persisting values without re-render.

### Understand:
- **Dependency Arrays:** Controlling when effects run.
- **Cleanup Functions:** Preventing memory leaks in effects.
- **Stale Closures:** Why \`useEffect\` might capture old state values.
        `,
        ExampleComponent: EffectExample,
        exampleCode: `useEffect(() => {
  const timer = setInterval(() => console.log('Tick'), 1000);
  return () => clearInterval(timer); // Cleanup
}, []);`
      },
      {
        id: "hook-mastery-performance",
        title: "7. Performance Hooks",
        description: "useMemo and useCallback.",
        content: `
### Optimization
Preventing unnecessary re-calculations and re-renders.

### Master these:
- **useMemo:** Memoizing expensive calculations.
- **useCallback:** Memoizing function definitions to prevent child re-renders.

### Understand:
- **Referential Equality:** Why functions are "different" on every render.
- **React.memo:** When to wrap your components for optimization.
        `
      },
      {
        id: "advanced-built-in-hooks",
        title: "8. Advanced Hooks & Context",
        description: "useContext, useReducer, and more.",
        content: `
### Complex State & Global Data
- **useContext:** Accessing global data without prop drilling.
- **useReducer:** Managing complex state logic (Redux-lite).

### Understand:
- **useLayoutEffect:** When you need to read layout before paint.
- **useImperativeHandle:** Customizing ref values for parent components.
- **useId:** Generating unique IDs for accessibility.
        `
      },
      {
        id: "react-internals",
        title: "9. React Internals & Rendering",
        description: "Fiber, Reconciliation, and Concurrent Rendering.",
        content: `
### Under the Hood
Understanding how React actually works.

### Master these:
- **Reconciliation:** The process of updating the DOM.
- **Fiber Architecture:** How React prioritizes UI updates.

### Understand:
- **Concurrent rendering:** Rendering in the background.
- **useTransition:** Keeping the UI responsive during heavy updates.
- **useDeferredValue:** Deferring non-urgent UI updates.
        `
      }
    ]
  },
  {
    phase: 4,
    title: "Phase 4 — State Management",
    chapters: [
      {
        id: "global-state-fundamentals",
        title: "10. Global State & Context",
        description: "Managing data across the entire application.",
        content: `
### Why Global State?
When state needs to be accessed by deeply nested components, passing it via props (prop drilling) becomes unmanageable.

### Master these:
- **Context API:** The native solution for global themes, auth, and settings.
- **Provider Pattern:** Wrapping your app in context providers.

### Understand:
- **Context vs. Redux:** When to use native context vs. a dedicated state library.
- **Performance:** Why updating context can trigger unnecessary re-renders in large apps.
        `
      },
      {
        id: "redux-toolkit-mastery",
        title: "11. Redux Toolkit (RTK)",
        description: "The industry standard for complex global state.",
        content: `
### Modern Redux
Redux Toolkit (RTK) is the official, opinionated toolset for efficient Redux development.

### Master these:
- **Store & Slices:** Organizing state into logical features.
- **Reducers & Actions:** Pure logic for predictable state updates.
- **asyncThunk:** Handling asynchronous logic within Redux.

### Understand:
- **Immutability with Immer:** Why you can "mutate" state in RTK.
- **Middleware:** Intercepting actions for logging, error handling, or telemetry.
        `,
        exampleCode: `const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 }
  }
});`
      },
      {
        id: "state-management-alternatives",
        title: "12. Modern Alternatives",
        description: "Zustand, Jotai, and Recoil.",
        content: `
### Beyond Redux
- **Zustand:** A small, fast, and scalable bearbones state-management solution.
- **Jotai/Recoil:** Atomic state for fine-grained updates.

### Master these:
- **Zustand Hooks:** Accessing global state without providers.
- **Atomic State:** Understanding the "bottom-up" approach to state.
        `
      }
    ]
  },
  {
    phase: 5,
    title: "Phase 5 — Routing",
    chapters: [
      {
        id: "react-router-fundamentals",
        title: "13. React Router 7",
        description: "Client-side and server-side navigation.",
        content: `
### Declarative Routing
React Router is the standard for navigation in React. Version 7 (Remix-based) introduces powerful data-loading patterns.

### Master these:
- **Nested Routes:** Sharing layouts across related pages.
- **Dynamic Routes:** Handling parametric URLs (e.g., \`/profile/:id\`).
- **Route Protection:** Creating auth-guarded private routes.

### Understand:
- **Loaders & Actions:** Pre-fetching data and handling form submissions at the route level.
- **Navigation Patterns:** Programmatic vs. declarative navigation.
        `
      }
    ]
  },
  {
    phase: 6,
    title: "Phase 6 — API & Backend Integration",
    chapters: [
      {
        id: "fetching-data",
        title: "14. Modern API Integration",
        description: "Fetch, Axios, and Interceptors.",
        content: `
### Talking to Servers
- **Axios:** The preferred library for HTTP requests in 2026.
- **Interceptors:** Handling global headers and token refreshes.

### Master these:
- **Interceptors:** Automatically adding JWT tokens to every request.
- **Pagination & Infinite Scrolling:** Handling large datasets efficiently.
- **Error Handling:** Centralized API error management.
        `
      },
      {
        id: "tanstack-query-mastery",
        title: "15. Server State with TanStack Query",
        description: "Caching, syncing, and updating server state.",
        content: `
### The Power of Caching
TanStack Query (React Query) manages the complex lifecycle of server data.

### Master these:
- **Queries & Mutations:** Reading and writing server data.
- **Optimistic Updates:** Updating the UI before the server responds.
- **Cache Invalidation:** Ensuring users always see fresh data.

### Understand:
- **Stale-While-Revalidate:** The core caching philosophy.
- **Background Refetching:** Keeping data in sync automatically.
        `
      },
      {
        id: "real-time-and-graphql",
        title: "16. Real-time & GraphQL",
        description: "WebSockets and Apollo Client.",
        content: `
### Beyond REST
- **WebSockets/Socket.IO:** Real-time bi-directional communication.
- **GraphQL:** Precise data fetching with Apollo Client.

### Master these:
- **SSE (Server-Sent Events):** Efficient one-way real-time updates.
- **GraphQL Mutations:** Updating complex data graphs.
        `
      }
    ]
  },
  {
    phase: 7,
    title: "Phase 7 — Forms",
    chapters: [
      {
        id: "react-hook-form-mastery",
        title: "17. React Hook Form",
        description: "Performant and flexible form management.",
        content: `
### Why React Hook Form?
It minimizes re-renders by using uncontrolled components under the hood, making it the most performant form library for 2026.

### Master these:
- **Register & Controller:** Connecting inputs to the form state.
- **Validation with Zod/Yup:** Schema-based validation for type-safe forms.
- **Multi-step Forms:** Managing complex wizard-like flows.

### Understand:
- **Controlled vs. Uncontrolled:** Why performance matters in large forms.
- **File Uploads:** Handling multipart/form-data with React.
        `,
        ExampleComponent: FormExample,
        exampleCode: `const { register, handleSubmit } = useForm();
const onSubmit = data => console.log(data);
return <form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("name")} />
</form>;`
      }
    ]
  },
  {
    phase: 8,
    title: "Phase 8 — Styling Systems",
    chapters: [
      {
        id: "modern-css-approaches",
        title: "18. CSS & Styling",
        description: "From Modules to Utility-first.",
        content: `
### Styling Strategies
Modern React apps use a mix of scoped CSS and utility frameworks.

### Master these:
- **Tailwind CSS 4:** The utility-first standard with CSS-first configuration.
- **CSS Modules:** Locally scoped styles for unique components.
- **Styled Components/Emotion:** Dynamic styling with CSS-in-JS.

### Understand:
- **Design Systems:** Building a consistent visual language.
- **Responsive Design:** Using Tailwind's mobile-first breakpoints.
- **Dark Mode:** Implementing system-aware and manual dark mode toggles.
        `,
        ExampleComponent: TailwindExample,
        exampleCode: `<div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-8 rounded-3xl">
  Dynamic Dark Mode
</div>`
      },
      {
        id: "ui-component-libraries",
        title: "19. UI Libraries & shadcn/ui",
        description: "Building accessible UIs at speed.",
        content: `
### Accessible Foundations
- **shadcn/ui:** Copy-paste components built on Radix UI.
- **MUI / Chakra UI:** Comprehensive pre-built component systems.

### Master these:
- **shadcn/ui integration:** Customizing and extending shared components.
- **Accessibility (a11y):** Ensuring keyboard navigation and screen reader support.
        `
      }
    ]
  },
  {
    phase: 9,
    title: "Phase 9 — Production Architecture",
    chapters: [
      {
        id: "scalable-architecture",
        title: "20. Scalable Folder Structure",
        description: "Organizing large-scale React projects.",
        content: `
### Feature-Based Design
Moving beyond simple folder types to a domain-driven structure.

### Master these:
- **Feature Folders:** Encapsulating logic, UI, and state for a single feature.
- **Absolute Imports:** Using \`@/components\` instead of \`../../components\`.

### Understand:
- **Separation of Concerns:** Keeping your UI pure and your logic in hooks.
- **SOLID Principles:** Single Responsibility, Open/Closed, etc., applied to React.
        `
      },
      {
        id: "advanced-patterns",
        title: "21. Advanced Design Patterns",
        description: "Compound Components, HOCs, and Render Props.",
        content: `
### Reusable Logic
- **Compound Components:** Creating flexible component sets like Tabs or Accodions.
- **Render Props:** Sharing logic by passing a function as a prop.

### Master these:
- **Custom Hooks Pattern:** The modern way to share logic.
- **Provider Pattern:** Creating flexible context-based APIs.
        `
      }
    ]
  },
  {
    phase: 10,
    title: "Phase 10 — Testing",
    chapters: [
      {
        id: "unit-and-component-testing",
        title: "22. Unit & Component Testing",
        description: "Vitest and React Testing Library.",
        content: `
### Quality Assurance
- **Vitest:** The fast, Vite-native replacement for Jest.
- **React Testing Library (RTL):** Testing components as users interact with them.

### Master these:
- **Mocking APIs:** Using MSW (Mock Service Worker) for realistic API tests.
- **Testing Hooks:** Verifying custom hook logic in isolation.
- **Coverage Reports:** Ensuring critical paths are fully tested.

### Understand:
- **Test-Driven Development (TDD):** Writing tests before code.
- **Accessibility Testing:** Using \`jest-axe\` to catch a11y regressions.
        `
      },
      {
        id: "e2e-testing-playwright",
        title: "23. E2E with Playwright",
        description: "Full user journey automation.",
        content: `
### End-to-End Testing
Playwright is the modern standard for browser automation in 2026.

### Master these:
- **UI Automation:** Clicking, typing, and navigating like a real user.
- **Cross-browser Testing:** Running tests on Chromium, Firefox, and WebKit.
- **Visual Regression:** Detecting pixel-perfect UI changes.
        `
      }
    ]
  },
  {
    phase: 11,
    title: "Phase 11 — Next.js (Industry Standard)",
    chapters: [
      {
        id: "nextjs-deep-dive",
        title: "24. Next.js App Router",
        description: "The full-stack React framework.",
        content: `
### The New Standard
Next.js is the most popular way to build production React apps.

### Master these:
- **Server Components:** Rendering on the server for speed and SEO.
- **Streaming & Suspense:** Showing instant UI while data loads.
- **Server Actions:** Type-safe data mutations without APIs.

### Understand:
- **SSR vs. SSG vs. ISR:** Choosing the right rendering strategy.
- **Edge Runtime:** Running logic closer to the user.
        `
      }
    ]
  },
  {
    phase: 12,
    title: "Phase 12 — DevOps & Deployment",
    chapters: [
      {
        id: "build-tools-vite",
        title: "25. Modern Build Tools",
        description: "Vite and Webpack basics.",
        content: `
### The Build Pipeline
Understanding how your code becomes a production bundle.

### Master these:
- **Vite Configuration:** Optimizing builds and HMR.
- **Bundle Analysis:** Identifying and removing large dependencies.
        `
      },
      {
        id: "docker-and-k8s-production",
        title: "26. Containerization & K8s",
        description: "Deploying at scale with Docker.",
        content: `
### Production Environments
- **Docker:** Packaging your app and its environment.
- **Kubernetes:** Orchestrating multiple containers.

### Master these:
- **Dockerfile Optimization:** Multi-stage builds for small images.
- **CI/CD Pipelines:** GitHub Actions for automated testing and deployment.
        `
      }
    ]
  },
  {
    phase: 13,
    title: "Phase 13 — Security",
    chapters: [
      {
        id: "frontend-security",
        title: "27. Securing the Frontend",
        description: "XSS, CSRF, and Secure Storage.",
        content: `
### Defensive Coding
Protecting your users and your data from common web vulnerabilities.

### Master these:
- **XSS Prevention:** Sanitizing user input and using CSP (Content Security Policy).
- **Secure Token Storage:** Using HTTP-only cookies instead of LocalStorage for sensitive data.
- **CSRF Protection:** Implementing Anti-CSRF tokens and SameSite cookie attributes.

### Understand:
- **Dependency Auditing:** Using \`npm audit\` to find vulnerable packages.
- **CORS:** Understanding Cross-Origin Resource Sharing.
        `
      }
    ]
  },
  {
    phase: 14,
    title: "Phase 14 — Accessibility (a11y)",
    chapters: [
      {
        id: "wcag-and-semantics",
        title: "28. Inclusive Design",
        description: "Building for everyone.",
        content: `
### Accessibility First
Ensuring your React app is usable by people with disabilities.

### Master these:
- **Semantic UI:** Using the correct HTML elements (\`nav\`, \`main\`, \`section\`).
- **Keyboard Navigation:** Managing focus and ensuring all actions are reachable via keyboard.
- **ARIA Patterns:** Using WAI-ARIA labels correctly for screen readers.

### Understand:
- **WCAG Guidelines:** The international standard for web accessibility.
- **Color Contrast:** Designing for visual impairments.
        `
      }
    ]
  },
  {
    phase: 15,
    title: "Phase 15 — Advanced Production Skills",
    chapters: [
      {
        id: "monorepos-and-scaling",
        title: "29. Scaling the Codebase",
        description: "Monorepos and Micro Frontends.",
        content: `
### Professional Scaling
Managing multiple projects and large teams.

### Master these:
- **Turborepo/Nx:** Managing monorepos with shared packages.
- **Internationalization (i18n):** Building multi-lingual apps with \`react-i18next\`.
- **Micro Frontends:** Module Federation and independent deployments.

### Understand:
- **Observability:** Implementing logging and monitoring (Sentry).
- **Bundle Optimization:** Keeping the initial load time low.
        `
      }
    ]
  },
  {
    phase: 16,
    title: "Phase 16 — System Design for Frontend",
    chapters: [
      {
        id: "frontend-system-design",
        title: "30. High-Level Architecture",
        description: "Frontend scalability and design.",
        content: `
### Thinking at Scale
Designing architectures that handle millions of users.

### Master these:
- **Caching Strategies:** Service workers, CDN, and browser cache.
- **Rendering Strategies:** Choosing between CSR, SSR, SSG, and ISR.
- **State Architecture:** Designing global state trees for performance.

### Understand:
- **API Design:** Understanding REST vs. GraphQL from a frontend perspective.
- **Performance Budgets:** Setting and maintaining speed targets.
        `
      }
    ]
  },
  {
    phase: 17,
    title: "Phase 17 — AI Integration in React",
    chapters: [
      {
        id: "ai-frontend-integration",
        title: "31. Building AI-Powered UIs",
        description: "OpenAI, Streaming, and RAG.",
        content: `
### The 2026 AI Standard
Integrating Large Language Models into modern React applications.

### Master these:
- **Streaming Responses:** Building ChatGPT-like typewriter effects.
- **RAG Frontend:** Implementing UI for Retrieval-Augmented Generation.
- **AI Agents UI:** Designing interfaces for autonomous AI agents.

### Understand:
- **Token Management:** Handling LLM context windows and costs.
- **Prompt Engineering:** Structuring frontend prompts for consistency.
        `
      }
    ]
  },
  {
    phase: 18,
    title: "Phase 18 — Production Projects",
    chapters: [
      {
        id: "production-ready-portfolio",
        title: "32. The Mastery Portfolio",
        description: "Building real-world applications.",
        content: `
### Build These to Master React:
- **Intermediate:** E-commerce Dashboard with real-time analytics.
- **Advanced:** SaaS Platform with multi-tenant auth and AI features.
- **Expert:** Real-time Collaboration Tool (like Figma/Notion) with CRDTs.

### Tools You Must Know:
- **Quality:** ESLint, Prettier, Husky.
- **API:** Postman, Bruno.
- **Monitoring:** Sentry, LogRocket.
- **Version Control:** Advanced Git (Rebase, Submodules).
        `
      }
    ]
  }
];
