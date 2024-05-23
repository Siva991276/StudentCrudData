const Student = require("../Model/StudentData");

const CreateStudent = async (req, res) => {
  try {
    const { stdName, stdAge, stdEmail, stdPassword } = req.body;

    const existuser = await Student.findOne({ stdEmail });
    if (existuser) {
      return res.status(404).json({ message: "User Already Exist" });
    }
    const newuser = new Student({
      stdName,
      stdAge,
      stdEmail,
      stdPassword,
    });
    await newuser.save();
    return res.status(200).json({ message: "User Add Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server Error" });
  }
};

const getAllStudentData = async (req, res) => {
  try {
    const alldata = await Student.find();
    return res.status(200).json({ message: "All Data", alldata });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server Error" });
  }
};

const getSingleData = async (req, res) => {
  try {
    const { id } = req.params;
    const singleData = await Student.findById(id);
    if (!singleData) {
      return res.status(404).json({ message: "No Data Found" });
    }
    return res.status(200).json({ message: "Single Data", singleData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server Error" });
  }
};

const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const { stdName, stdAge, stdEmail, stdPassword } = req.body;
    const updateData = await Student.findByIdAndUpdate(id, {
      stdName,
      stdAge,
      stdEmail,
      stdPassword,
    });
    if (!updateData) {
      return res.status(404).json({ message: "No Data Found" });
    }
    return res
      .status(200)
      .json({ message: "Data Updated Successfully", updateData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server Error" });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const detelesingleuser = await Student.findByIdAndDelete(id);
    if (!detelesingleuser) {
      return res.status(404).json({ message: "No Data Found" });
    }
    return res.status(200).json({ message: "deleted Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "server Error" });
  }
};

module.exports = {
  CreateStudent,
  getAllStudentData,
  getSingleData,
  updateData,
  deleteStudent,
};
