import express from 'express'
const router= express.Router();

import { checkOut } from './controller.js';

router.post('/checkout',checkOut);


export default router;