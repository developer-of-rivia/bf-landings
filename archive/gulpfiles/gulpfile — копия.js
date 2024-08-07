let folderName = 'botfaqtor';

let preprocessor = 'less', // Preprocessor (sass, less, styl); 'sass' also work with the Scss syntax in blocks/ folder.
	fileswatch   = 'html,htm,txt,json,md,woff2' // List of files extensions for watching & hard reload

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
import rsync         from 'gulp-rsync'
import {deleteAsync} from 'del'
import fs			 from 'fs'
import sftp	from 'gulp-sftp-up4'
import sftpClean from 'gulp-sftp-clean'


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
	return src([`${folderName}/app/js/*.js`, `!${folderName}/app/js/*.min.js`])
		.pipe(jsImport({hideConsole: true}))
		.pipe(concat('app.min.js'))
		.pipe(dest(`${folderName}/app/js`))
		.pipe(browserSync.stream())
}

// работа со стилями
function styles() {
	return src([`${folderName}/app/styles/${preprocessor}/*.*`, `!${folderName}/app/styles/${preprocessor}/_*.*`, `!${folderName}/app/styles/${preprocessor}/critical.${preprocessor}`])
		.pipe(eval(`${preprocessor}glob`)())
		.pipe(eval(preprocessor)({ 'include css': true }))
		.pipe(postCss([
			// autoprefixer({ grid: 'autoplace' }),
			cssnano({ preset: ['default', { discardComments: { removeAll: true } }] })
		]))
		.pipe(concat('app.min.css'))
		.pipe(dest(`${folderName}/app/css`))
		.pipe(browserSync.stream())
}

// перемещение стилей из файла critical.css в тег style в начале страницы
function criticalCss() {
	return src([`${folderName}/app/styles/${preprocessor}/critical.${preprocessor}`])
		.pipe(eval(`${preprocessor}glob`)())
		.pipe(eval(preprocessor)({ 'include css': true }))
		.pipe(postCss([
			cssnano({ preset: ['default', { discardComments: { removeAll: true } }] })
		]))
		.pipe(dest(`${folderName}/app/css`))
		.pipe(browserSync.stream())
}
function criticalCssInject(){
	return src(`${folderName}/dist/index.html`)
	.pipe(replace(/<link rel="stylesheet" href="css\/critical.css">/g, function() {
		var style = fs.readFileSync(`${folderName}/dist/css/critical.css`, 'utf8');
		return '<style>\n' + style + '\n</style>';
	}))
	.pipe(dest(`${folderName}/dist`));
}


// работа над изображениями
function images() {
	return src([`${folderName}/app/images/src/**/*`])
		.pipe(changed(`${folderName}/app/images/dist`))
		// .pipe(imagemin())
		.pipe(dest(`${folderName}/app/images/dist`))
		.pipe(webpConv({quality: 100}))
		.pipe(dest(`${folderName}/app/images/dist`))
		.pipe(browserSync.stream())
}

// перенос файлов из app в dist 
function buildcopy() {
	return src([
		`{${folderName}/app/js,${folderName}/app/css}/*.min.*`,
		`${folderName}/app/css/critical.css`,
		`${folderName}/app/images/**/*.*`,
		`!${folderName}/app/images/src/**/*`,
		`${folderName}/app/fonts/**/*`,
		`${folderName}/app/json/**/*`,
		`${folderName}/app/*.{jpg,png,svg}`,
	], { base: `${folderName}/app/` })
	.pipe(dest(`${folderName}/dist`))
}
async function buildhtml() {
	let includes = new ssi(`${folderName}/app/`, `${folderName}/dist/`, '/**/*.html')
	includes.compile()
	await deleteAsync(`${folderName}/dist/parts`, { force: true })
}

/* неумело сделанное версионирование файлов */
function cssFileVersion(){
	let versionNum = new Date(),
	versionNumMonth = versionNum.getMonth(),
	versionNumDay = versionNum.getDate(),
	versionNumHours = versionNum.getHours(),
	versionNumMin = versionNum.getMinutes(),
	versionNumSec = versionNum.getSeconds();
	versionNum = versionNumMonth.toString() + versionNumDay.toString() + versionNumHours.toString() + versionNumMin.toString() + versionNumSec.toString();

	return src(`${folderName}/dist/css/app.min.css`)
	.pipe(concat(`app.min.${versionNum}.css`))
	.pipe(dest(`${folderName}/dist/css`))
}
function jsFileVersion(){
	let versionNum = new Date(),
	versionNumMonth = versionNum.getMonth(),
	versionNumDay = versionNum.getDate(),
	versionNumHours = versionNum.getHours(),
	versionNumMin = versionNum.getMinutes(),
	versionNumSec = versionNum.getSeconds();
	versionNum = versionNumMonth.toString() + versionNumDay.toString() + versionNumHours.toString() + versionNumMin.toString() + versionNumSec.toString();

	return src(`${folderName}/dist/js/app.min.js`)
	.pipe(concat(`app.min.${versionNum}.js`))
	.pipe(dest(`${folderName}/dist/js`))
}
function filesVersionHtml(){
	let versionNum = new Date(),
	versionNumMonth = versionNum.getMonth(),
	versionNumDay = versionNum.getDate(),
	versionNumHours = versionNum.getHours(),
	versionNumMin = versionNum.getMinutes(),
	versionNumSec = versionNum.getSeconds();
	versionNum = versionNumMonth.toString() + versionNumDay.toString() + versionNumHours.toString() + versionNumMin.toString() + versionNumSec.toString();

	return src(`${folderName}/dist/index.html`)
    .pipe(htmlreplace({
        'css': `css/app.min.${versionNum}.css`,
		'js': `js/app.min.${versionNum}.js`
    }))
    .pipe(dest(`${folderName}/dist/`));
};
async function deleteOldCss() {
	await deleteAsync(`${folderName}/dist/css/app.min.css`, { force: true })
}
async function deleteOldJs() {
	await deleteAsync(`${folderName}/dist/js/app.min.js`, { force: true })
}

/* очистка папки перед сборкой */
async function cleandist() {
	await deleteAsync(`${folderName}/dist/**/*`, { force: true })
}

/* деплой по sftp */
function deploySFTP() {
	return src(`${folderName}/dist/**`)
        .pipe(sftp({
            host: '5.188.119.137',
            user: 'romanov',
            pass: 'nTp9AIz4w_h3_5iWQESS',
			remotePath: `${folderName}`
        }));
};

/* вотчер */
function startwatch() {
	watch([`${folderName}/app/styles/${preprocessor}/**/*`,`common/**/*.less`], { usePolling: true }, parallel(styles, criticalCss))
	watch([`${folderName}/app/styles/${preprocessor}/**/*`,`common/**/*`, `!${folderName}/app/styles/${preprocessor}/**/*`,`common/**/*.less`], { usePolling: true }, parallel(styles, criticalCss)).on('change', browserSync.reload)
	watch([`${folderName}/app/js/**/*.js`, `!${folderName}/app/js/**/*.min.js`], { usePolling: true }, scripts)
	watch(`${folderName}/app/images/src/**/*`, { usePolling: true }, images)
	watch(`${folderName}/app/**/*.{${fileswatch}}`, { usePolling: true }).on('change', browserSync.reload)
}

/* экспорты */
export { scripts, styles, images, deploySFTP }
export let assets = series(scripts, styles, images)
export let build = series(cleandist, images, scripts, styles, criticalCss, buildcopy, buildhtml, cssFileVersion, jsFileVersion, filesVersionHtml, deleteOldCss, deleteOldJs, criticalCssInject)
export default series(scripts, styles, images, parallel(browsersync, startwatch))