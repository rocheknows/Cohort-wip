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
