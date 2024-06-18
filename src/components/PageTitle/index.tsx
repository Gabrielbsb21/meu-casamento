import React from 'react';
import Link from 'next/link';
import styles from './style.module.css';

interface PageTitleProps {
  pageTitle: string;
  pagesub: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ pageTitle, pagesub }) => {
  return (
    <section className={styles.page_title}>
      <div className="container mx-auto px-4">
        <div className={styles.row}>
          <div className="flex justify-center w-full">
            <div className="text-center">
              <h2 className={styles.title}>{pageTitle}</h2>
              <ol className="flex justify-center">
                <li className={styles.item}>
                  <Link href="/home">Home</Link>
                </li>
                <li className={styles.item}><span>{pagesub}</span></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
