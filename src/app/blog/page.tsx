import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Consejos, guías y experiencias de viaje por Macata Go.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-fg sm:text-4xl">Blog</h1>
          <p className="mt-3 text-fg-muted">
            Historias, consejos y guías para tu próximo viaje.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-border bg-bg-card transition-shadow hover:shadow-lg"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="aspect-[3/2] overflow-hidden">
                <Image
                  src={post.cover}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <time className="text-xs font-medium text-fg-subtle">
                  {new Date(post.date).toLocaleDateString("es-CL", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="mt-2 text-lg font-bold text-fg group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-fg-muted line-clamp-3">
                  {post.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
