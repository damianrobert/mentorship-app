import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getCourses, postCourses } from '../controllers/courses.controller.js';

const router = express.Router();

router.get('/get', protectRoute, getCourses);
router.post('/post', protectRoute, postCourses);

export default router;
