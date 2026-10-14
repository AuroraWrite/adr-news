"use client";

import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";
import { articles } from "@/data/articles";
import styles from "./page.module.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCtaClick = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "https://www.coindesk.com/";
    }, 5000);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* 1. Header with ADR NEWS Logo */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            {/* Hamburger Menu Button */}
            <button className={styles.menuBtn} aria-label="Open Navigation Menu">
              <span className={styles.menuBar}></span>
              <span className={styles.menuBar}></span>
              <span className={styles.menuBar}></span>
            </button>

            {/* ADR NEWS Logo */}
            <Link href="/" className={styles.logoLink} aria-label="ADR News Home">
              <img
                src="/images/logo.png"
                alt="ADR NEWS"
                className={styles.logoImg}
              />
            </Link>
          </div>

          <div className={styles.headerRight}>
          </div>
        </div>
      </header>

      {/* 2. Main Article Content */}
      <main className={styles.mainContainer}>
        <article className={styles.article}>
          {/* Top Section */}
          <div className={styles.articleTopSection}>
            {/* 1. Category & Read Time */}
            <div className={styles.categoryRow}>
              BUSINESS·2 MIN READ
            </div>

            {/* 2. Headline with Red Vertical Bar */}
            <div className={styles.titleContainer}>
              <div className={styles.redAccentBar}></div>
              <h1 className={styles.articleTitle}>
                BREAKING: U.S. Treasury and IRS Plan 3% “Digital Asset Tax” on Crypto Assets Over $5,000
              </h1>
            </div>

            {/* 3. Byline & Updated Date */}
            <div className={styles.articleMeta}>
              <div className={styles.metaUpdateRow}>
                <span>UPDATED JUN 10, 2026</span>
                <span className={styles.metaChevron}>▼</span>
              </div>
              <div className={styles.metaAuthorRow}>
                <span className={styles.authorPrefix}>By </span>
                <a href="#author" className={styles.authorLink}>John Towfighi</a>
              </div>
            </div>
          </div>

          {/* Main Photo & Caption */}
          <div className={styles.imageSection}>
            <div className={styles.articleImageWrap}>
              <img
                src="/images/bitcoin-exchange.jpg"
                alt="Bitcoin cryptocurrency exchange signage"
                className={styles.articleImage}
              />
            </div>

          </div>

          {/* Article Body */}
          <div className={styles.articleBody}>
            <p className={styles.articleLead}>
              The U.S. Treasury Department and the IRS issued an emergency notice today. As crypto rules tighten, including rules against money laundering and new IRS reporting requirements, they plan to add a 3% “digital asset tax” on individual crypto holdings worth over $5,000. Coinbase, Kraken, and other U.S.-regulated exchanges would take the tax out automatically, so users would not have to report it themselves.
            </p>

            <h2 className={styles.sectionHeading}>
              Reactions: Exchanges Limit Withdrawals, Banks Add Restrictions
            </h2>

            <p className={styles.articleP}>
              After the news, Coinbase paused all U.S. dollar withdrawals. It said it was waiting for the IRS to confirm how the tax should be withheld. Kraken removed some trading pairs. Its support page said more than 200 people were waiting.
            </p>

            <div className={styles.quoteBox}>
              <p className={styles.quoteText} style={{ fontStyle: "normal" }}>
                A U.S. crypto holder said, “I have 0.15 BTC, worth about $13,500. Coinbase blocked my withdrawal and told me to wait for the tax to be taken out. Customer support said they had not received any official documents either. The freeze was just a safety step.”
              </p>
            </div>

            <p className={styles.articleP}>
              JPMorgan Chase and Bank of America sent app notices to clients. The notices did not directly mention the new tax. They stressed “compliance with federal reporting rules” and “transaction safety.” They also said accounts without tax information on file could face limits on some U.S. dollar transactions. Citibank and Wells Fargo phone lines were flooded with calls from worried clients.
            </p>

            <div className={styles.clarificationBox}>
              <div className={styles.clarificationHeader}>
                Later Explanation
              </div>
              <p className={styles.articleP} style={{ marginBottom: 0 }}>
                At 5:10 p.m. ET, a U.S. Treasury spokesperson said the document was part of an internal stress test. It was accidentally posted on a public server because of human error. The U.S. is not introducing this tax now. Coinbase and Kraken lifted their restrictions that night and said user funds were fine.
              </p>
            </div>

            <h2 className={styles.sectionHeading}>
              But questions remain:
            </h2>

            <ul className={styles.bulletList}>
              <li>Why did the test include exact rates and thresholds?</li>
              <li>Why was it public during the most intense debate over crypto taxes?</li>
              <li>Why did exchanges react so fast?</li>
              <li>Why did bank notices mention tax information?</li>
              <li>Why did the exchanges not explain their initial withdrawal freeze?</li>
            </ul>

            <p className={styles.articleP}>
              Officially, it was a misunderstanding. But in the crypto community, many still ask: If it was only a test, why did everyone take it so seriously?
            </p>

            {/* Red Accent Divider */}
            <div className={styles.redDividerBlock}></div>

            {/* Social Share Buttons Row */}
            <div className={styles.shareRow}>
              <button className={styles.shareBtn} aria-label="Share via Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </button>
              <button className={styles.shareBtn} aria-label="Copy Link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </button>
              <button className={styles.shareBtn} aria-label="Share on X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
              <button className={styles.shareBtn} aria-label="Share on Facebook">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className={styles.shareBtn} aria-label="Share on Threads">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>
                </svg>
              </button>
            </div>

            {/* Up next Section */}
            <section className={styles.upNextSection}>
              <h2 className={styles.upNextHeading}>Up next</h2>

              <div className={styles.upNextList}>
                {articles.map((item) => (
                  <Link
                    key={item.id}
                    href={`/articles/${item.slug}`}
                    className={styles.upNextCard}
                  >
                    <div className={styles.upNextThumbWrap}>
                      <img
                        src={item.thumb || item.img}
                        alt={item.title}
                        className={styles.upNextThumb}
                      />
                    </div>
                    <div className={styles.upNextInfo}>
                      <h3 className={styles.upNextTitle}>
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>

              {/* More Crypto News Pill Button (图2 样式) */}
              <div className={styles.moreCryptoBtnWrap}>
                <button
                  type="button"
                  onClick={handleCtaClick}
                  disabled={isLoading}
                  className={styles.moreCryptoBtn}
                >
                  {isLoading && <span className={styles.spinner}></span>}
                  <span>{isLoading ? "Loading..." : "More Crypto News"}</span>
                </button>
              </div>
            </section>
          </div>
        </article>
      </main>

      {/* High-Fidelity CNN Dark Footer */}
      <Footer />

      {/* 5. Full-Screen Loading Overlay */}
      {isLoading && (
        <div className={styles.loadingOverlay} aria-live="assertive">
          <div className={styles.loadingBox}>
            <div className={styles.globalSpinner}></div>
            <span className={styles.loadingText}>Loading latest updates...</span>
          </div>
        </div>
      )}
    </div>
  );
}
