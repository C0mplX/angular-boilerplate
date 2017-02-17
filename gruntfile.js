module.exports = function( grunt ) {
/**
* This grunt file handles the front-end SASS, minifying and bundeling.
* @version 1.0.0
* @author Ole Martin Skaug
*/
  grunt.initConfig({

    //Sass compilation
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          src :  'app/css/style.scss',
          dest:  'app/css/style.css'
        }]
      }
    }, //Sass

    browserify: {
      js: {
        // A single entry point for our app
        src: 'app/app.js',
        // Compile to a single file to add a script tag for in your HTML
        dest: 'app/bundle.js',
      },
    },

    //Minify Javascript Bundle
    uglify: {
      my_target: {
        files: {
          'dist/bundle.js': ['bundle.js']
        }
      }
    },

    //Minify css
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/style.css': ['css/style.css']
        }
      }
    },
    //Watch task
    watch: {
      sass: {
        files: ['app/css/*/*.scss', 'app/css/sass/*/*.scss', 'app/css/style.scss'],
        tasks: ['sass', 'browserify'],
        options: {
          livereload: 35729
        }
      },
      browserify: {
        files: ['app/app.js', 'app/controllers/**/*.js', 'app/directives/**/*.js', 'app/factory/**/*.js'],
        tasks: ['browserify']
      },
    }
  });
  //Grunt Alias tasks
  grunt.registerTask('default', [ 'browserify', 'watch' ] );
  grunt.registerTask('build', ['uglify', 'cssmin', 'copy'] );

  //Load up grunt tasks /external plugins
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //Grunt file end.
};
