import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import {
  asignMenteeToMentor,
  deleteUser,
  enrollCourse,
  finishCourse,
  getUserById,
  getUsersForSidebar,
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', protectRoute, getUsersForSidebar);
router.get('/:id', protectRoute, getUserById);
router.put('/enroll/:id/:courseId/:status', protectRoute, enrollCourse);
router.put('/asign/:mentorId/:menteeId', protectRoute, asignMenteeToMentor);
router.put('/finishCourse/:id/:courseId', protectRoute, finishCourse);
router.delete('/delete/:id', protectRoute, deleteUser);

export default router;
