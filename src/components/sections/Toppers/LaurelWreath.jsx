import React from "react";

/**
 * LaurelWreath inline SVG component
 * Flanks the featured student's head from shoulder level up to above the crown.
 * 7-8 pointed leaves per side along an arc.
 * Gradient: #FFB21E -> #E8730A with a lighter highlight edge (#FFE885).
 */
export default function LaurelWreath({ className = "" }) {
  return (
    <svg
      viewBox="0 0 300 260"
      className={`w-full h-full pointer-events-none overflow-visible ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="laurelGradFull" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#E8730A" />
          <stop offset="100%" stopColor="#FFB21E" />
        </linearGradient>
      </defs>

      {/* Left Branch Stem */}
      <path
        d="M 68 235 C 30 170 34 85 78 20"
        stroke="url(#laurelGradFull)"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      {/* Left Leaves (7 pairs/leaves along arc with highlight) */}
      <g fill="url(#laurelGradFull)" stroke="#FFE885" strokeWidth="0.8">
        <path d="M 66 226 C 42 216 34 198 46 188 C 58 196 64 212 66 226 Z" />
        <path d="M 64 205 C 76 193 88 198 86 213 C 76 213 67 207 64 205 Z" />
        <path d="M 57 186 C 31 174 24 154 36 144 C 48 151 55 170 57 186 Z" />
        <path d="M 55 166 C 70 152 84 157 81 173 C 71 173 60 169 55 166 Z" />
        <path d="M 48 146 C 20 131 16 111 30 100 C 42 108 48 128 48 146 Z" />
        <path d="M 47 125 C 63 111 77 116 74 132 C 64 132 53 127 47 125 Z" />
        <path d="M 46 104 C 18 88 16 67 32 56 C 44 65 48 85 46 104 Z" />
        <path d="M 48 83 C 65 67 79 72 76 88 C 65 88 54 84 48 83 Z" />
        <path d="M 52 64 C 26 44 28 24 46 13 C 56 24 57 44 52 64 Z" />
        <path d="M 58 44 C 76 28 90 33 85 49 C 74 49 65 44 58 44 Z" />
        <path d="M 68 26 C 49 10 56 -6 72 -11 C 79 0 77 16 68 26 Z" />
        <path d="M 78 18 C 93 4 105 11 100 25 C 90 25 82 20 78 18 Z" />
      </g>

      {/* Right Branch Stem */}
      <path
        d="M 232 235 C 270 170 266 85 222 20"
        stroke="url(#laurelGradFull)"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      {/* Right Leaves */}
      <g fill="url(#laurelGradFull)" stroke="#FFE885" strokeWidth="0.8">
        <path d="M 234 226 C 258 216 266 198 254 188 C 242 196 236 212 234 226 Z" />
        <path d="M 236 205 C 224 193 212 198 214 213 C 224 213 233 207 236 205 Z" />
        <path d="M 243 186 C 269 174 276 154 264 144 C 252 151 245 170 243 186 Z" />
        <path d="M 245 166 C 230 152 216 157 219 173 C 229 173 240 169 245 166 Z" />
        <path d="M 252 146 C 280 131 284 111 270 100 C 258 108 252 128 252 146 Z" />
        <path d="M 253 125 C 237 111 223 116 226 132 C 236 132 247 127 253 125 Z" />
        <path d="M 254 104 C 282 88 284 67 268 56 C 256 65 252 85 254 104 Z" />
        <path d="M 252 83 C 235 67 221 72 224 88 C 235 88 246 84 252 83 Z" />
        <path d="M 248 64 C 274 44 272 24 254 13 C 244 24 243 44 248 64 Z" />
        <path d="M 242 44 C 224 28 210 33 215 49 C 226 49 235 44 242 44 Z" />
        <path d="M 232 26 C 251 10 244 -6 228 -11 C 221 0 223 16 232 26 Z" />
        <path d="M 222 18 C 207 4 195 11 200 25 C 210 25 218 20 222 18 Z" />
      </g>
    </svg>
  );
}
