/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { removeSync } = require('fs-extra');
const { generate } = require('multiple-cucumber-html-reporter');
const cucumberJson = require('wdio-cucumberjs-json-reporter').default;

const { DEBUG, BROWSER } = process.env;

const defaultTimeoutInterval = DEBUG ? 60 * 60 * 500 : 50000;
const browserName = BROWSER || 'chrome';

exports.config = {
  runner: 'local',
  path: '/wd/hub',
  specs: ['./test/e2e/features/*.feature'],
  suites: {
    login: ['./test/e2e/features/Login.feature']
  },
  // ============
  // Capabilities
  // ============
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      browserName
    }
  ],
  // ===================
  // Test Configurations
  // ===================
  screenshotPath: './test/reports/errorShots/',
  coloredLogs: true,
  logLevel: 'info',
  logLevels: {
    webdriver: 'silent'
  },
  bail: 0,
  baseUrl: 'https://www.zoro.co.uk',
  waitforTimeout: defaultTimeoutInterval,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  seleniumLogs: './logs',
  framework: 'cucumber',
  reporters: [
    [
      'cucumberjs-json',
      {
        jsonFolder: './test/reports/json/',
        language: 'en'
      }
    ],
    [
      'allure',
      {
        outputDir: './test/reports/allure-results/',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: true,
        disableMochaHooks: true
      }
    ]
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    require: ['@babel/register', './test/helpers/common.js']
  },
  cucumberOpts: {
    timeout: defaultTimeoutInterval,
    requireModule: ['@babel/register'],
    require: ['./test/e2e/steps/*.steps.js'],
    backtrace: true,
    compiler: [],
    failAmbiguousDefinitions: true,
    dryRun: false,
    failFast: false,
    ignoreUndefinedDefinitions: true,
    name: [],
    snippets: true,
    format: ['pretty'],
    colors: true,
    source: false,
    profile: [],
    strict: true,
    tagExpression: 'not @Pending',
    tagsInTitle: false,
    snippetSyntax: undefined
  },
  sync: true,
  // =====
  // Hooks
  // =====
  async onPrepare() {
    removeSync('./test/reports/');
    removeSync('./allure-report');
  },
  onComplete: () => {
    generate({
      jsonDir: './test/reports/json/',
      reportPath: './test/reports/'
    });
  },
  before() {
    // eslint-disable-next-line global-require
    const chai = require('chai');
    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
  },
  beforeScenario() {
    browser.setWindowSize(1400, 800);
    browser.setTimeout({
      script: 60000,
      pageLoad: 60000,
      implicit: 60000
    });
  },
  afterStep() {
    cucumberJson.attach(browser.takeScreenshot(), 'image/png');
  },
  afterScenario(scenarioResult) {},
  afterFeature(feature, error, result) {}
};
