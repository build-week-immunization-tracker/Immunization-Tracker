
class Review {
    constructor(element){
        // element is review button to open modal to leave
        // review...
        this.reviewButton = element;
        this.submitButton = document.getElementById("submit-btn");
        this.cancelButton = document.getElementById("cancel-btn");
        this.closeButton = document.getElementById("close-btn");
        // Selectors for various html elements
        this.modal = document.querySelector(".modal");

        this.reviewButton.addEventListener("click", () => {
            this.openModal();
        });
        this.submitButton.addEventListener("click", () => {
            this.addReview();
        });
        this.cancelButton.addEventListener("click", () => {
            this.closeModal();
        });
        this.closeButton.addEventListener("click", () => {
            this.closeModal();
        });
    }
    openModal(){
        this.modal.style.display = "block";
    }
    closeModal(){
        this.modal.style.display = "none";
    }
    addReview(){
        let reviewName = document.getElementById("review-name").value;
        let reviewContent = document.getElementById("review-content").value;

        let newReview = document.createElement("div");
        newReview.classList.add("carousel-item");
        let newReviewPanel = document.createElement("div");
        newReviewPanel.classList.add("review-panel");
        let newReviewText = document.createElement("div");
        newReviewText.classList.add("review-text");

        let reviewHeader = document.createElement("h1");
        reviewHeader.textContent = reviewName;
        let reviewParagraph = document.createElement("p");
        reviewParagraph.textContent = reviewContent;

        newReviewText.appendChild(reviewHeader);
        newReviewText.appendChild(reviewParagraph);

        newReviewPanel.appendChild(newReviewText);

        newReview.appendChild(newReviewPanel);
        
        document.querySelector(".carousel-inner").appendChild(newReview);
        this.closeModal();
    }
}

const reviewButton = document.getElementById("review-btn");

new Review(reviewButton);