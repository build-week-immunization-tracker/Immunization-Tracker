class Button {
    constructor(element){
        this.button = element,
        this.btnNumber = element.dataset.button,      
        this.credits = document.querySelectorAll(".credit"),
        this.btnCredit = document.querySelector(`.credit[data-button="${this.btnNumber}"]`),
        this.button.addEventListener("click", () => {
            this.showCredit();
        });
    }
    showCredit(){
        this.credits.forEach( credit => credit.classList.add("credit"));
        if(this.btnNumber === "1"){
            
            this.credits.forEach( credit => credit.classList.toggle("credit"));
        } else {
            this.credits.forEach( credit => credit.classList.add("credit"));
            this.btnCredit.classList.toggle("credit");
            
        }    
    }
}



const creditButton = document.querySelectorAll('.credit-button');

creditButton.forEach(button => new Button(button));
