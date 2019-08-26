module.exports = {
  collectCoverage: true,
  rootDir: "../",
  verbose: true,
  setupFiles: ["./__tests__/setup/shim.js", "./__tests__/setup/setup.js"],
  modulePaths: ["./src/js", "./src", "./__tests__"],
  setupTestFrameworkScriptFile: "./__tests__/mocks/localStorage",
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/**/index.{js,jsx}",
    "!src/js/util/*.js",
    "!src/js/constants/*.js",
    "!__tests__/**/localStorage.js"
  ],
  testPathIgnorePatterns: [
    "__tests__/mocks/localStorage.js",
    "__tests__/setup/shim.js",
    "__tests__/setup/setup.js"
  ],
  coveragePathIgnorePatterns: ["node_modules"]
};
