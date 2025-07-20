**HOW TO SET UP REACT PROJECT**	
		**Quick guide**
using vs code (recommended)

1. Scalfold a new next.js project with  TypeScrript and tailwindcss using(In your terminal): npx create-next-app@latest alx-project-0x01 --typescript

Note: * this will install all the necessary folders and file in alx-project-0x01 folder.
      * select NO for: use app router, create project inside src folder.

2. Navigate to your project directory (alx-project-0x01 in this case)

3. create directories: public/assets/images(where images will be stored),
 components/common/Button.tsx(where to create button component),
 components/common/PostCard.tsx(where to create post card component),
 components/layout/Header.tsx (where to create the header layout),
 components/layout/Footer.tsx where to create to create the footer component),
 pages/posts/index.tsx (where to create the post page. depends on what you want to create {Airbnb in this case}),
 pages/users/index.tsx (where to create you user pages. depends on what you want to create {Airbnb in this case}),
 styles/global.css (where tailwind will compile you styles)

4. In the root directory, delete the app folder created when installing next.js (why? because it will conflict with pages folder. the both are router. unless you want to use the default Turbopack and App Router folder which means no need creating pages folder anymore). **NOTE:** If you are having router conflict, run npm run dev -- --no-turbo in you terminal or go package.json and replace  "dev": "next dev --turbopack", in script collection to "dev": "next dev", .

5. In the styles/global.css, replace the content with: 
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

6. In the pages/index.tsx,replace the content with (doing so, you just create a home page with h1 tag saying "welcome page"):
	const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-7xl font-thin">Welcome Page</h1>
    </div>
  )
}

 export default Home;

7. In the tsconfig.json file, in the last line of compilerOptions function (Jus before plugins array) paste this line in it "forceConsistentCasingInFileNames": true, (why? Because next.js is case sensitive, so it will enable it to work in deferent browsers)

8. Install tailwind (version 3.4.1 recommended) :
	npm install -D tailwindcss@3.4.1 postcss autoprefixer

9. Go to postcss.config.json and replace the content with:
	export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

10. Go to tailwind.config.js and replace the content with:
	/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
};

11. Go to pages directory and create a file _app.tsx (you are you .tsx extension because your are using typScript for this project, if you are using javaScript, use .js extension. **note: This is like a wrapper for your entire app), replace the content with:
	import "../styles/globals.css"; // 👈 This connects your CSS!
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;

12. now run your app (port 3000 recommended which is the default anyways):
	npm run dev -- -p 3000 (npm run dev will still work)

		**Note: Incase you run into errors, do this:**
i. Uninstall tailwindcss:
	npm uninstall tailwindcss postcss autoprefixer

ii. Clear .next catches remove node_modueles with package-lock.json (more like you unstalled node from your project):
	$ rm -rf .next node_modules package-lock.json

iii. Install them both again:
		for tailwind:
	npm install -D tailwindcss@3.4.1 postcss autoprefixer
		initialize it:
	npx tailwindcss init
		
		for node:
	npm install

iv. Now, restart your app:
	npm run dev -- -p 3000
		

	**THREE WAYS TO SET UP REACT PROJECT*
Three steps to set up react with next.js.
**Note: Above, we used option 2 (create-react-app with TypeScript)

**1. Scaffolding a Project Using Next.js**
In your terminal, run: npx create-next-app@latest my-nextjs-app-name --typescript

**2. create-react-app with TypeScript:**
A popular tool for setting up a React project without additional features like SSR or SSG.
Command: npx create-react-app my-react-app --template typescript

**2. Vite:**
A fast build tool that supports both React and TypeScript, providing a lightweight and optimized development environment.
Command: npm create vite@latest my-vite-app --template react-ts

The scaffolded project will have a structure similar to this:
 my-nextjs-app-name/
 ├── pages/
 ├── public/
 ├── styles/
 ├── components/
 ├── tsconfig.json
 ├── next.config.js
 └── package.json

(**Note;** In Next.js, routing is based on the file system. For example, a file named about.tsx in the pages/ directory will automatically create a route /about.)

	**Components of a Next.js Project**
Understanding the components of a Next.js project is crucial for effective development. Here are the key components:

public/ Directory:

Used for static assets like images, fonts, and other files that need to be served directly to the client.
styles/ Directory:

Contains global and modular CSS files. You can customize your application’s styling here.
components/ Directory:

A place to store reusable components that can be used across multiple pages.
tsconfig.json:

The TypeScript configuration file, which specifies the TypeScript settings and compiler options.
next.config.js:

The configuration file for customizing Next.js settings, such as environment variables, Webpack configuration, and more.

**Why Choose Next.js? - Integrated Features:** Built-in SSR, SSG, and API routes. - SEO Benefits: Enhanced SEO through server-side rendering. - Flexibility: Allows both static and dynamic rendering within the same project. - Performance Optimization: Automatic code splitting and optimization.

**Installing Third-Party Dependencies**

**1. Installing Dependencies:**

Use npm or yarn to install packages. For example: npm install axios Or: yarn add axios

**2. Where to Find Dependencies:**

npm Registry: The most common place to find React and JavaScript packages.
GitHub: Explore open-source projects and libraries.
Awesome React: A curated list of React libraries and tools.

**3. Managing Dependencies:**

package.json: This file keeps track of all installed dependencies and scripts.
package-lock.json or yarn.lock: Locks the versions of installed packages to ensure consistent installs.

