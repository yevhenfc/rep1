imagesArray = [
'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600'
,'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=600'
,'https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=600'
,'https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&w=600'
,'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600'
,'https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=600'
,'https://images.pexels.com/photos/414122/pexels-photo-414122.jpeg?auto=compress&cs=tinysrgb&w=600'
]

const slider = document.getElementById('slideContainer');
const slides = makeSlides(imagesArray, 0, 3);

function makeSlides(arrImages, startIndex = 0, endIndex = arrImages.lenght) {
    let slides = [], imgSlide, divSlide, i;
    for (i = startIndex; i <= endIndex; i++){
        slides[i] = document.createElement('li');
        slides[i].setAttribute('class', 'liSlide');
        divSlide = document.createElement('div');
        divSlide.setAttribute('class', 'divSlide');
        imgSlide = document.createElement('img');
        imgSlide.setAttribute('src', arrImages[i]);
        divSlide.append(imgSlide);
        slider.append(divSlide);
    };
}
