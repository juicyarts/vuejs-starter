'use strict'

import gulp from 'gulp'
import gserver from 'gulp-serve'
import { exec } from 'child_process'

gulp.task('server', gserver('./'))

gulp.task('e2e', ['server'], cb => {
  exec('./node_modules/.bin/nightwatch --config nightwatch.conf.js', (err, stdout, stderr) => {
    console.log(stdout)
    console.log(stderr)
    cb(err)
    process.exit()
  })
})