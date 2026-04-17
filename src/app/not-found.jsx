"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6">
      {/* Soft Background Gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 text-center">
        {/* Animated Icon or Emoji */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-2xl bg-slate-50 p-4 shadow-sm border border-slate-100">
            <span className="text-6xl">🔍</span>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-8xl font-extrabold text-slate-900 tracking-tight mb-2">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-slate-700 mb-4">
          We’ve lost this page
        </h2>
        <p className="mx-auto max-w-sm text-slate-500 mb-10 text-lg leading-relaxed">
          The page you are looking for doesn't exist or has been moved to
          another URL.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200"
          >
            Back to Dashboard
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-all active:scale-95"
          >
            Retry Loading
          </button>
        </div>
      </div>

      {/* Subtle Support Text */}
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <p className="text-slate-400 text-sm">
          Need help?{" "}
          <Link href="/support" className="text-cyan-600 hover:underline">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
}
