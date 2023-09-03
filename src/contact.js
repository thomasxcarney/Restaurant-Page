const contactContent = function() {
    const container = document.getElementById('content');
    function createHeadline() {
        const headline = document.createElement('h1');
        headline.innerHTML = "Contact Us";
        container.appendChild(headline);
    };
    function createPara() {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = 'email us at <a>thomaspizza@pizza.com</a>';
        container.appendChild(paragraph);
    };
    container.innerHTML = '';
    createHeadline();
    createPara();
};

export { contactContent };