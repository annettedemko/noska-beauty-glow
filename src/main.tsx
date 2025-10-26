import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Notify prerender plugin that app is ready
// This is needed for vite-plugin-prerender to know when to capture the HTML
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.dispatchEvent(new Event('app-rendered'));
    }, 100);
  });
}
