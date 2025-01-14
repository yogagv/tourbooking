import express from 'express'
import { createBooking, getAllBooking, getBooking } from '../controller/bookingController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router();

router.post('/tourbooking/:tourId' , authenticate, restrict(['user']), createBooking);
router.get("/getAllBooking", authenticate,restrict(['admin']), getAllBooking);
router.get("/getBooking/:id", authenticate, restrict(['user']), getBooking);

export default router;