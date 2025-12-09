const message = document.getElementById('message');
const count = document.getElementById('count');
const counter = document.querySelector('.counter');
const LIMIT = 250;

message.addEventListener('input', () => {
    const length = message.value.length;
    count.innerText = `${length}/${LIMIT}`;

    const atLimit = length >= LIMIT;
    counter.style.color = atLimit ? 'red' : 'inherit';
    message.classList.toggle('over-limit', atLimit);
});
