# images to datauris conversion with gulp
This plugin converts a set of images to base64 encoded datauris and combines them in a single json file.

## Usage
```javascript
gulp.task('convert', function() {
  return gulp.src('./images/*')
              .pipe(convert('images.json'))
              .pipe(gulp.dest('./tmp'));
});
```

Result `images.json`
```json
{
  "icon_sad.gif": "data:image/gif;base64...",
  "icon_smile.gif": "data:image/gif;base64...",
  "icon_wink.gif": "data:image/gif;base64..."
}
```

## Test
```bash
gulp test
```
