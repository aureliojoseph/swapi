## Introduction

The Star Wars Characters App is a React-based application developed using
Next.js. It fetches data from Star Wars API - Swapi - to display Star Wars
characters and allows users to interact with its data.

## Design and Architecture

The application was designed with Next.js, React's recommended framework.

Here are the used features:

### Data Source API

Stars Wars Characters API:

[https://swapi.dev](https://swapi.dev)

### Images/Photos Placeholder

[https://picsum.photos/](https://picsum.photos/)

### Design Source

[Figma](https://www.figma.com/file/5CMAkR0A4OHSS83xjIiShv/CloudWalk-FrontEnd-test?type=design&node-id=1-2&mode=design&t=otdkyhu2C3PXANEH-0)

### Styling

#### [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)

#### [Sass](https://nextjs.org/docs/app/building-your-application/styling/sass)

#### [React Icons Library](https://react-icons.github.io/react-icons/)

### Testing

#### [Jest](https://jestjs.io/docs/getting-started)

#### [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Accessibility and Good Practices

### Contrast Ratio

To ensure an accessible design, I left comments in the style files, highlighting
the design system provided and immediately after, my suggestions for good
accessibility practices.

For securing accessibility I used
[Color Contrast Checker](https://coolors.co/contrast-checker/112a46-acc8e5) and
to adapt the system colors, I used
[Tint & Shade Generator](https://maketintsandshades.com/)

### Responsiveness

As required, I defined responsive layout, ensuring Mobile support and
accessibility, defining common breakpoints for media queries, down to Mobile
Devices with [`min-width:280px`].

### Bonus Features

I included subtle animations to focus attention, when the user hovers the
images.

Also, implemented Dark x Light mode using
[Next-Themes Library](https://www.npmjs.com/package/next-themes?activeTab=readme.)

## Prerequisites

To run the application, you need to have Node.js installed on your system. You
can follow the instructions on the [Node.js](https://nodejs.org/en) official
download page to install Node.js.

## Getting Started

First, clone this [repository](https://github.com/aureliojoseph/swapi):

#### https://github.com/aureliojoseph/swapi.git

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## How to Use

Once the server is running, navigate to
[http://localhost:3000](http://localhost:3000) in your web browser to view the
application.

The app starts by presenting the page with an Unleash the Force button. Click it
and, by default, the app should display two rows - depending on viewport size -
of Star Wars characters data. You can filter these characters by their
"Homeworld" using the filter option. To reset the filter, click the Clear All
button.

Click the Load More button to display more characters, and Back to Top button to
scroll back to the top of the page when all characters are shown.

You can also switch between Dark and Light modes by clicking on the icon in the
top right corner of the page, in the navigation bar.

## Improvement Opportunities

### Image/Photos Resources

Since the application required the use of an image generator, this impacted the
performance of the page. For instance, delaying the Largest Contentful Paint
(LCP). I suggest the use of static images stored, for example, in an array.

Also, the original design was to render the page with all the requested data on
first render, which was causing bad performance as the page was taking too long
to load. It would be an improvement suggestion, but I decided to implement a
button for the user to make the request after the page loads.

Finally, I setup the basic configuration for testing. Unfortunately, I was
unable to implement some tests without hurting the project delivery deadline.
Therefore, testing with Jest and React Testing Library remains an opportunity
for improvement.

## This project was Deployed on [Vercel](https://vercel.com/)
