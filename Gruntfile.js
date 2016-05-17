module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    var config = grunt.file.readYAML('gruntConfig.yaml');
    grunt.initConfig({
        // Concat css and js files
        concat: {
            vendorJS: {
                src: [
                    config.jsSrcDir + config.vendorDir + 'jquery-1.11.3.min.js',
                    config.jsSrcDir + config.vendorDir + 'bootstrap.min.js',
                ],
                dest: config.jsDir + config.vendorMinJs
            },
            vendorCSS: {
                src: [
                    config.cssSrcDir + config.vendorDir + 'bootstrap.min.css',
                    config.cssSrcDir + config.vendorDir + 'zocial.min.css'
                ],
                dest: config.cssDir + config.vendorMinCss
            },
            JS: {
                nonull: false,
                src: [config.jsSrcDir + 'helper.js',
                    config.jsSrcDir + 'resumeBuilder.js'
                ],
                dest: config.jsDir + config.appMinJs
            },
            CSS: {
                nonull: false,
                src: config.cssSrcDir + config.minCss,
                dest: config.cssDir + config.appMinCss
            }
        },
        // lint js and exclude minified js files
        jshint: {
            all: [
                'Gruntfile.js',
                config.jsSrcDir + '*.js',
                '!' + config.jsSrcDir + '*.min.js',
                '!' + config.jsSrcDir + 'helper.js'

            ]

        },
        // lint css and exclude minified css
        csslint: {
            all: [
                config.cssSrcDir + '*.css',
                '!' + config.cssSrcDir + '*.min.css'
            ]
        },
        //minify css
        cssmin: {
            options: {
                processImport: false
            },
            target: {
                files: [{
                    expand: true,
                    cwd: config.cssSrcDir,
                    src: ['*.css', '!*.min.css'],
                    dest: config.cssSrcDir,
                    ext: '.min.css'
                }, {
                    expand: true,
                    cwd: config.cssSrcDir + config.vendorDir,
                    src: ['*.css', '!*.min.css'],
                    dest: config.cssSrcDir + config.vendorDir,
                    ext: '.min.css'
                }]
            }
        },
        //minify js
        uglify: {
            target: {
                files: [{
                    expand: true,
                    cwd: config.jsSrcDir,
                    src: ['*.js', '!*.min.js'],
                    dest: config.jsSrcDir,
                    rename: function(cwd, src) {
                        return cwd + src.replace('.js', '') + '.min.js';
                    }
                }, {
                    expand: true,
                    cwd: config.jsSrcDir + config.vendorDir,
                    src: ['*.js', '!*.min.js'],
                    dest: config.jsSrcDir + config.vendorDir,
                    rename: function(cwd, src) {
                        return cwd + src.replace('.js', '') + '.min.js';
                    }
                }]
            }
        },
        //lint html
        htmllint: {
            all: "*.html"
        },
        //beautify js, css, html
        jsbeautifier: {
            src: ['*.js', 'js/*.js', '!js/*.min.js', '*.html', 'css/*.css', '!css/*.min.css']

        },
        // Clear out the images directory if it exists and css/js
        clean: {
            dev: {
                src: [
                    config.jsDir + '*.min.js',
                    config.cssDir + '*.min.css'
                ]
            }
        },
        copy: {
            index_html: {
                src: 'src/index.html',
                dest: 'index.html'
            },
            images: {
                expand: true,
                flatten: true,
                src: 'src/images/*',
                dest: 'images/'
            }
        },
        // replace js/css files with minified versions in html
        replace: {
            html: {
                src: 'index.html',
                overwrite: true,
                replacements: [{
                    from: '<link rel="stylesheet" href="css/vendor/bootstrap.min.css">\n    <link rel="stylesheet" href="css/vendor/zocial.min.css">',
                    to: '<link rel="stylesheet" href="dist/css/includes.min.css">'
                }, {
                    from: '<link rel="stylesheet" href="css/style.css">',
                    to: '<link rel="stylesheet" href="dist/css/resume.min.css">'
                }, {
                    from: '<script src="js/vendor/jquery-1.11.3.min.js"></script>\n    <script src="js/vendor/bootstrap.min.js"></script>',
                    to: '<script src="dist/js/includes.min.js"></script>'
                }, {
                    from: '<script src="js/helper.js"></script>\n    <script src="js/resumeBuilder.js"></script>',
                    to: '<script src="dist/js/resume.min.js"></script>'
                }]
            }
        }
    });
    grunt.registerTask('default', ['htmllint', 'jshint', 'csslint', 'jsbeautifier', 'cssmin', 'uglify', 'concat', 'copy', 'replace']);
    // order -> lint html, css, js, beautify, minify css/js and then concat, copy + replace

};
