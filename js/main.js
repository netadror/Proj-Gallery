'use strict'
console.log('Starting up');

$(onInit)

function onInit() {
    renderProjs()
    console.log('gProjs', gProjs)
}

function renderProjs() {
    var projs = getProjs()
    var strHtmls = projs.map(proj => `
    <div class="col-md-4 col-sm-6 portfolio-item">
     <a data-proj-id="${proj.id}" class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
            <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
            </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${proj.id}-thumbnail.jpg" alt='${proj.projName}'>
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
function renderModal(projId) {
    var proj = getProjById(projId)
    console.log('projId', projId)
    console.log('projId', proj)

}
