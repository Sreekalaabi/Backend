const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const certificates = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/issue', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'issue.html'));
});

app.get('/view', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view.html'));
});

app.post('/issue', (req, res) => {
    const { course, certId, candidateName, grade, issueDate } = req.body;
    const certificate = { course, certId, candidateName, grade, issueDate };
    certificates.push(certificate);
    res.redirect(`/view?certId=${certId}`);
});

app.post('/search', (req, res) => {
    const { certId } = req.body;
    const certificate = certificates.find(cert => cert.certId === certId);
    if (certificate) {
        res.json(certificate);
    } else {
        res.status(404).json({ message: 'Certificate not found' });
    }
});

app.get('/certificate/:certId', (req, res) => {
    const { certId } = req.params;
    const certificate = certificates.find(cert => cert.certId === certId);
    if (certificate) {
        res.json(certificate);
    } else {
        res.status(404).json({ message: 'Certificate not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
