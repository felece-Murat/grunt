module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    uglify: {
      js: {
        files: {
          "js/dosya.min.js": ["js/*.js"],
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", "JS sıkıştır.", [
    "uglify",
  ]);
};
