export function reRender(selector) {
    const element = document.querySelector(selector);
    element.classList.add('hidden');

    setTimeout(() => {
        element.classList.remove('hidden');
    }, 200);
}

export function getTheme(isDark) {
    return {
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black'
    }
}

export function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;

    while (currentDate - date < milliseconds) {
      currentDate = Date.now();
    };
}

export function random(max) {
    return Math.floor(Math.random() * max);
}

