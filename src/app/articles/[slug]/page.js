"use client";

import Footer from "@/components/Footer";
import { useState, use } from "react";
import Link from "next/link";
import { getArticleBySlug, getOtherArticles, articles } from "@/data/articles";
import styles from "@/app/page.module.css";

export default function ArticlePage({ params }) {
  const unwrappedParams = use(params);
  const { slug } = unwrappedParams;
  const article = getArticleBySlug(slug);
  const [isLoading, setIsLoading] = useState(false);

  const handleCtaClick = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "https://www.coindesk.com/";
    }, 5000);
  };

  if (!article) {
    return (
      <div className={styles.pageWrapper}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.headerLeft}>
              <Link href="/" className={styles.logoLink} aria-label="ADR News Home">
                <img src="/images/logo.png" alt="ADR NEWS" className={styles.logoImg} />
              </Link>
            </div>
          </div>
        </header>
        <main className={styles.mainContainer} style={{ padding: "40px 16px", textAlign: "center" }}>
          <h1 className={styles.articleTitle}>Article Not Found</h1>
          <div style={{ marginTop: "24px" }}>
            <Link href="/" style={{ color: "#cc0000", fontWeight: "700", textDecoration: "underline" }}>
              ← Return to Front Page
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const otherArticles = getOtherArticles(article.slug);

  return (
    <div className={styles.pageWrapper}>
      {/* 1. Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerLeft}>
            <Link href="/" className={styles.menuBtn} aria-label="Back to Home">
              <span className={styles.menuBar}></span>
              <span className={styles.menuBar}></span>
              <span className={styles.menuBar}></span>
            </Link>
            <Link href="/" className={styles.logoLink} aria-label="ADR News Home">
              <img src="/images/logo.png" alt="ADR NEWS" className={styles.logoImg} />
            </Link>
          </div>
          <div className={styles.headerRight}></div>
        </div>
      </header>

      {/* 2. Sub-Navigation Bar */}
      <nav style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 16px",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #e9ecef",
        fontSize: "12px",
        fontWeight: "600"
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#0c2340", textDecoration: "none" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Front Page</span>
        </Link>
        <span style={{
          backgroundColor: "#cc0000",
          color: "#ffffff",
          padding: "2px 8px",
          borderRadius: "3px",
          fontSize: "10px",
          fontWeight: "800",
          letterSpacing: "0.5px"
        }}>
          {article.category || "NEWS"}
        </span>
      </nav>

      {/* 3. Main Article Content */}
      <main className={styles.mainContainer}>
        <article className={styles.article}>
          <div className={styles.articleTopSection}>
            <div className={styles.categoryRow}>
              {article.category || "NEWS"} · {article.readTime || "4 MIN READ"}
            </div>

            <div className={styles.titleContainer}>
              <div className={styles.redAccentBar}></div>
              <h1 className={styles.articleTitle}>
                {article.title}
              </h1>
            </div>

            <div className={styles.articleMeta}>
              <div className={styles.metaUpdateRow}>
                <span>{article.updateDate || "UPDATED OCT 13, 2026"}</span>
                <span className={styles.metaChevron}>▼</span>
              </div>
              <div className={styles.metaAuthorRow}>
                <span className={styles.authorPrefix}>By </span>
                <span className={styles.authorLink}>{article.author || "Andrea Margolis"}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className={styles.imageSection}>
            <div className={styles.articleImageWrap}>
              <img
                src={article.img}
                alt={article.title}
                className={styles.articleImage}
              />
            </div>
            {article.caption && (
              <div style={{
                padding: "8px 16px 14px 16px",
                fontSize: "12px",
                color: "#595959",
                lineHeight: "1.4",
                borderBottom: "1px solid #f0f0f0"
              }}>
                {article.caption}
              </div>
            )}
          </div>

          {/* Article Body */}
          <div className={styles.articleBody}>
            {article.lead && (
              <p className={styles.articleLead}>{article.lead}</p>
            )}

            {article.paragraphs?.map((p, idx) => {
              if (p.startsWith("'He was in our pictures'") || p.startsWith("Another couple who were")) {
                return (
                  <div key={idx} className={styles.quoteBox}>
                    <p className={styles.quoteText} style={{ fontStyle: "normal" }}>{p}</p>
                  </div>
                );
              }
              if (p.includes("Atlanta Public Schools extends its deepest condolences")) {
                return (
                  <div key={idx} className={styles.clarificationBox}>
                    <div className={styles.clarificationHeader}>Statement from Atlanta Public Schools</div>
                    <p className={styles.articleP} style={{ marginBottom: 0 }}>{p}</p>
                  </div>
                );
              }
              return (
                <p key={idx} className={styles.articleP}>{p}</p>
              );
            })}

            {/* Red Accent Divider */}
            <div className={styles.redDividerBlock}></div>

            {/* Social Share Buttons */}
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
                {otherArticles.map((item) => (
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

      {/* 5. Loading Overlay */}
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
