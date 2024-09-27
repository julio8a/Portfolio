module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dist: {
        src: ['js/*.js'],
        dest: 'dist/js/scripts.js'
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/js/scripts.min.js': 'dist/js/scripts.js'
        }
      }
    },

    shell: {  // Use shell to run Dart Sass
      sass: {
        command: 'sass --no-source-map scss/styles.scss dist/css/styles.css --style=compressed'
      }
    },

    imagemin: {
      static: {
        options: {
          optimizationLevel: 7
        },
        files: [{
          expand: true,
          cwd: 'dist/projects/',
          src: [
            'city-engine/images/*.{png,jpg,gif}',
            'dashboard/images/*.{png,jpg,gif}',
            'inca/images/*.{png,jpg,gif}',
            'industries/images/*.{png,jpg,gif}',
            'my-esri/images/*.{png,jpg,gif}',
            'public-health/images/*.{png,jpg,gif}',
            'save-me/images/*.{png,jpg,gif}',
            // 'urb-ob-site/images/*.{png,jpg,gif}',
            // 'calcite-ui-icons/images/*.{png,jpg,gif}',
            'automated-system-icons/images/*.{png,jpg,gif}',
            'urb-ob/images/*.{png,jpg,gif}',
            'web-app-builder/images/*.{png,jpg,gif}',
            'calcite-design-system/images/*.{png,jpg,gif}',
            'zip-tapestry/images/*.{png,jpg,gif}',
            'esri-product-logos/images/*.{png,jpg,gif}',
            'programs-dashboard/images/*.{png,jpg,gif}',
            'calcite-components/images/*.{png,jpg,gif}'
          ],
          dest: 'dist/projects/'
        }]
      }
    },

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 3333,
          base: 'dist/',
          livereload: true
        }
      }
    },

    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      scripts: {
        files: [
          'dist/*.html',
          'dist/js/*.json',
          'dist/projects/**/*',
          'js/**/*.js',
          'scss/**/*.scss'
        ],
        tasks: ['concat', 'uglify', 'shell:sass']  // Run Dart Sass via shell command
      }
    }

  }); // initConfig

  // Load necessary Grunt tasks
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-shell');  // Load grunt-shell for Dart Sass

  // Register default task
  grunt.registerTask('default', ['concat', 'uglify', 'shell:sass', 'connect', 'watch']);
};
