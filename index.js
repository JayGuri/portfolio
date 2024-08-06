function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }


  document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // // Dynamic project section
    // const projects = [
    //     {
    //         title: 'Pomodoro Timer',
    //         description: 'This is a personal portfolio website that showcases my skills and projects. It includes sections for About Me, Projects, and Contact. The website is fully responsive and built using HTML, CSS, and JavaScript.',
    //         imgSrc: './Images/pomodoro.png',
    //         link: 'https://github.com/JayGuri/Pomdore-project-jay'
    //     },
    //     {
    //         title: 'Birthday Website',
    //         description: 'This is a simple Todo List application that allows users to add, edit, and delete tasks. It is built using React and demonstrates my understanding of state management and component-based architecture.',
    //         imgSrc: './Images/birthday.png',
    //         link: 'https://github.com/JayGuri/Pomdore-project-jay'
    //     }
    // ];

    // const projectList = document.getElementById('project-list');

    // projects.forEach(project => {
    //     const projectDiv = document.createElement('div');
    //     projectDiv.classList.add('project');
    //     projectDiv.innerHTML = `
    //         <img src="${project.imgSrc}" alt="${project.title} Screenshot">
    //         <h3>${project.title}</h3>
    //         <p>${project.description}</p>
    //         <a href="${project.link}" class="button">View on GitHub</a>
    //     `;
    //     projectList.appendChild(projectDiv);
    // });

    // Simple form validation
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            formResponse.textContent = 'All fields are required!';
            formResponse.style.color = 'red';
        } else {
            formResponse.textContent = 'Thank you for your message!';
            formResponse.style.color = 'green';
        }
    });
});
