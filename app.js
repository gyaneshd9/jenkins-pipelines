cat << 'EOF' > app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello! Your Jenkins Pipeline worked perfectly!');
});

module.exports = app;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Application is running on port ${PORT}`);
    });
}
EOF
