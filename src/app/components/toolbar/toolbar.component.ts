import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.tokenService.DeleteToken();
    this.router.navigate(['']);
  }

}
