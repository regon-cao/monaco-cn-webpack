module.exports = function(content, map, meta) {
  if (/monaco-editor[\\\/]esm[\\\/]vs.+\.js$/.test(this.resourcePath)) {
    var vsPath = this.resourcePath.split(/monaco-editor[\\\/]esm[\\\/]/).pop();
    if (vsPath) {
      // localize\.apply\(\s*([^,]+)\s*,\s*\
      var path = vsPath.replace(/\\/g, "/").replace(".js", "");
      return content.replace(/localize\(/g, `localize('${path}', `);
    }
  }
  return content;
};
