/*
 * Copyright 2019 Includable/Lean Motherfuckers.
 * All rights reserved.
 */

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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}
