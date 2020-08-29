fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        data.forEach((item) => {

            let img = item.featured_media;
            let title = item.title.rendered;
            let author = item._embedded.author[0].name;
            let info = item.excerpt.rendered;

            //formatting date
            let date = item.date_gmt;
            date = new Date(date);
            let format_options = { year: 'numeric', month: 'long', day: 'numeric' };
            date = new Intl.DateTimeFormat('en-GB', format_options).format(date);

            document.querySelector(".article-wrap").innerHTML
                += `<div class=\"col-small-12 col-medium-6 col-4\">\n 
                            <div class=\"p-notification--negative article-box\">\n 
                                <div class=\"p-card article-card\">\n 
                                    <p class=\"p-card__content card-category \">CLOUD AND SERVER</p>\n
                                    <hr class=\"u-sv1\">\n
                                    <div class='u-align--center'> 
                                        <img class="" src="${img}" alt="article image"> 
                                     </div>\n 
                                    <h3 class=\"p-card__title\"><a href='#'>${title}</a></h3>\n
                                    <h5 class="p-card__content">By <a href="#">${author}</a> on ${date}</h5>
                                    <hr class=\"u-sv1\">\n
                                    <p class=\"p-card__content\">Article</p>\n
                                </div>\n
                            </div>\n
                        </div>`;
        });
    });