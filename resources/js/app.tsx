import { createInertiaApp } from "@inertiajs/react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { initializeTheme } from "@/hooks/use-appearance";
import AppLayout from "@/layouts/app-layout";
import AuthLayout from "@/layouts/auth-layout";
import SettingsLayout from "@/layouts/settings/layout";

const appName = import.meta.env.VITE_APP_NAME || "Municipal Agriculture Office";

void createInertiaApp({
    title: (title) => (title ? `${title} | ${appName}` : appName),

    layout: (name) => {
        switch (true) {
            // Standalone public pages
            case name === "welcome":
                return null;

            // IMPORTANT:
            // Custom MAO login owns the entire viewport.
            // Do not wrap it in Laravel's AuthLayout.
            case name === "auth/login":
                return null;

            // Other authentication pages retain their auth layout.
            case name.startsWith("auth/"):
                return AuthLayout;

            // Settings pages
            case name.startsWith("settings/"):
                return [AppLayout, SettingsLayout];

            // Default authenticated application layout
            default:
                return AppLayout;
        }
    },

    strictMode: true,

    withApp(app) {
        return (
            <TooltipProvider delayDuration={0}>
                {app}
                <Toaster />
            </TooltipProvider>
        );
    },

    progress: {
        color: "#15803d",
    },
});

initializeTheme();
