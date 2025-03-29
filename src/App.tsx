
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CarDetails from "./pages/CarDetails";
import CarListings from "./pages/CarListings";
import DocumentUpload from "./pages/DocumentUpload";
import UserProfile from "./pages/UserProfile";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import AppShowcase from "./pages/AppShowcase";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/listings" element={<CarListings />} />
          <Route path="/documents" element={<DocumentUpload />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/showcase" element={<AppShowcase />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
