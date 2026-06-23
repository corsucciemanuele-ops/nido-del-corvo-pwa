import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/auth/context/AuthContext";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import "./index.css";
import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/print.css";

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Layout>
          <Home />
        </Layout>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
