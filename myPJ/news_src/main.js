let news = [];

const getLatestNews = async () => {
    let url = new URL(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=332e5d18bd964c70ae19f7338ad5fff2
        `
    );

    // URL 객체는 브라우저에서 제공해주는 함수. url을 분석해줌.
    let header = new Headers({
        "X-Api-Key": "332e5d18bd964c70ae19f7338ad5fff2",
    });
    let response = await fetch(url, { headers: header });
    let data = await response.json();
    news = data.articles;

    console.log("이건뭐", news);
    // console.log(response);
    render();
};

getLatestNews();

const render = () => {
    let newsHTML = "";
    newsHTML = news.map((news) => {
        return ` <div class="row each-article">
        <figure class="col-lg-4">
            <img class="img-size"
                src=${news.urlToImage}
                alt="강아지"
            />
            <figcaption>${news.title}</figcaption>
        </figure>
        <div class="col-lg-8">
            <p>
                ${news.description}
            </p>
            <p>
                <time>시간</time>
            </p>
        </div>
    </div>`;
    }).join('');

    document.querySelector("#news-board").innerHTML = newsHTML;
};
