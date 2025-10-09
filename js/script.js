// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// --- 전체 스크롤 타임라인 설정 ---
// 각 섹션은 독립적인 ScrollTrigger를 가지며, 순차적으로 실행됩니다.

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
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "center center"
    });

    // 초기 등장 애니메이션 (스크롤과 무관)
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

    // 스크롤에 따른 3D 카드 스택 애니메이션
    cards.forEach((card, i) => {
        tl.to(card, {
            z: i * 30, // 3D 깊이감
            ease: "none"
        }, 0)
        .to(card, {
            yPercent: -150 - (i * 10),
            rotateZ: (i % 2 === 0 ? 1 : -1) * (20 - i * 3),
            rotateX: -45,
            ease: "power2.inOut"
        }, 0.5);
    });

    tl.to(["#hero-title", "#hero-subtitle"], { opacity: 0, duration: 0.5 }, 0.5);
}

// --- 섹션 2: 커피 원두 클라우드 애니메이션 ---
function setupBeanSection() {
    const beanContainer = document.getElementById("bean-container");
    const beanCount = 30;
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
            scrub: 1,
            pin: true,
        }
    });

    // 초기 위치 랜덤 설정
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

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#interior-section-wrapper",
            pin: true,
            scrub: 1,
            end: () => "+=" + (horizontalSection.offsetWidth - window.innerWidth)
        }
    });

    tl.to(horizontalSection, {
        x: () => -(horizontalSection.offsetWidth - window.innerWidth),
        ease: "none"
    });

    // 패널 내부 요소들에 대한 개별 애니메이션
    tl.from("#interior-section-wrapper .panel:nth-child(1) h2", { x: -100, opacity: 0, ease: "power2.out" }, 0);

    const images1 = gsap.utils.toArray("#interior-section-wrapper .panel:nth-child(2) .gallery-image");
    tl.from(images1, { y: 200, opacity: 0, stagger: 0.1, ease: "power3.out" }, 0.5);

    // 패럴랙스 효과
    gsap.utils.toArray("[data-speed]").forEach(el => {
        gsap.to(el, {
            x: (i, target) => -(target.getAttribute("data-speed") * 100),
            ease: "none",
            scrollTrigger: {
                trigger: "#interior-section-wrapper",
                start: "top top",
                end: "bottom bottom",
                scrub: 2
            }
        });
    });

    tl.from("#interior-section-wrapper .panel:nth-child(3) h2", { scale: 0.5, opacity: 0, ease: "back.out(1.7)" }, 1.5);

    const images2 = gsap.utils.toArray("#interior-section-wrapper .panel:nth-child(4) .gallery-image");
    tl.from(images2, { scale: 0, rotate: 180, opacity: 0, stagger: 0.15, ease: "power3.out" }, 2.5);
}

// --- 섹션 4: 스캐터 이미지 애니메이션 ---
function setupPeopleSection() {
    const scatterContainer = document.querySelector("#scatter-container");
    const peopleImages = [
        'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600',
        'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600',
        'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600',
        'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?w=600',
        'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600',
        'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600',
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600',
        'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600',
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600'
    ];

    peopleImages.forEach(url => {
        let item = document.createElement("div");
        item.className = "scatter-item";
        item.style.backgroundImage = `url(${url})`;
        scatterContainer.appendChild(item);
    });

    const items = gsap.utils.toArray(".scatter-item");
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#people-section",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=200%"
        }
    });

    // 1. 이미지들이 외부에서 날아와 중앙에 모임
    items.forEach(item => {
        gsap.set(item, {
            x: gsap.utils.random(-100, 100) + "vw",
            y: gsap.utils.random(-100, 100) + "vh",
            rotate: gsap.utils.random(-360, 360)
        });
    });

    tl.to(items, {
        x: "50vw",
        y: "50vh",
        xPercent: -50,
        yPercent: -50,
        rotate: 0,
        stagger: {
            each: 0.1,
            from: "random"
        },
        ease: "power2.inOut"
    })
    // 2. 콜라주 형태로 펼쳐짐
    .to(items, {
        x: () => gsap.utils.random(20, 80) + "vw",
        y: () => gsap.utils.random(15, 85) + "vh",
        rotate: () => gsap.utils.random(-30, 30),
        scale: 1,
        stagger: 0.05,
        ease: "power3.out"
    }, ">-0.5");

    tl.fromTo("#people-title", { opacity: 0 }, { opacity: 1, duration: 1 }, "<0.5")
      .to("#people-title", { opacity: 0, duration: 1}, ">1");

    // 3. 다시 사라짐
    tl.to(items, {
        opacity: 0,
        scale: 0.5,
        filter: "blur(20px)",
        stagger: 0.05,
        ease: "power2.in"
    });
}

// --- 섹션 5: 외관 & 마무리 애니메이션 ---
function setupExteriorSection() {
    // GSAP TextPlugin이 없으면 타이핑 효과 대신 페이드인으로 대체
    if (gsap.plugins.TextPlugin) {
        gsap.registerPlugin(TextPlugin);
    }

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#exterior-section",
            pin: true,
            scrub: 1,
            start: "top top",
            end: "+=150%"
        }
    });

    const backgrounds = [
        "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=1920&q=80",
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1920&q=80"
    ];

    gsap.set("#final-text-container", { opacity: 0 });
    gsap.set("#exterior-bg", { scale: 1.2 });

    tl.to("#exterior-bg", { scale: 1, ease: "none" });

    backgrounds.forEach((bg) => {
        tl.to("#exterior-bg", {
            opacity: 0.5,
            duration: 0.5,
            onComplete: () => {
                document.querySelector("#exterior-bg").style.backgroundImage = `url(${bg})`;
            }
        })
        .to("#exterior-bg", { opacity: 1, duration: 0.5 });
    });

    tl.to("#final-text-container", { opacity: 1, duration: 1 }, ">-1");

    // 타이핑 효과
    const finalTitle = document.querySelector("#final-title");
    const text = "Find Your Moment";
    if (gsap.plugins.TextPlugin) {
        tl.to(finalTitle, {
            text: {
                value: text,
                delimiter: "",
            },
            duration: text.length * 0.1,
            ease: "none"
        });
    } else {
        finalTitle.textContent = text;
        tl.from(finalTitle, { opacity: 0, duration: 1 });
    }
}

// --- 모든 섹션 애니메이션 실행 ---
// 페이지가 로드되면 각 섹션의 설정 함수를 호출
window.addEventListener("load", () => {
    setupHeroSection();
    setupBeanSection();
    setupInteriorSection();
    setupPeopleSection();
    setupExteriorSection();
});
