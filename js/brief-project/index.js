const students = [
    { name: 'Anastasiia Protsenko', expertise: 'UX Designer', countryOfOrigin: 'Ukraine', cantonOfResidence: 'Aargau', imgSrc: 'img/Anastasiia.jpeg', imgHoverSrc: 'img/photo_2023-06-02_18-52-56.jpg' },
    { name: 'Olena Andriushchenko', expertise: 'Web Developer', countryOfOrigin: 'Ukraine', cantonOfResidence: 'Bern', imgSrc: 'img/Olena.jpg', imgHoverSrc: 'https://ca.slack-edge.com/T1S5R6LJ3-U05N6D01C77-d0c457f3a8c2-512' },
    { name: 'Vladimir Rakov', expertise: 'IT Support Specialist', countryOfOrigin: 'Kyrgyzstan', cantonOfResidence: 'Bern', imgSrc: 'img/Vladimir.jpg', imgHoverSrc: 'https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ5RECF-b8dc4db3cdc1-192' },
    { name: 'Oleksandr Selehenenko', expertise: 'Full-Stack Developer', countryOfOrigin: 'Ukraine', cantonOfResidence: 'Geneva', imgSrc: 'img/Oleksandr.jpg', imgHoverSrc: 'https://ca.slack-edge.com/T1S5R6LJ3-U05N2M36FL6-a03bd73a5cdf-512' },
    { name: 'Chaewon Yoo', expertise: 'Journalist', countryOfOrigin: 'South Korea', cantonOfResidence: 'Bern', imgSrc: 'img/Chaewon2.jpg', imgHoverSrc: 'https://ca.slack-edge.com/T1S5R6LJ3-U05N97PTYUT-ad87467badd0-192' },
    { name: 'Kadir Öztürk', expertise: 'Testing Engineer', countryOfOrigin: 'Turkey', cantonOfResidence: 'Bern', imgSrc: 'img/kadirozturkfoto2.jpeg', imgHoverSrc: 'img/kadir.jpg' },
    { name: 'Damla Gurbaz', expertise: 'Data Scientist', countryOfOrigin: 'Turkey', cantonOfResidence: 'Lausanne', imgSrc: 'img/Damla.jpeg', imgHoverSrc: 'https://ca.slack-edge.com/T1S5R6LJ3-U05NBPL2FCL-a1896ee28800-512' },
    { name: 'Marwa Ibrahim', expertise: 'Web Developer', countryOfOrigin: 'Egypt', cantonOfResidence: 'Valais', imgSrc: 'img/Marwa.jpg', imgHoverSrc: 'https://ca.slack-edge.com/T1S5R6LJ3-U05NBPKCF0C-53292f6ea47f-512' },
    { name: 'Mehmet Avci', expertise: 'DevOps Engineer', countryOfOrigin: 'Turkey', cantonOfResidence: 'Geneva', imgSrc: 'img/Mehmet.jpg', imgHoverSrc: 'https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ4JAMD-085e6847d13c-512' },
    { name: 'Melike Ural', expertise: 'Web Developer', countryOfOrigin: 'Turkey', cantonOfResidence: 'Lucerne', imgSrc: 'img/Melike.JPG', imgHoverSrc: 'https://ca.slack-edge.com/T1S5R6LJ3-U05N2M2TE78-34867e000e3a-512' },
    { name: 'Sema Istek', expertise: 'Web Developer', countryOfOrigin: 'Turkey', cantonOfResidence: 'Valais', imgSrc: 'img/Semaistek.jpg', imgHoverSrc: 'https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ4SLBZ-602e37b8467b-512' },
    { name: 'Yidnekachew Mahteme', expertise: 'Web Developer', countryOfOrigin: 'Ethiopia', cantonOfResidence: 'Zug', imgSrc: 'img/Yidnek.jpg', imgHoverSrc: 'https://ca.slack-edge.com/T1S5R6LJ3-U05MUQ3DZU7-f8a343d32017-512' }
];

const profileContainer = document.getElementById('profile-container');

students.forEach(function (student) {
    let profileCard = `
         <div class="d-flex mb-4">
            <div class="profile-wrap">
                <img src="${student.imgSrc}" class="profile-photo" alt="${student.name}'s picture" data-hover-src="${student.imgHoverSrc}">
            </div>
            <div class="info d-none">
                    <h5 class="card-title">${student.name}</h5>
                    <div class="card-text mt-4"><strong>Expertise:</strong> ${student.expertise}</div>
                    <div class="card-text"><strong>Country of origin:</strong> ${student.countryOfOrigin}</div>
                    <div class="card-text"><strong>Canton of residence:</strong> ${student.cantonOfResidence}</div>
            </div>
         </div>
       
    `;
    profileContainer.insertAdjacentHTML('beforeend', profileCard);
});

let clickElements = document.getElementsByClassName('profile-photo');
let targetElements = document.getElementsByClassName('info');

for (let i = 0; i < clickElements.length; i++) {
    clickElements[i].addEventListener('click', function () {
        hideAllExcept(i);
        targetElements[i].classList.toggle('d-none');
    });

    clickElements[i].addEventListener('mouseover', function () {
        let hoverSrc = clickElements[i].getAttribute('data-hover-src');
        if (hoverSrc) {
            clickElements[i].src = hoverSrc;
        }
    });

    clickElements[i].addEventListener('mouseout', function () {
        clickElements[i].src = students[i].imgSrc;
    });
}

function hideAllExcept(index) {
    for (let i = 0; i < clickElements.length; i++) {
        if(i == index) {
            continue;
        }

        targetElements[i].classList.add('d-none');
    } 
}
