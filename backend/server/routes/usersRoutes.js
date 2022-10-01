import express from 'express';
import userController from './../controllers/userController'
const router = express.Router();


router.route('/')
.get(userController.getAllUsers)
.post(userController.addUser)

router.route('/:userId')
.get(userController.getOneUser)
.put(userController.updateUser)
.delete(userController.deleteUser)



export default router;
