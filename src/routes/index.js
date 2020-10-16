const { Router } = require('express');
const router = Router();

router.post('/send-email',(req, res)=>{
     const { name, email, phone, message } = req.body;

        contentHTML = `
          <h1>user information</h1>    
          <ul>
            <il>Username: ${name}</il>
            <il>User Email: ${email}</il>
            <il>Phone: ${phone}</il>
          </ul>
          <p>${message}</p>

        `;
        console.log(contentHTML)

      res.send('recived');
});

module.exports = router;