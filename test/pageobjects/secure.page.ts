import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';


class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashAlert(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('#flash');
    }
}
//hi

export default new SecurePage();
