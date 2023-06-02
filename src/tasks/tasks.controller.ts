import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
	// private 作用
	// tasksService: TasksService;
	// constructor(tasksService: TasksService) {
	// 	this.tasksService = tasksService;
	// }
	constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }
  
  @Get('/:id')
  getTaskById(@Param('id') id:string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(
    @Body() createTaskDto: CreateTaskDto
  ): Task {
    return this.tasksService.createTask(createTaskDto)
  }
  // createTask(@Body() body) {
  //   console.log('body', body)
  // }

}
