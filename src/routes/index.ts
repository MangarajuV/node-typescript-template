import express from 'express';
import authRouter from '../controllers/auth';


const router = express.Router();

export const baseRoute = (req: express.Request, res: express.Response) => {
    res.send("/ Route");
};

router.get("/", baseRoute);
router.use('/auth', authRouter);

export default router;


