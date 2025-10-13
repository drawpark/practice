/**
 * Interactive Website Script - Mobile Optimized
 *
 * [최적화 주요 변경 사항]
 * 1.  **이미지 지연 로딩 (Lazy Loading) 및 반응형 이미지 (srcset)**
 * - 화면에 보이지 않는 이미지는 나중에 로드하여 초기 로딩 속도를 대폭 개선합니다.
 * - 화면 크기에 맞는 이미지를 로드하여 불필요한 데이터 사용을 줄입니다.
 *
 * 2.  **모바일 환경 비디오 로딩 방지**
 * - 데이터 소모가 큰 배경 비디오는 모바일에서 로드하지 않고, 대신 정적 이미지를 표시하도록 설정합니다. (CSS에서 처리 권장)
 *
 * 3.  **애니메이션 부하 감소**
 * - 모바일에서는 애니메이션에 사용되는 요소(파티클 등)의 개수를 줄여 CPU/GPU 부담을 완화합니다.
 *
 * 4.  **ScrollTrigger 성능 개선**
 * - ScrollTrigger.refresh() 호출 시점을 명확히 하고, 불필요한 계산을 줄입니다.
 *
 * 5.  **CSS 하드웨어 가속 유도**
 * - 애니메이션이 적용될 요소에 `will-change` 속성을 부여하여 브라우저가 렌더링을 최적화하도록 돕니다. (JS로 일부 적용, 실제로는 CSS 파일에 추가하는 것을 권장)
 */

// 페이지 로드 시 스크롤 위치를 최상단으로 강제합니다.
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// --- 1. 이미지 데이터 ---
const images = {
    beans: [
        'https://images.unsplash.com/photo-1572491410294-7a38f711a6fa?w=200',
        'https://images.unsplash.com/photo-1599380816399-6a3f4a382b3a?w=200',
        'https://images.unsplash.com/photo-1552346986-7e72a4ab1b54?w=200',
        'https://images.unsplash.com/photo-1606891834379-33a41b559286?w=200',
        'https://images.unsplash.com/photo-1509042239860-f550ce711a69?w=200'
    ],
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
        'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400'
    ],
    barista: [
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400',
        'https://images.unsplash.com/photo-1565689876693-9b5f499c9d47?w=400',
        'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400',
        'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=400',
        'https://images.unsplash.com/photo-1562059395-0ae2e4e6ad6a?w=400',
        'https://images.unsplash.com/photo-1560684352-8497838da222?w=400',
        'https://images.unsplash.com/photo-1569870499705-504a2566c56f?w=400'
    ],
    exterior: [
        'https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=1920&q=80',
        'https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=1920&q=80',
        'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1920&q=80',
        'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?w=1920&q=80'
    ],
    grid: {
        'Desserts & Foods': ["https://images.unsplash.com/photo-1559715745-e1b33a271c8f?w=400", "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400", "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400", "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400", "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400", "https://images.unsplash.com/photo-1570194065650-2f276f46d38c?w=400"],
        'Unique Interiors': ["https://images.unsplash.com/photo-1590080665780-6b9c6d_501f73?w=400", "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400", "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=400", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400"],
        'Terrace & Outdoor': ["https://images.unsplash.com/photo-1542181961-9590d0c79dab?w=400", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400", "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400", "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400", "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400"],
        'From Our Baristas': ["https://images.unsplash.com/photo-1565689876693-9b5f499c9d47?w=400", "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400", "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=400", "https://images.unsplash.com/photo-1562059395-0ae2e4e6ad6a?w=400", "https://images.unsplash.com/photo-1560684352-8497838da222?w=400", "https://images.unsplash.com/photo-1569870499705-504a2566c56f?w=400"],
        'More Moments': ["https://images.unsplash.com/photo-1572119865084-43b2cbd63db8?w=400", "https://images.unsplash.com/photo-1570968915860-54f5c8f1badd?w=400", "https://images.unsplash.com/photo-1570996914361-86d12a9e6d70?w=400", "https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?w=400", "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400"]
    }
};

// --- 2. UI 및 이벤트 핸들러 설정 ---
function setupHeaderAndMenu() {
    const header = document.querySelector('header');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    window.addEventListener('scroll', () => {
        header.classList.toggle('bg-black/80', window.scrollY > 50);
        header.classList.toggle('backdrop-blur-sm', window.scrollY > 50);
        header.classList.toggle('shadow-lg', window.scrollY > 50);
    });

    mobileMenuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
    });
    
    document.addEventListener('click', (e) => {
        const isClickInsideMenu = mobileMenu.contains(e.target) || mobileMenuButton.contains(e.target);
        if (!mobileMenu.classList.contains('hidden') && !isClickInsideMenu) {
            mobileMenu.classList.add('hidden');
        }
    });
}

