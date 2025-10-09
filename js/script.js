gsap.registerPlugin(ScrollTrigger, TextPlugin);

// --- 이미지 데이터 ---
// 제공된 모든 이미지 링크를 카테고리별로 정리
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
    interior: [
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400',
        'https://images.unsplash.com/photo-1445116572260-236099ec97a0?w=400',
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
        'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400',
    ],
    barista: [
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400',
        'https://images.unsplash.com/photo-1565689876693-9b5f499c9d47?w=400',
        'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400',
        'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=400',
        'https://images.unsplash.com/photo-1562059395-0ae2e4e6ad6a?w=400',
        'https://images.unsplash.com/photo-1560684352-8497838da222?w=400',
        'https://images.unsplash.com/photo-1569870499705-504a2566c56f?w=400',
    ],
    exterior: [
        'https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=400',
        'https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=400',
        'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400',
        'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?w=400',
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
             "https://images.unsplash.com/photo-1590080665780-6b9c6d501f73?w=400",
             "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400",
             "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400",
             "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=400",
             "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
        ],
        terrace: [
            "https://images.unsplash.com/photo-1542181961-9590d0c79dab?w=400",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400",
            "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400",
            "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400",
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400"
        ],
        fromBaristas: [
            "https://images.unsplash.com/photo-1565689876693-9b5f499c9d47?w=400",
            "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400",
            "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=400",
            "https://images.unsplash.com/photo-1562059395-0ae2e4e6ad6a?w=400",
            "https://images.unsplash.com/photo-1560684352-8497838da222?w=400",
            "https://images.unsplash.com/photo-1569870499705-504a2566c56f?w=400"
        ],
        misc: [
            "https://images.unsplash.com/photo-1570194065650-2f276f46d38c?w=400",
            "https://images.unsplash.com/photo-1572119865084-43b2cbd63db8?w=400",
            "https://images.unsplash.com/photo-1570968915860-54f5c8f1badd?w=400",
            "https://images.unsplash.com/photo-1570996914361-86d12a9e6d70?w=400",
            "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?w=400",
            "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400",
            "https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?w=400",
            "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400"
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
        { selector: 'h3:nth-of-type(3) + .grid-container', data: images.grid.terrace },
        { selector: 'h3:nth-of-type(4) + .grid-container', data: images.grid.fromBaristas },
        { selector: 'h3:nth-of-type(4) + .grid-container + .grid-container', data: images.grid.misc }
    ];

    gridSections.forEach(section => {
        const container = document.querySelector(`#menu-grid-section ${section.selector}`);
        if(container) {
             // 기존 플레이스홀더 비우기
            const placeholders = container.querySelectorAll('.grid-item');
            placeholders.forEach(p => p.remove());
            
            section.data.forEach(url => {
                let item = document.createElement("div");
                item.className = "grid-item group relative overflow-hidden rounded-lg cursor-pointer";
                item.innerHTML = `<img src="${url}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out">`;
                container.appendChild(item);
            });
        }
    });
}


// --- 섹션 1: 히어로 & 3D 카드 스택 애니메이션 ---
function setupHeroSection() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
        }
    });

    const cards = gsap.utils.toArray("#card-stack .card");
    gsap.set(cards, { 
        top: "50%", left: "50%", xPercent: -50, yPercent: -50,
        transformOrigin: "center center"
    });
    
    // Initial entrance animation (independent of scroll)
    gsap.from("#hero-title", { duration: 1.5, y: 100, opacity: 0, ease: "power4.out", delay: 0.5 });
    gsap.from("#hero-subtitle", { duration: 1.5, y: 50, opacity: 0, ease: "power4.out", delay: 0.8 });
    gsap.from(cards, {
        duration: 1.5,
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        ease: "power4.out",
        delay: 1.2
    });

    // Scroll-based 3D card stack animation
    cards.forEach((card, i) => {
        tl.to(card, {
            z: i * 30, // 3D depth
            ease: "none"
        }, 0)
        .to(card, {
            yPercent: -150 - (i * 10),
            rotateZ: (i % 2 === 0 ? 1 : -1) * (20 - i * 1.5),
            rotateX: -55,
            ease: "power2.inOut"
        }, 0.5);
    });
    
    tl.to(["#hero-title", "#hero-subtitle"], { opacity: 0, duration: 0.5 }, 0.5);
}

