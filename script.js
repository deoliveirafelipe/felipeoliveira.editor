const translations = {
  en: {
    nav: { about: 'About', work: 'Work', process: 'Process', contact: "Let's Talk" },
    hero: {
      badge: 'Available for new projects',
      title1: 'I craft videos that',
      title2: 'keep people watching.',
      subtitle: 'Professional video editing and motion design for brands, creators, and agencies who need content that converts viewers into customers.',
      cta1: 'Start a Project',
      cta2: 'Watch My Work',
      trusted: 'Trusted by creators worldwide',
      scroll: 'Scroll',
    },
    about: {
      label: 'About Me',
      title: 'Transforming ideas into stories that sell.',
      p1: "I'm Felipe Oliveira, a professional video editor and motion designer with over 4 years of experience creating high-performance content for brands and creators around the world.",
      p2: 'My approach combines cinematic storytelling with data-driven editing techniques. Every cut, transition, and effect is strategically placed to maximize viewer retention and drive real results for your business.',
      p3: 'From YouTube videos to social media ads, product launches to brand documentaries — I deliver polished, professional content on time, every time.',
      expLabel: 'Years of Experience',
      projLabel: 'Projects Delivered',
    },
    stats: {
      views: 'Views Generated',
      projects: 'Projects Completed',
      satisfaction: 'Client Satisfaction',
      response: 'Response Time',
    },
    portfolio: {
      label: 'Selected Work',
      title: 'Projects that perform.',
      subtitle: 'Each project is crafted to engage audiences and deliver measurable results.',
      cat1: 'Brand Content',
      cat2: 'YouTube Content',
      cat3: 'Social Media Ads',
      cat4: 'Motion Design',
      cat5: 'Motion Design',
      more: 'Your project here',
    },
    process: {
      label: 'How I Work',
      title: 'A proven process for results.',
      subtitle: 'From concept to final delivery, every step is designed to create content that performs.',
      step1: { title: 'Discovery', desc: 'We discuss your vision, target audience, and goals. I analyze your brand to create a tailored editing strategy.' },
      step2: { title: 'Editing & Design', desc: 'I craft the edit with precise pacing, motion graphics, color grading, and sound design to maximize engagement.' },
      step3: { title: 'Review & Refine', desc: "You receive the first draft with unlimited revisions. Your feedback shapes the final product until it's perfect." },
      step4: { title: 'Final Delivery', desc: 'Your polished video is delivered in all required formats, optimized for every platform and ready to publish.' },
    },
    contact: {
      label: 'Get in Touch',
      title: "Let's create something incredible together.",
      subtitle: "Ready to take your content to the next level? Let's talk about your next project.",
      cta: 'Send me an email',
      discord: 'Chat on Discord',
    },
    footer: {
      text: '© 2025 Felipe Oliveira. All rights reserved.',
    },
  },
  pt: {
    nav: { about: 'Sobre', work: 'Trabalhos', process: 'Processo', contact: 'Fale Comigo' },
    hero: {
      badge: 'Disponível para novos projetos',
      title1: 'Eu crio vídeos que',
      title2: 'prendem a atenção.',
      subtitle: 'Edição de vídeo profissional e motion design para marcas, criadores e agências que precisam de conteúdo que converte espectadores em clientes.',
      cta1: 'Iniciar um Projeto',
      cta2: 'Ver Meu Trabalho',
      trusted: 'Confiado por criadores ao redor do mundo',
      scroll: 'Role',
    },
    about: {
      label: 'Sobre Mim',
      title: 'Transformo o poder de uma ideia em histórias que vendem.',
      p1: 'Sou Felipe Oliveira, editor de vídeo profissional e motion designer com mais de 4 anos de experiência criando conteúdo de alta performance para marcas e criadores ao redor do mundo.',
      p2: 'Minha abordagem combina narrativa cinematográfica com técnicas de edição orientadas por dados. Cada corte, transição e efeito é estrategicamente posicionado para maximizar a retenção do espectador e gerar resultados reais para o seu negócio.',
      p3: 'De vídeos para YouTube a anúncios para redes sociais, lançamentos de produtos a documentários de marca — eu entrego conteúdo polido e profissional no prazo, sempre.',
      expLabel: 'Anos de Experiência',
      projLabel: 'Projetos Entregues',
    },
    stats: {
      views: 'Views Geradas',
      projects: 'Projetos Concluídos',
      satisfaction: 'Satisfação dos Clientes',
      response: 'Tempo de Resposta',
    },
    portfolio: {
      label: 'Trabalhos Selecionados',
      title: 'Projetos que performam.',
      subtitle: 'Cada projeto é criado para engajar audiências e entregar resultados mensuráveis.',
      cat1: 'Conteúdo de Marca',
      cat2: 'Conteúdo YouTube',
      cat3: 'Anúncios para Redes Sociais',
      cat4: 'Motion Design',
      cat5: 'Motion Design',
      more: 'Seu projeto aqui',
    },
    process: {
      label: 'Como eu Trabalho',
      title: 'Um processo comprovado para resultados.',
      subtitle: 'Do conceito à entrega final, cada etapa é projetada para criar conteúdo que performa.',
      step1: { title: 'Descoberta', desc: 'Discutimos sua visão, público-alvo e objetivos. Eu analiso sua marca para criar uma estratégia de edição personalizada.' },
      step2: { title: 'Edição e Design', desc: 'Eu construo a edição com ritmo preciso, motion graphics, colorização e design de som para maximizar o engajamento.' },
      step3: { title: 'Revisão e Refinamento', desc: 'Você recebe o primeiro rascunho com revisões ilimitadas. Seu feedback molda o produto final até ficar perfeito.' },
      step4: { title: 'Entrega Final', desc: 'Seu vídeo finalizado é entregue em todos os formatos necessários, otimizado para cada plataforma e pronto para publicar.' },
    },
    contact: {
      label: 'Entre em Contato',
      title: 'Vamos criar algo incrível juntos.',
      subtitle: 'Pronto para levar seu conteúdo ao próximo nível? Vamos conversar sobre seu próximo projeto.',
      cta: 'Me envie um email',
      discord: 'Converse no Discord',
    },
    footer: {
      text: '© 2025 Felipe Oliveira. Todos os direitos reservados.',
    },
  },
};

