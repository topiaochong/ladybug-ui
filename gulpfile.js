const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass")); //sass->css
const minifyCss = require("gulp-minify-css"); //压缩css
//以上三个都需要npm安装

gulp.task("sass", async function () {
  return gulp
    .src("components/css/**/*.scss") //各个模块对应的css分别打包
    .pipe(sass()) //sass->css
    .pipe(minifyCss()) //压缩css
    .pipe(gulp.dest("dist/css")); //将压缩后的css放到css文件夹中
});
