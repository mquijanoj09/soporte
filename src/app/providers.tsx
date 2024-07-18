"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Next13ProgressBar
        height="4px"
        color="#aa0000"
        options={{ showSpinner: true }}
        showOnShallow
      />
    </QueryClientProvider>
  );
};

export default Providers;
