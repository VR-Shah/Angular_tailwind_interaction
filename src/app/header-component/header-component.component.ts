import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  menu = 
  [
    {
      label:"Login",
    }, 
    {
      label:"Sign up"
    }
  ];

  constructor(private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
  }

  // select(event:any) {
  //   var targeted = event.target;
  //   var clicked = targeted.parentElement;

  //   var child = clicked.children;
  //   console.log(child);

  //   for (let i = 0; i < child.length; i++) {
  //     if (child[i].classList.contains("text-white")) {
  //       console.log(child[i]);
  //       child[i].classList.remove("text-white", "bg-primary-600");
  //       child[i].classList.add(
  //         "text-gray-600",
  //         "bg-gray-50",
  //         "border",
  //         "border-white"
  //       );
  //     }
  //   }

  //   targeted.classList.remove(
  //     "text-gray-600",
  //     "bg-gray-50",
  //     "border",
  //     "border-white"
  //   );
  //   targeted.classList.add("text-white", "bg-primary-600");
  // }

  // selectNew() {
  //   console.log("inside select new");
  //   var newL = document.getElementById("list");
  //   newL?.classList.toggle("hidden");

  //   document.getElementById("ArrowSVG")?.classList.toggle("rotate-180");
  // }

  // selectedSmall(event:any) {
  //   console.log("inside select small ");

  //   var targeted = event.target;
  //   var clicked = targeted.parentElement;

  //   var child = clicked.children;

  //   for (let i = 0; i < child.length; i++) {
  //     if (child[i].classList.contains("text-white")) {
  //       child[i].classList.remove("bg-primary-600");
  //       child[i].classList.add(
  //         "text-gray-600",
  //         "bg-gray-50",
  //         "border",
  //         "border-white"
  //       );
  //     }
  //   }

  //   targeted.classList.remove(
  //     "text-gray-600",
  //     "bg-gray-50",
  //     "border",
  //     "border-white"
  //   );

  //   document.getElementById("s1")?.classList.add("hidden");
  //   document.getElementById("textClicked")!.innerHTML = targeted.innerHTML;
  //   // close dropdown
  //   var newL = document.getElementById("list");
  //   newL?.classList.toggle("hidden");
  //   document.getElementById("ArrowSVG")?.classList.toggle("rotate-180");
  // }

  // navigateToPage(label:any) {
  //   if(label == 'Login') {
  //     this.route.navigate(['login'],{relativeTo:this.router});
  //   } else{
  //     this.route.navigate(['signup'],{relativeTo:this.router});
  //   }
  // }
}
