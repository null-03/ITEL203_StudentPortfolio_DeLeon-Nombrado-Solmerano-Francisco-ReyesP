// DOM Elements
const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');
const backToTopButton = document.querySelector('.back-to-top');
const sections = document.querySelectorAll('section');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Disable scrolling when menu is open
    document.body.classList.toggle('no-scroll');
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
});

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Show/Hide Back to Top button
    if (window.scrollY > 500) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// active section animation
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 300;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
});

// PROJECT SECTION    
    const portfolioModal = document.getElementById('portfolio-project-modal');
    const portfolioModalClose = document.querySelector('.portfolio-modal-close');
    const portfolioViewProjectBtns = document.querySelectorAll('.portfolio-view-project-btn');
    const portfolioModalTitle = document.getElementById('portfolio-modal-title');
    const portfolioModalDescription = document.getElementById('portfolio-modal-description');
    const portfolioModalTech = document.getElementById('portfolio-modal-tech');
    const portfolioModalImages = document.querySelector('.portfolio-modal-images');
    
    const portfolioProjectData = [
        {
            id: 1,
            title: "Elem Quest: Learning Zone",
            description: `<strong>Role:</strong> Solo developed <br><br> "Elem Quest: Learning Zone" is an interactive C# educational platform designed to enhance the foundational skills of Filipino elementary students in Science, English, and Mathematics. Inspired by the concerning results of the PISA 2022 assessment, this project transforms traditional learning into an engaging adventure, combating distractions like smartphones and social media.<br><br>Users are guided through questions with clear explanations when they make mistakes, so they not only know *what* the right answer is, but also *why*. This approach supports deeper understanding and long-term retention of the subject matter.<br><br><strong>Features:</strong><br>✔ Instant feedback per question<br>✔ Progressive learning levels<br>✔ Subject-focused learning structure<br>✔ In-depth info added as you level up<br>✔ Designed for active learning and retention<br>`,
            tech: ["C#"],
            images: [
                "/deLeon/images/proj1.1.png",
                "/deLeon/images/proj1.2.png",
                "/deLeon/images/proj1.3.png",
                "/deLeon/images/proj1.4.png",
                "/deLeon/images/proj1.5.png",
                "/deLeon/images/proj1.6.png",
                "/deLeon/images/proj1.7.png",
                "/deLeon/images/proj1.8.png",
                "/deLeon/images/proj1.9.png",
                "/deLeon/images/proj1.10.png"
            ]
        },
        {
            id: 2,
            title: "ClickGo",
            description: `<strong>Role:</strong> One of the frontend <br><br>"ClickGo" is an e-commerce web project built to provide a simple and efficient online shopping experience for users. Designed to be user-friendly and functional, ClickGo features a familiar shopping interface where users can browse products, explore categories, and add items to their cart—all within a clean and responsive layout that works across devices.<br><br>Although still a work in progress, ClickGo already includes core features typical of modern e-commerce platforms, such as category-based navigation, product listings with images and descriptions, and a basic cart system. Users can explore a variety of general items across categories like electronics, fashion, and more. While full checkout functionality is not yet implemented, the project lays the foundation for future development, including payment integration and order tracking.<br><br><strong>Features :</strong><br>✔ Category-based product browsing<br>✔ Clean and responsive design<br>✔ Product previews with images and info<br>✔ Basic cart functionality<br><br><em>Note: ClickGo is an unfinished project by our group last semester</em>`,
            tech: ["HTML5", "CSS", "JavaScript", "Python", "MySQL"],
            images: [
                "/deLeon/images/proj2.1.png",
                "/deLeon/images/proj2.2.png",
                "/deLeon/images/proj2.3.png",
                "/deLeon/images/proj2.4.png",
                "/deLeon/images/proj2.5.png"
            ]
        },
        {
            id: 3,
            title: "ToolGuide",
            description: `<strong>Role:</strong> Frontend <br><br> "Toolguide" is a brochure-style web application that allows users to explore a wide range of tools categorized by function and purpose. Designed with simplicity and usability in mind, Toolguide offers a seamless browsing experience for users seeking information on various tools without the clutter of e-commerce distractions.<br><br>While users cannot directly purchase items through Toolguide, each tool includes convenient links to major e-commerce platforms in the Philippines such as Lazada and Shopee—making it easier for users to buy if they decide to. Registered users gain access to personalized features such as "Liked Tools" and saved tools, allowing them to keep track of their favorites and revisit them anytime (we were not able to implement that due to some technical issues).<br><br>Whether you're a DIY enthusiast, student, or professional, Toolguide helps you discover tools and their uses quickly and efficiently—all in a visually appealing and responsive layout. <br><br><strong>Features:</strong><br>✔ Category-based browsing<br>✔ Clean, distraction-free interface<br>✔ Responsive design for all devices<br>✔ Simple and informative tool previews<br>✔ External purchase links to Lazada & Shopee<br>✔ "Liked Tools" & Saved tools for registered users<br>`,
            tech: ["HTML5", "CSS", "JavaScript", "Python", "MySQL"],
            images: [
                "/deLeon/images/proj3.1.png",
                "/deLeon/images/proj3.2.png",
                "/deLeon/images/proj3.3.png",
                "/deLeon/images/proj3.4.png",
                "/deLeon/images/proj3.5.png"
            ]
        }
    ];
    
    // Open modal with project data
    portfolioViewProjectBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const projectData = portfolioProjectData[index];
            
            // Set modal content
            portfolioModalTitle.textContent = projectData.title;
            portfolioModalDescription.innerHTML  = projectData.description;
            
            // Clear previous tech tags
            portfolioModalTech.innerHTML = '';
            projectData.tech.forEach(tech => {
                const techSpan = document.createElement('span');
                techSpan.textContent = tech;
                portfolioModalTech.appendChild(techSpan);
            });
            
            // Clear previous images
            portfolioModalImages.innerHTML = '';
            projectData.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = projectData.title;
                portfolioModalImages.appendChild(img);
            });
            
            // Show modal
            portfolioModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        });
    });
    
    // Close modal when clicking on close button
    portfolioModalClose.addEventListener('click', function() {
        portfolioModal.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close modal when clicking outside modal content
    window.addEventListener('click', function(event) {
        if (event.target === portfolioModal) {
            portfolioModal.style.display = 'none';
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && portfolioModal.style.display === 'block') {
            portfolioModal.style.display = 'none';
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