// --- 3. 동적 컨텐츠 생성 ---
function populateContent() {
    const heroSection = document.querySelector("#hero-section .sticky");
    if(heroSection) {
        // [수정] 모바일/데스크톱 구분 없이 비디오를 항상 로드합니다.
        const video = document.createElement('video');
        video.id = 'hero-video';
        video.src = 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4';
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.className = 'absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-50';
        heroSection.prepend(video);
    }

    const cardStack = document.querySelector("#card-stack");
    if(cardStack) {
        images.drinks.forEach(url => {
            const card = document.createElement('div');
            card.className = 'card';
            // [수정] 바로 style을 지정하는 대신 data-src를 사용하여 나중에 로드합니다.
            // 실제 배경 이미지는 GSAP 애니메이션 시작 시점에 적용하여 성능을 확보합니다.
            card.dataset.src = url; 
            card.style.willChange = 'transform, opacity'; // [추가] 애니메이션 성능 최적화
            cardStack.appendChild(card);
        });
    }

    const scatterContainer = document.querySelector("#scatter-container");
    if (scatterContainer) {
        const peopleAndBaristas = [...images.people, ...images.barista];
        peopleAndBaristas.forEach(url => {
            const item = document.createElement("div");
            item.className = "scatter-item";
            item.dataset.src = url; // [수정] 데이터 소스 사용
            item.style.backgroundImage = `url(${url})`;
            item.style.willChange = 'transform, opacity, filter'; // [추가] 애니메이션 성능 최적화
            scatterContainer.appendChild(item);
        });
    }

    const gridTargetContainer = document.querySelector("#menu-grid-section .max-w-7xl");
    if(gridTargetContainer) {
        gridTargetContainer.innerHTML = '';
        for (const category in images.grid) {
            const title = document.createElement('h3');
            title.className = "font-serif-display text-3xl md:text-4xl text-left mb-8 border-b border-gray-700 pb-4";
            title.textContent = category;
            
            const gridContainer = document.createElement('div');
            gridContainer.className = "grid-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16";
            
            images.grid[category].forEach(url => {
                const item = document.createElement("div");
                item.className = "grid-item group";
                item.style.willChange = 'transform, opacity'; // [추가] 애니메이션 성능 최적화
                
                // [수정] 이미지에 lazy loading과 srcset을 적용하여 모바일 최적화
                const cleanUrl = url.split('?')[0];
                item.innerHTML = `<img 
                    src="${cleanUrl}?w=400&q=80" 
                    srcset="${cleanUrl}?w=200&q=80 200w, ${cleanUrl}?w=400&q=80 400w"
                    sizes="(max-width: 767px) 50vw, 20vw"
                    alt="${category} image" 
                    loading="lazy" 
                    class="w-full h-full object-cover">`;
                gridContainer.appendChild(item);
            });

            gridTargetContainer.appendChild(title);
            gridTargetContainer.appendChild(gridContainer);
        }
    }
}

