// Global Navigation Template
function getNavigationHTML() {
    return `
    <!-- Scroll Progress Indicator -->
    <div class="scroll-progress">
        <div class="scroll-progress-bar"></div>
    </div>

    <!-- Navigation -->
    <nav class="navbar navbar-main">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="/" class="logo-link">
                    <img src="logo.png" alt="Campro Logo" class="logo-image" style="height: 80px;">
                </a>
            </div>
            <ul class="nav-menu">
                <li><a href="/" class="nav-link">Domov</a></li>
                <li><a href="/elektroinstalacie" class="nav-link">Elektroinštalácie</a></li>
                <li><a href="/stavebne-prace" class="nav-link">Stavebné práce</a></li>
                <li><a href="/fotovoltika" class="nav-link">Fotovoltika</a></li>
                <li><a href="/nasi-partneri" class="nav-link">Partneri</a></li>
                <li><a href="/blog" class="nav-link">Blog</a></li>
                <li><a href="/kontakt" class="nav-link">Kontakt</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>`;
}

// Global Footer Template
function getFooterHTML() {
    return `
    <!-- Footer -->
    <footer id="footer" class="footer animated-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-item footer-logo">
                    <img src="logo.png" alt="Campro Logo" class="footer-logo-image" style="height: 50px;">
                </div>
                
                <div class="footer-item footer-pages">
                    <a href="/">Domov</a>
                    <a href="/elektroinstalacie">Elektroinštalácie</a>
                    <a href="/stavebne-prace">Stavebné práce</a>
                    <a href="/fotovoltika">Fotovoltika</a>
                    <a href="/nasi-partneri">Partneri</a>
                    <a href="/blog">Blog</a>
                    <a href="/kontakt">Kontakt</a>
                </div>
                
                <div class="footer-item footer-contact">
                    <div class="footer-contact-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
                            <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        <span>office@campro.sk</span>
                    </div>
                    <div class="footer-contact-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        <span>+421 905 602 690</span>
                    </div>
                    <div class="footer-contact-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        <span>+421 908 758 701</span>
                    </div>
                </div>
                
                <div class="footer-item footer-social">
                    <a href="https://www.facebook.com/campro.sk" target="_blank" rel="noopener noreferrer" class="social-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/campro_s.r.o/" target="_blank" rel="noopener noreferrer" class="social-link">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" stroke-width="2"/>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </a>
                </div>
                
                <div class="footer-item footer-copyright">
                    <p>&copy; 2024 Campro s.r.o. Všetky práva vyhradené.</p>
                </div>
                
                <div class="footer-item footer-policy">
                    <a href="#" id="privacy-policy-link">Ochrana osobných údajov</a>
                </div>
            </div>
        </div>
    </footer>`;
}

// Function to inject navigation and footer
function injectGlobalComponents() {
    // Inject navigation at the beginning of body
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = getNavigationHTML();
    }
    
    // Inject footer at the end of body
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = getFooterHTML();
    }
    
    // Update active navigation link
    updateActiveNavLink();
}

