//prendo la lista
const list = document.getElementById("list");

//array utenti del team
const team = [
  {
    firstname: "Wayne Barnett",
    role: "Founder & CEO",
    image: "assets/img/wayne-barnett-founder-ceo.jpg"
  },

  {
    firstname: "Angela Caroll",
    role: "Chief Editor",
    image: "assets/img/angela-caroll-chief-editor.jpg"
  },

  {
    firstname: "Walter Gordon",
    role: "Office Manager",
    image: "assets/img/walter-gordon-office-manager.jpg"
  },

  {
    firstname: "Angela Lopez",
    role: "Social Media Manager",
    image: "assets/img/angela-lopez-social-media-manager.jpg"
  },

  {
    firstname: "Scott Estrada",
    role: "Developer",
    image: "assets/img/scott-estrada-developer.jpg"
  },

  {
    firstname: "Barbara Ramos",
    role: "Graphic Designer",
    image: "assets/img/barbara-ramos-graphic-designer.jpg"
  }
]
console.log(team)
console.warn("primo utente", team[0])


//ciclo per stampare tutti i membri "for in"
for(let i in team){
  const utente = team[i]
  console.log("indice", i, "utente", utente)
  
  list.innerHTML += `
  <li>
    <ul>
    <li class="image"><img src="${utente.image}"></li>
      <li>${utente.firstname}</li>
      <li>${utente.role}</li>
    </ul
  </li>
  `
}


//---------------------------------------------------
