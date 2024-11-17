const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true, // Ensures the name field is mandatory
      trim: true, // Removes leading/trailing whitespaces
    },
    joiningYear: {
      type: Number,
      required: true,
      min: 1900, // Set a minimum year (customize as needed)
      max: new Date().getFullYear(), // Set the maximum year to the current year
    },
    passingYear: {
      type: Number,
      required: true,
      min: 1900,
      //   validate: {
      //     validator: function (value) {
      //       return value >= this.joiningYear;
      //     },
      //     message: "Passing year must be greater than or equal to joining year.",
      //   },
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true, // Prevents duplicate phone numbers
      //   match: /^\d{10}$/,
    },
    profession: {
      type: String,
      default: "Unemployed", // Default value if not provided
      trim: true,
    },
    workingLocation: {
      type: String,
      trim: true,
    },
    permanentAddress: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      //   unique: true,
      //   match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    photo: {
      type: String, // Store URL or file path for the photo
      default: null, // Default to null if not provided
    },
  },
  { timestamps: true }
);
studentSchema.index({ phoneNumber: 1 });

const student = mongoose.model("student", studentSchema);

module.exports = { student };
