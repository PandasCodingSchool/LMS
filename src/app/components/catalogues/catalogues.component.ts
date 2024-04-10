import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Catalogue } from '../../interfaces/catalogues.interface';
import { DialogComponent } from '../catalogue-dialog/catalogue-dialog.component';
import { CatalogueService } from '../../services/catalogue.service';

@Component({
  selector: 'app-catalogues',
  standalone: true,
  imports: [CommonModule, DialogComponent],
  templateUrl: './catalogues.component.html',
  styleUrl: './catalogues.component.css',
})
export class CataloguesComponent implements OnInit {
  showDialog = false;
  catalogues: Catalogue[] = [
    {
      id: 1,
      name: 'Catalogue 1',
      description: 'Catalogue 1 Description',
      category: 'Category 1',
      author: 'Author 1',
    },
    {
      id: 2,
      name: 'Catalogue 2',
      description: 'Catalogue 2 Description',
      category: 'Category 2',
      author: 'Author 2',
    },
    {
      id: 3,
      name: 'Catalogue 3',
      description: 'Catalogue 3 Description',
      category: 'Category 3',
      author: 'Author 3',
    },
    {
      id: 4,
      name: 'Catalogue 4',
      description: 'Catalogue 4 Description',
      category: 'Category 4',
      author: 'Author 4',
    },
    {
      id: 5,
      name: 'Catalogue 5',
      description: 'Catalogue 5 Description',
      category: 'Category 5',
      author: 'Author 5',
    },
  ];
  constructor(private catalogueService: CatalogueService) {}
  ngOnInit(): void {
    this.fetchCatalogues();
  }

  editCatalogue(catalogue: Catalogue) {
    console.log(catalogue);
  }

  deleteCatalogue(catalogueId: number) {
    console.log(catalogueId);
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
      this.fetchCatalogues();
    }
  }
  fetchCatalogues() {
    this.catalogueService.getAll().subscribe((data: Catalogue[]) => {
      this.catalogues = data;
    });
  }
}
