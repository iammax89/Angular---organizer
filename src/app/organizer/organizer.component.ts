import { Component, OnInit } from "@angular/core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { DateService } from "../common/date.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TasksService, Task } from "../common/tasks.service";
import { switchMap } from "rxjs/operators";
import * as moment from "moment";

@Component({
  selector: "app-organizer",
  templateUrl: "./organizer.component.html",
  styleUrls: ["./organizer.component.scss"]
})
export class OrganizerComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  form: FormGroup;
  tasks: Task[] = [];
  constructor(
    private dateService: DateService,
    private tasksService: TasksService
  ) {}

  ngOnInit() {
    this.dateService.date$
      .pipe(switchMap(value => this.tasksService.fetchTasks(value)))
      .subscribe(tasks => (this.tasks = tasks));
    this.form = new FormGroup({
      title: new FormControl("", Validators.required)
    });
  }
  remove(task: Task) {
    this.tasksService.remove(task).subscribe(
      () => {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
      },
      err => console.error(err)
    );
  }
  submit() {
    const task: Task = {
      title: this.form.value.title,
      date: this.dateService.date$.value.format("MM-DD-YYYY")
    };
    this.tasksService.create(task).subscribe(
      res => {
        this.tasks.push(task);
        this.form.reset();
      },
      err => console.error(err)
    );
  }
}
