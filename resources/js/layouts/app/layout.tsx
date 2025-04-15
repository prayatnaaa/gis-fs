import { Toaster } from 'react-hot-toast';
import '../globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <Toaster position="bottom-right" />
                {children}
            </body>
        </html>
    );
}
