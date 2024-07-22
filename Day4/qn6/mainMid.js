

function mainMid(req, res, next) {

    const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';

    if (isMaintenanceMode) {
        res.status(503).send('Service Unavailable - We are currently performing maintenance. Please try again later.');
    } else {
        next();
    }
}

module.exports = mainMid;
