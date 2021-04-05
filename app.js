const testimonies = [
    {
        id: 1,
        img:
          "./images/person-1.jpeg",
        name: "Grace Teabag",
        title: "CEO",
        writeUp:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
      id: 2,
      img:
        "./images/coffee3.jpg",
      name: "Fola Dada",
      title: "Managing Director",
      writeUp:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 3,
      img:
        "./images/coffee4.jpg",
      name: "Anna Johnson",
      title: "Accountant",
      writeUp:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 4,
      img:
        "./images/coffee7.jpg",
      name: "Henry Jones",
      title: "Graphics Designer",
      writeUp:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 5,
      img:
        "./images/coffee9.jpg",
      name: "bill anderson",
      title: "Cheif Technical Officer",
      writeUp:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  const img = document.querySelector("#person-img");
  const writer = document.querySelector(".name");
  const jobTitle = document.querySelector(".job-title");
  const writeUp = document.querySelector(".write-up");
  const prevBtn = document.querySelector(".btn-prev");
  const nextBtn = document.querySelector(".btn-next");

  let currentItem = 0;
  function slideTestimonies(item){
    img.src = testimonies[item].img;         
    writer.textContent = testimonies[item].name;     
    jobTitle.textContent = testimonies[item].title;     
    writeUp.textContent = testimonies[item].writeUp;     
}
  window.addEventListener("DOMContentLoaded", () =>{
    slideTestimonies(currentItem);
  })

  nextBtn.addEventListener("click", function(){
      currentItem++;
      if(currentItem > testimonies.length){
          currentItem = 0;
      }
      slideTestimonies(currentItem);
  })
  prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = testimonies.length - 1;
    }    
    slideTestimonies(currentItem);
})