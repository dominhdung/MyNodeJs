module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        // Metadata.
        meta: {
            basePath: '/',
            srcPath: 'Sass/',
            deployPath: 'public/Styles/'
        },

        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> ',

        // Task configuration.
        sass: {
            dev: {
                files: {
                    '<%= meta.deployPath %>Styles.css': '<%= meta.srcPath %><%= meta.corePath %>main.scss',

                }
            },
            dist: {
                files: {
                }
            }

        },
        clean: {
            cleandev: {
                src: '<%= meta.deployPath %>/**/*'
            }
        },
        watch: {
            sass: {
                files: '<%= meta.srcPath %>//**/*.scss',
                tasks: ['sass:dev']
            }
        }

    });



    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task.
    grunt.registerTask('default', ['clean:cleandev', 'sass:dev', 'watch:sass']);

};
