## The Freedom DS

Freedom Design System is developed using @stitches and @radix.

Is a component library made initialy for React, and the goal is to accomplish the best practices of the market such as:

Acessbility
Testing
Framework agnostic CSS

It is composed of 3 different libraries

1 - Web
This library contains all the React configuration for web projects and concerns only about web applications development.

```sh
pnpm install
pnpm run build --watch
```

2 - Styles
This library is framework agnostic and contains all the styles of the design system. It may be used with any other library that support stitches CSS Core. In this case the web package is the one generating the tokens used in this styles. Although it can be attached to any other styling library, just ensuring that the tokens are matching.

```sh
pnpm install
pnpm run build --watch
```

3 - Components
This library contains the web components in React, made using the other two libraries above.

```sh
pnpm install
pnpm run build --watch
```

And we also have a storybook seted on the storybook folder

```sh
pnpm install
pnpm run storybook
```

The goal is to publish these packages on NPM on the long term, but for now, you can just clone the project.
