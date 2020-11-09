var Family=[
    "Anusha Hari (My Mother)",
    "H. Sneha (My Sister)",
    "H. Dheeptha (Me)",
    "Together we make a great FAMILY!",
    "Hari. A (My Father)",
  ];
  var images=[
    "https://www.slazzer.com/downloads/771c3c8e-2256-11eb-a9a5-0200a434c7ed/Mother.png",
    "https://www.slazzer.com/downloads/fbdca991-2256-11eb-abf2-0200a434cc1a/Sister.png",
    "https://www.slazzer.com/downloads/0ecbf77d-2257-11eb-b761-0200a434c31d/Me.png",
    "https://www.slazzer.com/downloads/27b95b09-2257-11eb-abf2-0200a434cc1a/Family.png",
    "https://www.slazzer.com/downloads/1ff90a84-2258-11eb-a9a5-0200a434c7ed/Father.png",
  ];
  var i=0;
function next_slide(){
  if(i==6)
  {
  i=0;  
  }
  document.getElementById("names").innerHTML=Family[i];
  document.getElementById("album").src=images[i];
  i++;
}
