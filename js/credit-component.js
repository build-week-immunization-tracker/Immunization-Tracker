class Button {
  constructor(element) {
    (this.button = element),
      (this.btnNumber = element.dataset.button),
      (this.credits = document.querySelectorAll(".credit")),
      (this.btnCredit = document.querySelector(
        `.credit[data-button="${this.btnNumber}"]`
      )),
      this.button.addEventListener("click", () => {
        this.showCredit();
      }),
      this.button.addEventListener("dblclick", () => {
        this.hideCredit();
      });
  }
  showCredit() {
    this.credits.forEach(credit => credit.classList.add("credit"));
    if (this.btnNumber === "1") {
      this.credits.forEach(credit => credit.classList.toggle("credit"));
    } else {
      this.btnCredit.classList.toggle("credit");
    }
  }
  hideCredit() {
    this.credits.forEach(credit => credit.classList.add("credit"));
  }
}

const creditButton = document.querySelectorAll(".credit-button");

creditButton.forEach(button => new Button(button));
