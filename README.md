# performance-budget-nextjs

When you start to improve the performance in any application, is very difficult to mantein this values, because new features
is adding constantly and new packages from npm if you don't have a validation to check the current performance very often, the value is decrease similar when you improve the accessibility, one month later the accessibility decrease.

## How to improve this pain?

The first step is create a performance budget, is a way to prevent the application decrease the performance, It can apply a js, images, css, metrics of core web vitals

The example is for Next.js applications but is similar for any framework 

## Libraries

- [bundlesize](https://www.npmjs.com/package/bundlesize) Library to allows check the current size of your bundle and define a threshold to limit if exceed

- [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer) Wrapper of webpack-bundle-analyzer for Next.js to analyze the current bundle

- [@lhci/cli](https://www.npmjs.com/package/@lhci/cli) CI for lighthouse to apply a performance budget with your current metrics to check
