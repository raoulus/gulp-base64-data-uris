# gulp plugin example

## convert images to datauris with gulp
This plugin converts a set of images to base64 encoded datauris and combines them in a single json file.

__Note:__ This is a demo of a gulp plugin and not published to any public repository.


## Usage
```javascript
const convert = require('./index.js');
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
