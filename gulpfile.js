/* config */
import { folderName } from './current_site_dev.js'
let preprocessor = 'less', // Preprocessor (sass, less, styl); 'sass' also work with the Scss syntax in blocks/ folder.
	fileswatch   = 'html,htm,txt,json,md,woff2' // List of files extensions for watching & hard reload

/* imports */
import pkg from 'gulp'
const { gulp, src, dest, parallel, series, watch, task } = pkg

import browserSync   from 'browser-sync'
import bssi          from 'browsersync-ssi'
import ssi           from 'ssi'
import jsImport from 'gulp-js-import'
import webpackStream from 'webpack-stream'
import webpack       from 'webpack'
import TerserPlugin  from 'terser-webpack-plugin'
import gulpSass      from 'gulp-sass'
import htmlreplace 	 from 'gulp-html-replace'
import replace		 from 'gulp-replace'
import dartSass      from 'sass'
import sassglob      from 'gulp-sass-glob'
const  sass          = gulpSass(dartSass)
import less          from 'gulp-less'
import lessglob      from 'gulp-less-glob'
import styl          from 'gulp-stylus'
import stylglob      from 'gulp-noop'
import newer 		 from 'gulp-newer';
import webpConv		 from 'gulp-webp'
import postCss       from 'gulp-postcss'
import cssnano       from 'cssnano'
import autoprefixer  from 'autoprefixer'
import imagemin      from 'gulp-imagemin'
import changed       from 'gulp-changed'
import concat        from 'gulp-concat'
import {deleteAsync} from 'del'
import fs			 from 'fs'
import plumber from 'gulp-plumber'
// import terser from 'gulp-terser'
// import uglifyjs from 'gulp-uglify'


function browsersync() {
	browserSync.init({
		server: {
			baseDir: '.',
			middleware: bssi({ baseDir: '.', ext: '.html' }),
		},
		ghostMode: { clicks: false },
		notify: false,
		online: true,
	})
}

// работа со скриптами
function scripts() {
	return src([`modern-landings/${folderName}/app/js/*.js`, `!modern-landings/${folderName}/app/js/*.min.js`])
		.pipe(jsImport({hideConsole: true}))
		.pipe(concat('app.min.js'))
		.pipe(dest(`modern-landings/${folderName}/app/js`))
		.pipe(browserSync.stream())
}

// работа со стилями
function styles() {
	return src([`modern-landings/${folderName}/app/styles/${preprocessor}/*.*`, `!modern-landings/${folderName}/app/styles/${preprocessor}/_*.*`, `!modern-landings/${folderName}/app/styles/${preprocessor}/critical.${preprocessor}`])
		.pipe(eval(`${preprocessor}glob`)())
		.pipe(eval(preprocessor)({ 'include css': true }))
		.pipe(postCss([
			// autoprefixer({ grid: 'autoplace' }),
			cssnano({ preset: ['default', { discardComments: { removeAll: true } }] })
		]))
		.pipe(concat('app.min.css'))
		.pipe(dest(`modern-landings/${folderName}/app/css`))
		.pipe(browserSync.stream())
}

// перемещение стилей из файла critical.css в тег style в начале страницы
function criticalCss() {
	return src([`modern-landings/${folderName}/app/styles/${preprocessor}/critical.${preprocessor}`])
		.pipe(eval(`${preprocessor}glob`)())
		.pipe(eval(preprocessor)({ 'include css': true }))
		.pipe(postCss([
			cssnano({ preset: ['default', { discardComments: { removeAll: true } }] })
		]))
		.pipe(dest(`modern-landings/${folderName}/app/css`))
		.pipe(browserSync.stream())
}
function criticalCssInject(){
	return src(`modern-landings/${folderName}/dist/index.html`)
	.pipe(replace(/<link rel="stylesheet" href="css\/critical.css">/g, function() {
		var style = fs.readFileSync(`modern-landings/${folderName}/dist/css/critical.css`, 'utf8');
		return '<style>\n' + style + '\n</style>';
	}))
	.pipe(dest(`modern-landings/${folderName}/dist`));
}


