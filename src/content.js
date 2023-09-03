const frontPageContent = function() {
    const container = document.getElementById('content');
    const homeBtn = document.getElementById('home');
    function createHeadline() {
        const headline = document.createElement('h1');
        headline.innerHTML = "Thomas' Pizza Restaurant";
        container.appendChild(headline);
    };
    function createImg() {
        const img = document.createElement('img');
        img.src = '../dist/pizza.jpeg';
        container.appendChild(img);
    };
    function createPara() {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = 'Classic roman style pizza in teglia, built on a sourdough base.';
        container.appendChild(paragraph);
    };
    container.innerHTML = '';
    homeBtn.classList.add('currentTab');
    createHeadline();
    createImg();
    createPara();
};

export { frontPageContent };