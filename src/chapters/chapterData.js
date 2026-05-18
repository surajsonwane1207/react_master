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
    title: "Introduction to React",
    chapters: [
      {
        id: "what-is-react",
        title: "1. What is React?",
        description: "Foundational concepts and why React exists.",
        content: `
### Why React was created
Facebook created React to handle complex, high-performance UIs where data changes frequently. It solved the "messy" state management and DOM manipulation problems of the early 2010s.

### SPA (Single Page Application)
Unlike multi-page apps that reload on every link click, React builds SPAs. The browser loads one HTML page and dynamically updates it, providing a "desktop-like" experience.

### Virtual DOM
React creates a lightweight JSON-like representation of the DOM. When state changes, React compares this "Virtual DOM" with the previous version (Diffing) and updates only the changed parts in the real DOM.

### Component-based architecture
React breaks the UI into independent, reusable pieces called components. This makes code easier to test, maintain, and share.

### Declarative UI
You don't tell React *how* to change the UI (imperative). You tell React *what* the UI should look like for a specific state, and React handles the updates.

### React vs Vanilla JS
- **Vanilla JS:** You manually find elements (\`document.getElementById\`) and update them.
- **React:** You update data (state), and the UI updates automatically.
        `,
        ExampleComponent: CounterExample
      },
      {
        id: "prerequisites",
        title: "2. Prerequisites",
        description: "The JavaScript knowledge you MUST have first.",
        content: `
### The Foundation
Don't jump into React without mastering:
- **HTML5:** Semantic tags, forms, and accessibility.
- **CSS3:** Flexbox, Grid, and responsive design.

### Essential JavaScript (ES6+)
- **let / const:** Block-scoped variable declarations.
- **Arrow Functions:** Concise syntax and lexical 'this' binding.
- **Template Literals:** Using backticks for string interpolation (\`${"..."}\`).
- **Destructuring:** Easily extracting values from objects and arrays.
- **Spread & Rest:** The \`...\` operator for cloning and merging.
- **Array Methods:** \`map\`, \`filter\`, \`reduce\`, and \`find\`.
- **Promises & Async/Await:** Handling asynchronous operations cleanly.
- **Closures:** Functions that remember their lexical scope.
- **Event Loop:** Understanding how JS handles concurrency.
        `
      }
    ]
  },
  {
    phase: 2,
    title: "React Basics",
    chapters: [
      {
        id: "react-setup",
        title: "3. React Setup",
        description: "Vite, folder structures, and toolchains.",
        content: `
### Vite: The Modern Standard
Create React App (CRA) is deprecated. **Vite** is the industry standard for 2026. It's incredibly fast due to Native ESM and HMR.

### Installation
\`\`\`bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
\`\`\`

### Folder Structure
- **src/main.jsx:** The entry point.
- **src/App.jsx:** The root component.
- **public/**: Static assets that don't need processing.
- **node_modules/**: Your installed dependencies.
        `
      },
      {
        id: "jsx-guide",
        title: "4. JSX Deep Dive",
        description: "Writing HTML inside JavaScript.",
        content: `
### What is JSX?
JSX (JavaScript XML) is a syntax extension that looks like HTML but has the full power of JavaScript.

### JSX Rules
1. **Single Root:** Return only one parent element (or a Fragment \`<>\`).
2. **Close Tags:** All tags must be closed (e.g., \`<br />\`).
3. **CamelCase:** Use \`className\` instead of \`class\`, \`htmlFor\` instead of \`for\`.

### Expressions
Use \`{}\` to inject any JavaScript:
\`\`\`jsx
const name = "Suraj";
return <h1>Hello, {name}</h1>;
\`\`\`
        `,
        exampleCode: `function App() {
  return <h1>Hello React</h1>
}`
      },
      {
        id: "components-and-props",
        title: "5 & 6. Components & Props",
        description: "Building reusable UI blocks.",
        content: `
### Functional Components
Simple JS functions that return JSX.
\`\`\`jsx
function UserProfile() {
  return <div>Profile</div>;
}
\`\`\`

### Props (Properties)
Arguments passed into components. Props are **read-only** (immutable).
\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
// Usage: <Welcome name="Suraj" />
\`\`\`

### Children Props
Access content passed between tags using \`props.children\`.
        `,
        ExampleComponent: PropsExample,
        exampleCode: `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Welcome name="Suraj" />`
      },
      {
        id: "state-and-events",
        title: "7 & 8. State & Events",
        description: "Making the UI interactive with Hooks and Handlers.",
        content: `
### useState Hook
State is data that changes over time and triggers a re-render. It allows components to "remember" user input or UI status.
\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

### Event Handling
Events are passed as camelCase functions. Common events include \`onClick\`, \`onChange\`, and \`onSubmit\`.

### Toggle Pattern
A common use of state is toggling a boolean value (true/false) to show or hide UI elements like menus or modals.
        `,
        ExampleComponent: MenuToggleExample,
        exampleCode: `const [isOpen, setIsOpen] = useState(false);

return (
  <div>
    <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? 'Close' : 'Open'} Menu
    </button>
    
    {isOpen && (
      <ul>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    )}
  </div>
);`
      },
      {
        id: "lists-and-keys",
        title: "10. Lists & Keys",
        description: "Rendering multiple components.",
        content: `
### Rendering Lists
Use \`map()\` to transform data into JSX elements.

### The Importance of Keys
Keys help React identify which items have changed, been added, or removed. Keys should be unique and stable.
        `,
        ExampleComponent: ListExample,
        exampleCode: `const users = [{ id: 1, name: 'Suraj' }, { id: 2, name: 'Gemini' }];

<ul>
  {users.map(user => (
    <li key={user.id}>{user.name}</li>
  ))}
</ul>`
      }
    ]
  },
  {
    phase: 3,
    title: "React Hooks",
    chapters: [
      {
        id: "use-effect-hook",
        title: "11. useEffect",
        description: "Side effects and lifecycle.",
        content: `
### What are Side Effects?
Anything outside the scope of the component: API calls, subscriptions, timers.

### Dependency Array
- **No Array:** Runs on every render.
- **Empty Array \`[]\`:** Runs only once (on mount).
- **With Values \`[count]\`:** Runs when 'count' changes.

### Cleanup
Return a function from \`useEffect\` to clean up timers or subscriptions.
        `,
        ExampleComponent: EffectExample,
        exampleCode: `useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);

  return () => clearInterval(timer); // Cleanup
}, []);`
      },
      {
        id: "advanced-hooks",
        title: "12 - 17. Advanced Hooks",
        description: "useRef, useMemo, useCallback, and more.",
        content: `
### useRef
Access DOM elements directly or persist values without triggering re-renders.

### useMemo
Memoize expensive calculations so they don't run on every render.

### useCallback
Memoize function definitions to prevent unnecessary re-renders of child components.

### useContext
Access global data (like themes or auth) without passing props through every level.

### useReducer
Manage complex state logic (similar to Redux) within a component.
        `
      }
    ]
  },
  {
    phase: 4,
    title: "Forms",
    chapters: [
      {
        id: "controlled-vs-uncontrolled",
        title: "18. Controlled Components",
        description: "Handling user input in React.",
        content: `
### Controlled Components
React state is the "single source of truth" for input values.
\`\`\`jsx
<input value={name} onChange={(e) => setName(e.target.value)} />
\`\`\`

### Form Validation
Manual validation using regex or state, or using libraries like **Zod/Yup**.
        `,
        ExampleComponent: FormExample,
        exampleCode: `<input 
  value={name} 
  onChange={(e) => setName(e.target.value)} 
/>`
      },
      {
        id: "react-hook-form",
        title: "20. React Hook Form",
        description: "Performant form management.",
        content: `
### Why React Hook Form?
It minimizes re-renders and provides a clean API for validation.
- **register:** Connects inputs to the hook.
- **handleSubmit:** Handles data submission and validation errors.
        `
      }
    ]
  },
  {
    phase: 5,
    title: "Routing",
    chapters: [
      {
        id: "react-router-v6",
        title: "21. React Router DOM",
        description: "Multi-page navigation in SPAs.",
        content: `
### Core Components
- **BrowserRouter:** The wrapper.
- **Routes & Route:** Define the paths.
- **Link & NavLink:** Navigate without reloading.

### Advanced Routing
- **Nested Routes:** Rendering child components within parent layouts.
- **Dynamic Params:** Using \`/:id\` and \`useParams()\`.
- **Protected Routes:** Redirecting unauthenticated users.
        `
      }
    ]
  },
  {
    phase: 7,
    title: "Styling & Tailwind",
    chapters: [
      {
        id: "styling-approaches",
        title: "25. CSS Approaches",
        description: "From Modules to Styled Components.",
        content: `
### CSS Modules
Scoped CSS that avoids class name collisions.

### Styled Components
Writing CSS-in-JS using tagged template literals.

### UI Libraries
- **shadcn/ui:** High-quality, accessible components you can copy-paste.
- **MUI / Chakra:** Pre-built component systems.
        `
      },
      {
        id: "tailwind-mastery",
        title: "26. Tailwind CSS Mastery",
        description: "Utility-first design in 2026.",
        content: `
### Core Concepts
- **Utility First:** Build complex designs using small atomic classes.
- **Responsive:** Use prefixes like \`md:\`, \`lg:\`.
- **States:** Use \`hover:\`, \`focus:\`, \`dark:\`.

### Why Tailwind?
It eliminates the need to jump between CSS and JS files, speeding up development significantly.
        `,
        ExampleComponent: TailwindExample,
        exampleCode: `<div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</div>`
      }
    ]
  },
  {
    phase: 9,
    title: "State Management",
    chapters: [
      {
        id: "redux-toolkit",
        title: "37. Redux Toolkit (RTK)",
        description: "Professional state management.",
        content: `
### The RTK Way
Redux is no longer "boilerplate heavy" thanks to RTK.
- **Store:** The global state holder.
- **Slice:** Combines logic (actions + reducers) for a feature.
- **useSelector:** Reading state.
- **useDispatch:** Updating state.

### Zustand
A lightweight, modern alternative to Redux that uses hooks directly.
        `
      },
      {
        id: "tanstack-query",
        title: "39. TanStack Query",
        description: "Server state management.",
        content: `
### Why React Query?
React state isn't for server data. Query handles:
- Caching
- Loading/Error states
- Background refetching
- Optimistic updates
        `
      }
    ]
  },
  {
    phase: 11,
    title: "Testing & Playwright",
    chapters: [
      {
        id: "unit-testing-vitest",
        title: "42. Unit Testing",
        description: "Testing logic with Vitest.",
        content: `
### Vitest & RTL
Vitest is a fast replacement for Jest. React Testing Library (RTL) tests components from the user's perspective.
        `
      },
      {
        id: "playwright-e2e",
        title: "44. E2E with Playwright",
        description: "End-to-End browser testing.",
        content: `
### Why Playwright?
It's faster and more reliable than Cypress.
- **UI Automation:** Click, type, and verify like a real user.
- **Cross-browser:** Test Chrome, Firefox, and WebKit simultaneously.
        `
      }
    ]
  },
  {
    phase: 15,
    title: "The Ecosystem",
    chapters: [
      {
        id: "nextjs-mastery",
        title: "53. Next.js (SSR/SSG)",
        description: "The full-stack React framework.",
        content: `
### Why Next.js?
- **Server Components:** Render on the server for speed and SEO.
- **App Router:** Modern file-based routing.
- **API Routes:** Full-stack capabilities out of the box.
        `
      }
    ]
  },
  {
    phase: 18,
    title: "DevOps & K8s",
    chapters: [
      {
        id: "docker-and-k8s",
        title: "59 & 60. Docker & Kubernetes",
        description: "Deploying React at scale.",
        content: `
### Docker
Containerize your React app so it runs identically in dev, staging, and production.

### Kubernetes (K8s)
Orchestrate multiple containers. Use **Minikube** locally to learn:
- **Deployments:** Scaling pods.
- **Services:** Exposing your app to the internet.
- **Ingress:** Managing external access.
        `
      }
    ]
  }
];
