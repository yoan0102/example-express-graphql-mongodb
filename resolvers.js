const Task = require('./models/task')

const resolvers = {
  Query: {
    hello: () => 'Hello World',
    getAllTasks: async () => {
      const tasks = await Task.find()
      return tasks
    },
    async getTask(_, { id }) {
      const task = await Task.findById(id)
      return task
    },
  },
  Mutation: {
    createTask: async (_, { task }) => {
      const { title, description } = task

      const newTask = new Task({ title, description })
      await newTask.save()
      return newTask
    },
    removeTask: async (_, { id }) => {
      await Task.findByIdAndDelete(id)
      return 'task deleted'
    },
    async updateTask(_, { id, task }) {
      const newTask = await Task.findByIdAndUpdate(
        id,
        {
          $set: task,
        },
        { new: true }
      )
      return newTask
    },
  },
}

module.exports = {
  resolvers,
}
