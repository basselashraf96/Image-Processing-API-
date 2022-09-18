### Scripts

"start": "node build",
"build": "npx tsc",
"test": "npm run build && npm run jasmine"

### Usage

Server will listen on port 4000:

#### Brief instructions

http://localhost:4000/

#### Endpoint

http://localhost:4000/api/images

Expected query arguments are:

- filename
- width
- height

#### Example

http://localhost:4000/api/images?filename=icelandwaterfall&width=200&height=200
Will scale the icelandwaterfall image to 200 by 200 pixels and store the resulting image.
on calling the image with the same name and dimensions the image will be showed withoud being resized.
