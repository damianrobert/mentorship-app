import express from 'express';
import {
  getArticles,
  postArticle,
} from '../controllers/articles.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/postArticle', protectRoute, postArticle);
router.get('/getArticles', protectRoute, getArticles);
export default router;
