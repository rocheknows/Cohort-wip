// step 1
// const question = document.querySelector('section')

// question.addEventListener('click', () => {
//   question.classList.toggle('opened')
// })

// step 2
// const questions = document.querySelectorAll('section')
// questions.forEach(question => {
//   question.addEventListener('click', () => {
//     question.classList.toggle('opened')
//   })
// })

// step 3
const questions = document.querySelectorAll('section')
questions.forEach(question => {
  const opener = question.querySelector('h3')
  opener.addEventListener('click', () => {
    // close all the other sections
    [...questions].filter(q => q !== question).forEach(q => q.classList.remove('opened'))

    // then open the current section
    question.classList.toggle('opened')
  })
});
