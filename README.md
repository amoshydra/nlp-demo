# NLP Demo
This is a Natural Language Processing Demo using [nlp-compromise](https://nlp-compromise.github.io/website/).

## Getting started
1. Download and install [Node.js](https://nodejs.org/en/download/)
2. run `npm install` to install all the dependencies required for this project
3. run `npm start` to run this project
4. navigate to `localhost:4032/nlp` to view the demo

## Project Structure
1. NLP Demo is composed of static HTML and JavaScript files found in the `public` folder.
2. It uses [Express](http://expressjs.com/) to serve all the static contents of this demo.

### Development tools
1. To streamline the development process, it uses [express-babelify-middleware](https://github.com/luisfarzati/express-babelify-middleware).
2. This library allow us to:
    * use JavaScript module loading (via [Browserify](http://browserify.org/)) and
    * write ES2015/ES6 syntax (via [Babelify](https://github.com/babel/babelify))
