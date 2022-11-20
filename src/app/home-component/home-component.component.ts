import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})

export class HomeComponentComponent implements OnInit {
  
  element = [{
    text:"text",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium atque voluptas omnis itaque est magni debitis quis ratione consequatur labore reiciendis, totam, officiis, voluptate necessitatibus officia dolorum iste facere voluptatem provident tempora fuga incidunt! Facere, illo cum quibusdam amet blanditiis ratione. Recusandae laudantium repudiandae neque deleniti at hic, blanditiis voluptates.",
  }];

  image1 = "/assets/images/privacy.jpg";
  image2 = "/assets/images/application-tracking-system.jpg";
  image3 = "/assets/images/data-illustration.jpg";
  image4 = "/assets/images/scanning-candidate.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
