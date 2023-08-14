let registerUserButton = document.querySelector(".register button");
let memberListSection = document.querySelector(".memberList");
let accountList = [];
class Account {
  constructor(id, firstname, surname, age, profesion, accountType) {
    this.id = id;
    this.firstname = firstname;
    this.surname = surname;
    this.age = age;
    this.profesion = profesion;
    this.accountType = accountType;
  }
  amount = 0;
  credit(creditAmount) {
    this.amount += creditAmount;
  }
  transaction(accountId, transactionAmount) {
    if (transactionAmount <= 0) {
      return;
    }
    if (this.accountType === "epargne") {
      let transactionFees = transactionAmount * 0.03;
      if (this.amount > transactionFees + transactionAmount) {
        console.log("Transation valider");
        for (let account of accountList) {
          if (account.id === accountId) {
            this.amount = this.amount - (transactionFees + transactionAmount);
            account.amount = account.amount + transactionAmount;
          }
        }
      }
    } else if (this.accountType === "courant") {
      let transactionFees = transactionAmount * 0.01;
      if (this.amount > transactionFees + transactionAmount) {
        console.log("Transation valider");
        for (let account of accountList) {
          if (account.id === accountId) {
            this.amount = this.amount - (transactionFees + transactionAmount);
            account.amount = account.amount + transactionAmount;
          }
        }
      }
    } else if (this.accountType === "gold") {
      if (this.amount > transactionAmount) {
        console.log("Transation valider");
        for (let account of accountList) {
          if (account.id === accountId) {
            this.amount = this.amount - transactionAmount;
            account.amount = account.amount + transactionAmount;
          }
        }
      }
    }
  }
}

let showMemberList = () => {
  if (accountList.length < 1) {
    return;
  }
  memberListSection.innerHTML = "";

  for (let account of accountList) {
    let article = document.createElement("article");
    let button = document.createElement("button");
    let div = document.createElement("div");
    /* article.innerHTML = `
    <div>
    <h2> ${account.firstname} </h2>
    </div>`; */
    article.textContent = account.firstname;
    memberListSection.appendChild(article);
    button.textContent = "Crediter";
    article.appendChild(button);
    div.textContent = account.amount;
    article.appendChild(div);

    button.addEventListener("click", () => {
      let amount = Number(prompt("Montant à créditer"));
      account.credit(amount);
      showMemberList();
    });
  }
};

registerUserButton.addEventListener("click", () => {
  let firstname = prompt("Entrer un nom");
  let surname = prompt("Entrer un prenom");
  let age = Number(prompt("Entrer votre age"));
  let profesion = prompt("Entrer votre pofesion");
  let accountType = Number(
    prompt(
      "Quelle type de compte voulez vous: 1- Epargne \n 2- Courant \n 3- Gold "
    )
  );
  while (accountType != 1 && accountType != 2 && accountType != 3) {
    accountType = Number(
      prompt(
        "Quelle type de compte voulez vous: 1- Epargne \n 2- Courant \n 3- Gold "
      )
    );
  }
  switch (accountType) {
    case 1:
      accountList.push(
        new Account(
          accountList.length + 1,
          firstname,
          surname,
          age,
          profesion,
          "epargne"
        )
      );
      break;
    case 2:
      accountList.push(
        new Account(
          accountList.length + 1,
          firstname,
          surname,
          age,
          profesion,
          "courant"
        )
      );
      break;
    case 3:
      accountList.push(
        new Account(
          accountList.length + 1,
          firstname,
          surname,
          age,
          profesion,
          "gold"
        )
      );
      break;
  }

  showMemberList();
});
