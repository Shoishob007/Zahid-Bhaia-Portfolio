## Table of Contents

- [Sections](#sections)
- [Built With](#built-with)
- [How to use](#how-to-use)
- [Contributing](#contributing)
- [Continuous Development](#continuous-development)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)
- [Show Your Support](#show-your-support)

## Sections

- Hero
- About
- Skills
- Experience
- Projects
- Education
- Certifications
- Contact

## Built With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) - For animations
- [Iconify](https://icon-sets.iconify.design/) - For icons
- [Lottie Files](https://lottiefiles.com/) - For illustrations

## How to use

###### To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js (v20.18.0)](https://nodejs.org/en/download/) (which comes with [yarn](https://yarnpkg.com) installed on your computer).

1. Fork this repository and clone the project

```bash
  git clone https://github.com/<YOUR USERNAME>/Zahid-Bhaia-Portfolio.git
```

2. Go to the project directory

```bash
  cd portfolio-website
```

3. Install dependencies

```bash
  yarn
```

4. Start the server

```bash
  yarn dev
```

- To change the content, edit `src/lib/content/`

- To change the **resume**, change `/public/resume.pdf` with your resume (name must be `resume.pdf`)

- To change the **About Section**, edit `src/containers/About.tsx`

- To change the theme, edit `src/styles/globals.css`

## Contributing

Remember, Good PR makes you a Good contributor!

1. Run the project locally, refer [how to use](#how-to-use).
2. Follow [Contributing Guidelines](/CONTRIBUTING.md).

## Continuous Development

- [ ] Case Study Page
- [x] Migrate to Next 13
- [ ] Migrate icons from iconify to lucid-icons
- [ ] Improve nav-link hover animation
- [ ] Add test cases
- [ ] Separate route (archive) for all the projects with filters
