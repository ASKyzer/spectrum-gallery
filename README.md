# React + TypeScript + Vite + Comet Design System Demo

This project demonstrates the implementation and usage of the Comet Design System components library in a React application. It serves two main purposes:

1. Testing the Comet Design System library locally using the .tgz package
2. Showcasing different implementation approaches for Comet components:
   - Wrapping Comet components in React components (demonstrated in the homepage dashboard)
   - Direct usage of Comet components (shown in the support page form)

To learn more about Comet Design System, please see and clone the [Comet Design System repository](https://github.com/ASKyzer/comet-design)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Local build of Comet Design System (see [Comet Design System repository](https://github.com/ASKyzer/comet-design) for instructions)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ASKyzer/spectrum-gallery.git
cd spectrum-gallery
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Important Note About Assets

⚠️ **Required Step**: After installation, you need to copy the following assets from the Comet Design System package to this project:

1. Create the assets directory and copy all files:

```bash
mkdir -p src/assets
cp node_modules/@frigi/comet/dist/assets/Kyn-Bold.woff2 src/assets/
cp node_modules/@frigi/comet/dist/assets/Kyn-Regular.woff2 src/assets/
cp node_modules/@frigi/comet/dist/assets/ui.svg src/assets/
cp node_modules/@frigi/comet/dist/assets/wecons-helix.svg src/assets/
cp node_modules/@frigi/comet/dist/assets/wecons-circle.svg src/assets/
```

These assets are required for proper rendering of fonts and icons in the application. The files should be placed in the following structure:

```
src/
  assets/
    Kyn-Bold.woff2
    Kyn-Regular.woff2
    ui.svg
    wecons-helix.svg
    wecons-circle.svg
```
