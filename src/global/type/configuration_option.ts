type ConfigurationOption =
{
  readonly yml?: boolean;
  readonly qwik?: boolean;
  readonly html?: boolean;
  readonly json?: boolean;
  readonly solid?: boolean;
  readonly astro?: boolean;
  readonly ignore?: string[];
  readonly jsxA11y?: boolean;
  readonly stylistic?: boolean;
  readonly typescript?: boolean;
};

export type { ConfigurationOption };