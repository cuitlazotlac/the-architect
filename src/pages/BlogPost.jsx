import { useParams, Link, Navigate } from 'react-router-dom'
import { getPostBySlug, getAllPosts } from '../data/posts'
import Reveal from '../components/Reveal'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null
  const recentPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/80 via-dark-brown/30 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 lg:px-12 pb-16 pt-32 hero-animate">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-bronze-dark font-raleway">
              {post.category}
            </span>
            <span className="text-cream/40 text-xs">&bull;</span>
            <span className="text-cream/60 text-xs">{post.date}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.15]">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-cream">
        <article className="max-w-2xl mx-auto">
          {post.body.map((paragraph, i) => (
            <Reveal key={i} variant="fadeUp" delay={i < 3 ? i * 80 : 0}>
              <p className="text-text-light text-[15px] leading-[2] mb-6 last:mb-0">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </article>
      </section>

      {/* Author / Back */}
      <section className="px-6 lg:px-12 pb-16 bg-cream">
        <div className="max-w-2xl mx-auto border-t border-border pt-8">
          <Reveal variant="fadeUp">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-dark-brown text-sm font-medium">Jade Légaré</p>
                <p className="text-text-light text-xs mt-1">The Architect</p>
              </div>
              <Link
                to="/blog"
                className="text-[11px] tracking-[0.15em] uppercase text-bronze-dark font-raleway hover:text-dark-brown transition-colors duration-300"
              >
                &larr; All Posts
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="bg-cream-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
          {prevPost ? (
            <Link
              to={`/blog/${prevPost.slug}`}
              className="group p-8 lg:p-12 border-b md:border-b-0 md:border-r border-border/50 hover:bg-sage/20 transition-colors duration-500"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-text-light font-raleway">&larr; Previous</span>
              <h3 className="font-serif text-lg text-dark-brown mt-2 group-hover:text-bronze-dark transition-colors duration-300">
                {prevPost.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link
              to={`/blog/${nextPost.slug}`}
              className="group p-8 lg:p-12 text-right hover:bg-sage/20 transition-colors duration-500"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-text-light font-raleway">Next &rarr;</span>
              <h3 className="font-serif text-lg text-dark-brown mt-2 group-hover:text-bronze-dark transition-colors duration-300">
                {nextPost.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase mb-4 text-bronze-dark font-raleway">Keep Reading</p>
            <h2 className="font-serif text-3xl md:text-4xl text-dark-brown">Recent Posts</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((p, i) => (
              <Reveal key={p.slug} variant="fadeUp" delay={i * 120}>
                <Link to={`/blog/${p.slug}`} className="group block">
                  <div className="overflow-hidden mb-4">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-bronze-dark font-raleway">{p.category}</span>
                  <h3 className="font-serif text-lg text-dark-brown mt-2 group-hover:text-bronze-dark transition-colors duration-300">
                    {p.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
