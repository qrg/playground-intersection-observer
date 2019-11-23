const { resolve } = require('path');

const ROOT_DIR = resolve(__dirname, '..');
const SRC_DIR = resolve(ROOT_DIR, 'src');
const DIST_DIR = resolve(ROOT_DIR, 'dist');

module.exports = {
  ROOT_DIR,
  SRC_DIR,
  DIST_DIR
};
