import instagramScreenshot from "@/assets/instagram-screenshot.png";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5562993433548";

const InstagramPhoneMockup = () => (
  <div className="hidden lg:flex items-center justify-center relative">
    <div className="relative animate-float">
      {/* Shadow beneath */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-6 bg-primary/10 rounded-full blur-xl" />

      {/* Phone body */}
      <div className="relative w-[280px] rounded-[2.5rem] border-[6px] border-foreground/20 bg-black shadow-2xl shadow-black/50 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20" />

        {/* Screen content */}
        <div className="relative w-full aspect-[9/19.5] overflow-hidden rounded-[2rem]">
          <img
            src={instagramScreenshot}
            alt="Perfil Instagram @gyntecheletricamob"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Floating Instagram CTA */}
      <a
        href="https://www.instagram.com/gyntecheletricamob"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -bottom-2 -right-4 z-30 flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse-glow"
        style={{ background: "linear-gradient(135deg, #405de6, #833ab4, #c13584, #e1306c, #fd1d1d, #f56040)" }}
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
        @gyntecheletricamob
      </a>
    </div>
  </div>
);

export default InstagramPhoneMockup;
