// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'
var btn = document.querySelector(".btn")
var quoteText = document.querySelector(".quote-text")
var quoteAuthor = document.querySelector(".quote-author")

function getQuote() {
    $.ajax({
        url: API_URL,
        dataType: 'json',
        success: function (data) {
            // console.log(data)
            console.log(data.quoteText)
            console.log(data.quoteAuthor)
            quoteText.textContent= data.quoteText
            quoteAuthor.textContent=data.quoteAuthor
        },
        error: function (error) {
            console.log("error")

        }
    })

}

getQuote()

btn.addEventListener(`click`, function(){
    getQuote()
})