// --- 섹션 2: 커피 원두 클라우드 애니메이션 ---
function setupBeanSection() {
    const beanContainer = document.getElementById("bean-container");
    const beanCount = 50; // More beans for a fuller effect
    for (let i = 0; i < beanCount; i++) {
        let bean = document.createElement("div");
        bean.className = "bean";
        bean.style.backgroundImage = `url('https://images.unsplash.com/photo-1590080665780-6b9c6d501f73?w=200')`;
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

    // Set initial random positions
    beans.forEach(bean => {
        gsap.set(bean, {
            x: gsap.utils.random(0, window.innerWidth),
            y: gsap.utils.random(0, window.innerHeight),
            scale: gsap.utils.random(0.5, 1.2),
            opacity: 0,
        });
    });

    tl.to(beans, { opacity: 1, stagger: 0.05, ease: "power2.out" })
      .fromTo("#bean-text", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, ease: "power3.out" }, "<")
      .to(beans, {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        scale: 0,
        opacity: 0,
        duration: 2,
        stagger: 0.02,
        ease: "power3.in"
      }, ">1")
      .to("#bean-text", { opacity: 0, scale: 0.8, ease: "power3.in" }, "<");
}

// --- 섹션 3: 가로 스크롤 갤러리 애니메이션 ---
function setupInteriorSection() {
    const horizontalSection = document.querySelector('.section-horizontal-container');
    
    gsap.to(horizontalSection, {
        x: () => -(horizontalSection.offsetWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: "#interior-section-wrapper",
            pin: true,
            scrub: 1,
            end: () => "+=" + (horizontalSection.offsetWidth - window.innerWidth),
            invalidateOnRefresh: true
        }
    });
    
    // Animate elements inside panels as they come into view
    const panels = gsap.utils.toArray('.section-horizontal-container .panel');
    panels.forEach((panel, i) => {
        // First panel text
        if (i === 0) {
            gsap.from(panel.querySelector('h2, p'), {
                x: -100, opacity: 0, stagger: 0.2,
                scrollTrigger: {
                    trigger: panel,
                    containerAnimation: gsap.getTweensOf(horizontalSection)[0],
                    start: 'left center',
                }
            });
        }
        // Parallax panel images
        if (i === 1) {
            gsap.from(panel.querySelectorAll('img'), {
                y: 100, opacity: 0, stagger: 0.2,
                scrollTrigger: {
                    trigger: panel,
                    containerAnimation: gsap.getTweensOf(horizontalSection)[0],
                    start: 'left 80%',
                }
            });
        }
         // Third panel text
        if (i === 2) {
            gsap.from(panel.querySelector('h2'), {
                scale: 0.5, opacity: 0,
                scrollTrigger: {
                    trigger: panel,
                    containerAnimation: gsap.getTweensOf(horizontalSection)[0],
                    start: 'left center',
                }
            });
        }
        // Fourth panel images
         if (i === 3) {
            gsap.from(panel.querySelectorAll('img'), {
                scale: 0, rotate: 30, opacity: 0, stagger: 0.15,
                scrollTrigger: {
                    trigger: panel,
                    containerAnimation: gsap.getTweensOf(horizontalSection)[0],
                    start: 'left 80%',
                }
            });
        }
         // Fifth panel text
         if (i === 4) {
            gsap.from(panel.querySelector('h2, p'), {
                x: 100, opacity: 0, stagger: 0.2,
                scrollTrigger: {
                    trigger: panel,
                    containerAnimation: gsap.getTweensOf(horizontalSection)[0],
                    start: 'left center',
                }
            });
        }
        // Sixth panel images (book cafe)
         if (i === 5) {
             gsap.from(panel.querySelectorAll('img'), {
                y: (i) => i * 100 - 100, x: (i) => i * 50 - 50, rotate: (i) => i * -10, opacity: 0,
                scrollTrigger: {
                    trigger: panel,
                    containerAnimation: gsap.getTweensOf(horizontalSection)[0],
                    start: 'left 70%',
                }
            });
        }
    });
}


