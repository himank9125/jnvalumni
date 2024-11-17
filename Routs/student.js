const express = require("express");
const router = express.Router();
const studentModel = require("../Models/student");

router.post("/register", async (req, res) => {
  try {
    const {
      studentName,
      joiningYear,
      passingYear,
      phoneNumber,
      profession,
      workingLocation,
      permanentAddress,
      email,
      photo,
    } = req?.body;

    const existingStudent = await studentModel.student.findOne({ phoneNumber });
    console.log("existingStudent", existingStudent);
    if (existingStudent) {
      // Update the existing student record
      existingStudent.studentName = studentName;
      existingStudent.joiningYear = joiningYear;
      existingStudent.passingYear = passingYear;
      existingStudent.profession = profession;
      existingStudent.workingLocation = workingLocation;
      existingStudent.permanentAddress = permanentAddress;
      existingStudent.email = email;
      existingStudent.photo = photo;
      const data = await existingStudent.save();
      res.status(200).send("Student information updated successfully");
    } else {
      const students = new studentModel.student({
        studentName,
        joiningYear,
        passingYear,
        phoneNumber,
        profession,
        workingLocation,
        permanentAddress,
        email,
        photo,
      });
      const data = await students.save();
      res.status(201).send("New record created");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while saving the student data.");
  }
});

module.exports = { router };
