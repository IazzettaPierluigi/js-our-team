// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

let containerHtml = document.querySelector('.container')

let rowHtml = document.querySelector('.row')

const team = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      picture: "wayne-barnett-founder-ceo.jpg",
    },
    {
      name: "Angela Caroll",
      role: "Chief Editor",
      picture: "angela-caroll-chief-editor.jpg",
    },
    {
      name: "Walter Gordon",
      role: "Office Manager",
      picture: "walter-gordon-office-manager.jpg",
    },
    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      picture: "angela-lopez-social-media-manager.jpg",
    },
    {
      name: "Scott Estrada",
      role: "Developer",
      picture: "scott-estrada-developer.jpg",
    },
    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      picture: "barbara-ramos-graphic-designer.jpg",
    },
  ];
  

  //uso for.each per stampare 
  team.forEach(person => {
    console.log(`Name: ${person.name}, Role: ${person.role}, Picture: ${person.picture}`);
  });
  
  team.forEach(person => {
    // rowHtml.innerHTML += (`<div class="col-4">Name: ${person.name}, Role: ${person.role},  <img src="./assets/img/${person.picture}" alt=""></div>`)

    rowHtml.innerHTML += (
        `<div class="card" style="width: 18rem;">
  <img src="./assets/img/${person.picture}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${person.name}</h5>
    <p class="card-text">${person.role}.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
    )
  })

  `<div class="card" style="width: 18rem;">
  <img src="./assets/img/${person.picture}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{person.name}</h5>
    <p class="card-text">{person.role}.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`