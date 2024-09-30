<div align="center"> 
  <img width="200" alt="sanity" src="https://github.com/user-attachments/assets/d21ef065-a8a0-4055-a56c-bf12a2f6d723">
  <h1>Sanity.io + NextJS Portfolio Site</h1>
  <p>A portfolio template built with <a href="https://nextjs.org">Next.js</a>, <a href="https://tailwindcss.com">Tailwind CSS</a> and <a href="https://sanity.io">Sanity.io</a> for content</p>
</div>

---

[![image](https://github.com/user-attachments/assets/20630596-2f59-4933-96a8-1dc05580b064)](https://react-portfolio-template-sarath.vercel.app/)
[Visit](https://react-portfolio-template-sarath.vercel.app/)

---

## Features

⚡️ Modern UI Design + Reveal Animations\
⚡️ Sanity CMS\
⚡️ One Page Layout\
⚡️ Styled with Tailwind\
⚡️ Fully Responsive\
⚡️ Well organized documentation

---

## Why do you need a portfolio? ☝️

- Professional way to showcase your work
- Increases your visibility and online presence
- Shows you’re more than just a resume

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

Also, you can use [Yarn](https://yarnpkg.com/) instead of NPM ☝️

---

## How To Use 🔧

From your command line, first clone Simplefolio:

```bash
# Clone the repository
$ git clone https://github.com/SarathAdhi/react-portfolio-template

# Move into the repository
$ cd react-portfolio-template

# Remove the current origin repository
$ git remote remove origin
```

After that, you can install the dependencies either using NPM or Yarn.

Using NPM: Simply run the below commands.

```bash
# Install dependencies
$ npm install

# Start the development server
$ npm run dev
```

Using Yarn: Be aware of that you'll need to delete the `package-lock.json` file before executing the below commands.

```bash
# Install dependencies
$ yarn

# Start the development server
$ yarn run dev
```

Once your server has started,

Visit http://localhost:3000 to see your site

Visit http://localhost:3000/studio to edit content

---

### Important files and folders

| File(s)                                                   | Description                                     |
| --------------------------------------------------------- | ----------------------------------------------- |
| [`sanity.config.ts`](sanity.config.ts)                    | Config file for Sanity Studio                   |
| [`sanity.client.ts`](sanity.cli.ts)             | Config file for Sanity CLI                      |
| [`studio`](<./src/app/studio/[[...index]]/page.tsx>)      | Where Sanity Studio is mounted                  |
| [`schemas`](./sanity/schema)                              | Where Sanity Studio gets its content types from |
| [`sanity.query.ts`](./sanity/lib/api.ts)                  | Where Sanity data is described and retrieved    |


---

## Deployment 📦

Once you finish your setup. You need to put your website online!

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Technologies used 🛠️

- [NextJS](https://nextjs.org/) - React Frontend Framework
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Sanity CMS](https://www.sanity.io/) - Headless CMS
- [AOS](https://github.com/michalsnik/aos) - Animate on scroll library

## Authors/Developers ✨

- **Sarath Adhithya** - [https://github.com/SarathAdhi](https://github.com/SarathAdhi)

## Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/3a029bfd-575c-41e5-8249-c864d482c2e5/deploy-status)](https://app.netlify.com/sites/the-simplefolio/deploys)

## License 📄

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
