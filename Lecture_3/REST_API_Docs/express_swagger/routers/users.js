import { Router } from "express";

const router = Router()

/**
 * @openapi
 * /users:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns an array of users.
 */
router.get("/users", (req, res) => {
    res.send({ users: [] })
})

/**
 * @openapi
 * /user/signup:
 *   post:
 *     parameters:
 *       - name: password
 *         description: User's password.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Returns an array of users.
 */
router.post("/user/signup", (req, res) => {
    res.send({ users: [] })
})

export default router;
