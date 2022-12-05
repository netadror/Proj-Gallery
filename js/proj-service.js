'use strict'

console.log('Starting up');

var gProjs = [
    {
        id: "inpicturegame",
        name: "In picture game",
        desc: "A simple js game",
        url: "https://netadror.github.io/inPictureGame/",
        publishedAt: 1448693940000,
        labels: ["games"]
    },
    {
        id: "inpicturegame",
        name: "In picture game",
        desc: "A simple js game",
        url: "https://netadror.github.io/inPictureGame/",
        publishedAt: 1448693940000,
        labels: ["games"]
    },
    {
        id: "inpicturegame",
        name: "In picture game",
        desc: "A simple js game",
        url: "https://netadror.github.io/inPictureGame/",
        publishedAt: 1448693940000,
        labels: ["games"]
    },

]

function getProjs() {
    console.log('gProjs', gProjs)
    return gProjs
}

function getProjById(projId) {
    const proj = gProjs.find(proj => projId === proj.id)
    return proj
}

