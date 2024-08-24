import type { Metadata } from "next";

import styles from './page.module.css'

export const metadata: Metadata = {
  title: "Blog Page",
  description: "This is a blog page!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={styles.page}>
      <div className={styles.header}>
      Blog Layout
      </div>
      <div className={styles.children}>
        {children}
      </div>
    </section>
  );
}
