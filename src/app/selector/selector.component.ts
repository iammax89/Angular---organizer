import { Component, OnInit } from "@angular/core";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { DateService } from "../common/date.service";

@Component({
  selector: "app-selector",
  templateUrl: "./selector.component.html",
  styleUrls: ["./selector.component.scss"]
})
export class SelectorComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  constructor(private dateService: DateService) {}

  ngOnInit() {}
  go(dir: number) {
    this.dateService.changeMonth(dir);
  }
}
