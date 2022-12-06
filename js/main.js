console.log('Starting up');

$(onInit)

function onInit() {
    initPage()
    console.log('gProjs', gProjs)
}

function initPage() {
    var projs = getProjs()
    var strHtmls = projs.map(proj => `
    <div class="col-md-4 col-sm-6 portfolio-item">
     <a data-proj-id="${proj.id}" class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
            <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
            </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${proj.id}-thumbnail.jpg" alt='${proj.name}'>
     </a>
    <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.desc}</p>
    </div>
  </div>
        `
    )
    $('.projs-container').html(strHtmls)
    addProjEventListener()
}

function addProjEventListener() {
    $('.portfolio-link').on('click', function () {
        const projId = $(this).data('proj-id')
        // console.log('projId', projId)
        renderModal(projId)
    })

}
function onSubmit() {
    var $elEmail = $('.email').val
    var $elSubject = $('.subject').val
    var $elText = $('.textarea').val
    console.log($elEmail, $elSubject, $elText)
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=neta@neta.l.dror@gmail.com&su=${$elSubject}&body=${$elText}&txt=${$elText}', '_blank');
}

function seeMoreEventListener() {
    $('.see-more').on('click', function () {
        const projId = $(this).data('proj-id')
        // console.log('projId', projId)
        open(projId)
    })

}
function renderModal(projId) {
    var proj = getProjById(projId)
    // console.log('projId', projId)
    // console.log('projId', proj)
    var strHtmls = `
    
    <h2>${proj.name}</h2>
<p class="item-intro text-muted">${proj.desc}</p>
<img class="img-fluid rounded d-block mx-auto" src="img/portfolio/${proj.id}.jpg" alt="">
<ul class="list-inline">
  <li>Date published: ${proj.publishedAt}</li>
  <li>Project Category: Games</li>
</ul>
<a href="${proj.url}">see project on gitHub</a>
  `
    $('.modal-body').html(strHtmls)
    addProjEventListener()
    seeMoreEventListener()
}

function open(projId) {
    console.log('hello', projId)
    // openLink(projUrl)

}
// function openLink(projId) {
//     window.location.href = projUrl
// }
/* <a href="https://github.com/netadror" target="_blank"> */
{/* <button onclick="" class="btn btn-dark">Check it Out</button> */ }