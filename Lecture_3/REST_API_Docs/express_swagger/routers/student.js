import { Router } from "express";

const router = Router()

/**
 * @openapi
 * /students:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns an array of students.
 */
router.get("/students", (req, res) => {
    res.send({ students: [] })
})

/**
 * @openapi
 * /student/signup:
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
router.post("/student/signup", (req, res) => {
    res.send({ student: [] })
})

export default router;
