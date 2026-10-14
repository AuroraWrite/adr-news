import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footerInner}>
        {/* 1. Follow ADR News */}
        <div className={styles.sectionTitle}>FOLLOW ADR NEWS</div>
        <div className={styles.socialRow}>
          {/* Facebook */}
          <span className={styles.socialIcon} aria-label="Facebook">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </span>

          {/* X / Twitter */}
          <span className={styles.socialIcon} aria-label="X">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </span>

          {/* Instagram */}
          <span className={styles.socialIcon} aria-label="Instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </span>

          {/* TikTok */}
          <span className={styles.socialIcon} aria-label="TikTok">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.16 1.18 2.07 2.35 2.27 1.05.21 2.2-.13 2.94-.88.6-.58.93-1.4.93-2.24V.02h-.02z"/>
            </svg>
          </span>

          {/* LinkedIn */}
          <span className={styles.socialIcon} aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.48 1.48 0 1 0 0-2.96 1.48 1.48 0 0 0 0 2.96m1.4 9.74v-8.37H5.06v8.37z"/>
            </svg>
          </span>

          {/* Threads */}
          <span className={styles.socialIcon} aria-label="Threads">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"/>
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>
            </svg>
          </span>
        </div>

        {/* 2. Download App Badges */}
        <div className={styles.appSection}>
          <div className={styles.sectionTitle}>DOWNLOAD THE ADR NEWS APP</div>
          <div className={styles.badgeRow}>
            {/* Apple App Store Badge */}
            <div className={styles.storeBadge} aria-label="Download on the App Store">
              <span className={styles.badgeIcon}>
                <svg width="18" height="21" viewBox="0 0 170 170" fill="currentColor">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.59-7.71-11.66-14.01-6.1-9.46-10.9-20.24-14.39-32.33-3.48-12.09-5.23-23.77-5.23-35.04 0-14.34 3.75-26.32 11.26-35.94 7.5-9.62 17.07-14.54 28.7-14.76 4.79 0 10.33 1.34 16.63 4.02 6.3 2.68 10.37 4.08 12.21 4.19 1.57-.11 5.96-1.57 13.16-4.38 7.21-2.82 13.38-4.08 18.52-3.78 13.92.76 25.07 5.75 33.45 14.97-12.18 7.39-18.17 17.51-17.96 30.34.22 10.11 4.13 18.57 11.75 25.37 7.61 6.8 16.59 10.74 26.92 11.82-2.17 6.74-4.89 13.91-8.15 21.51zM119.22 33.09c0-7.39 2.66-14.28 7.97-20.67 5.32-6.39 11.84-10.66 19.57-12.82.33 1.3.49 2.61.49 3.91 0 7.39-2.78 14.24-8.33 20.55-5.55 6.31-12.18 10.33-19.89 12.07-.11-.98-.17-1.99-.17-3.04z"/>
                </svg>
              </span>
              <div className={styles.badgeText}>
                <span className={styles.badgeSub}>Download on the</span>
                <span className={styles.badgeMain}>App Store</span>
              </div>
            </div>

            {/* Google Play Store Badge */}
            <div className={styles.storeBadge} aria-label="Get it on Google Play">
              <span className={styles.badgeIcon}>
                <svg width="18" height="20" viewBox="0 0 512 512" fill="none">
                  <path d="M48.7 18.2C45.3 22 43.4 27.6 43.4 34.9v442.2c0 7.3 1.9 12.9 5.3 16.7l2.5 2.5 247.9-247.9v-5.8L51.2 15.7l-2.5 2.5z" fill="#00E676"/>
                  <path d="M381.8 321.4l-82.7-82.7v-5.8l82.7-82.7 1.9 1.1 98 55.7c27.9 15.9 27.9 41.8 0 57.7l-98 55.7-1.9 1z" fill="#FFD600"/>
                  <path d="M299.1 238.7L51.2 496.3c9.1 9.6 24.2 10.7 41.3 1.1l289.3-164.4-82.7-94.3z" fill="#FF1744"/>
                  <path d="M299.1 273.3l82.7-94.3L92.5 14.6C75.4 5 60.3 6.1 51.2 15.7l247.9 257.6z" fill="#00B0FF"/>
                </svg>
              </span>
              <div className={styles.badgeText}>
                <span className={styles.badgeSub}>GET IT ON</span>
                <span className={styles.badgeMain}>Google Play</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Divider Line */}
        <hr className={styles.divider} />

        {/* 4. Financial & Editorial Market Disclaimer */}
        <p className={styles.disclaimer}>
          Most stock quote data provided by BATS. US market indices are shown in real time, except for the S&P 500 which is refreshed every two minutes. All times are ET. Factset: FactSet Research Systems Inc. All rights reserved. Chicago Mercantile: Certain market data is the property of Chicago Mercantile Exchange Inc. and its licensors. All rights reserved. Dow Jones: The Dow Jones branded indices are proprietary to and are calculated, distributed and marketed by DJI Opco, a subsidiary of S&P Dow Jones Indices LLC and have been licensed for use to S&P Opco, LLC and ADR News. Standard & Poor’s and S&P are registered trademarks of Standard & Poor’s Financial Services LLC and Dow Jones is a registered trademark of Dow Jones Trademark Holdings LLC. All content of the Dow Jones branded indices Copyright S&P Dow Jones Indices LLC and/or its affiliates. Fair value provided by IndexArb.com. Market holidays and trading hours provided by Copp Clark Limited.
        </p>

        {/* 5. Policy & Navigation Links */}
        <div className={styles.linksList}>
          <span className={styles.footerLink}>Terms of Use</span>
          <span className={styles.footerLink}>Privacy Policy</span>
          <span className={styles.footerLink}>Manage Cookies</span>
          <span className={styles.footerLink}>Ad Choices</span>
          <span className={styles.footerLink}>Advertise With Us</span>
          <span className={styles.footerLink}>Accessibility &amp; CC</span>
          <span className={styles.footerLink}>About</span>
          <span className={styles.footerLink}>Newsletters</span>
          <span className={styles.footerLink}>Transcripts</span>
          <span className={styles.footerLink}>Sitemap</span>
        </div>

        {/* 6. Copyright Notice */}
        <div className={styles.copyrightBlock}>
          <p className={styles.copyrightLine}>© 2026 ADR News Media Group. All Rights Reserved.</p>
          <p className={styles.copyrightLine}>ADR Sans ™ &amp; © 2026 ADR News Media Group.</p>
        </div>
      </div>
    </footer>
  );
}
