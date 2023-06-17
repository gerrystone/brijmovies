import { gsap } from 'gsap';

export function slideInAnimation() {
  return gsap.from('router-outlet ~ *', {
    x: '-100%',
    opacity: 0,
    duration: 1,
    ease: 'power3.inOut'
  });
}
