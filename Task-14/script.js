document.addEventListener("DOMContentLoaded", function() {
    const steps = Array.from(document.querySelectorAll(".form-step"));
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");
    const form = document.getElementById("applicationForm");
    const progress = document.querySelector(".progress-bar .progress");
    const progressPercentage = document.querySelector(".progress-bar .progress-percentage");
    const sidebarItems = Array.from(document.querySelectorAll(".sidebar ul li"));
    const thankYouMessage = document.getElementById("thank-you-message");

    let currentStep = 0;

    nextBtns.forEach(button => {
        button.addEventListener("click", () => {
            changeStep(1);
        });
    });

    prevBtns.forEach(button => {
        button.addEventListener("click", () => {
            changeStep(-1);
        });
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        form.style.display = "none";
        thankYouMessage.style.display = "block";
    });

    function changeStep(step) {
        steps[currentStep].classList.remove("active");
        sidebarItems[currentStep].classList.remove("active");
        currentStep += step;
        steps[currentStep].classList.add("active");
        sidebarItems[currentStep].classList.add("active");
        updateProgressBar();
    }

    function updateProgressBar() {
        const progressPercent = ((currentStep + 1) / steps.length) * 100;
        progress.style.width = `${progressPercent}%`;
        progressPercentage.textContent = `${Math.round(progressPercent)}%`;
    }

    changeStep(0); // Initialize the first step
});
