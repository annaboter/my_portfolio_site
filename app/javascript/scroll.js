const stickySections = [...document.querySelectorAll('.sticky')]

// same images for each section
// let images = [
//   'https://dr.savee-cdn.com/things/thumbnails/6/5/55a63f327db49b4cef1007.webp',
//   'https://dr.savee-cdn.com/things/thumbnails/6/5/8491253765211e2494b4bc.webp',
//   'https://dr.savee-cdn.com/things/thumbnails/6/5/3bf7c6be0c50a814ddf168.webp',
//   'https://dr.savee-cdn.com/things/thumbnails/6/5/5e6c900271ebddbe86e0f4.webp'
// ]

// images.forEach(img => {
//   stickySections.forEach(section => {
//     let image = document.createElement('img');
//     image.src = img
//     section.querySelector('.scroll-section').appendChild(image)
//   })
// })

// specific images for each section, array i corresponds to section i

let cloudinaryBaseUrl = 'https://res.cloudinary.com/dvjsobs13/image/upload/';

let sectionImages = [
  [
    'portfolio-projects/qyeokdjckbt61lesgjwt',
    'portfolio-projects/usxiyjcw9hgxrcmvt3kt',
    'portfolio-projects/m7mvlzhuqbuh0s3kxx4r',
    'portfolio-projects/vyr16rky7euwebxmvji1',
    'portfolio-projects/eu7hzrf86qppefyw7rcb',
  ],
  [
    'portfolio-projects/itfljvhusog7lruyba8v',
    'portfolio-projects/gkr0zox1fy99fyhg421i',
    'portfolio-projects/wmjkqpu7ju3i9ntkdhbd'
  ],
  [
    'portfolio-projects/cjyyifyish32mrwujcvm',
    'portfolio-projects/t0gyr5a7dizxavfcvfoq',
    'portfolio-projects/gg0urgsc5hnprhbl6and',
    'portfolio-projects/hukn1njsb98nehfn1jlo',
  ]
];

stickySections.forEach((section, index) => {
  let imagesForSection = sectionImages[index % sectionImages.length];

  imagesForSection.forEach(imgPath => {
    let image = document.createElement('img');
    // image.src = `/assets/${imgPath}`;
    let cloudinaryUrl = cloudinaryBaseUrl + imgPath;
    image.src = cloudinaryUrl;
    section.querySelector('.scroll-section').appendChild(image);
  });
});


window.addEventListener('scroll', (e) => {
  for(let i = 0; i < stickySections.length; i++){
    transform(stickySections[i])
  }
})

function transform(section){
  const offsetTop = section.parentElement.offsetTop
  const scrollSection = section.querySelector('.scroll-section')
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}
