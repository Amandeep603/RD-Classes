import React from "react";

/**
 * LaurelWreath inline SVG component
 * Flanks the featured student's head with golden-orange laurel branches
 * Gradient: #FFB21E -> #E8730A
 */
export default function LaurelWreath({ className = "" }) {
  return (
    <svg
      viewBox="0 0 280 240"
      className={`w-full h-full pointer-events-none overflow-visible ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="laurelGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#E8730A" />
          <stop offset="100%" stopColor="#FFB21E" />
        </linearGradient>
      </defs>

      {/* Left Branch Stem */}
      <path
        d="M 62 215 C 32 155 36 82 72 26"
        stroke="url(#laurelGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Left Leaves */}
      <path d="M 60 208 C 40 200 32 184 42 176 C 52 182 58 196 60 208 Z" fill="url(#laurelGrad)" />
      <path d="M 58 190 C 68 180 80 184 78 197 C 70 197 61 192 58 190 Z" fill="url(#laurelGrad)" />
      <path d="M 52 174 C 30 164 24 147 34 138 C 44 144 50 160 52 174 Z" fill="url(#laurelGrad)" />
      <path d="M 50 157 C 62 146 74 150 72 164 C 64 164 54 160 50 157 Z" fill="url(#laurelGrad)" />
      <path d="M 44 140 C 20 127 16 110 28 100 C 38 107 44 124 44 140 Z" fill="url(#laurelGrad)" />
      <path d="M 43 122 C 56 110 68 114 66 128 C 58 128 48 124 43 122 Z" fill="url(#laurelGrad)" />
      <path d="M 42 104 C 18 90 16 72 30 62 C 40 70 44 87 42 104 Z" fill="url(#laurelGrad)" />
      <path d="M 43 86 C 58 72 70 76 68 90 C 58 90 48 87 43 86 Z" fill="url(#laurelGrad)" />
      <path d="M 46 70 C 24 52 26 34 42 24 C 50 34 51 52 46 70 Z" fill="url(#laurelGrad)" />
      <path d="M 52 52 C 68 38 80 42 76 56 C 66 56 58 52 52 52 Z" fill="url(#laurelGrad)" />
      <path d="M 62 36 C 45 21 51 7 65 3 C 71 13 69 27 62 36 Z" fill="url(#laurelGrad)" />
      <path d="M 72 26 C 85 13 95 19 91 31 C 82 31 75 27 72 26 Z" fill="url(#laurelGrad)" />

      {/* Right Branch Stem */}
      <path
        d="M 218 215 C 248 155 244 82 208 26"
        stroke="url(#laurelGrad)"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Right Leaves */}
      <path d="M 220 208 C 240 200 248 184 238 176 C 228 182 222 196 220 208 Z" fill="url(#laurelGrad)" />
      <path d="M 222 190 C 212 180 200 184 202 197 C 210 197 219 192 222 190 Z" fill="url(#laurelGrad)" />
      <path d="M 228 174 C 250 164 256 147 246 138 C 236 144 230 160 228 174 Z" fill="url(#laurelGrad)" />
      <path d="M 230 157 C 218 146 206 150 208 164 C 216 164 226 160 230 157 Z" fill="url(#laurelGrad)" />
      <path d="M 236 140 C 260 127 264 110 252 100 C 242 107 236 124 236 140 Z" fill="url(#laurelGrad)" />
      <path d="M 237 122 C 224 110 212 114 214 128 C 222 128 232 124 237 122 Z" fill="url(#laurelGrad)" />
      <path d="M 238 104 C 262 90 264 72 250 62 C 240 70 236 87 238 104 Z" fill="url(#laurelGrad)" />
      <path d="M 237 86 C 222 72 210 76 212 90 C 222 90 232 87 237 86 Z" fill="url(#laurelGrad)" />
      <path d="M 234 70 C 256 52 254 34 238 24 C 230 34 229 52 234 70 Z" fill="url(#laurelGrad)" />
      <path d="M 228 52 C 212 38 200 42 204 56 C 214 56 222 52 228 52 Z" fill="url(#laurelGrad)" />
      <path d="M 218 36 C 235 21 229 7 215 3 C 209 13 211 27 218 36 Z" fill="url(#laurelGrad)" />
      <path d="M 208 26 C 195 13 185 19 189 31 C 198 31 205 27 208 26 Z" fill="url(#laurelGrad)" />
    </svg>
  );
}
