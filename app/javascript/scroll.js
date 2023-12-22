const stickySections = [...document.querySelectorAll('.sticky')]
console.log(stickySections  )

let images = [
  'https://dr.savee-cdn.com/things/thumbnails/6/5/55a63f327db49b4cef1007.webp',
  'https://dr.savee-cdn.com/things/thumbnails/6/5/8491253765211e2494b4bc.webp',
  'https://dr.savee-cdn.com/things/thumbnails/6/5/3bf7c6be0c50a814ddf168.webp',
  'https://dr.savee-cdn.com/things/thumbnails/6/5/5e6c900271ebddbe86e0f4.webp'
]

images.forEach(img => {
  stickySections.forEach(section => {
    let image = document.createElement('img');
    image.src = img
    section.querySelector('.scroll-section').appendChild(image)
  })
})

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
