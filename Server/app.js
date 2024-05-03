let myExpress = require("express");
let User = require("./Schema/users");
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

  const token = jsonwebtoken.sign({ id: _id }, "cat says meows", {
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
    text: `http://localhost:3000/reset-password/${_id}/${token}`,
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

//   jsonwebtoken.verify(req.body.token, "cat says meows", function (err, myData) {
//     let user = users.find((user) => user.name == myData.name);
//     res.json(user);
//     // console.log(myData);
//   });
// console.log(req.body.token);
// });

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

  //   return user.id == req.body.id;
  // });
  // if (userIndex != -1) {
  //   users[userIndex] = req.body;
  // }
  // res.json({
  //   success: true,
  // });
  // console.log("a");
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
