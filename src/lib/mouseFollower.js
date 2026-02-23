import { gsap } from "gsap";

export function mouseFollower(pillSelector, containerSelector) {

    const pill = document.querySelector(pillSelector);
    const container = document.querySelector(containerSelector);

    if (!pill || !container) return;

    const xTo = gsap.quickTo(pill, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(pill, "y", { duration: 0.6, ease: "power3" });

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left + 50;
        const y = e.clientY - rect.top - 50;

        xTo(x);
        yTo(y);
    });

    container.addEventListener('mouseenter', () => {
        gsap.to(pill, { opacity: 1 });
    });

    container.addEventListener('mouseleave', () => {
        gsap.to(pill, { opacity: 0 });
    });

}