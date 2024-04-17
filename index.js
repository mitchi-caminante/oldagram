const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        caption: "just took a few mushrooms lol",
        likes: 0
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        caption: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        caption: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postSectionEl = document.getElementById("post-section-el")

posts.forEach(function(postContent) {
    const newPost = document.createElement("article")
    
    newPost.innerHTML += ` 
        <section class="poster-info">
            <img class="user-avatar" src="images/avatar-vangogh.jpg">
            <div>
                <div><span class="name">${postContent.name}</span></div>
                <span class="location">${postContent.location}</span>
            </div>
        </section>
        <section class="posted-img">
            <img class="img" id="posted-img" src="${postContent.post}" alt="${postContent.alt}">
        </section>
        <section class="below-img-els">
            <div class="btns">
                <button class="heart-icon btn" id="heart-icon">
                    <img class="icon" src="images/icon-heart.png">
                </button>
                <button class="comment-icon btn" id="comment-icon">   
                    <img class="icon" src="images/icon-comment.png">
                </button>
                <button class="dm-icon btn" id="dm-icon">
                    <img class="icon" src="images/icon-dm.png">
                </button>
            </div>
            <span class="likes">
                <span id="likes-disp">${postContent.likes}</span> likes
            </span>
            <section class="caption-section">
                <span class="username">${postContent.username}</span><span class="caption">${postContent.caption}</span>
            </section>
        </section>
        `
    postSectionEl.appendChild(newPost); 
});

const heartButtons = document.querySelectorAll('#heart-icon');

heartButtons.forEach(function(heartButton) {
   //event listener for likes//
    heartButton.addEventListener("click", function(event) {
        event.preventDefault();
        const section = heartButton.closest('section');
        const likesEl = section.querySelector('#likes-disp');
        const likes = parseInt(likesEl.textContent);
        likesEl.textContent = likes + 1;
    });
});


