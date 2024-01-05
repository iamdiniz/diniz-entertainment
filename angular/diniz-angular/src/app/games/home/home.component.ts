import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {

  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
