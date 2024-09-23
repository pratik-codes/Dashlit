import App from "@/components/App";
import React from "react";
import ReactDOM from "react-dom/client";
import "~/assets/tailwind.css";
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <div className="h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1725489891089-5960671a3433?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <App />
    </div>
    </QueryClientProvider>
  </React.StrictMode>,
);
