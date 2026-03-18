# Setup Instructions: shadcn, Tailwind, and Typescript

Since your current project is a static HTML/JS project, you'll need to initialize a React environment to use the `animated-shader-hero.tsx` component.

## Step 1: Initialize Vite with React and TypeScript
Run the following command in your terminal:
```bash
npm create vite@latest . -- --template react-ts
```

## Step 2: Install Tailwind CSS
Follow the [Tailwind CSS Vite guide](https://tailwindcss.com/docs/guides/vite):
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Step 3: Initialize shadcn UI
Run the shadcn CLI to set up your project structure:
```bash
npx shadcn-ui@latest init
```

### Why `/components/ui`?
Shadcn follows a philosophy where UI components are owned by your project rather than being a hidden dependency. 
- **Customization**: You have full control over the code.
- **Consistency**: All base components reside in a predictable location.
- **Tailwind Integration**: Components are pre-styled with Tailwind utility classes that match your `tailwind.config.js`.

## Step 4: Add the Component
Once initialized, you can use the files provided in `components/ui/`.
