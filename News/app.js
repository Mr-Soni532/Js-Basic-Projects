//.. this is my source link for http request
// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5bfd73ed73c64636a20f95ec6cc21d63
newsAccordion = document.getElementById("newsAccordion");
const xhr = new XMLHttpRequest();
// perameter of source link
apiKey = "5bfd73ed73c64636a20f95ec6cc21d63";
country = "in";
category = "business";
// we use templet litteral inside link bcoz it is good way to hide api key and other crucial information
xhr.open(
  "get",
  `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`,
  true
  
);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let newshtml = ``;
    // for(title in articles)
    {
        console.log()
    }
    articles.forEach(function (element, index) {
      console.log(element.title);
      let news = `    <div class="card">
                                <div class="card-header" id="heading${index}">
                                    <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                        <span class="badge badge-danger my-3">HOT NEWS ${index + 1}:    </span>    ${element.title}
                                    </button>
                                    </h2>
                                 </div>
        
                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                    <div class="card-body"> ${element.content}. <a href=${element.url} target ="_blank"> Read More</a> </div>
                            </div>
                        </div>`;
      newshtml += news;
    });
    newsAccordion.innerHTML = newshtml;
  } else {
    console.log("Cannot fetch the details");
  }
};

xhr.send();
