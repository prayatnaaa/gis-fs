import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className={`min-h-screen min-w-full antialiased`}>
                <Toaster position="bottom-right" />
                <SidebarTrigger />
                {children}
            </div>
        </SidebarProvider>
    );
}