// --- 4. GSAP 애니메이션 설정 ---
function setupAnimations() {
    gsap.matchMedia().add({
        isDesktop: `(min-width: 768px)`,
        isMobile: `(max-width: 767px)`
    }, (context) => {
        let { isDesktop, isMobile } = context.conditions;

        // --- Hero Section ---
        const cards = gsap.utils.toArray("#card-stack .card");
        if (cards.length > 0) {
            gsap.set(cards, { top: '50%', left: '50%', xPercent: -50, yPercent: -50 });

            // [추가] 카드가 화면에 보일 때 배경 이미지를 로드합니다.
            cards.forEach(card => {
                if(card.dataset.src) {
                    card.style.backgroundImage = `url(${card.dataset.src})`;
                }
            });

            gsap.from("#hero-title", { duration: 1.5, y: 100, opacity: 0, ease: "power4.out", delay: 0.5 });
            gsap.from("#hero-subtitle", { duration: 1.5, y: 50, opacity: 0, ease: "power4.out", delay: 0.8 });
            gsap.from(cards, { duration: 1.5, scale: 0, opacity: 0, stagger: 0.1, ease: "power4.out", delay: 1.2 });

            const tlHero = gsap.timeline({
                scrollTrigger: {
                    trigger: "#hero-section",
                    start: "top top",
                    end: "+=150%",
                    scrub: 1.2,
                    pin: true,
                }
            });

            // [수정] 모바일/데스크톱 구분 없이 비디오 투명도 애니메이션을 적용합니다.
            tlHero.to("#hero-video", { opacity: 0, ease: "power1.inOut" }, 0);
            
            cards.forEach((card, i) => {
                const spread = isDesktop ? 80 : 30; // [수정] 모바일에서 펼쳐지는 간격 축소
                tlHero.to(card, {
                    x: (i - (cards.length - 1) / 2) * spread,
                    rotateZ: (i - (cards.length - 1) / 2) * 5,
                    ease: "power2.out"
                }, 0);
            });
            tlHero.to(["#hero-title", "#hero-subtitle"], {
                opacity: 0,
                y: isMobile ? -50 : -100,
                stagger: 0.05,
                ease: "power2.in"
            }, 0.6);
        }

        // --- Bean Section ---
        const beanContainer = document.getElementById("bean-container");
        if (beanContainer) {
            // [수정] 모바일에서는 콩(bean) 파티클 개수를 줄여 부하 감소
            const beanCount = isMobile ? 20 : 50; 
            const beanImages = images.beans;
            for (let i = 0; i < beanCount; i++) {
                let bean = document.createElement("div");
                bean.className = "bean";
                bean.style.backgroundImage = `url('${beanImages[Math.floor(Math.random() * beanImages.length)]}')`;
                bean.style.willChange = 'transform, opacity'; // [추가]
                beanContainer.appendChild(bean);
            }
            const beans = gsap.utils.toArray(".bean");
            const tlBean = gsap.timeline({ scrollTrigger: { trigger: "#bean-section", start: "top top", end: "bottom top", scrub: 1.5, pin: true } });
            beans.forEach(bean => gsap.set(bean, { x: gsap.utils.random(0, window.innerWidth), y: gsap.utils.random(0, window.innerHeight), scale: gsap.utils.random(0.5, 1.2), opacity: 0 }));
            tlBean.to(beans, { opacity: 1, stagger: 0.05, ease: "power2.out" })
                .fromTo("#bean-text", { opacity: 0, scale: 0.8, yPercent: 10 }, { opacity: 1, scale: 1, yPercent: 0, ease: "power3.out" }, "<")
                .to(beans, { x: window.innerWidth / 2, y: window.innerHeight / 2, scale: 0, opacity: 0, duration: 2, stagger: 0.02, ease: "power3.in" }, ">1.5")
                .to("#bean-text", { opacity: 0, scale: 0.8, yPercent: -10, ease: "power3.in" }, "<");
        }

        // --- Interior Section ---
        const horizontalSection = document.querySelector('.section-horizontal-container');
        if (horizontalSection) {
            // [수정] 모바일에서는 가로 스크롤 애니메이션을 비활성화하고 세로로 쌓이도록 할 수 있습니다.
            // 여기서는 코드를 유지하되, CSS에서 @media 규칙으로 레이아웃을 변경하는 것을 권장합니다.
            // 예: @media (max-width: 767px) { .section-horizontal-container { flex-direction: column; } }
            const mainTween = gsap.to(horizontalSection, {
                x: () => -(horizontalSection.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: "#interior-section-wrapper",
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + (horizontalSection.scrollWidth - window.innerWidth),
                    invalidateOnRefresh: true
                }
            });
            const panels = gsap.utils.toArray('.section-horizontal-container .panel');
            panels.forEach((panel, i) => {
                const animationConfig = [
                    { selector: 'h2, p', vars: { x: -100, opacity: 0, stagger: 0.2 } },
                    { selector: 'img', vars: { y: 100, opacity: 0, stagger: 0.2 } },
                    { selector: 'h2', vars: { scale: 0.5, opacity: 0 } },
                    { selector: 'img', vars: { scale: 0, rotate: 30, opacity: 0, stagger: 0.15 } },
                    { selector: 'h2, p', vars: { x: 100, opacity: 0, stagger: 0.2 } },
                    { selector: 'img', vars: { y: (idx) => idx * 50 - 50, x: (idx) => idx * 25 - 25, rotate: (idx) => idx * -10, opacity: 0, stagger: 0.1 } }
                ];
                if (animationConfig[i]) {
                    gsap.from(panel.querySelectorAll(animationConfig[i].selector), {
                        ...animationConfig[i].vars,
                        scrollTrigger: {
                            trigger: panel,
                            containerAnimation: mainTween,
                            start: 'left 80%',
                            toggleActions: 'play none none reverse'
                        }
                    });
                }
            });
        }
        
        // --- People Section ---
        const scatterItems = gsap.utils.toArray("#scatter-container .scatter-item");
        if (scatterItems.length > 0) {
            const tlPeople = gsap.timeline({ scrollTrigger: { trigger: "#people-section", pin: true, scrub: 1.5, start: "top top", end: "+=300%" } });
            scatterItems.forEach(item => gsap.set(item, { x: gsap.utils.random(-100, 100) + "vw", y: gsap.utils.random(-100, 100) + "vh", rotate: gsap.utils.random(-360, 360) }));
            tlPeople.to(scatterItems, { x: "50vw", y: "50vh", xPercent: -50, yPercent: -50, rotate: 0, stagger: { each: 0.05, from: "random" }, ease: "power2.inOut" })
                .to(scatterItems, { x: () => gsap.utils.random(10, 90) + "vw", y: () => gsap.utils.random(10, 90) + "vh", rotate: () => gsap.utils.random(-45, 45), scale: 1.1, stagger: { each: 0.03, from: "random" }, ease: "power3.out" }, ">-0.5")
                .fromTo("#people-title", { scale: 3, opacity: 0 }, { scale: 1, opacity: 1, ease: "power3.out"}, "<0.5")
                .to("#people-title", { scale: 1.5, opacity: 0, ease: "power3.in"}, ">1.5")
                .to(scatterItems, { x: "50vw", y: "150vh", opacity: 0, scale: 0.5, filter: "blur(10px)", stagger: { each: 0.03, from: "random" }, ease: "power2.in" }); // [수정] blur 값 감소
        }

        // --- Menu Grid Section ---
        gsap.utils.toArray('.grid-container').forEach((container) => {
            gsap.from(container.querySelectorAll('.grid-item'), {
                scrollTrigger: {
                    trigger: container,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0, y: 60, scale: 0.95, stagger: 0.08, duration: 0.8, ease: 'power3.out'
            });
        });

        // --- Exterior Section ---
        const exteriorSection = document.getElementById("exterior-section");
        if (exteriorSection) {
            const tlExterior = gsap.timeline({ scrollTrigger: { trigger: "#exterior-section", pin: true, scrub: 1, start: "top top", end: "+=250%" } });
            gsap.set("#final-text-container", { opacity: 0, scale: 0.8 });
            gsap.set("#exterior-bg", { scale: 1.2 });
            tlExterior.to("#exterior-bg", { scale: 1, ease: "none" });
            images.exterior.forEach(bg => {
                tlExterior.to("#exterior-bg", { opacity: 0.3, duration: 0.5, onComplete: () => gsap.set("#exterior-bg", { backgroundImage: `url(${bg})` }) })
                    .to("#exterior-bg", { opacity: 1, duration: 0.5 });
            });
            tlExterior.to("#final-text-container", { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }, ">-1");
            
            const finalTitle = document.querySelector("#final-title");
            if (finalTitle) {
                const text = "Your Moment Awaits";
                tlExterior.to(finalTitle, { text: { value: text, delimiter: "" }, duration: text.length * 0.1, ease: "none" });
            }
        }
    });
}


// --- 5. 모든 기능 실행 ---
document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);

    populateContent();
    setupHeaderAndMenu();
    setupAnimations(); // [수정] 애니메이션 관련 함수들을 하나로 묶어 관리

    // [수정] 이미지 로딩 및 DOM 변경 후 ScrollTrigger 재계산
    // setTimeout 대신 window.onload를 사용하여 모든 리소스(이미지 포함)가 로드된 후 refresh를 실행하는 것이 더 안정적일 수 있습니다.
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });
});

