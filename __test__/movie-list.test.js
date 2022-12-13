const { Builder, Capabilities } = require("selenium-webdriver")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {addMovie, verifyMovie} = require('../functions/addMovie')
beforeEach(async() => {
    await driver.get('http://127.0.0.1:5500/movie-list/index.html')
})

afterAll(asynch() => {
    await driver.quit()
})

describe('movie-list tests', () => {
    test('should be able to add a movie', asynch() => {
        await addMovie(driver, 'Encanto')
        await driver.sleep(5000)
    })
    test('displayed movie is the same as the param', async () => {
        await verifyMovie(driver, 'Soul')
        await driver.sleep(3000)
    })
})
