// 스무스 스크롤 기능
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

// 네비게이션 활성 상태 관리
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// 이메일 복사 기능
const emailBtn = document.getElementById('emailBtn');
const emailDisplay = document.getElementById('emailDisplay');
const email = 'atozhj18w@naver.com';

emailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(email).then(() => {
        const originalText = emailBtn.textContent;
        emailBtn.textContent = '복사 완료!';
        emailBtn.style.borderColor = '#e8c547';
        
        setTimeout(() => {
            emailBtn.textContent = originalText;
            emailBtn.style.borderColor = '#d4af37';
        }, 2000);
    }).catch(err => {
        console.error('이메일 복사 실패:', err);
        alert('이메일 복사에 실패했습니다. 수동으로 복사해주세요: ' + email);
    });
});

// 전화번호 복사 기능
const phoneBtn = document.getElementById('phoneBtn');
const phoneDisplay = document.getElementById('phoneDisplay');
const phone = '010-2510-1180';

phoneBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(phone).then(() => {
        const originalText = phoneBtn.textContent;
        phoneBtn.textContent = '복사 완료!';
        phoneBtn.style.borderColor = '#e8c547';
        
        setTimeout(() => {
            phoneBtn.textContent = originalText;
            phoneBtn.style.borderColor = '#d4af37';
        }, 2000);
    }).catch(err => {
        console.error('전화번호 복사 실패:', err);
        alert('전화번호 복사에 실패했습니다. 수동으로 복사해주세요: ' + phone);
    });
});

// 스크롤 시 네비게이션 바 효과
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// 요소가 뷰포트에 들어올 때 애니메이션 효과
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 관찰할 요소들
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-item, .about-content, .info-section');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // 스킬바 애니메이션
    const skillBars = document.querySelectorAll('.skill-fill');
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.width;
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        barObserver.observe(bar);
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
});

// 페이지 로드 시 Hero 애니메이션 시작
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroTitle) {
        heroTitle.classList.add('fade-in');
    }
    
    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.classList.add('fade-in-delay');
        }, 500);
    }
});
