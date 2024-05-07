let myExpress = require("express");
let User = require("./Schema/users");
let Quote = require("./Schema/quote");
const cors = require("cors");
// let multer = require("multer");
let jsonwebtoken = require("jsonwebtoken");
// const { json } = require("react-router-dom");
const mongoose = require("mongoose");
var nodemailer = require("nodemailer");
let myApp = myExpress();
myApp.use(myExpress.json());
let users = [];
myApp.use(cors());

myApp.post("/create-user", async (req, res) => {
  console.log(req.body);

  const exisitingUser = await User.findOne({ email: req.body.email });
  if (exisitingUser) {
    return res.status(400).json({ error: "already exists" });
  }
  let data = new User(req.body);

  console.log(data, "yhn dtaat");
  await data.save();

  const token = jsonwebtoken.sign({ id: data.id }, "cat says meows", {
    expiresIn: "2d",
  });

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mariaimran787898@gmail.com",
      pass: "iumm ongk ihkx lqul",
    },
  });

  var mailOptions = {
    from: "mariaimran787898@gmail.com",
    to: "iammariaimran4545@gmail.com",
    subject: "Email Verification Email",
    text: `http://localhost:3000/reset-password/${data.id}/${token}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.send({ status: "error sending email" });
    } else {
      console.log("Email sent: " + info.response);
      return res.send({ status: "success" });
    }
  });
  res.json({
    success: true,
  });

  // users.push(req.body);
});

myApp.post("/quote", async (req, res) => {
  try {
    // Create a new instance of the Quote model with the request body
    let data = new Quote(req.body);
    console.log(data, "Data received from frontend");

    // Save the data to the database
    await data.save();

    // Respond with a success message
    res.json({
      success: true,
      message: "Quote saved successfully",
    });
  } catch (error) {
    console.error("Error occurred while saving quote:", error);
    // Respond with an error message if something went wrong
    res.status(500).json({
      success: false,
      message: "An error occurred while saving quote",
    });
  }
});

myApp.post("/login", async (req, res) => {
  let userMilgya = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  console.log(userMilgya, "yh mila");
  if (userMilgya) {
    res.json(userMilgya);
  }
});

myApp.put("/update-user", async (req, res) => {
  console.log(req.body, "this is update user");
  const { _id, ...rest } = req.body;
  let users = await User.findOneAndUpdate({ _id: _id }, rest);
  res.json({
    success: true,
  });
});

myApp.post("/forgot-password", (req, res) => {
  const { email } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res.send({ status: "user not found" });
    }
    const token = jsonwebtoken.sign({ id: user._id }, "cat says meows", {
      expiresIn: "2d",
    });

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mariaimran787898@gmail.com",
        pass: "iumm ongk ihkx lqul",
      },
    });

    var mailOptions = {
      from: "mariaimran787898@gmail.com",
      to: "iammariaimran4545@gmail.com",
      subject: "Reset Your Password",
      text: `http://localhost:3000/reset-password/${user._id}/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.send({ status: "error sending email" });
      } else {
        console.log("Email sent: " + info.response);
        return res.send({ status: "success" });
      }
    });
  });
});

myApp.post("/reset-password/:id/:token", (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  jwt.verify(token, "jwt_secret_key", (err, decoded) => {
    if (err) {
      return res.json({ Status: "Error with token" });
    } else {
      bcrypt
        .hash(password, 10)
        .then((hash) => {
          User.findByIdAndUpdate({ _id: id }, { password: hash })
            .then((u) => res.send({ Status: "Success" }))
            .catch((err) => res.send({ Status: err }));
        })
        .catch((err) => res.send({ Status: err }));
    }
  });
});

myApp.use(myExpress.static("./build"));
mongoose
  .connect(
    "mongodb+srv://mariaimran787898:Maria123@cluster0.3ztda6b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("error occured");
  });

myApp.use(myExpress.static("server/my-uploads"));
myApp.listen(6073, function () {
  console.log("code is chaling now");
});
