if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/Todo-List/sw.js', { scope: '/Todo-List/' })})}