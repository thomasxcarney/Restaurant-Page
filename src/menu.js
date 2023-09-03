const menuContent = function() {
    const container = document.getElementById('content');
    function createHeadline() {
        const headline = document.createElement('h1');
        headline.innerHTML = "Menu";
        container.appendChild(headline);
    };
    function createPara() {
        const paragraph = document.createElement('p');
        paragraph.innerHTML = 'Pizza by weight- $10/g';
        container.appendChild(paragraph);
    };
    container.innerHTML = '';
    createHeadline();
    createPara();
};

export { menuContent };