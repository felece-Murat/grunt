<p align="center">
  <img width="460" src="https://user-images.githubusercontent.com/85101226/219465359-f9f479c5-70ab-4e29-884f-86ef35da3b11.jpg">
</p>
<h1 align="center">Grunt</h1>

Grunt görevlerin gerçekleştirilmesinde kullanılan araçlardan biridir.

projenize eklemek için:

```
npm install -g grunt-cli
# ya da
yarn add grunt-cli
```
<h2>
Grunt modülleri
</h2>
<br>
Grunt modüllerini indirmek için
```bash
npm install <modul-adi> --save-dev
```
komutu kullanılır.

Grunt uglify modülünü indirmek için
```bash
npm install grunt-contrib-uglify --save-dev
```
komutu kullanılır.

Grunt modüllerini NPM ile indirirken başında grunt olduğuna, Grunt geliştiricileri tarafından oluşturulan modüllerin ortasında contrib olduğuna ve modülün sonunda ise modülün kısa adının olduğuna dikkat edin.

Projeye grunt eklediğimizde böyle görünür:

```json
{
  "name": "project",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.5",
    "grunt-contrib-jshint": "~0.10.0",
    "grunt-contrib-nodeunit": "~0.4.1",
    "grunt-contrib-uglify": "~0.5.0"
  }
}
```

Grunt bizim de kullandığımız gibi belirli görevler çerçevesinde özellikle de stil dosyalarını uglify etmek ve sıkıştırmak çerçevesinde çalışır. Bu işlemleri yapmak için görev tanımlamalarına ihtiyaç duyar bunları yapma için bir gruntfile dosyasına ihtiyacımız olur:

```jsx
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'uglify']);
};
```

Tabiki bub eklentileri de dosya dizinine eklememiz gerekiyor:

```bash
npm install grunt-contrib-uglify --save-dev
```

- [Uglify](https://github.com/gruntjs/grunt-contrib-uglify), JavaScript dosyalarını minify edilmesi işlemini gerçekleştirir.
- [SASS](https://github.com/gruntjs/grunt-contrib-sass), adından da anlaşılabileceği üzere SASS dosyalarını otomatik bir şekilde CSS dosyalarına [compile](https://ceaksan.com/tr/compiler-interpreter) eder.
- [Concat](https://github.com/gruntjs/grunt-contrib-concat), [CSS](https://www.npmjs.com/package/grunt-concat-css) ve JS dosyaların birleştirilerek tek bir dosya haline getirilmesi işlemini gerçekleştirir.
- [Imagemin](https://github.com/gruntjs/grunt-contrib-imagemin), PNG, JPG, GIF ve SVG dosyalarını sıkıştırır.

bu görevleri çalıştırmak için kullanacağımız komutlar:

```bash
grunt
grunt deploy
grunt uglify
grunt [diger-task]
```
