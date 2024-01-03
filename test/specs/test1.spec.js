const { url, searchText, hideScrollbarCSS, TEST_SUITE_1, findBannerXPath, SCREEN_1 } = require("../../utils/Constants");

describe('Amazon Visual Regression Tests', async () => {

    before(async () => {
        await browser.url(url);
        await browser.deleteCookies();
        await browser.maximizeWindow();

        await browser.execute(hideScrollbarCSS);

    });

    it(TEST_SUITE_1, async () => {
        const bannerInput = await $(findBannerXPath);
        await browser.execute((el) => {
            el.value = '1';
        }, bannerInput);
        // await browser.waitUntil(async function () {
        //     return (await bannerInput.getValue()) == 1;
        // }, {
        //     timeout: 5000,
        //     timeoutMsg: 'expected Banner Input to be displayed after 5s'
        // });
        // await bannerInput.setValue(1);
        expect(await browser.checkScreen(SCREEN_1, {})).toBeLessThanOrEqual(10);
    });

    // it('Enter "iphone 15 pro max" in the search box', async () => {
    //     const serachInput = await $('#twotabsearchtextbox');
    //     await serachInput.setValue(searchText);

    //     await browser.keys("Enter");
    //     expect(await browser.checkScreen("amazon-search-page", {})).toEqual(0);
    // });

    // it('Select and click on "Apple iPhone 15(256 GB) - Blue" from the listed devices', async () => {
    //     const link = await $('span=Apple iPhone 15 (256 GB) - Blue').parentElement();
    //     await link.click();

    //     // create new window
    //     await browser.switchWindow(url + await link.getAttribute("href"));
    //     expect(await browser.checkScreen("amazon-product-page", {})).toEqual(0);
    // });

    // it('Click on "Add to Cart" button', async () => {
    //     const addToCartButton = await $("#add-to-cart-button");
    //     await addToCartButton.click();

    //     await browser.pause(2000);
    //     const link = await $('#attach-close_sideSheet-link');
    //     await link.click();

    //     await browser.pause(2000);
    //     const cart = await $("#nav-cart");
    //     await cart.waitForExist({ timeout: 3000 });

    //     expect(await browser.checkElement(await cart, "amazon-cart-count", {})).toEqual(0);
    // });

    // it('Navigate to Cart page', async () => {
    //     const cartButton = await $('#nav-cart');
    //     await cartButton.click();

    //     await browser.pause(2000);
    //     expect(await browser.checkScreen("amazon-cart-page", {})).toEqual(0);
    // });

    // it('Check whether the item is added or not', async () => {
    //     const cartDiv = await $('#activeCartViewForm');

    //     expect(await browser.checkElement(cartDiv, "amazon-is-product-in-cart", {}))
    //         .toEqual(0);
    // });

    after(async () => {
        await browser.deleteSession();
    });
});
