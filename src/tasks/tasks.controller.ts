import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
	// private 作用
	// tasksService: TasksService;
	// constructor(tasksService: TasksService) {
	// 	this.tasksService = tasksService;
	// }
	constructor(private tasksService: TasksService) {
	}

	helloWorld() {
		// this.tasksService.doSomething();
	}
}
