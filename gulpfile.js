//tips from https://code.visualstudio.com/docs/languages/css#_automating-sassless-compilation

// Sass configuration
var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function (cb) {
  gulp
    .src("src/Styles/*.scss")
    .pipe(sass())
    .pipe(
      gulp.dest(function (f) {
        return f.base;
      })
    );
  cb();
});

gulp.task(
  "default",
  gulp.series("sass", function (cb) {
    gulp.watch("src/Styles/*.scss", gulp.series("sass"));
    gulp.watch("src/Styles/ComponentStyles/*.scss", gulp.series("sass"));
    cb();
  })
);