// --- 섹션 4: 스캐터 이미지 애니메이션 ---
function setupPeopleSection() {
    const items = gsap.utils.toArray("#scatter-container .scatter-item");
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#people-section",
            pin: true,
            scrub: 1.5,
            start: "top top",
            end: "+=250%"
        }
    });

    // 1. Images fly in from off-screen to the center
    items.forEach(item => {
        gsap.set(item, {
            x: gsap.utils.random(-100, 100) + "vw",
            y: gsap.utils.random(-100, 100) + "vh",
            rotate: gsap.utils.random(-360, 360)
        });
    });

    tl.to(items, {
        x: "50vw", y: "50vh",
        xPercent: -50, yPercent: -50,
        rotate: 0,
        stagger: { each: 0.05, from: "random" },
        ease: "power2.inOut"
    })
    // 2. Spread out into an artistic collage
    .to(items, {
        x: () => gsap.utils.random(10, 90) + "vw",
        y: () => gsap.utils.random(10, 90) + "vh",
        rotate: () => gsap.utils.random(-45, 45),
        scale: 1.1,
        stagger: { each: 0.05, from: "random" },
        ease: "power3.out"
    }, ">-0.5");
    
    tl.fromTo("#people-title", { scale: 3, opacity: 0 }, { scale: 1, opacity: 1, ease: "power3.out"}, "<0.5")
      .to("#people-title", { scale: 1.5, opacity: 0, ease: "power3.in"}, ">1");
      
    // 3. Gather again and disappear
    tl.to(items, {
        x: "50vw", y: "150vh", // Fly off screen downwards
        opacity: 0,
        scale: 0.5,
        filter: "blur(20px)",
        stagger: { each: 0.05, from: "random" },
        ease: "power2.in"
    });
}

// --- 섹션 5: 메뉴 그리드 애니메이션 ---
function setupMenuGridSection() {
    gsap.utils.toArray('.grid-container').forEach(container => {
        gsap.from(container.querySelectorAll('.grid-item'), {
            scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                end: 'bottom 60%',
                toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 50,
            scale: 0.9,
            stagger: 0.05,
            duration: 0.5,
            ease: 'power3.out'
        });
    });
}

// --- 섹션 6: 외관 & 마무리 애니메이션 ---
function setupExteriorSection() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#exterior-section",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=200%"
        }
    });
    
    const backgrounds = [
        "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=1920&q=80",
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1920&q=80",
        "https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?w=1920&q=80"
    ];
    
    gsap.set("#final-text-container", { opacity: 0 });
    gsap.set("#exterior-bg", { scale: 1.2 });

    tl.to("#exterior-bg", { scale: 1, ease: "none" });

    // Smoothly transition through background images
    backgrounds.forEach((bg) => {
        tl.to("#exterior-bg", {
            opacity: 0.3,
            duration: 0.5,
            onComplete: () => {
                gsap.set("#exterior-bg", { backgroundImage: `url(${bg})` });
            }
        })
        .to("#exterior-bg", { opacity: 1, duration: 0.5 });
    });

    tl.to("#final-text-container", { opacity: 1, duration: 1 }, ">-1");
    
    // Typing effect for the final title
    const finalTitle = document.querySelector("#final-title");
    const text = "Find Your Moment";
    tl.to(finalTitle, {
        text: {
            value: text,
            delimiter: "",
        },
        duration: text.length * 0.1,
        ease: "none"
    });
}

// --- 모든 애니메이션 실행 ---
window.addEventListener("load", () => {
    populateContent(); // Must run first to create elements
    setupHeroSection();
    setupBeanSection();
    setupInteriorSection();
    setupPeopleSection();
    setupMenuGridSection();
    setupExteriorSection();

    // Refresh ScrollTrigger to ensure all calculations are correct after populating content
    ScrollTrigger.refresh();
});
