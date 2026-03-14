import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    {
      title: ' Dragon Ball',
      year:"1986",
      category: "Action, Adventure",
      image:"https://preview.redd.it/which-arc-of-whole-dragon-ball-series-is-your-favourite-and-v0-b77emgf4q23e1.png?auto=webp&s=7851976f9f3fae7871ace74f0ff6d9aaf3bc0487",
      views: 100000,
    },
    {
      title: 'Attack On Titan',
      year:"2013",
      category:"Action, Dark Fantasy",
      image:"https://www.bhdstar.vn/wp-content/uploads/2025/02/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-14.jpg",
      views: 7000,
    },
    {
      title: 'Bleach',
      year:"2004",
      category:"Action, Supernatural",
      image:"https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Bleachanime.png/250px-Bleachanime.png",
      views: 100000,
    },
    
  ];
  handleStory(title: string) {
  alert("Truyen:"+ title)
}
}
