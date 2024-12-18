import { Gradient } from '../scripts/gradient.js'

new Gradient(5, (instance) => {
    if (instance.last != 0) {
        instance.pause();
    }
}).initGradient('#social-gradient-canvas-linkedin');
new Gradient(17, (instance) => {
    if (instance.last != 0) {
        instance.pause();
    }
}).initGradient('#social-gradient-canvas-mail');
new Gradient(3, (instance) => {
    if (instance.last != 0) {
        instance.pause();
    }
}).initGradient('#social-gradient-canvas-x');
new Gradient(21, (instance) => {
    if (instance.last != 0) {
        instance.pause();
    }
}).initGradient('#social-gradient-canvas-telegram');