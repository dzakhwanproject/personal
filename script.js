/* ============================================================
   SCRIPT KHUSUS INDEX.HTML + COMMON
============================================================ */

// CUSTOM CURSOR
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

if (cursor && cursorRing) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
      cursorRing.style.left = e.clientX + 'px';
      cursorRing.style.top = e.clientY + 'px';
    }, 50);
  });
}

// NAVBAR SCROLL
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
}

function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

// ACTIVE NAV
function setActiveNav() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === current);
  });
}

// ==================== INDEX ONLY ====================
window.addEventListener('load', () => {
  setActiveNav();

  // LOADER
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 2200);
  }

  // TYPING EFFECT (PENTING UNTUK INDEX)
  const typedTitle = document.getElementById('typedTitle');
  if (typedTitle) {
    const titles = [
      "Cyber Security Enthusiast",
      "Network Engineer Student",
      "Linux User",
      "Web Developer",
      "XI TJKT 2 - SMKN 13 Bandung"
    ];

    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentText = titles[index];

      if (!isDeleting) {
        typedTitle.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(type, 1500);
          return;
        }
      } else {
        typedTitle.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          index = (index + 1) % titles.length;
        }
      }
      setTimeout(type, isDeleting ? 35 : 70);
    }

    setTimeout(type, 2800);
  }

  // PARTICLES (Background Effect)
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    for (let i = 0; i < 40; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 3.5 + 1.5;
      particle.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${size}px;
        height: ${size}px;
        background: ${Math.random() > 0.5 ? '#00f5ff' : '#0066ff'};
        border-radius: 50%;
        opacity: 0.6;
        animation: floatParticle ${Math.random() * 20 + 15}s linear infinite;
      `;
      particlesContainer.appendChild(particle);
    }
  }
});

// CONTACT FORM FUNCTION
function sendMsg() {
  const nama = document.getElementById('formNama')?.value.trim();
  const email = document.getElementById('formEmail')?.value.trim();
  const pesan = document.getElementById('formPesan')?.value.trim();

  if (!nama || !email || !pesan) {
    alert("⚠️ Harap isi semua kolom!");
    return;
  }

  const waText = encodeURIComponent(`Halo Dzakhwan!\n\nNama: ${nama}\nEmail: ${email}\nPesan:\n${pesan}`);
  window.open(`https://wa.me/6282130549509?text=${waText}`, '_blank');

  // Reset form
  document.getElementById('formNama').value = '';
  document.getElementById('formEmail').value = '';
  document.getElementById('formPesan').value = '';
}