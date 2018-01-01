/**
 * View a single sample.
 *
 * @todo
 * - Include test-notes.html
 * - Include readme.md
 * - View standalone, without frameset
 * - Styled mode
 */

const express = require('express');
const fs = require('fs');
const router = express.Router();
const cfg = require('../../config.json');
const f = require('./../../lib/functions.js');

router.get('/', function(req, res, next) {
	let resources = f.getResources(req.query.path);
	let tpl = {
		title: 'Sample viewer - Highcharts',
		path: req.query.path,
		html: f.getHTML(req),
		css: f.getCSS(req.query.path),
		js: f.getJS(req.query.path),
		scripts: [
			'/javascripts/view.js'
		].concat(resources.scripts),
		styles: resources.styles,
		themes: {
			'': {
				name: 'Default theme'
			},
			'sand-signika': {
				name: 'Sand Signika',
				selected: req.session.theme === 'sand-signika' && 'selected'
			},
			'dark-unica': {
				name: 'Dark Unica',
				selected: req.session.theme === 'dark-unica' && 'selected'
			},
			'grid-light': {
				name: 'Grid Light',
				selected: req.session.theme === 'grid-light' && 'selected'
			}
		},
		styled: false // @todo: implement
	};

	res.render('samples/view', tpl);
});

module.exports = router;
