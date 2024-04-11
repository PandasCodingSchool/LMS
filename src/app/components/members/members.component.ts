import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../../services/catalogue.service';
import { Member } from '../../interfaces/members.interface';
import { MemberDialogComponent } from '../member-dialog/member-dialog.component';
import { MemberService } from '../../services/members.service';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule, MemberDialogComponent],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css',
})
export class membersComponent implements OnInit {
  showDialog = false;
  members:Member[] = [
    {
      id: 1,
      name: 'Catalogue 1',
      email: 'pankaj@gmail.com',
      department: 'IT',
    },
    {
      id: 2,
      name: 'Catalogue 2',
      email: 'neeraj@gmail.com',
      department: 'HR',
    },

  
  ];
  constructor(private memberService:MemberService) {}
  ngOnInit(): void {
    this.fetchMembers();
  }

  deleteMember(id: number) {
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
      this.fetchMembers();
    }
  }
  fetchMembers() {
    this.memberService.getAll().subscribe((data: Member[]) => {
      this.members = data;
    });
  }
}
