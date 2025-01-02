const express = require('express')
const nodemailer = require("nodemailer")
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.use((req, res, next) => {
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,Accept,X-Requested-With, Content-Type,authorisation');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})


  app.post('/message', async (req, res) => {
    const data = req.body;
    console.log(data);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        // secure:true,
        auth: {
            user: 'raosahab280901@gmail.com',
            pass: 'rkrt uffv wyph znah',
        }
    });

    var mailOptions =  await{
        from: 'raosahab280901@gmail.com',
        to: "ankuryadav8802@gmail.com",
        subject: 'New message from client',
        text: `${data.name} with email ${data.email} and mobile ${data.mobile} sent you a message \n${data.message}`,
        
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (info) {
            alert({ success: true })
            console.log(info)
        } else {
            alert({ success: false, message: "Something went wrong" })
            console.log(error);
        }
    });
 
})

app.listen(8080, () => {
    console.log("listening on port")
})