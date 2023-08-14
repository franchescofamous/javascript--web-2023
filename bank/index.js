let registerBtn = document.querySelector(".register button");
let memberListSection = document.querySelector(".memberList");
let myBankMembers = [];
class BankAccount {
  constructor(firstname, surname, age, id, accountType) {
    this.firstname = firstname;
    this.surname = surname;
    this.age = age;
    this.id = id;
    this.accountType = accountType;
  }
  solde = 0;
  transaction(id, amount, accountType) {
    if (accountType === "epargne") {
      let transactionFees = (amount * 3) / 100;
      if (this.solde >= transactionFees + amount) {
        alert("we can proceed");
        let receiverFound = false;
        for (let member of myBankMembers) {
          if (member.id === id) {
            alert("receiver found");
            member.solde += amount;
            this.solde -= amount + transactionFees;
            receiverFound = true;
          }
        }
        if (!receiverFound) {
          alert("receiver not found");
        }
      } else {
        alert("insuficient fund");
      }
    } else if (accountType === "courant") {
      let transactionFees = (amount * 1) / 100;
      if (this.solde >= transactionFees + amount) {
        alert("we can proceed");
        let receiverFound = false;
        for (let member of myBankMembers) {
          if (member.id === id) {
            alert("receiver found");
            member.solde += amount;
            this.solde -= amount + transactionFees;
            receiverFound = true;
          }
        }
        if (!receiverFound) {
          alert("receiver not found");
        }
      } else {
        alert("insuficient fund");
      }
    } else if (accountType === "gold") {
      if (this.solde >= amount) {
        alert("we can proceed");
        let receiverFound = false;
        for (let member of myBankMembers) {
          if (member.id === id) {
            alert("receiver found");
            member.solde += amount;
            this.solde -= amount;
            receiverFound = true;
          }
        }
        if (!receiverFound) {
          alert("receiver not found");
        }
      } else {
        alert("insuficient fund");
      }
    }
  }

  credit(montant) {
    this.solde += montant;
  }
}

let showMemberList = () => {
  if (myBankMembers.length < 1) {
    return;
  }
  memberListSection.innerHTML = "";
  for (let member of myBankMembers) {
    let articleElt = document.createElement("article");
    articleElt.classList.add("memberCard");
    let accountTypeDiv = document.createElement("div");
    accountTypeDiv.classList.add("memberCard__accountType");
    let nameDiv = document.createElement("div");
    nameDiv.classList.add("memberCard__accountName");
    let nameh2 = document.createElement("h2");
    let detailsDiv = document.createElement("div");
    let detailsSoldeDiv = document.createElement("div");
    let detailsActionDiv = document.createElement("div");
    let creditBtn = document.createElement("button");
    let transactionBtn = document.createElement("button");
    let memberInfoListUl = document.createElement("ul");
    let memberInfoIdLi = document.createElement("li");
    let memberInfoAgeLi = document.createElement("li");
    let memberInfoSoldeLi = document.createElement("li");
    //articleElt.textContent = member.firstname;
    articleElt.appendChild(accountTypeDiv);
    accountTypeDiv.textContent = member.accountType;
    articleElt.appendChild(nameDiv);
    nameDiv.appendChild(nameh2);
    nameh2.textContent = `${"Proprietaire:"} ${member.firstname.toUpperCase()}--${
      member.surname
    }`;
    articleElt.appendChild(detailsDiv);
    detailsDiv.classList.add("memberCard__details");
    detailsDiv.appendChild(detailsSoldeDiv);
    detailsSoldeDiv.classList.add("memberCard__details__solde");
    ///detailsSoldeDiv.textContent = `solde: ${member.solde}`;
    detailsSoldeDiv.appendChild(memberInfoListUl);
    memberInfoListUl.appendChild(memberInfoIdLi);
    memberInfoListUl.appendChild(memberInfoAgeLi);
    memberInfoListUl.appendChild(memberInfoSoldeLi);
    memberInfoAgeLi.textContent = `Age : ${member.age}`;
    memberInfoIdLi.textContent = `Id_compte: ${member.id}`;
    memberInfoSoldeLi.textContent = `Solde : ${member.solde}`;
    detailsDiv.appendChild(detailsActionDiv);
    detailsActionDiv.classList.add("memberCard__details__action");
    detailsActionDiv.appendChild(creditBtn);
    creditBtn.textContent = "Credit Account";
    detailsActionDiv.appendChild(transactionBtn);
    transactionBtn.textContent = "Transaction";

    switch (member.accountType) {
      case "epargne":
        articleElt.classList.add("memberCard--saving");
        break;
      case "courant":
        articleElt.classList.add("memberCard--current");

        break;
      case "gold":
        articleElt.classList.add("memberCard--gold");

        break;
    }

    creditBtn.addEventListener("click", (e) => {
      let creditAmount = Number(
        prompt("Entrez le montant a crediter sur ce compte")
      );
      member.credit(creditAmount);
      console.log(member);
      showMemberList();
    });

    transactionBtn.addEventListener("click", (e) => {
      let transactionAmount = Number(
        prompt("Entrez le montant a transferer :")
      );
      let receiverId = Number(prompt("Entrez l'id du receveur :"));

      member.transaction(receiverId, transactionAmount, member.accountType);
      showMemberList();
    });

    memberListSection.appendChild(articleElt);
  }
};

let register = () => {
  let firstname = prompt("Veuillez entrer votre nom:");
  let surname = prompt("Veuillez entrer votre prenom:");
  let age = prompt("Veuillez entrer votre age:");
  //let id = Number(prompt("Veuillez entrer votre id:"));
  let type = Number(
    prompt(
      "Quel type de compte voudriez-vous?: \n 1-Epargne \n 2-Courant \n 3-Gold"
    )
  );

  while (type != 1 && type != 2 && type != 3) {
    type = Number(
      prompt(
        "Quel type de compte voudriez-vous?: \n 1-Epargne \n 2-Courant \n 3-Gold"
      )
    );
  }
  switch (type) {
    case 1:
      // let account = new BankAccount(firstname, surname, age, id, type);
      //myBankMembers.push(account);
      myBankMembers.push(
        new BankAccount(
          firstname,
          surname,
          age,
          myBankMembers.length + 1,
          "epargne"
        )
      );
      console.log(myBankMembers);
      showMemberList();
      break;
    case 2:
      myBankMembers.push(
        new BankAccount(
          firstname,
          surname,
          age,
          myBankMembers.length + 1,
          "courant"
        )
      );
      console.log(myBankMembers);
      showMemberList();
      break;
    case 3:
      myBankMembers.push(
        new BankAccount(
          firstname,
          surname,
          age,
          myBankMembers.length + 1,
          "gold"
        )
      );
      console.log(myBankMembers);
      showMemberList();
      break;
  }
};

registerBtn.addEventListener("click", (e) => {
  register();
});
