import { Link } from 'react-router-dom'
import { getAllPosts } from '../data/posts'
import Reveal from '../components/Reveal'

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-cream pt-20">
        <div className="text-center px-6 max-w-3xl hero-animate">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-6 text-bronze-dark font-raleway">The Archive</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-brown leading-[1.1] mb-8">
            Blog
          </h1>
          <p className="text-text-light text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Thoughts on nutrition, training, mindset, and everything in between.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {posts.map((post, i) => (
              <Reveal key={post.slug} variant="fadeUp" delay={i * 120}>
                <Link to={`/blog/${post.slug}`} className="group block">
                  <article>
                    <div className="overflow-hidden mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-bronze-dark font-raleway">{post.category}</span>
                      <span className="text-border text-xs">&bull;</span>
                      <span className="text-text-light text-xs">{post.date}</span>
                    </div>
                    <h2 className="font-serif text-xl md:text-2xl text-dark-brown mb-3 group-hover:text-bronze-dark transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-text-light text-sm leading-[1.8]">
                      {post.excerpt}
                    </p>
                    <span className="inline-block mt-4 text-[11px] tracking-[0.15em] uppercase text-bronze-dark font-raleway relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-bronze after:transition-all after:duration-300 group-hover:after:w-full pb-0.5">
                      Read More &rarr;
                    </span>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
