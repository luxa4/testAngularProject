import {Component, OnInit} from '@angular/core';
import {Todo, TodosService} from '../shared/todos.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public title:string=''

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
  }

  addTodo() {
    const todo:Todo = {
      id: Date.now(),
      title : this.title,
      completed: false,
      date: new Date()
    }
    this.todoService.addTodo(todo)
  }

}
