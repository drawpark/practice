gsap.registerPlugin(ScrollTrigger, TextPlugin);

// --- 이미지 데이터 ---
// 제공된 모든 이미지 링크(약 130개)를 카테고리별로 완벽하게 정리
const images = {
    drinks: [
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400',
        'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=400',
        'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
        'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400',
        'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400',
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
        'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400',
        'https://images.unsplash.com/photo-1560769684-55063f1bc56a?w=400'
    ],
    interior: [ // 가로 스크롤 섹션에 사용될 이미지
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400',
        'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400',
        'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400',
        'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=400',
        'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=400',
        'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400',
        'https://images.unsplash.com/photo-1516450364592-53a9ffa3e7a3?w=400',
        'https://images.unsplash.com/photo-1587080413959-06b859fb1070?w=400',
        'https://images.unsplash.com/photo-1590080665780-6b9c6d501f73?w=400',
        'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400'
    ],
    people: [
        'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400',
        'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400',
        'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400',
        'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?w=400',
        'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=400',
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400', // (다른 샷)
        'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400',
        'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400', //(접시와 함께)
    ],
    barista: [
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400', //(바리스타)
        'https://images.unsplash.com/photo-1565689876693-9b5f499c9d47?w=400',
        'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400',
        'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400',
        'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=400',
        'https://images.unsplash.com/photo-1562059395-0ae2e4e6ad6a?w=400',
        'https://images.unsplash.com/photo-1560684352-8497838da222?w=400',
        'https://images.unsplash.com/photo-1569870499705-504a2566c56f?w=400',
        'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400',
        'https://images.unsplash.com/photo-1572119865084-43b2cbd63db8?w=400'
    ],
    exterior: [
        'https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=400',
        'https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=400',
        'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400',
        'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?w=400',
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400', //(파스타와 와인)
        'https://images.unsplash.com/photo-1542181961-9590d0c79dab?w=400',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400',
        'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400',
        'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400',
        'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400'
    ],
    grid: {
        desserts: [ 
            "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?w=400", 
            "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400", 
            "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400", 
            "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400", 
            "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400"
        ],
        uniqueInteriors: [ 
            "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400",
            "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400",
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
        ],
        vintageAndCozy: [
            'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400',
            'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?w=400',
            'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400',
            'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400',
            'https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=400',
            'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400',
            'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=400',
            'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=400',
            'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400',
            'https://images.unsplash.com/photo-1587080413959-06b859fb1070?w=400'
        ],
        modernAndMinimal: [
            'https://images.unsplash.com/photo-1590080665780-6b9c6d501f73?w=400',
            'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400'
        ],
        globalCafes: [
            'https://images.unsplash.com/photo-1570194065650-2f276f46d38c?w=400',
            'https://images.unsplash.com/photo-1572119865084-43b2cbd63db8?w=400',
            'https://images.unsplash.com/photo-1570968915860-54f5c8f1badd?w=400',
            'https://images.unsplash.com/photo-1570996914361-86d12a9e6d70?w=400'
        ]
    }
};


// --- 초기 설정: 동적 컨텐츠 채우기 ---
function populateContent() {
    // 섹션 4: 스캐터 이미지 채우기
    const scatterContainer = document.querySelector("#scatter-container");
    const peopleAndBaristas = [...images.people, ...images.barista];
    peopleAndBaristas.forEach(url => {
        let item = document.createElement("div");
        item.className = "scatter-item";
        item.style.backgroundImage = `url(${url})`;
        scatterContainer.appendChild(item);
    });

    // 섹션 5: 메뉴 그리드 채우기
    const gridSections = [
        { selector: 'h3:nth-of-type(1) + .grid-container', data: images.grid.desserts },
        { selector: 'h3:nth-of-type(2) + .grid-container', data: images.grid.uniqueInteriors },
        { selector: 'h3:nth-of-type(3) + .grid-container', data: images.exterior }, // 야외/테라스 이미지 사용
        { selector: 'h3:nth-of-type(4) + .grid-container', data: images.barista },
        { selector: 'h3:nth-of-type(5) + .grid-container', data: [...images.grid.vintageAndCozy, ...images.grid.modernAndMinimal, ...images.grid.globalCafes] }
    ];

    gridSections.forEach(section => {
        const container = document.querySelector(`#menu-grid-section ${section.selector}`);
        if(container) {
             // 기존 플레이스홀더 비우기
            const placeholders = container.querySelectorAll('.grid-item');
            placeholders.forEach(p => p.remove());
            
            section.data.forEach(url => {
                let item = document.createElement("div");
                item.className = "grid-item group relative overflow-hidden rounded-lg cursor-pointer aspect-w-1 aspect-h-1";
                item.innerHTML = `<img src="${url}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out">`;
                container.appendChild(item);
            });
        }
    });
}


