/**
 * Created by Administrator on 2017/5/5 0005.
 */
var gulp=require("gulp");
var sass=require("gulp-sass");
var cssnano=require("gulp-cssnano");
var jsuglify=require("gulp-uglify");
var typescript=require("gulp-typescript");
var tsProject=typescript.createProject("tsconfig.json");
var imagemin=require("gulp-imagemin");


gulp.task("build-css",function(){
  return gulp.src("./sass/*.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest("./css"));
})

gulp.task("build-js",function(){
  return gulp.src("./ts/**/*.ts")
    .pipe(typescript(tsProject))
    .pipe(jsuglify())
    .pipe(gulp.dest("./js"));
})

gulp.task("build-img",function(){
  return gulp.src("./images/**/*")
    .pipe(imagemin({progressive:true}))
    .pipe(gulp.dest("./images/"));
})

gulp.task("watch",function(){
  gulp.watch("./sass/*.scss",["build-css"]);
  gulp.watch("./ts/*.ts",["build-js"]);
  gulp.watch("./images/*",["build-img"]);
})

gulp.task("default",["build-css","build-js","watch"]);

