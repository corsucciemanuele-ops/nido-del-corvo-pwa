import { Component, type ReactNode } from "react";
// import { HelmetProvider } from "react-helmet-async"; // debug
import { AuthProvider } from "@/auth/context/AuthContext";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import "./index.css";
import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/print.css";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, fontFamily: "monospace", background: "#fff", color: "#c00" }}>
          <h2>Render error (debug only)</h2>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {(this.state.error as Error).message}
            {"\n\n"}
            {(this.state.error as Error).stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      {/* HelmetProvider temporaneamente rimosso per debug pagina bianca */}
      <AuthProvider>
        <Layout>
          <Home />
        </Layout>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
