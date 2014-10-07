/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-05-30 10:27:13
 * @version $Id$
 */
'use strict';

module.exports = function (grunt) {
	var init_config = {
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			dist: {
				files: {
					'../js/iphone.min.js' : '../js/js*.js'
				},
				options: {
					banner: '/**\n' + 
							' *\n' +
							' * This is my minified app,\n' +
							' * built at <%= grunt.template.today() %> \n' + 
							' */\n'
				}
			}
		},
		// http://ryanchristiani.com/getting-started-with-grunt-and-sass/
		sass: {
			dist: {
				files: {
					'css/style.css' : 'scss/style.scss'
				}
			}
		},
		watch: {
			all: {
				options: { livereload: true },
				files: ['../js/js*.js'],
				tasks: ['uglify:dist']
			}
		}
	};

	grunt.initConfig(init_config);

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['watch']);
};