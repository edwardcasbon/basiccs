module.exports = function(grunt) {

    grunt.initConfig({

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'auto',
                    require: 'sass-globbing'
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['basicss.scss'],
                    dest: 'dist',
                    ext: '.css'
                }]
            }
        },

        // Use '$ npm update caniuse-db' to update the prefixes database.
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie >= 8'],
                map: true
            },
            css: {
                src: ['dist/basicss.css']
            }
        },

        watch: {
            sass: {
                files: ['src/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            }
        }
    });

    // Load task plugins.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Register the default task.
    grunt.registerTask('default', 'watch');

    // Build task
    grunt.registerTask('build', ['sass', 'autoprefixer']);
};
