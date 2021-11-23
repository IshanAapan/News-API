console.log("This is my js file!!");
// 3da1e1244f02420f8ddbfe4b2b250e0e

// Initialize the news api parameters
let source = 'bbc-news';
let apikey = '3da1e1244f02420f8ddbfe4b2b250e0e'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apikey}`, true);
// xhr.getResponseHeader('Content-type', 'application/json');
 // What to do when response is ready
 xhr.onload = function () {
    if(this.status === 200){

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collapse${index}">
                                       <b> Breaking News ${index+1}:</b> ${element["title"]}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}"
                                data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank">Read more here</a>     </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log("Some error occured")
    }
}

xhr.send()

