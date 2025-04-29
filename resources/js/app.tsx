import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import RootLayout from './layouts/app/layout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        const pageName = props.initialPage.component;

        const noLayoutRoutes = ['auth/login', 'auth/register'];

        if (noLayoutRoutes.includes(pageName)) {
            root.render(<App {...props} />);
        } else {
            root.render(
                <RootLayout>
                    <App {...props} />
                </RootLayout>,
            );
        }
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
