import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen flex-col px-8">
            <Header />
            <main className="flex-1">
                {children}</main>
            <Footer />
        </div>
    );
}
