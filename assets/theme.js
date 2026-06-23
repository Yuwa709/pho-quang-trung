/* Tailwind theme — shared across all pages. Loaded immediately after the Tailwind CDN. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        paper:  '#FAF4EA',   // warm cream
        cream2: '#F3E7D2',   // elevated surface
        ink:    '#211913',   // warm near-black
        ink2:   '#5B4B3C',   // muted brown text
        brick:  '#B23A28',   // Hanoi brick red (primary)
        brickD: '#8C2B1D',   // deep brick
        broth:  '#D9A052',   // broth gold accent
        brothD: '#B97C2E',
        brothL: '#E8BE7C',   // light gold — AA-safe text on dark (brick/herb)
        herb:   '#3C5644',   // deep herb green
        herbD:  '#2C4233',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft':  '0 1px 2px rgba(43,28,18,.04), 0 8px 24px -8px rgba(140,43,29,.14)',
        'lift':  '0 2px 6px rgba(43,28,18,.06), 0 24px 48px -16px rgba(140,43,29,.22)',
        'float': '0 4px 10px rgba(43,28,18,.08), 0 40px 80px -24px rgba(140,43,29,.30)',
      },
      letterSpacing: { tightest: '-0.04em' },
    }
  }
};
