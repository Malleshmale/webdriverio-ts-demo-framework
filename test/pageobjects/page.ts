
export default class Page {
   
    public open(path: string): Promise<string> {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
