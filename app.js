window.addEventListener('DOMContentLoaded',() => {
    const title = document.querySelector('#title'),
    author = document.querySelector('#author'),
    year = document.querySelector('#year'),
    btn = document.querySelector('.btn'),
    bookList = document.querySelector('#book-list');


    btn.addEventListener('click', (event) => {
      event.preventDefault()

      //Basic Validation
      if(title.value=='' && author.value=='' && year.value=='')
   {
    alert('Please input your information.')
   }
   else{
    const newRow = document.createElement('tr')
    //creating new Title
 const newTitle = document.create = document.createElement('td')
 newTitle.innerHTML = title.value
 newRow.appendChild(newTitle)


 //Creating new Author
 const newAuthor = document.createElement('td')
 newAuthor.innerHTML = author.value
 newRow.appendChild(newAuthor)
 
 //Creating new Year
 const dataYear = document.createElement('td')
 dataYear.innerHTML = year.value
 newRow.appendChild(dataYear)


 //Displaying Ui
 bookList.appendChild(newRow)

title.value =''
year.value =''
author.value =''

}

    })
})


