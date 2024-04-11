import { Component } from '@angular/core';
import { Circulation } from '../../../interfaces/circulation.interface';
import { CirculationService } from '../../../services/circulation.service';
import { CommonModule } from '@angular/common';
import { CirculationDialogComponent } from '../circulation-dialog/circulation-dialog.component';

@Component({
  selector: 'app-circulation',
  standalone: true,
  imports: [CommonModule,CirculationDialogComponent],
  templateUrl: './circulation.component.html',
  styleUrl: './circulation.component.css'
})
export class CirculationComponent {
  showDialog = false;
  circulations:Circulation[] = [
    {
      id: '1',
      dueDate: new Date(),
      issueDate: new Date(),
      memberId:'2'
    },
    {
      id: '2',
      dueDate: new Date(),
      issueDate: new Date(),
      memberId:'2'
    }
  ];
  constructor(private circulationService: CirculationService) {}
  
  ngOnInit(): void {
    this.fetchCirculations();
  }

  delete(id: string) {
    console.log(id);
  }

  showCreateDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

  submit(value: any) {
    if (value) {
      this.showDialog = false;
      this.fetchCirculations();
    }
  }
  fetchCirculations() {
    this.circulationService.getAll().subscribe((data: Circulation[]) => {
      this.circulations = data;
    });
  }
}
