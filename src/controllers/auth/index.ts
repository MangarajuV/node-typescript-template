import { Response, Request, Router } from "express";

const router = Router();

export const getLoginStatus = (req: Request, res: Response) => {
    res.send("Login Staus");
};

router.get('/', getLoginStatus);

export default router;