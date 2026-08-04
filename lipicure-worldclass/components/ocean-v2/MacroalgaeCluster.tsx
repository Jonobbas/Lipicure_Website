'use client';

export default function MacroalgaeCluster() {
  return (
    <div className="macroalgae-cluster" aria-hidden="true">
      <svg viewBox="0 0 260 220" role="presentation">
        <defs>
          <linearGradient id="macroalgae-frond" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#2c5f58" />
            <stop offset="55%" stopColor="#4f8a76" />
            <stop offset="100%" stopColor="#87b59a" />
          </linearGradient>

          <linearGradient id="macroalgae-frond-dark" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#193f3b" />
            <stop offset="100%" stopColor="#527f68" />
          </linearGradient>
        </defs>

        <ellipse
          cx="142"
          cy="198"
          rx="88"
          ry="18"
          fill="rgba(8, 32, 37, 0.48)"
        />

        <g className="macroalgae-frond macroalgae-frond-one">
          <path
            d="M120 196 C105 160, 114 124, 94 88 C84 70, 91 46, 108 25"
            fill="none"
            stroke="url(#macroalgae-frond)"
            strokeWidth="13"
            strokeLinecap="round"
          />
          <path
            d="M104 136 C76 126, 62 108, 58 88"
            fill="none"
            stroke="url(#macroalgae-frond)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M100 105 C126 92, 137 75, 139 55"
            fill="none"
            stroke="url(#macroalgae-frond)"
            strokeWidth="9"
            strokeLinecap="round"
          />
        </g>

        <g className="macroalgae-frond macroalgae-frond-two">
          <path
            d="M145 197 C151 163, 140 138, 158 103 C170 80, 167 55, 156 34"
            fill="none"
            stroke="url(#macroalgae-frond-dark)"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M153 146 C180 132, 193 111, 194 90"
            fill="none"
            stroke="url(#macroalgae-frond-dark)"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M155 108 C135 96, 126 79, 126 62"
            fill="none"
            stroke="url(#macroalgae-frond-dark)"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>

        <g className="macroalgae-frond macroalgae-frond-three">
          <path
            d="M171 196 C183 170, 181 143, 198 120 C211 101, 215 79, 208 60"
            fill="none"
            stroke="url(#macroalgae-frond)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M194 134 C218 124, 228 108, 230 92"
            fill="none"
            stroke="url(#macroalgae-frond)"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
