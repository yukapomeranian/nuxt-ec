module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1",
    "^vue$": "vue/dist/vue.common.js"
  },
  // testRegex:
  moduleFileExtensions: ["js", "ts", "vue", "json"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
    ".*\\.(vue)$": "vue-jest"
  },
  collectCoverage: true,
  // collectCoverageFrom: [
  //  "<rootDir>/components/**/*.vue",
  //  "<rootDir>/pages/**/*.vue"
  // ]
};
