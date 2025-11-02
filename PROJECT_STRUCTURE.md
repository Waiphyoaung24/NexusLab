# NexusLab Project Structure

This document outlines the standardized directory structure for the NexusLab project.

## Directory Structure

```
nexuslab/
├── app/                    # Next.js App Router (pages and layouts)
│   ├── about/
│   ├── layout.tsx
│   └── page.tsx
├── components/             # Reusable React components
│   ├── ui/                # Basic UI components
│   ├── layout/            # Layout components
│   ├── forms/             # Form components
│   ├── common/            # Common shared components
│   └── README.md
├── hooks/                  # Custom React hooks
│   ├── use-local-storage.ts
│   └── index.ts
├── lib/                    # Utilities and configurations
│   ├── utils/             # Utility functions
│   ├── validations/       # Schema validations
│   ├── api/               # API configurations
│   ├── constants/         # Application constants
│   └── README.md
├── types/                  # TypeScript type definitions
│   └── index.ts
├── styles/                 # Styling files
│   ├── globals/           # Global styles
│   └── components/        # Component-specific styles
├── public/                 # Static assets
│   ├── images/            # Image files
│   ├── icons/             # Icon files (SVG, etc.)
│   └── fonts/             # Font files
├── config/                 # Application configuration
│   └── site.ts
└── package.json
```

## Guidelines

### Components (`/components`)
- Organize by functionality (ui, layout, forms, common)
- Each component should have its own directory for complex components
- Use TypeScript interfaces for all props
- Follow PascalCase naming convention

### Hooks (`/hooks`)
- Custom React hooks for shared logic
- Prefix with `use` following React conventions
- Export through index.ts for clean imports

### Lib (`/lib`)
- Utility functions should be pure and testable
- API configurations and helpers
- Validation schemas
- Application constants

### Types (`/types`)
- Global TypeScript interfaces and types
- Organize by domain when the file grows large
- Export through index.ts

### Styles (`/styles`)
- Global styles in `/globals`
- Component-specific styles in `/components`
- Use CSS modules for component styles

### Public (`/public`)
- Organized by asset type (images, icons, fonts)
- Reference with absolute paths from root

### Config (`/config`)
- Application-wide configuration
- Environment-specific settings
- Site metadata and constants

## Import Conventions

```typescript
// Components
import { Button } from '@/components/ui'
import { Header } from '@/components/layout'

// Hooks
import { useLocalStorage } from '@/hooks'

// Utils
import { cn } from '@/lib/utils'

// Types
import type { User, ApiResponse } from '@/types'

// Config
import { siteConfig } from '@/config/site'
```

## Best Practices

1. **Consistent Naming**: Use PascalCase for components, camelCase for functions
2. **Index Files**: Use index.ts files for clean exports
3. **Type Safety**: Define TypeScript interfaces for all props and data
4. **Documentation**: Include README files for complex directories
5. **Separation of Concerns**: Keep components, logic, and styles separated
