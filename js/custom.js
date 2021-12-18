//*******nav bar**********
let nav_trigger = document.getElementById('nav_trigger');
let nav_close = document.getElementById('nav_close');

nav_trigger.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('nav_link').classList.toggle('nav_show');
})

nav_close.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById('nav_link').classList.toggle('nav_show');
})
//*******nav bar**********



//*******gallery**********
let html = '';
for (let index = 1; index < 7; index++) {
    
    html +=`
    <div class="col-4 px-3" >
        <div class="image_wraper">
            <div class="gallery_image">
                <div class="overlay">
                    <a href="#"><i class="fas fa-search-plus"></i></a>
                    <a href="#"><i class="fas fa-link"></i></a>
                </div>
                <img src="img/gallery${index}.png" alt="">
            </div>
        </div>
    </div>

    `
}
document.getElementById('image_first_line').innerHTML = html;
//*******gallery**********