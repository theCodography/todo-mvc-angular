import { Component, OnInit } from "@angular/core";
import { Filter, FilterButton } from "src/app/models/filtering.model";

@Component({
  selector: "app-footer",
  template: `
    <div class="footer w-100">
      <div
        class="h-100 is-flex is-justify-content-space-between is-align-items-center"
        style="top: 0; bottom: 0; left: 0; right: 0;"
      >
        <span class="items-count">
          {{ length }} item{{ length > 1 ? "s" : "" }}
        </span>
        <div>
          <button
            type="button"
            class="filter-btn"
            *ngFor="let btn of filterButtons"
            [ngClass]="{ active: btn.isActive }"
          >
            {{ btn.label }}
          </button>
        </div>
        <button class="filter-btn clear-completed-btn">Clear completed</button>
      </div>
    </div>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  filterButtons: FilterButton[] = [
    { type: Filter.All, label: "All", isActive: true },
    { type: Filter.Active, label: "Active", isActive: false },
    { type: Filter.Completed, label: ".Completed", isActive: false },
  ];

  length = 0;
  constructor() {}

  ngOnInit(): void {}
}
