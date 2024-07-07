import {Router} from "express"
import {v4 as uuidv4} from "uuid"
import auth from "../middlewares/auth.js"

const router = Router()

let tasks = []

// GET /tasks with pagination, sorting, and filtering
router.get("/tasks", (req, res) => {
	let {page = 1, limit = 10, sort = "title", order = "asc", filter} = req.query

	let filteredTasks = tasks
	if (filter) {
		filteredTasks = tasks.filter(
			(task) => task.title.includes(filter) || task.description.includes(filter)
		)
	}

	const sortedTasks = filteredTasks.sort((a, b) => {
		if (order === "asc") {
			return a[sort] > b[sort] ? 1 : -1
		} else {
			return a[sort] < b[sort] ? 1 : -1
		}
	})

	const start = (page - 1) * limit
	const end = start + parseInt(limit)

	res.json(sortedTasks.slice(start, end))
})

// GET /tasks/:id
router.get("/tasks/:id", (req, res) => {
	const task = tasks.find((t) => t.id === req.params.id)
	if (task) {
		res.json(task)
	} else {
		res.status(404).json({message: "Task not found"})
	}
})

// POST /tasks
router.post("/tasks", auth, (req, res) => {
	const {title, description} = req.body
	if (!title || !description) {
		return res.status(400).json({message: "Title and description are required"})
	}
	const newTask = {id: uuidv4(), title, description}
	tasks.push(newTask)
	res.status(201).json(newTask)
})

// PUT /tasks/:id
router.put("/tasks/:id", auth, (req, res) => {
	const {title, description} = req.body
	const taskIndex = tasks.findIndex((t) => t.id === req.params.id)

	if (taskIndex === -1) {
		return res.status(404).json({message: "Task not found"})
	}

	if (!title || !description) {
		return res.status(400).json({message: "Title and description are required"})
	}

	tasks[taskIndex] = {id: req.params.id, title, description}
	res.json(tasks[taskIndex])
})

// DELETE /tasks/:id
router.delete("/tasks/:id", auth, (req, res) => {
	const taskIndex = tasks.findIndex((t) => t.id === req.params.id)
	if (taskIndex === -1) {
		return res.status(404).json({message: "Task not found"})
	}
	tasks.splice(taskIndex, 1)
	res.status(204).end()
})

export default router
