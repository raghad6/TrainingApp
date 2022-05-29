import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import TasksList from 'src/app/models/TasksList';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-to-do-list',
  templateUrl: './create-to-do-list.component.html',
  styleUrls: ['./create-to-do-list.component.css'],
})
export class CreateToDoListComponent implements OnInit {
  newTodo: string;
  todos: any;
  todoObj: any;
  tasks: TasksList[] = [];

  constructor(private router: Router, private apiService: ApiService) {
    this.newTodo = '';
    this.todos = [];
  }

  addTodo(event: { preventDefault: () => void }) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false,
    };
    this.todos.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }

  addTasks(tasks: TasksList) {
    this.apiService.postTaskList(tasks).subscribe((res) => {
      console.log(res, 'efjui');
    });
  }
  deleteTodo(index: any) {
    this.todos.splice(index, 1);
  }

  deleteSelectedTodos() {
    //need ES5 to reverse loop in order to splice by index
    for (var i = this.todos.length - 1; i > -1; i--) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }
  ngOnInit(): void {}

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
