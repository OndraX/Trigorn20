//Source: https://gist.github.com/jshawl/6225945
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
          style:'compressed'
        },
		  files: [
			  {
				  expand: true,
				  cwd: './css/scss/',
				  src: ['*.scss'],
				  dest: 'css/',
				  ext: '.css'
		  	}
		  ]
      }
    },
    autoprefixer:{
      dist:{
        files:
			[
				{
					expand: true,
					cwd: 'css',
					src: ['*.css'],
					dest: 'css/',
					ext: '.css'
				}
			]
      
    },
		  },
	 watch: {
	  css: {
		files: 'css/scss/*.scss',
		tasks: ['sass', 'autoprefixer']
	  }
	},
	  default: {

	  }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
};
