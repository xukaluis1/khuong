// document.addEventListener("DOMContentLoaded", function () {
//     const menuLinks = document.querySelectorAll(".navigation_menu a");
//     const buttons = document.querySelectorAll(".cta[href^='#']"); 
//     const sections = document.querySelectorAll("section");
//     const servicesSection = document.getElementById("services");
//     const gallerySection = document.getElementById("gallery");

//     function handleNavigation(event) {
//         const targetId = this.getAttribute("href").substring(1);

//         if (targetId === "services" || targetId === "gallery") {
//             event.preventDefault(); 

//             sections.forEach(section => {
//                 if (section.id !== targetId) {
//                     section.style.display = "none";
//                 }
//             });

//             document.getElementById(targetId).style.display = "block";

//             document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
//         } else if (targetId === "home") {
//             showAllSections(); 
//         }
//     }

//     menuLinks.forEach(link => {
//         link.addEventListener("click", handleNavigation);
//     });

//     buttons.forEach(button => {
//         button.addEventListener("click", handleNavigation);
//     });
// });




//menu
const menu = document.querySelector(".menu");
const blur = document.querySelector(".blur");
const navigation = document.querySelector(".navigation");

menu.addEventListener("click", () => {
    menu.classList.toggle("active")
    navigation.classList.toggle("active")
});
//scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 200);
});

const infipa = document.querySelectorAll(".overmove");

infipa.forEach(infi => {
    const infipar = infi.querySelector(".overmove div");

    const infipacon = Array.from(infipar.children);

    infipacon.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        infipar.appendChild(duplicatedItem);
        infipar.style.animation = "move 15s linear infinite";
    });
});

//


const leftPerspectives = [
  { x: -10, z: -4 },
  { x: -20, z: -8 },
  { x: -30, z: -12 },
  { x: -40, z: -16 },
  { x: -50, z: -20 },
  { x: 10, z: -4 }
];

const rightPerspectives = [
  { x: 10, z: -4 },
  { x: 20, z: -8 },
  { x: 30, z: -12 },
  { x: 40, z: -16 },
  { x: 50, z: -20 },
  { x: -10, z: -4 }
];

const leftCards = document.querySelectorAll(".left .item");
const rightCards = document.querySelectorAll(".right .item");

const translateImage = (target, p) => {
  target.style.transform = `translate3d(${p.x}rem, 0, ${p.z}rem)`;
};

const animateCards = (c, perspectives) => {
  const count = parseInt(c.dataset.counter);
  translateImage(c, perspectives[count - 1]);
  c.dataset.counter = (count === 6 ? 1 : count + 1).toString();
};

const loop = () => {
  setInterval(() => {
    leftCards.forEach((c) => {
      animateCards(c, leftPerspectives);
  });

    rightCards.forEach((c) => {
      animateCards(c, rightPerspectives);
  });
}, 1000);
};

loop();

document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', () => {
        let answer = item.nextElementSibling;
        let isVisible = answer.style.display === 'block';
        document.querySelectorAll('.answer').forEach(ans => ans.style.display = 'none');
        answer.style.display = isVisible ? 'none' : 'block';
    });
});

    // Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;

    if (!name || !phone || !date) {
        alert('Please fill out all of information');
            e.preventDefault(); 
        }
    });

let currentFeedback = 0;
const feedbacks = document.querySelectorAll('.feedback');

function showFeedback(index) {
    feedbacks.forEach((fb, i) => {
        fb.classList.toggle('active', i === index);
    });
}

function nextFeedback() {
    currentFeedback = (currentFeedback + 1) % feedbacks.length;
    showFeedback(currentFeedback);
}

function prevFeedback() {
    currentFeedback = (currentFeedback - 1 + feedbacks.length) % feedbacks.length;
    showFeedback(currentFeedback);
}

setInterval(nextFeedback, 5000);

let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
setInterval(() => {
    images[currentIndex].classList.remove('visible');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('visible');
}, 3000);

images.forEach(img => img.classList.add('hidden'));
images[0].classList.add('visible');

