/**
 * Created by Administrator on 2017/5/5 0005.
 */
var gulp=require("gulp");
var cleanCss=require('gulp-clean-css');
var jsuglify=require("gulp-uglify");
var typescript=require("gulp-typescript");
var tsProject=typescript.createProject("tsconfig.json");
var imagemin=require("gulp-imagemin");


gulp.task("build-client",function(){
  return gulp.src("./client/**,!./client/e2e")
    .pipe(gulp.dest("./dist/client"));
})
gulp.task("build-serve",function(){
    return gulp.src("./serve/**")
        .pipe(gulp.dest("./dist/serve"));
})

/*启动服务器*/
gulp.task('nodemon',function () {
    
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

