const express = require('express');
const path = require('path');
const app = express();
const port = 3010;

let employees = [];

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/api/employees', (req, res) => {
    res.json(employees);
});

app.post('/api/employees', (req, res) => {
    const newEmployee = {
        id: employees.length ? employees[employees.length - 1].id + 1 : 1,
        name: req.body.name,
        role: req.body.role,
    };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});

app.delete('/api/employees/:id', (req, res) => {
    const employeeId = parseInt(req.params.id);
    if (isNaN(employeeId)) {
        return res.status(400).send('Invalid ID');
    }
    employees = employees.filter(employee => employee.id !== employeeId);
    res.status(204).end();
});

app.put('/api/employees/:id', (req, res) => {
    const employeeId = parseInt(req.params.id);
    if (isNaN(employeeId)) {
        return res.status(400).send('Invalid ID');
    }
    const employee = employees.find(emp => emp.id === employeeId);
    if (employee) {
        employee.name = req.body.name || employee.name;
        employee.role = req.body.role || employee.role;
        res.json(employee);
    } else {
        res.status(404).send('Employee not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
