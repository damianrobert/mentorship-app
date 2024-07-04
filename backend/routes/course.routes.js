import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import {
  getCourses,
  postCourses,
  getCourseById,
  getCourseByAuthorId,
} from '../controllers/courses.controller.js';

const router = express.Router();

router.get('/get', protectRoute, getCourses);
router.get('/get/:id', protectRoute, getCourseById);
router.get('/getByAuthorId/:authorId', protectRoute, getCourseByAuthorId);
router.post('/post', protectRoute, postCourses);

export default router;