let currentLang = 'en';

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : null), obj);
}

function updateLanguage() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const text = getNestedValue(translations[currentLang], key);
    if (text) {
      el.textContent = text;
    }
  });
  document.getElementById('lang-toggle-text').textContent = currentLang === 'en' ? 'PT' : 'EN';
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'pt' : 'en';
  updateLanguage();
});

// Mobile menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (!mobileMenu.classList.contains('hidden')) {
      spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
      spans[2].style.width = '24px';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '1';
      spans[2].style.transform = '';
      spans[2].style.width = '16px';
    }
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      const spans = mobileMenuBtn.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '1';
      spans[2].style.transform = '';
      spans[2].style.width = '16px';
    });
  });
}

// ============================
// OPTIMIZED VIDEO SYSTEM
// ============================

const videoModal = document.getElementById('video-modal');
const modalVideo = document.getElementById('modal-video');
const modalClose = document.getElementById('modal-close');
const modalLoader = document.getElementById('modal-loader');
const allPreviewVideos = document.querySelectorAll('.preview-video');
const heroVideo = document.getElementById('hero-video');

// Only play preview videos when visible in viewport
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const video = entry.target;
    if (entry.isIntersecting) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}, { threshold: 0.3 });

allPreviewVideos.forEach((video) => {
  video.pause(); // Don't autoplay until visible
  video.loop = true;
  videoObserver.observe(video);
});

// Pause ALL background videos when modal opens
function pauseAllBackgroundVideos() {
  allPreviewVideos.forEach((v) => v.pause());
  if (heroVideo) heroVideo.pause();
}

// Resume visible background videos when modal closes
function resumeBackgroundVideos() {
  if (heroVideo) heroVideo.play().catch(() => {});
  allPreviewVideos.forEach((v) => {
    const rect = v.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) v.play().catch(() => {});
  });
}

let currentModalSrc = '';

function openVideoModal(videoSrc) {
  // Show modal + loader immediately
  videoModal.classList.remove('hidden');
  videoModal.style.display = 'flex';
  document.body.classList.add('modal-open');
  modalLoader.classList.remove('hidden');
  modalVideo.style.opacity = '0';

  // Pause background videos to free up resources
  pauseAllBackgroundVideos();

  // Only reload if different video
  if (currentModalSrc !== videoSrc) {
    currentModalSrc = videoSrc;
    modalVideo.src = videoSrc;
  }

  modalVideo.currentTime = 0;
  modalVideo.muted = false;

  // Wait for video to be ready, then play
  const onReady = () => {
    modalLoader.classList.add('hidden');
    modalVideo.style.opacity = '1';
    modalVideo.play().catch(() => {});
    modalVideo.removeEventListener('canplay', onReady);
  };

  if (modalVideo.readyState >= 3) {
    // Already buffered
    onReady();
  } else {
    modalVideo.addEventListener('canplay', onReady);
    modalVideo.load();
  }

  // Animate modal in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      videoModal.classList.add('active');
    });
  });
}

function closeVideoModal() {
  videoModal.classList.remove('active');
  modalVideo.pause();
  modalVideo.muted = true;
  document.body.classList.remove('modal-open');

  setTimeout(() => {
    videoModal.classList.add('hidden');
    videoModal.style.display = '';
    modalVideo.style.opacity = '0';
    resumeBackgroundVideos();
  }, 300);
}

// Click on video cards
document.querySelectorAll('.video-card').forEach((card) => {
  card.addEventListener('click', () => {
    const videoSrc = card.getAttribute('data-video');
    if (videoSrc) openVideoModal(videoSrc);
  });
});

// Close modal
modalClose.addEventListener('click', closeVideoModal);

videoModal.addEventListener('click', (e) => {
  if (e.target === videoModal) closeVideoModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && videoModal.classList.contains('active')) {
    closeVideoModal();
  }
});

// ============================
// SCROLL ANIMATIONS
// ============================

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach((el) => {
  observer.observe(el);
});

// Navbar scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navbar.classList.add('glass-panel', 'shadow-lg', 'shadow-black/30');
    navbar.classList.remove('bg-gradient-to-b', 'from-black/80', 'to-transparent');
  } else {
    navbar.classList.remove('glass-panel', 'shadow-lg', 'shadow-black/30');
    navbar.classList.add('bg-gradient-to-b', 'from-black/80', 'to-transparent');
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

updateLanguage();
