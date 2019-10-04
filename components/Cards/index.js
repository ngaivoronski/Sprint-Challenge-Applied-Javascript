// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

var cardsContainer = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then (response => {
        response.data.articles.javascript.forEach(element => {
            const createdCard = cardCreator(element);
            cardsContainer.appendChild(createdCard);
        });
    })

function cardCreator(obj){
    // create elements
    const newCard = document.createElement('div'),
    newHeadline = document.createElement('div'),
    newAuthor = document.createElement('div'),
    newImageContainer = document.createElement('div'),
    newImage = document.createElement('img'),
    newAuthorInfo = document.createElement('span');

    // classes
    newCard.classList.add('card');
    newHeadline.classList.add('headline');
    newAuthor.classList.add('author');
    newImageContainer.classList.add('img-container');

    //properties
    newHeadline.textContent = obj.headline;
    newImage.src = obj.authorPhoto;
    newAuthorInfo.textContent = 'By ' + obj.authorName;

    //structure
    newCard.appendChild(newHeadline);
    newCard.appendChild(newAuthor);
    newAuthor.appendChild(newImageContainer);
    newImageContainer.appendChild(newImage);
    newAuthor.appendChild(newAuthorInfo);

    return newCard;
}