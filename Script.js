// Posts

async function getAllPostsFromServer() {
    var postsList = document.getElementById('all-posts');
    try {
        var response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        var posts = response.data;
        for (let i = 0; i < posts.length; i++) {
            console.log(posts[i])
            var listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${posts[i].title}</strong> 
            <p>${posts[i].body}</p>`;
            postsList.append(listItem);
        }
    }
    catch (err) {
    }
}
getAllPostsFromServer()

// Users 

async function getAllUsersFromServer() {
    var usersList = document.getElementById('all-users');
    try {
        var response = await axios.get("https://jsonplaceholder.typicode.com/users");
        var users = response.data;
        for (let i = 0; i < users.length; i++) {
            console.log(users[i])
            var listItem = document.createElement('li');
            listItem.innerHTML = `<strong> ${users[i].name} </strong>
            <p>${users[i].email}</p>
            <p>${users[i].company}</p>`;
            usersList.append(listItem);
        }
    }
    catch (err) {
    }
}
getAllUsersFromServer()

// Comments 

async function getAllCommentsFromServer() {
    var commentsList = document.getElementById('all-comments');
    try {
        var response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        var comments = response.data;
        for (let i = 0; i < comments.length; i++) {
            console.log(comments[i])
            var listItem = document.createElement('li');
            listItem.innerHTML = `<strong> ${comments[i].name} </strong>
            <p>${comments[i].body}</p>
            <p>${comments[i].email}</p>`;
            commentsList.append(listItem);
        }
    }
    catch (err) {
    }
}
getAllCommentsFromServer()