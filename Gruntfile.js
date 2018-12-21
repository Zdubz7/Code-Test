module.exports = function(grunt) { // the general grunt function that is run

  grunt.initConfig({ // here we setup our config object with package.json and all the tasks

    // pkg: grunt.file.readJSON('package.json'),

    sass: { // sass tasks
      dist: {
      	options: {
          sourcemap: 'none'
        },
        files: [{
	      expand: true,
	      cwd: 'sass',
	      src: ['*.scss'],
	      dest: 'css',
	      ext: '.css'
		}]
      }
    },

    autoprefixer: {
	  dist: {
	    options: {
	      map: true
	    },
	    files: [{
	      expand: true,
	      cwd: 'css',
	      src: ['*.css'],
	      dest: 'css',
	      ext: '.css'
		}]
	  }
	},

    cssmin: { // minifying css task
      dist: {
        files: [{
		      expand: true,
		      cwd: 'css',
		      src: ['*.css', '!*.min.css'],
		      dest: 'css/min',
		      ext: '.min.css'
		}]
      }
    },

    watch: { // watch task for general work
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass']
      },
      autoprefix: {
      	files: ['css/*.css'],
        tasks: ['autoprefixer']
      },
      styles: {
        files: ['css/*.css'],
        tasks: ['cssmin']
      }
    }
  });

  // all the plugins that is needed for above tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // registering the default task that we're going to use along with watch
  grunt.registerTask('default', ['sass', 'cssmin']);
};