// работа над изображениями
function images() {
	return src([`modern-landings/${folderName}/app/images/src/**/*`])
		.pipe(changed(`modern-landings/${folderName}/app/images/dist`))
		// .pipe(imagemin())
		.pipe(dest(`modern-landings/${folderName}/app/images/dist`))
		.pipe(webpConv({quality: 100}))
		.pipe(dest(`modern-landings/${folderName}/app/images/dist`))
		.pipe(browserSync.stream())
}

// перенос файлов из app в dist 
function buildcopy() {
	return src([
		`{modern-landings/${folderName}/app/js,modern-landings/${folderName}/app/css}/*.min.*`,
		`modern-landings/${folderName}/app/css/critical.css`,
		`modern-landings/${folderName}/app/images/**/*.*`,
		`!modern-landings/${folderName}/app/images/src/**/*`,
		`modern-landings/${folderName}/app/fonts/**/*`,
		`modern-landings/${folderName}/app/json/**/*`,
		`modern-landings/${folderName}/app/*.{jpg,png,svg}`,
	], { base: `modern-landings/${folderName}/app/` })
	.pipe(dest(`modern-landings/${folderName}/dist`))
}
async function buildhtml() {
	let includes = new ssi(`modern-landings/${folderName}/app/`, `modern-landings/${folderName}/dist/`, '/**/*.html')
	includes.compile()
	await deleteAsync(`modern-landings/${folderName}/dist/parts`, { force: true })
}

/* неумело сделанное версионирование файлов */
let versionNum = new Date(),
versionNumMonth = versionNum.getMonth(),
versionNumDay = versionNum.getDate(),
versionNumHours = versionNum.getHours(),
versionNumMin = versionNum.getMinutes(),
versionNumSec = versionNum.getSeconds();
versionNum = versionNumMonth.toString() + versionNumDay.toString() + versionNumHours.toString() + versionNumMin.toString() + versionNumSec.toString();

function cssFileVersion(){
	return src(`modern-landings/${folderName}/dist/css/app.min.css`)
	.pipe(concat(`app.min.${versionNum}.css`))
	.pipe(dest(`modern-landings/${folderName}/dist/css`))
}
function jsFileVersion(){
	return src(`modern-landings/${folderName}/dist/js/app.min.js`)
	.pipe(concat(`app.min.${versionNum}.js`))
	.pipe(dest(`modern-landings/${folderName}/dist/js`))
}
function filesVersionHtml(){
	return src(`modern-landings/${folderName}/dist/index.html`)
    .pipe(htmlreplace({
        'css': `css/app.min.${versionNum}.css`,
		'js': `js/app.min.${versionNum}.js`
    }))
    .pipe(dest(`modern-landings/${folderName}/dist/`));
};
async function deleteOldCss() {
	await deleteAsync(`modern-landings/${folderName}/dist/css/app.min.css`, { force: true })
}
async function deleteOldJs() {
	await deleteAsync(`modern-landings/${folderName}/dist/js/app.min.js`, { force: true })
}

/* очистка папки перед сборкой */
async function cleandist() {
	await deleteAsync(`modern-landings/${folderName}/dist/**/*`, { force: true })
}


/* вотчер */
function startwatch() {
	watch([`modern-landings/${folderName}/app/styles/${preprocessor}/**/*`,`common/**/*.less`], { usePolling: true }, parallel(styles, criticalCss))
	watch([`modern-landings/${folderName}/app/styles/${preprocessor}/**/*`,`common/**/*`, `!modern-landings/${folderName}/app/styles/${preprocessor}/**/*`,`common/**/*.less`], { usePolling: true }, parallel(styles, criticalCss)).on('change', browserSync.reload)
	watch([`modern-landings/${folderName}/app/js/**/*.js`, `!modern-landings/${folderName}/app/js/**/*.min.js`], { usePolling: true }, scripts)
	watch(`modern-landings/${folderName}/app/images/src/**/*`, { usePolling: true }, images)
	watch(`modern-landings/${folderName}/app/**/*.{${fileswatch}}`, { usePolling: true }).on('change', browserSync.reload)
}

/* экспорты */
export { scripts, styles, images }
export let assets = series(scripts, styles, images)
export let build = series(cleandist, images, scripts, styles, criticalCss, buildcopy, buildhtml, cssFileVersion, jsFileVersion, filesVersionHtml, deleteOldCss, deleteOldJs, criticalCssInject)
export default series(scripts, styles, images, parallel(browsersync, startwatch))