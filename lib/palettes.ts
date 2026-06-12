export interface PaletteTokens {
  paper: string;
  ink: string;
  accent: string;
}

export interface Palette {
  id: string;
  name: string;
  description: string;
  light: PaletteTokens;
  dark: PaletteTokens;
}

/** All palettes. To apply sitewide, change the theme import in globals.css. */
export const palettes: Palette[] = [
  {
    id: "vermillion",
    name: "Vermillion",
    description: "Warm editorial. Current default.",
    light: {
      paper: "oklch(0.972 0.006 80)",
      ink: "oklch(0.24 0.015 65)",
      accent: "oklch(0.52 0.17 30)",
    },
    dark: {
      paper: "oklch(0.21 0.012 65)",
      ink: "oklch(0.95 0.008 80)",
      accent: "oklch(0.68 0.16 35)",
    },
  },
  {
    id: "terminal",
    name: "Terminal",
    description: "Green phosphor on dark. Matches the cursor brand.",
    light: {
      paper: "oklch(0.965 0.008 145)",
      ink: "oklch(0.22 0.02 155)",
      accent: "oklch(0.52 0.16 145)",
    },
    dark: {
      paper: "oklch(0.17 0.02 155)",
      ink: "oklch(0.93 0.02 145)",
      accent: "oklch(0.72 0.19 145)",
    },
  },
  {
    id: "ink",
    name: "Ink",
    description: "Pure black and white. Blue accent like a link.",
    light: {
      paper: "oklch(0.99 0 0)",
      ink: "oklch(0.16 0 0)",
      accent: "oklch(0.48 0.2 255)",
    },
    dark: {
      paper: "oklch(0.16 0 0)",
      ink: "oklch(0.96 0 0)",
      accent: "oklch(0.68 0.15 250)",
    },
  },
  {
    id: "sage",
    name: "Sage",
    description: "Muted green on warm cream. Calm and organic.",
    light: {
      paper: "oklch(0.97 0.008 95)",
      ink: "oklch(0.26 0.03 140)",
      accent: "oklch(0.48 0.1 145)",
    },
    dark: {
      paper: "oklch(0.22 0.02 140)",
      ink: "oklch(0.94 0.01 95)",
      accent: "oklch(0.7 0.12 145)",
    },
  },
  {
    id: "cobalt",
    name: "Cobalt",
    description: "Cool gray paper, electric blue accent.",
    light: {
      paper: "oklch(0.97 0.006 250)",
      ink: "oklch(0.22 0.02 250)",
      accent: "oklch(0.5 0.2 265)",
    },
    dark: {
      paper: "oklch(0.19 0.02 250)",
      ink: "oklch(0.94 0.01 250)",
      accent: "oklch(0.7 0.18 265)",
    },
  },
  {
    id: "amber",
    name: "Amber",
    description: "Warm charcoal with golden cursor.",
    light: {
      paper: "oklch(0.975 0.01 85)",
      ink: "oklch(0.25 0.02 70)",
      accent: "oklch(0.62 0.17 75)",
    },
    dark: {
      paper: "oklch(0.2 0.015 70)",
      ink: "oklch(0.94 0.01 85)",
      accent: "oklch(0.78 0.16 80)",
    },
  },
];

export function paletteCss(palette: Palette): string {
  return `
    :root {
      --brand-paper: ${palette.light.paper};
      --brand-ink: ${palette.light.ink};
      --brand-accent: ${palette.light.accent};
    }
    .dark {
      --brand-paper: ${palette.dark.paper};
      --brand-ink: ${palette.dark.ink};
      --brand-accent: ${palette.dark.accent};
    }
  `;
}
