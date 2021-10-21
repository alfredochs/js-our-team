// name, role, image
// Wayne Barnett, Founder & CEO, wayne - barnett - founder - ceo.jpg
// Angela Caroll, Chief Editor, angela - caroll - chief - editor.jpg
// Walter Gordon, Office Manager, walter - gordon - office - manager.jpg
// Angela Lopez, Social Media Manager, angela - lopez - social - media - manager.jpg
// Scott Estrada, Developer, scott - estrada - developer.jpg
// Barbara Ramos, Graphic Designer, barbara - ramos - graphic - designer.jpg;

// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.

const teamContainer = document.querySelector(".team-container");

const inputName = document.getElementById("name");
const inputRole = document.getElementById("role");
const inputImage = document.getElementById("image");
const addMemberButton = document.getElementById("addMemberButton");

const teamMembers = [
    //  indice 0
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "image": "wayne-barnett-founder-ceo.jpg"
    },
    //  indice 1
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "image": "angela-caroll-chief-editor.jpg"
    },
    //  indice 2
    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "image": "walter-gordon-office-manager.jpg"
    },
    //  indice 3
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "image": "angela-lopez-social-media-manager.jpg"
    },
    //  indice 4
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "image": "scott-estrada-developer.jpg"
    },
    //  indice 5
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "image": "barbara-ramos-graphic-designer.jpg"
    },
    //indice 6
];

/*
creo un ciclo per selezionare i dati degli oggetti dentro l'array
in console si vedranno tutti i dati dell'oggetto selezionato
creo una funzione che inserirà i dati singoli degli oggetti
    ricordare che per selezionare un solo dato dell'oggetto
    bisgna dichiararlo dentro le quadre [] oppure con un punto
    per esempio per prendere il nome si farà 
    -function(attributo.nome)
    -function(attributo.ruolo)
    -function(attributo.image) ecc
l'attributo della funzione andrà a sostituire dove l'abbiamo inserito all'interno della funzione,
in questo caso nel ciclo for abbiamo creato un singolo membro con tutti i dati
 */


for (let i = 0; i < teamMembers.length; i++) {
    const singleCard = teamMembers[i];
    stampaCard(singleCard);
}
function stampaCard(user) {
    teamContainer.innerHTML += `
    <div class="team-card">
            <div class="card-image">
              <img
                src="img/${user.image}"
                alt="Wayne Barnett"
              />
            </div>
            <div class="card-text">
              <h3>${user.name}</h3>
              <p>${user.role}</p>
            </div>
          </div>
    `;
}

const singleMember = "";
function addNewMember(singleMember) {
    teamContainer.innerHTML = "";
    for (let i = 0; i < teamMembers.length; i++) {
        const singleMember = teamMembers[i];
        teamContainer.innerHTML += `
    <div class="team-card">
            <div class="card-image">
              <img
                src="img/${singleMember.image}"
                alt="Wayne Barnett"
              />
            </div>
            <div class="card-text">
              <h3>${singleMember.name}</h3>
              <p>${singleMember.role}</p>
            </div>
          </div>
    `;
    }
}
addNewMember(singleMember);
addMemberButton.addEventListener("click", function () {
    teamMembers.push({
        name: `${inputName.value}`,
        role: `${inputRole.value}`,
        image: `${inputImage.value}`
    });
    addNewMember(singleMember);
});


/*
raccolgo i dati che l'utente inserice in una funzione
una volta raccolti li inserisco nell'oggetto vuoto
dopo aver l'oggetto con dati , al click lo pushiamo dentro l'array
*/