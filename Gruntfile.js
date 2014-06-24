module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
        index: {
            files: [
                {
                    expand: true, 
                    src: ['hello.txt'], 
                    dest: "<%= grunt.option(\"moduleid\") %>", 
                    filter: 'isFile', 
                    flatten: true
                },
            ]
        }
    }
    
  });

 
  grunt.registerTask('copymod', 'Copies a file into a dynamically named folder.', function(moduleid) {
    global.moduleid = moduleid;
    grunt.option("moduleid", global.moduleid);
    grunt.log.writeln("Output path: " + grunt.option("moduleid"));
    grunt.task.run('copy'); 
  });

}