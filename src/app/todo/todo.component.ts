import { Component, OnInit } from '@angular/core';
import {TodosService} from '../shared/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public searchString:string = ''
  public loading:boolean = true

  constructor(private todoService:TodosService) { }

  ngOnInit(): void {
    this.todoService.fetchTodo().subscribe(() => this.loading = false)
  }

  onChange(id:number) {
      this.todoService.onChange(id)
  }

  removeTodo(id:number) {
    this.todoService.removeTodo(id)
  }

}
