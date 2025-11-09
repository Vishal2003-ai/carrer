// app/layout.tsx (उदाहरण के लिए)
import './globals.css'; // आपकी ग्लोबल स्टाइल्स
import Header from '@/components/Header'; // Header इम्पोर्ट करें
import Footer from '@/components/Footer'; // Footer इम्पोर्ट करें

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header को बच्चों के ऊपर फिक्स करें */}
        <Header />

        <main className="flex-grow">
          {children} {/* यह आपका पेज कंटेंट है */}
        </main>

        {/* Footer को बच्चों के नीचे फिक्स करें */}
        <Footer />
      </body>
    </html>
  );
}