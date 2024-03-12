// Import required modules
const { PrismaClient } = require('@prisma/client');
const jsonData = require('./data.json'); // Import JSON data directly

// Create an instance of the Prisma client
const prisma = new PrismaClient();

// Define the seeding function
async function seed() {
  try {
    // Iterate over each board in the JSON data
    for (const boardData of jsonData.boards) {
      // Create a new board in the database
      const newBoard = await prisma.board.create({
        data: {
          name: boardData.name,
          columns: {
            create: boardData.columns.map(column => ({
              name: column.name,
              tasks: {
                create: column.tasks.map(task => ({
                  title: task.title,
                  description: task.description,
                  status: task.status,
                  subtasks: task.subtasks
                }))
              }
            }))
          }
        },
        include: {
          columns: {
            include: {
              tasks: true // Include the tasks for each column
            }
          }
        }
      });

      console.log('New board created:', newBoard);
    }

    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    // Disconnect the Prisma client
    await prisma.$disconnect();
  }
}

// Call the seeding function
seed();