import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-6 bg-indigo-950 px-8 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-6">
          {/* Left Section */}
          <div>
            <h2 className="mb-2 font-serif text-xl font-bold">
              Resume Builder
            </h2>
            <p className="max-w-xs text-sm leading-6 text-white/55">
              Create professional resumes in minutes with our intuitive builder.
              Land your dream job.
            </p>
          </div>

          {/* Right Section */}
          <div className="text-left sm:text-right">
            <p className="mb-1 text-xs text-white/40">Created by</p>
            <p className="text-sm font-semibold">Maneesh</p>
            <p className="mb-4 text-sm text-white/65">maneeshkumaru721@gmail.com</p>

            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-bold tracking-wide shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/40"
            >
              <Zap size={16} strokeWidth={2.5} />
              Built for Digital Heroes
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-5">
          <p className="text-xs text-center text-white/35">
            © 2026 Resume Builder. Empowering careers worldwide.
          </p>

          <p className="text-xs text-white/35">
            Built with ❤️ for Digital Heroes
          </p>
        </div>
      </div>
    </footer>
  );
}
