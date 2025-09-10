const reportSchema = require("../models/report");

exports.create = async function (req, res) {
    const dataFromClient = req.body;
    const report = await reportSchema.create({
        name: dataFromClient.name,
        email: dataFromClient.email,
        message: dataFromClient.message,
        bloodGroup: dataFromClient.bloodGroup,
        disease: dataFromClient.disease,
        DoctorName: dataFromClient.DoctorName,
        Gender: dataFromClient.Gender
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
exports.update = async function (req, res) {
    const dataFromClient = req.body;
    try {
    const report = await reportSchema.findByIdAndUpdate({
        _id: dataFromClient._id
        }, {
        name: dataFromClient.name,
        email: dataFromClient.email,
        message: dataFromClient.message,
        bloodGroup: dataFromClient.bloodGroup,
        disease: dataFromClient.disease,
        DoctorName: dataFromClient.DoctorName,
        Gender: dataFromClient.Gender
    });
    console.log(report);
    return res.status(200).json({
        ServerMessage: "Report updated successfully"
    });

    } catch (error) {
        console.log(error);
        
    }

}

exports.delete = async function (req, res) {
    const dataFromClient = req.body;
    const report = await reportSchema.findByIdAndDelete({
        _id: dataFromClient._id
    });
    console.log(report);
    return res.status(200).json({
        ServerMessage: "Report deleted successfully"
    });
}
