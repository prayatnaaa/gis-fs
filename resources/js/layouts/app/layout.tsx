import { Toaster } from 'react-hot-toast';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    console.log('this is layout');
    return (
        <div className={`min-h-screen antialiased`}>
            <Toaster position="bottom-right" />
            {children}
        </div>
    );
}
