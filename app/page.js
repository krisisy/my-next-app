import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div>
          <h1>Welcome to My Next.js App!</h1>
          <p>This is the homepage customized by Khristine.</p>
        </div>

        <div className={styles.ctas}>
          <Link
            className={styles.primary}
            href="/about"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            About
          </Link>
          
        </div>
      </main>

    </div>
  );
}
