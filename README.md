# :bookmark_tabs: Portfolio

<div>

<a href="https://gulpjs.com/" target="_blank">
<img src="https://img.shields.io/badge/gulp-4.0.2-CF4647?style=for-the-badge&logo=gulp">
</a>

<a href="https://sass-lang.com/" target="_blank">
<img src="https://img.shields.io/badge/sass-5.1.0-CC6699?style=for-the-badge&logo=Sass">
</a>

<a href="https://www.npmjs.com/package/autoprefixer" target="_blank">
<img src="https://img.shields.io/badge/Autoprefixer-8.0.0-DD3735?style=for-the-badge&logo=Autoprefixer">
</a>

<a href="https://browsersync.io/" target="_blank">
<img src="https://img.shields.io/badge/browser%20sync-2.27.7-ACEBB8?style=for-the-badge">
</a>

<a href="https://www.npmjs.com/package/gulp-clean-css" target="_blank">
<img src="https://img.shields.io/badge/clean%20css-4.3.0-F1CCAF?style=for-the-badge">
</a>

<a href="https://www.npmjs.com/package/gulp-file-include" target="_blank">
<img src="https://img.shields.io/badge/file%20include-2.3.0-1A5DE0?style=for-the-badge">
</a>

</div>

<p>

![GitHub repo size](https://img.shields.io/github/repo-size/mudaston/Portfolio?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/mudaston/Portfolio?style=for-the-badge)

</p>

This site is for practice only, this is not my real portfolio.

<br/>

## Demo

[https://mudaston.github.io/Portfolio/](https://mudaston.github.io/Portfolio/)

<br/>

## Screenshots

</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/64277973/180057776-9207056a-e4bf-4422-a3d3-57a9a47b59f5.jpg"
     width="800"
/>
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/64277973/180057877-0979603f-cf27-42bd-a644-98b1d6bba0e8.jpg"
     width="800"
/>
</p>

## System Requirements

- [git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/)

<br/>

## Run Locally

Clone the project

```bash
  git clone https://github.com/mudaston/Portfolio.git
```

Go to the project directory

```bash
  cd Portfolio
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  gulp
```

Open in a browser

```bash
  http://localhost:3000
```

<br/>

## Lessons Learned

How to switch site theme and move html blocks into separate files.

Splitting html into different folders is very handy because all you need to do is include an html block and import scss styles into the section.

You can create style and media query files in the same layout folder without having to search for them.

<br/>

## Additional

it would have been much better if I had known the [gulp-file-include](https://www.npmjs.com/package/gulp-file-include) library earlier