// --- 헤더 & 모바일 메뉴 상호작용 ---
function setupHeader() {
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        onUpdate: self => {
            const header = document.querySelector('#main-header');
            if (self.direction === -1) { // 스크롤 올릴 때
                header.classList.remove('header-hidden');
            } else if (self.scroll() > 200) { // 스크롤 내릴 때
                header.classList.add('header-hidden');
            }
        },
        toggleClass: {
            className: 'header-scrolled',
            targets: '#main-header'
        }
    });

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// --- 섹션 1: 히어로 & 3D 카드 스택 애니메이션 ---
function setupHeroSection() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
            pin: true,
        }
    });

    const cards = gsap.utils.toArray("#card-stack .card");
    gsap.set(cards, { top: "50%", left: "50%", xPercent: -50, yPercent: -50, transformOrigin: "center center" });
    
    gsap.from("#hero-title", { duration: 1.5, y: 100, opacity: 0, ease: "power4.out", delay: 0.5 });
    gsap.from("#hero-subtitle", { duration: 1.5, y: 50, opacity: 0, ease: "power4.out", delay: 0.8 });
    gsap.from(cards, { duration: 1.5, scale: 0, opacity: 0, stagger: 0.1, ease: "power4.out", delay: 1.2 });

    cards.forEach((card, i) => {
        tl.to(card, { z: i * 35, ease: "none" }, 0)
          .to(card, {
            yPercent: -180 - (i * 8),
            rotateZ: (i % 2 === 0 ? 1 : -1) * (25 - i * 2),
            rotateX: -60,
            ease: "power2.inOut"
        }, 0.5);
    });
    
    tl.to(["#hero-title", "#hero-subtitle"], { opacity: 0, duration: 0.5 }, 0.5);
}

// --- 섹션 2: 커피 원두 클라우드 애니메이션 ---
function setupBeanSection() {
    const beanContainer = document.getElementById("bean-container");
    if(!beanContainer) return;
    const beanCount = 50;
    const beanImageUrl = 'https://images.unsplash.com/photo-1570996914361-86d12a9e6d70?w=400';
    for (let i = 0; i < beanCount; i++) {
        let bean = document.createElement("div");
        bean.className = "bean";
        bean.style.backgroundImage = `url(${beanImageUrl})`;
        beanContainer.appendChild(bean);
    }

    const beans = gsap.utils.toArray(".bean");
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#bean-section",
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
            pin: true,
        }
    });

    beans.forEach(bean => {
        gsap.set(bean, {
            x: gsap.utils.random(0, window.innerWidth), y: gsap.utils.random(0, window.innerHeight),
            scale: gsap.utils.random(0.5, 1.2), opacity: 0,
        });
    });

    tl.to(beans, { opacity: 1, stagger: 0.05, ease: "power2.out" })
      .fromTo("#bean-text", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, ease: "power3.out" }, "<")
      .to(beans, {
        x: window.innerWidth / 2, y: window.innerHeight / 2,
        scale: 0, opacity: 0, duration: 2, stagger: 0.02, ease: "power3.in"
      }, ">1")
      .to("#bean-text", { opacity: 0, scale: 0.8, ease: "power3.in" }, "<");
}

// --- 섹션 3: 가로 스크롤 갤러리 애니메이션 ---
function setupInteriorSection() {
    const horizontalSection = document.querySelector('.section-horizontal-container');
    if(!horizontalSection) return;
    
    gsap.to(horizontalSection, {
        x: () => -(horizontalSection.offsetWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: "#interior-section-wrapper",
            pin: true, scrub: 1,
            end: () => "+=" + (horizontalSection.offsetWidth - window.innerWidth),
            invalidateOnRefresh: true
        }
    });
    
    const panels = gsap.utils.toArray('.section-horizontal-container .panel');
    panels.forEach((panel, i) => {
        const animProps = {
            scrollTrigger: {
                trigger: panel,
                containerAnimation: gsap.getTweensOf(horizontalSection)[0],
                start: 'left 80%',
                toggleActions: 'play none none reverse'
            }
        };

        if (i === 0 || i === 4) { // Text panels
            gsap.from(panel.querySelectorAll('h2, p'), { ...animProps, x: i === 0 ? -100 : 100, opacity: 0, stagger: 0.2 });
        } else if (i === 2) { // Background image text panel
             gsap.from(panel.querySelector('h2'), { ...animProps, scale: 0.5, opacity: 0 });
        } else { // Image panels
            gsap.from(panel.querySelectorAll('img'), { ...animProps, y: 100, opacity: 0, stagger: 0.1 });
        }
    });
}

