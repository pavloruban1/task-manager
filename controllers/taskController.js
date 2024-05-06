import Task from '../models/taskModel.js';

export const createTask = async (req, res) => {
    try {
        const { description } = req.body;
        const userId = req.user._id;

        const taskObj = {
            description,
            createdBy: userId,
        };

        const task = Task.create(taskObj);

        return res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: 'Failed to created the task' });
    }
};

export const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const userId = req.user._id;

        const task = await Task.findOneAndUpdated(
            { _id: taskId, createBy: userId },
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!task) {
            return res.status(404).json({ massage: 'Task not found' });
        }
        return res.status(200).json(task);
    } catch (err) {
        res.status(400).json({ message: 'Failed to update the task' });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const userId = req.user._id;

        const task = await Task.findByIdAndDelete({
            _id: taskId,
            createBy: userId,
        });

        if (!task) {
            return res.status(404).json({ massage: 'Task not found' });
        }
        return res.status(200).json({ massage: 'Task delete successfully' });
    } catch (err) {
        res.status(400).json({ message: 'Failed to delete the task' });
    }
};

export const getTasksByUserId = async (req, res) => {
    try {
        const userId = req.user._id;

        const tasks = await Task.find({ createBy: userId });

        return res.status(200).json(tasks);
    } catch (err) {
        res.status(400).json({ message: 'Failed find user tasks' });
    }
};

export const getAllTasks = async (req, res) => {
    try {
       
        const tasks = await Task.find();

        return res.status(200).json(tasks);
    } catch (err) {
        res.status(400).json({ message: 'Failed to find all tasks' });
    }
};

export const getTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const userId = req.user._id;

        const task = await Task.findOne({ _id: taskId, createBy: userId });

        if (!task) {
            return res.status(404).json({ massage: 'Task not found' });
        }
        return res.status(200).json(task);
    } catch (err) {
        res.status(400).json({ message: 'Failed to get the task' });
    }
};
