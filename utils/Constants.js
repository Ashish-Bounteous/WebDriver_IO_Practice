const url = "https://www.amazon.in";
const searchText = "Apple iPhone 15 (256 GB) - Blue";

// Inject custom CSS to hide the scrollbar
const hideScrollbarCSS = `
            const style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = 'body::-webkit-scrollbar { display: none; }';
            document.head.appendChild(style);
        `;

// TEST SUITES
const TEST_SUITE_1 = "Land on to Amazon site";

// XPATHS
const findBannerXPath = '//*[@id="gw-desktop-herotator"]/div/input';

// SCREENS
const SCREEN_1 = "amazon-home-page";

module.exports = {
    url,
    searchText,
    hideScrollbarCSS,
    TEST_SUITE_1,
    findBannerXPath,
    SCREEN_1
};