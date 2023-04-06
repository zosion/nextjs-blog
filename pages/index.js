import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter"
            >
              Blog Starter using markdown files
            </a>{" "}
            (
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://next-blog-starter.vercel.app/"
            >
              Demo
            </a>
            )
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress"
            >
              WordPress Example
            </a>{" "}
            (
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://next-blog-wordpress.vercel.app/"
            >
              Demo
            </a>
            )
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/vercel/next.js/tree/canary/examples/cms-datocms"
            >
              DatoCMS Example
            </a>{" "}
            (
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://next-blog-datocms.vercel.app/"
            >
              Demo
            </a>
            )
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/vercel/next.js/tree/canary/examples/cms-takeshape"
            >
              TakeShape Example
            </a>{" "}
            (
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://next-blog-takeshape.vercel.app/"
            >
              Demo
            </a>
            )
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/vercel/next.js/tree/canary/examples/cms-sanity"
            >
              Sanity Example
            </a>{" "}
            (
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://next-blog-sanity.vercel.app/"
            >
              Demo
            </a>
            )
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
