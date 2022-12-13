const {By} = require('selenium-webdriver')

const addMovie = async(driver,movie) => {
    //get the input element and input the movie inception 
    await driver.findElement(By.xpath('//input[@placeholder="Add Movie"]')).sendKeys(`${movie}`)

    //imitate a click
    await driver.findElement(By.xpath('//button')).click()

    //find the li element
    const movie = await driver.findElement(By.xpath('//li'))
    //use the .isDisplayed method on selenium to check if an element is displayed on the browser, evaluates yo true or false
    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()

}

const verifyMovie = async(driver, movie) => {

    await driver.findElement(By.xpath('//input[@placeholder="Add Movie"]')).sendKeys(`${movie}`)

    //imitate a click
    await driver.findElement(By.xpath('//button')).click()

    //find the movie span
    const movieText = await driver.findElement(By.xpath('//li/span')).getText(

    expect(movieText).(movie)
    )
}

module.exports = {
    addMovie,
    verifyMovie
}