"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Post {
  title: string;
  brief: string;
  publishedAt: string;
  url: string;
  slug: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `
          {
            publication(host: "blog.aarogyaojha.com.np") {
              posts(first: 3) {
                edges {
                  node {
                    title
                    brief
                    publishedAt
                    url
                    slug
                  }
                }
              }
            }
          }
        `;

        const response = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();
        const fetchedPosts = result.data?.publication?.posts?.edges?.map((edge: any) => edge.node) || [];
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <article className="blog active">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        {loading ? (
          <p style={{ color: "var(--light-gray)", marginBottom: "20px" }}>Loading posts...</p>
        ) : posts.length > 0 ? (
          <ul className="blog-posts-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", listStyle: "none", padding: 0 }}>
            {posts.map((post, index) => (
              <motion.li
                key={post.slug}
                className="blog-post-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -10px rgba(0, 255, 234, 0.2)",
                  borderColor: "var(--orange-yellow-crayola)",
                }}
                style={{
                  background: "var(--border-gradient-onyx)",
                  padding: "20px",
                  borderRadius: "16px",
                  border: "1px solid var(--jet)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div style={{ position: "absolute", inset: "1px", background: "var(--bg-gradient-jet)", borderRadius: "inherit", zIndex: -1 }}></div>
                
                <time dateTime={post.publishedAt} style={{ fontSize: "13px", color: "var(--light-gray)", marginBottom: "10px", display: "block" }}>
                  {formatDate(post.publishedAt)}
                </time>
                <h3 className="h3 blog-item-title" style={{ fontSize: "18px", marginBottom: "10px", lineHeight: "1.3" }}>
                  <a href={post.url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--white)", textDecoration: "none" }}>
                    {post.title}
                  </a>
                </h3>
                <p className="blog-text" style={{ color: "var(--light-gray)", fontSize: "15px", lineHeight: "1.6", flex: 1, marginBottom: "20px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {post.brief}
                </p>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--orange-yellow-crayola)",
                    fontSize: "14px",
                    fontWeight: "600",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    marginTop: "auto",
                    textDecoration: "none"
                  }}
                >
                  Read &rarr;
                </a>
              </motion.li>
            ))}
          </ul>
        ) : (
          <div style={{ padding: "30px", background: "var(--border-gradient-onyx)", borderRadius: "16px", border: "1px solid var(--jet)", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{ position: "absolute", inset: "1px", background: "var(--bg-gradient-jet)", borderRadius: "inherit", zIndex: -1 }}></div>
            <p style={{ color: "var(--light-gray)", fontSize: "16px" }}>Writing coming soon — follow on Hashnode</p>
          </div>
        )}

        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <a
            href="https://blog.aarogyaojha.com.np"
            target="_blank"
            rel="noopener noreferrer"
            className="form-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "12px 24px",
              width: "max-content",
              margin: "0 auto",
            }}
          >
            <span>View all posts &rarr;</span>
          </a>
        </div>
      </section>
    </article>
  );
};

export default Blog;
