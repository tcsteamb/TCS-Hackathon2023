const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "TCS - DEMO - Test Runner - Report",
    pageTitle: "European Central Bank",
    displayDuration: false,
    pageFooter: "<div class='created-by'><p><strong>TCS</strong> - Hackaton - 2023</p></div>",
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "Hector - PC",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "European Central Bank - Query eligible assets" },
            { label: "Release", value: "1.1.0" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});