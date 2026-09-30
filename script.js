// ==============================
// OPEN WEBSITE
// ==============================

function startLove() {

    const opening = document.querySelector(".opening");

    opening.classList.add("hide");

    createHearts();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ==============================
// FLOATING HEARTS
// ==============================

function createHearts() {

    const heartContainer = document.querySelector(".hearts");

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💓",
        "✨"
    ];

    setInterval(() => {

        const heart = document.createElement("div");

        heart.classList.add("floating-heart");

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.animationDuration =
            Math.random() * 5 + 5 + "s";

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);

    }, 500);
}


// ==============================
// POPUP SURPRISE
// ==============================

function showSurprise() {

    const popup = document.getElementById("popup");

    popup.classList.add("show");

    createBurst();
}


function closePopup() {

    const popup = document.getElementById("popup");

    popup.classList.remove("show");
}


// ==============================
// HEART BURST
// ==============================

function createBurst() {

    const hearts = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "🥰",
        "✨"
    ];

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.position = "fixed";

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.fontSize =
            Math.random() * 25 + 15 + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "20000";

        document.body.appendChild(heart);

        const x =
            (Math.random() - .5) * 700;

        const y =
            (Math.random() - .5) * 700;

        heart.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${x}px, ${y}px) scale(1.3)`,
                    opacity: 0
                }
            ],
            {
                duration: 1200,
                easing: "cubic-bezier(.2,.8,.3,1)"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 1200);
    }
}


// ==============================
// SCROLL REVEAL
// ==============================

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";
                }

            });

        },
        {
            threshold: 0.15
        }
    );


document
    .querySelectorAll(
        ".message-card, .memory-card, .reason, .funny-box"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(50px)";

        element.style.transition =
            "all .8s ease";

        observer.observe(element);

    });