// Function to update active navigation link based on current page
function updateActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath || (currentPath === '/' && linkHref === '/')) {
            link.classList.add('active');
        }
    });
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Inject global components first
    injectGlobalComponents();
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar-main');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            // Make navbar white when hamburger is clicked (only if it's not already scrolled/white)
            if (navbar && navMenu.classList.contains('active')) {
                // Menu is opening - make navbar white if it's not already
                if (!navbar.classList.contains('scrolled')) {
                    navbar.classList.add('scrolled');
                    navbar.setAttribute('data-hamburger-forced', 'true');
                }
            } else if (navbar && navbar.getAttribute('data-hamburger-forced') === 'true') {
                // Menu is closing - only remove white background if it was forced by hamburger
                navbar.classList.remove('scrolled');
                navbar.removeAttribute('data-hamburger-forced');
            }
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
            // Remove scrolled class when closing menu
            if (navbar && window.scrollY <= (window.innerHeight * 0.3)) {
                navbar.classList.remove('scrolled');
            }
        });
    });

    // Function to update navbar on scroll
    function updateNavbar() {
        const scrollPosition = window.scrollY;
        const currentPage = window.location.pathname;
        const isHomepage = currentPage === '/' || currentPage.includes('index.html') || currentPage === '';
        let triggerPoint;
        
        if (isHomepage) {
            triggerPoint = window.innerHeight * 0.3; // 30vh for homepage
        } else {
            triggerPoint = window.innerHeight * 0.05; // 5vh for subpages
        }
        
        if (navbar) {
            if (scrollPosition > triggerPoint) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll Progress Indicator
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // Update scroll progress
        if (scrollProgress) {
            const scrollPercentage = (scrollPosition / documentHeight) * 100;
            scrollProgress.style.height = `${scrollPercentage}%`;
        }
        
        // Update navbar
        updateNavbar();
    });
    
    // Hero background image cycling
    const heroImages = document.querySelectorAll('.hero-bg-image');
    let currentImageIndex = 0;
    
    function cycleHeroImages() {
        heroImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroImages[currentImageIndex].classList.add('active');
    }
    
    // Cycle images every 5 seconds
    setInterval(cycleHeroImages, 5000);

    // Hero parallax effect
    function updateHeroParallax() {
        const scrolled = window.pageYOffset;
        const heroHeight = document.querySelector('.hero') ? document.querySelector('.hero').offsetHeight : 0;
        
        if (scrolled <= heroHeight) {
            const parallaxSpeed = scrolled * 0.5;
            heroImages.forEach(img => {
                img.style.transform = `translateY(${parallaxSpeed}px)`;
            });
        }
    }
    
    window.addEventListener('scroll', updateHeroParallax);

    // Advantages section parallax effect
    function updateAdvantagesParallax() {
        const advantagesSection = document.querySelector('.advantages');
        const advantagesImage = document.querySelector('.advantages-photo img');
        
        if (advantagesSection && advantagesImage) {
            const rect = advantagesSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Check if section is in viewport
            if (rect.bottom >= 0 && rect.top <= windowHeight) {
                // Calculate scroll progress within the section
                const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
                const parallaxOffset = scrollProgress * 100; // Adjust multiplier for effect intensity
                
                advantagesImage.style.transform = `translateY(${parallaxOffset}px)`;
            }
        }
    }
    
    window.addEventListener('scroll', updateAdvantagesParallax);

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-item, .portfolio-item, .gallery-item, .stat-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Animate counters when hero stats section is visible
    const heroStatsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const numberElement = stat.childNodes[0];
                    const target = parseInt(numberElement.textContent);
                    if (!isNaN(target)) {
                        animateCounter(numberElement, target);
                    }
                });
                heroStatsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe hero stats
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        heroStatsObserver.observe(heroStats);
    }

    // Animate counters when about stats section is visible
    const aboutStatsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.textContent.replace('+', ''));
                    if (!isNaN(target)) {
                        animateCounter(stat, target);
                        // Add back the + sign after animation
                        setTimeout(() => {
                            stat.textContent = stat.textContent + '+';
                        }, 2000);
                    }
                });
                aboutStatsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe about stats
    const aboutStats = document.querySelector('.about-stats');
    if (aboutStats) {
        aboutStatsObserver.observe(aboutStats);
    }


    // Reusable Animated Footer System
    function initializeAnimatedFooters() {
        const footerItemObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { 
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        // Find all footer items (both with animated-footer class and standalone)
        const footerItems = document.querySelectorAll('.footer-item, .animated-footer .footer-item');
        
        footerItems.forEach((item, index) => {
            // Add staggered delay for smoother animation
            item.style.transitionDelay = `${index * 0.1}s`;
            footerItemObserver.observe(item);
        });

        return footerItemObserver;
    }

    // Initialize all animated footers
    const footerObserver = initializeAnimatedFooters();

    // Form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simple validation
            if (email) {
                alert('Ďakujeme za prihlásenie k odberu!');
                this.reset();
            } else {
                alert('Prosím, zadajte váš email.');
            }
        });
    }

    // Gallery image modal disabled - items now link to portfolio page
    // const galleryItems = document.querySelectorAll('.gallery-item');
    // Gallery modal functionality removed to allow direct navigation to portfolio page

    // Services carousel functionality
    let currentSlide = 0;
    const carousel = document.querySelector('.services-carousel');
    const cards = document.querySelectorAll('.services-carousel .service-card');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (carousel && cards.length > 0) {
        const cardWidth = cards[0].offsetWidth + 40; // card width + gap
        const maxSlides = Math.max(0, cards.length - 3); // Show 3 cards at a time, 4th partially visible
        
        function updateCarousel() {
            const translateX = -(currentSlide * cardWidth);
            carousel.style.transform = `translateX(${translateX}px)`;
            
            // Update button states
            prevBtn.disabled = currentSlide === 0;
            nextBtn.disabled = currentSlide >= maxSlides;
        }
        
        function nextSlide() {
            if (currentSlide < maxSlides) {
                currentSlide++;
                updateCarousel();
            }
        }
        
        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                updateCarousel();
            }
        }
        
        // Event listeners
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Initialize carousel
        updateCarousel();
        
        // Handle window resize
        window.addEventListener('resize', function() {
            const newCardWidth = cards[0].offsetWidth + 40;
            if (newCardWidth !== cardWidth) {
                location.reload(); // Simple solution for responsive updates
            }
        });
    }

    // About section photos - removed scroll animation

    // Galeria slider functionality
    let currentGaleriaSlide = 0;
    const galeriaSlider = document.querySelector('.galeria-slider');
    const galeriaItems = document.querySelectorAll('.galeria-slider .galeria-item');
    const galeriaPrevBtn = document.querySelector('.galeria-prev');
    const galeriaNextBtn = document.querySelector('.galeria-next');
    
    if (galeriaSlider && galeriaItems.length > 0) {
        const itemWidth = galeriaItems[0].offsetWidth + 30; // item width + gap
        const maxSlides = Math.max(0, galeriaItems.length - 4); // Show 4 items at once
        
        function updateGaleriaSlider() {
            const translateX = -(currentGaleriaSlide * itemWidth);
            galeriaSlider.style.transform = `translateX(${translateX}px)`;
            
            // Update button states
            galeriaPrevBtn.disabled = currentGaleriaSlide === 0;
            galeriaNextBtn.disabled = currentGaleriaSlide >= maxSlides;
        }
        
        function nextGaleriaSlide() {
            if (currentGaleriaSlide < maxSlides) {
                currentGaleriaSlide++;
                updateGaleriaSlider();
            }
        }
        
        function prevGaleriaSlide() {
            if (currentGaleriaSlide > 0) {
                currentGaleriaSlide--;
                updateGaleriaSlider();
            }
        }
        
        // Event listeners
        galeriaNextBtn.addEventListener('click', nextGaleriaSlide);
        galeriaPrevBtn.addEventListener('click', prevGaleriaSlide);
        
        // Initialize slider
        updateGaleriaSlider();
    }

    // Privacy Policy Popup
    function createPrivacyPolicyPopup() {
        const popup = document.createElement('div');
        popup.id = 'privacy-policy-popup';
        popup.innerHTML = `
            <div class="privacy-popup-overlay">
                <div class="privacy-popup-content">
                    <div class="privacy-popup-header">
                        <h2>Ochrana osobných údajov</h2>
                        <button class="privacy-popup-close">&times;</button>
                    </div>
                    <div class="privacy-popup-body">
                        <p><strong>Campro s.r.o.</strong><br>
                        Ulica Jána Hajdóczyho 797/48, 917 01 Trnava, Slovenská republika<br>
                        IČO: 47581158, DIČ: 2023989286<br>
                        IČ DPH: SK2023989286, podľa §4, registrácia od 7.4.2014<br>
                        E-mail: office@campro.sk<br>
                        Tel.: +421 905 602 690</p>

                        <p>Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.</p>

                        <hr>

                        <h3>I. Kontaktný formulár</h3>
                        <p>Na stránke campro.sk prevádzkujeme kontaktný formulár, ktorého účelom je umožniť vám:</p>
                        <ul>
                            <li>Položiť otázku k našim produktom a službám</li>
                            <li>Požiadať o cenovú ponuku</li>
                        </ul>
                        
                        <p><strong>Rozsah spracúvaných údajov:</strong></p>
                        <ul>
                            <li>Meno a priezvisko</li>
                            <li>E-mailová adresa</li>
                            <li>Telefónne číslo</li>
                        </ul>
                        
                        <p><strong>Účel spracovania:</strong><br>
                        Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</p>
                        
                        <p><strong>Právny základ:</strong><br>
                        Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</p>
                        
                        <p><strong>Doba uchovávania:</strong><br>
                        Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.</p>

                        <hr>

                        <h3>II. Súbory cookies</h3>
                        <p>Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>
                        <ul>
                            <li><strong>Nevyhnutné cookies</strong> – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).</li>
                            <li><strong>Štatistické (analytické) cookies</strong> – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).</li>
                        </ul>
                        
                        <p><strong>Správa súhlasov:</strong><br>
                        Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.</p>

                        <hr>

                        <h3>III. Práva dotknutej osoby</h3>
                        <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
                        <ul>
                            <li>Prístup k osobným údajom, ktoré spracúvame</li>
                            <li>Oprava nepresných alebo neúplných údajov</li>
                            <li>Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ</li>
                            <li>Obmedzenie spracovania</li>
                            <li>Prenosnosť údajov</li>
                            <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
                            <li>Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)</li>
                        </ul>
                        
                        <p>V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na office@campro.sk alebo telefónnom čísle +421 905 602 690.</p>

                        <hr>

                        <p>Tieto Zásady nadobúdajú účinnosť dňom 25. 4. 2025.</p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(popup);
        return popup;
    }

    function initPrivacyPolicy() {
        // Add event listener for privacy policy link
        document.addEventListener('click', function(e) {
            if (e.target && e.target.id === 'privacy-policy-link') {
                e.preventDefault();
                
                // Create popup if it doesn't exist
                let popup = document.getElementById('privacy-policy-popup');
                if (!popup) {
                    popup = createPrivacyPolicyPopup();
                }
                
                // Show popup
                popup.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });

        // Close popup functionality
        document.addEventListener('click', function(e) {
            const popup = document.getElementById('privacy-policy-popup');
            if (popup && (e.target.classList.contains('privacy-popup-overlay') || e.target.classList.contains('privacy-popup-close'))) {
                popup.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                const popup = document.getElementById('privacy-policy-popup');
                if (popup && popup.style.display === 'block') {
                    popup.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            }
        });
    }

    // Initialize privacy policy after components are injected
    setTimeout(initPrivacyPolicy, 100);

    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.contact-submit-btn');
            const formData = new FormData(contactForm);
            
            // Disable button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Odosielanie...';
            
            fetch('send-mail.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                // Log response for debugging
                console.log('Server response status:', response.status);
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    // Show success message
                    showMessage(data.message, 'success');
                    // Reset form
                    contactForm.reset();
                } else {
                    // Show error message with debug info if available
                    let errorMessage = data.message;
                    if (data.debug) {
                        errorMessage += '\n\nDebug: ' + data.debug;
                        console.log('SMTP Debug:', data.debug);
                    }
                    showMessage(errorMessage, 'error');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showMessage('Nastala chyba pri odosielaní správy. Skúste to prosím znovu.', 'error');
            })
            .finally(() => {
                // Re-enable button
                submitBtn.disabled = false;
                submitBtn.textContent = 'Odoslať správu';
            });
        });
    }

    // Function to show success/error messages
    function showMessage(message, type) {
        // Remove existing message if any
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        
        // Insert message after form
        contactForm.insertAdjacentElement('afterend', messageDiv);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }

    // Continuous slider animation (no pause on hover)
});

// Gallery modal styles removed - no longer needed
// Modal functionality disabled in favor of direct portfolio navigation 