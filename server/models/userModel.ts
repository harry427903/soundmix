const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
  },
  phoneNumber: {
    type: Number,
    required: [true, "please provide you email"],
    unique: true,
  },
  role: {
    type: String,
    enum: ["user", "admin", "retailer"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
});
