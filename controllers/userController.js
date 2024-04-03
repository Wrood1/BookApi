const UserModel = require('../models/userModel');

class UserController {
    static async signUp(req, res) {
        try {
          const { email, name, password, conpassword } = req.body;
    
          if (password !== conpassword) {
            console.log('Passwords do not match'); 
            return res.status(400).send('Passwords do not match');
          }
    
          const existingUser = await UserModel.getUserByEmail(email);
          if (existingUser) {
            return res.redirect('/reg?error=Email already exists');
          }
    
          console.log('Creating a new user:', { email, name, password }); 
    
          const result = await UserModel.createUser(email, name, password);
    
          console.log('User creation result:', result);
    
          res.redirect('/login');
        } catch (error) {
          console.error('Error during user creation:', error); 
          res.status(500).send('Internal Server Error');
        }
      }

  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
  
      const user = await UserModel.getUserByEmail(email);
  
      if (!user) {
        return res.redirect('/login?error=User not found');
      }
  
      if (password !== user.password) {
        return res.redirect('/login?error=Incorrect password');
      }
      req.session.username=user.username;
      res.redirect('/perfumes');
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).send('Internal Server Error');
    }
  }
  
}

module.exports = UserController;
