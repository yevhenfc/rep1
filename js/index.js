function makeElement (tagClassName, tagClassType = "class", tagType = 'div') {
    let el = document.createElement(tagType);
    el.setAttribute(tagClassType, tagClassName);
    return el;    
}

class User{
    constructor(Name, Job){
        this.Name = Name;
        this.Job  = Job;
    }
}

let AG = new User('Gomez Addams','The Head Of Addams Family'); 

// userContainerCard 
document.body.append(makeElement("userContainerCard"));
// colorCardContainer
document.querySelector('.userContainerCard').append(makeElement("colorCardContainer"));
// userInfoContainer
document.querySelector('.userContainerCard').append(makeElement("userInfoContainer"));
// userPhoto
document.querySelector('.userInfoContainer').append(makeElement("userPhoto"));
// img
document.querySelector('.userPhoto').append(makeElement("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwuPxeszmtNz32f5hUfXS4rev29qIQG6MKdEsJ8_9YrD-A7FecfvWI-9YuF3YeB9wUsns&usqp=CAU","src",'img'));
document.querySelector('img').setAttribute('alt', 'photo');
// infoContainer
document.querySelector('.userInfoContainer').append(makeElement("infoContainer"));
// userName
document.querySelector('.infoContainer').append(makeElement("userName", "class",'p'));
document.querySelector('.userName').textContent = AG.Name;
// userJob
document.querySelector('.infoContainer').append(makeElement("userJob", "class",'p'));
document.querySelector('.userJob').textContent = AG.Job;
// buttonFollow
document.querySelector('.infoContainer').append(makeElement("buttonFollow"));
// iconButton
document.querySelector('.buttonFollow').append(makeElement("iconButton"));
// fa
document.querySelector('.iconButton').append(makeElement("#", "href",'a'));
document.querySelector('a').setAttribute('class', 'fa-brands fa-google-plus-g');// iconButton
// follow
document.querySelector('.buttonFollow').append(makeElement("follow"));
// Follow
document.querySelector('.follow').append(document.createElement('p'));
document.querySelector('.follow > p').innerText = 'Follow';
// followers
document.querySelector('.infoContainer').append(makeElement("followers", "class",'p'));
document.querySelector('.followers').innerText = '357 Followers';

let sriptf = document.createElement('script');
scripf.setAttribute('src','https://kit.fontawesome.com/efae9c7c5c.js');
scripf.setAttribute('crossorigin','anonymous');
document.body.append(scriptf);

