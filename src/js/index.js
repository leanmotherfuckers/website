import aos from 'aos/dist/aos'

aos.init({ once: true, duration: 1000 })

let counter = 0
document.getElementById('find-us').onclick = function (e) {
  e.preventDefault()
  const questions = [
    'Where does Bart Temme live?',
    'Who the fuck is Thomas Schoffelen?',
    'What is a Dante?',
    'Is Ahsan excited? (rhetorical)'
  ]
  if (counter < questions.length) {
    window.open('https://google.com/search?q=' + encodeURIComponent(questions[counter]))
    counter++
    return
  }
  location.href = 'mailto:hi@leanmotherfuckers.com?subject=I%20found%20ya!'
}

function shuffle (a) {
  let j, x, i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}

window.jsonFlickrApi = function (data) {
  document.getElementById('slideshow').innerHTML = shuffle(data.photoset.photo).filter((p) => p.url_l).map(function (photo) {
    return '<img title="' + photo.title + '" ' +
      'style="min-width: ' + Math.round(360 / photo.height_l * photo.width_l) + 'px" ' +
      'src="' + photo.url_l + '" />'
  }).join('')
}