// --- 섹션 4: 스캐터 이미지 애니메이션 ---
function setupPeopleSection() {
    const items = gsap.utils.toArray("#scatter-container .scatter-item");
    if(items.length === 0) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#people-section",
            pin: true, scrub: 1.5,
            start: "top top", end: "+=250%"
        }
    });

    items.forEach(item => {
        gsap.set(item, {
            x: gsap.utils.random(-100, 100) + "vw", y: gsap.utils.random(-100, 100) + "vh",
            rotate: gsap.utils.random(-360, 360)
        });
    });

    tl.to(items, {
        x: "50vw", y: "50vh", xPercent: -50, yPercent: -50, rotate: 0,
        stagger: { each: 0.05, from: "random" }, ease: "power2.inOut"
    })
    .to(items, {
        x: () => gsap.utils.random(10, 90) + "vw", y: () => gsap.utils.random(10, 90) + "vh",
        rotate: () => gsap.utils.random(-45, 45), scale: 1.1,
        stagger: { each: 0.05, from: "random" }, ease: "power3.out"
    }, ">-0.5");
    
    tl.fromTo("#people-title", { scale: 3, opacity: 0 }, { scale: 1, opacity: 1, ease: "power3.out"}, "<0.5")
      .to("#people-title", { scale: 1.5, opacity: 0, ease: "power3.in"}, ">1");
      
    tl.to(items, {
        x: "50vw", y: "150vh", opacity: 0, scale: 0.5, filter: "blur(20px)",
        stagger: { each: 0.05, from: "random" }, ease: "power2.in"
    });
}

// --- 정적 컨텐츠 & 메뉴 그리드 애니메이션 ---
function setupStaticContentAnimations() {
    // About & Reviews
    gsap.utils.toArray('#static-content section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none reverse' },
            opacity: 0, y: 50, duration: 0.8, ease: 'power3.out'
        });
    });
    
    // Menu Grid Items
    gsap.utils.toArray('.grid-container').forEach(container => {
        gsap.from(container.querySelectorAll('.grid-item'), {
            scrollTrigger: {
                trigger: container, start: 'top 85%', toggleActions: 'play none none reverse'
            },
            opacity: 0, y: 50, scale: 0.9, stagger: 0.05,
            duration: 0.5, ease: 'power3.out'
        });
    });
}

// --- 섹션 6: 외관 & 마무리 애니메이션 ---
function setupExteriorSection() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#exterior-section",
            pin: true, scrub: 1,
            start: "top top", end: "+=200%"
        }
    });
    
    const backgrounds = [...images.exterior];
    
    gsap.set("#final-text-container", { opacity: 0 });
    gsap.set("#exterior-bg", { scale: 1.2 });

    tl.to("#exterior-bg", { scale: 1, ease: "none" });

    backgrounds.forEach((bg) => {
        tl.to("#exterior-bg", {
            opacity: 0.3, duration: 0.5,
            onComplete: () => { gsap.set("#exterior-bg", { backgroundImage: `url(${bg.replace('w=400', 'w=1920&q=80')})` }); }
        })
        .to("#exterior-bg", { opacity: 1, duration: 0.5 });
    });

    tl.to("#final-text-container", { opacity: 1, duration: 1 }, ">-1");
    
    const finalTitle = document.querySelector("#final-title");
    const text = "Find Your Moment";
    tl.to(finalTitle, {
        text: { value: text, delimiter: "" },
        duration: text.length * 0.1,
        ease: "none"
    });
}

// --- 모든 애니메이션 실행 ---
document.addEventListener("DOMContentLoaded", () => {
    populateContent();
    setupHeader();
    setupHeroSection();
    setupBeanSection();
    setupInteriorSection();
    setupPeopleSection();
    setupStaticContentAnimations();
    setupExteriorSection();

    // 동적 컨텐츠가 모두 채워진 후 ScrollTrigger 업데이트
    ScrollTrigger.refresh();
});
