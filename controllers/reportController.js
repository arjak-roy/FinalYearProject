const reportSchema = require("../models/report");

exports.create = async function (req, res) {
    const dataFromClient = req.body;
    const report = await reportSchema.create({
        name: dataFromClient.name,
        email: dataFromClient.email,
        message: dataFromClient.message,
    });
    console.log(report);
    return res.json(report);
}

exports.get = async function (req, res) {
    const dataFromClient = req.body;
    const report = await reportSchema.find({
        email: dataFromClient.email
    });
    console.log(report);
    return res.json(report);
}
exports.getall = async function (req, res) {
    const report = await reportSchema.find({});
    console.log(report);
    return res.json(report);
}