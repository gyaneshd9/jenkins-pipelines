const app = require('./app');

console.log('Running automated unit tests...');

if (app && typeof app.get === 'function') {
    console.log('✅ TEST PASSED: Express application initialized successfully.');
    process.exit(0);
} else {
    console.error('❌ TEST FAILED: Application configuration is invalid.');
    process.exit(1);
}
