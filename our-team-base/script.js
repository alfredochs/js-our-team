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

const teamMembers = [
    //  indice 0
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "foto": "wayne-barnett-founder-ceo.jpg"
    },
    //  indice 1
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "foto": "angela-caroll-chief-editor.jpg"
    },
    //  indice 2
    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "foto": "walter-gordon-office-manager.jpg"
    },
    //  indice 3
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "foto": "angela-lopez-social-media-manager.jpg"
    },
    //  indice 4
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "foto": "scott-estrada-developer.jpg"
    },
    //  indice 5
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "foto": "barbara-ramos-graphic-designer.jpg"
    }
];

const indice5 = {
    "name": "Barbara Ramos",
    "role": "Graphic Designer",
    "foto": "barbara - ramos - graphic - designer.jpg"
};
// console.log(teamMembers[3]);

for (let i = 0; i < teamMembers.length; i++) {
    const membriSingoli = teamMembers[i];
    console.log(membriSingoli);
}
for (let chiavi in indice5) {
    console.log(indice5[chiavi]);
}