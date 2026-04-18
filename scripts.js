document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);

    // ─── Smooth Scroll ───────────────────────────────────────────────
    const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true
    });

    // ─── Header ───────────────────────────────────────────────────────
    gsap.from(".logo-img", {
        duration: 0.8,
        y: -40,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from("nav a", {
        duration: 0.6,
        stagger: 0.08,
        y: -20,
        opacity: 0,
        ease: "power2.out",
        delay: 0.2
    });

    gsap.from("header .btn-nubank", {
        duration: 0.6,
        scale: 0.8,
        opacity: 0,
        ease: "back.out(1.7)",
        delay: 0.6
    });

    // ─── Hero: animação de caracteres no h1 (SplitText) ──────────────
    const h1 = document.querySelectorAll(".hero-text h1");
    
        h1.forEach((h1) => {
        const split = SplitText.create(h1, {
            type: "lines, words, chars",
            mask: "lines"
        });

        gsap.from(split.chars, {
            y: 40,
            opacity: 0,
            duration: .3,
            stagger: .03,
            scrollTrigger: {
                trigger: h1,
            }
        });
    });

    gsap.from(".hero-card", {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
        delay: 0.6
    });

    // ─── Hero: saída ao scroll (ponto de referência mais abaixo) ─────
    gsap.to(".hero-text h1", {
        y: -50,
        opacity: 0,
        scrollTrigger: {
            trigger: ".hero",
            start: "30% top",
            end: "bottom top",
            scrub: 1.2
        }
    });

    gsap.to(".hero-text .btn-nubank", {
        y: -40,
        opacity: 0,
        scrollTrigger: {
            trigger: ".hero",
            start: "30% top",
            end: "bottom top",
            scrub: 1.2
        }
    });

    gsap.fromTo(".hero-card",
        { x: 0, opacity: 1 },
        {
            x: 80,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".hero",
                start: "60% top",
                end: "bottom top",
                scrub: 1.5,
                invalidateOnRefresh: true
            }
        }
    );

    // ─── Services: cada item aparece 1 a 1 com blur ──────────────────
    gsap.from(".services a", {
        opacity: 0,
        filter: "blur(8px)",
        y: 20,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".services",
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });

    // ─── Card section: aparece mais cedo no scroll ───────────────────
    gsap.from(".credit-card", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".card-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".card-text", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".card-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // ─── Footer ──────────────────────────────────────────────────────
    gsap.from("footer", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "footer",
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });
});