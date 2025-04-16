
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServiceDetails from "./pages/ServiceDetails";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Explore from "./pages/Explore";
import Categories from "./pages/Categories";
import BeautyServices from "./pages/categories/BeautyServices";
import ConstructionServices from "./pages/categories/ConstructionServices";
import EducationServices from "./pages/categories/EducationServices";
import TechnologyServices from "./pages/categories/TechnologyServices";
import HealthServices from "./pages/categories/HealthServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="paulo-afonso-theme">
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/services/:id" element={<ServiceDetails />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/beauty" element={<BeautyServices />} />
              <Route path="/categories/construction" element={<ConstructionServices />} />
              <Route path="/categories/education" element={<EducationServices />} />
              <Route path="/categories/technology" element={<TechnologyServices />} />
              <Route path="/categories/health" element={<HealthServices />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
