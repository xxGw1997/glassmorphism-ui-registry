# AGENTS.md - Developer Guide for glassmorphism-ui-registry

## Project Overview

React + TypeScript + Vite project with Cloudflare Pages deployment. Glassmorphism UI component library built on Base UI with Tailwind CSS v4.

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check with TypeScript and build |
| `npm run lint` | Run ESLint on all TypeScript/TSX files |
| `npm run preview` | Build and preview production build |
| `npm run deploy` | Build and deploy to Cloudflare Pages |
| `npm run cf-typegen` | Generate Cloudflare Workers types |

### Running Tests

**Note:** No test framework currently configured. To add tests:

1. Install Vitest: `npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom`
2. Add to package.json: `"test": "vitest", "test:run": "vitest run"`
3. Run single test: `npm test run src/components/ui/button.test.tsx`
4. Run by pattern: `npm test run -- --grep "Button"`

## Code Style Guidelines

### Imports

Group in order: external libraries → internal components → CSS. Use named exports:
```typescript
import { useState } from "react";
import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Button from "./ui/button";
```

### TypeScript

- **Strict mode enabled** in tsconfig.app.json
- Use `type` for simple aliases, `interface` for object shapes
- Use `VariantProps` from class-variance-authority:
```typescript
interface ButtonProps
  extends useRender.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}
```

### Naming Conventions

- **Components**: PascalCase (`Button`, `CardHeader`)
- **Files**: kebab-case (`button.tsx`, `card.tsx`)
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE

### Component Structure

```typescript
import { mergeProps, useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const componentVariants = cva("base classes", {
  variants: {
    variant: { default: "variant classes", primary: "primary classes" },
    size: { sm: "size-sm", default: "size-default", lg: "size-lg" },
  },
  defaultVariants: { variant: "default", size: "default" },
});

interface Props extends useRender.ComponentProps<"element">, VariantProps<typeof componentVariants> {}

export default function Component(props: Props) {
  const mergedProps = mergeProps(props, {
    className: twMerge(componentVariants({ variant: props.variant, size: props.size }), props.className),
  });
  return useRender({ defaultTagName: "element", render: props.render, props: mergedProps });
}
```

### CSS and Styling

- Tailwind CSS v4 with CSS-first configuration
- Define theme variables in `src/index.css` using `@theme` block
- Use `@layer components` for custom classes
- Use `.glass-morph` class for glassmorphism effects

### React Patterns

- Functional components with hooks
- `useRef` for refs that don't trigger re-renders
- Clean up side effects in `useEffect` return
- Explicit type for union types: `useState<"starter" | "pro">("starter")`

### Accessibility

- Include `aria-label` for icon-only buttons
- Use semantic HTML elements
- Ensure form elements have associated labels

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── home.tsx      # Main demo page
│   ├── nav.tsx       # Navigation
│   └── theme-providers.tsx
├── App.tsx           # Root component
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## Linting

ESLint configured with `@eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`. Run: `npm run lint`

## Type Checking

TypeScript strict mode enforced. Run: `npx tsc -b`

## Cloudflare Deployment

Uses `@cloudflare/vite-plugin`. Worker configured in `wrangler.jsonc`. Run `npm run deploy` to deploy; types generated in `worker-configuration.d.ts`.
