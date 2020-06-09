module.exports = {
        cache: false,
        collectCoverage: false,
        coverageDirectory: "reports/coverage",
        testMatch: [
        "**/tests/**/*.js?(x)",
        "**/(*.)(test).js?(x)"
        ],
        transform: {
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
        },
        moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
        },
        setupFiles: [
        "<rootDir>/enzyme.config.js"
        ],
        unmockedModulePathPatterns: [
        "/node_modules/"
        ]
}