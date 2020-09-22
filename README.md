# WhosFree App Front-End

WhosFree App Front end code 

## (1) Architecture Overview

- HTML: Using Jekyll to generate static site
- CSS: Using sass and gulp to compile & minify
- JS: For non-react page, using TypeScript and gulp & rollup to compile & minify
- React: Using TypeScript and Webpack

## (2) Local Dev Environment Setup

- Ruby: ~> 2.6.6
- Node.js: ~> 12.14

1. Install Jekyll after installing Ruby

```bash
gem install bundler jekyll
```

2. Run npm install after install Node.js for both code and react projects

```bash
cd code
npm i
cd ..

cd react
npm i
```

## (3) Folder Structure

```bash
_include # this is where partial html fragments are defined 
_layouts # this is where Jekyll layouts are defined
_site # not commited, jekyll generate static site to this folder
assets # static assests - where react bundle, css bundle, js bundles are pushed. Images are directly added and source controlled
code # where we develop css and js. Bundle will be pushed to assets/js and assets/css folders
prototype # where we use it to prototype front end look
react # where we develop react. Bundle will be pushed to assets/js folder 

404.html # error page
index.html # entrypoint, using default template
*.html # other pages
```

## (4) Build

There are 3 steps to build the Jekyll site.

1. Build js and css bundle from /code
2. Build react bundle from /react
3. Build Jekyll site

```
cd code
npm run deploy:prod
cd ..
cd react
npm run build
cd ..
jekyll build 

jekyll serve or bundle exec jekyll serve
```

# (5) Deployment

Using github action to push to git page.