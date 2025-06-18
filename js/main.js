const modal = document.getElementById('imageModal')
const modalImage = document.getElementById('modalImage')
const closeModal = document.getElementById('closeModal')
const images = document.querySelectorAll('.img-project')
const imagesVertical = document.querySelectorAll('.img-project-vertical')

// Agar jika diklik muncul modal yang hanya menampilkan image secara keseluruhan
images.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex'
        modalImage.src = image.src
    })
})

// Sama namun untuk image yang vertical
imagesVertical.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex'
        modalImage.src = image.src
    })
})

// fungsi untuk menutup modal yang menampilkan image
closeModal.addEventListener('click', ()=>{
    modal.style.display = 'none';
})

modal.addEventListener('click', (e) =>{
    modal.style.display = 'none'
})

modal.addEventListener('click', (e)=>{
    if (e.target === modal){
        modal.style.display = 'none'
    }
})