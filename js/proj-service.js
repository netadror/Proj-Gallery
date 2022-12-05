'use strict'

console.log('Starting up');

var gProjs = [
    {
        id: "inpicturegame",
        name: "In picture game",
        desc: "A simple memory game",
        url: "https://netadror.github.io/inPictureGame/",
        publishedAt: getDate(2022, 11, 3),
        labels: ["games, Memory game"]
    },
    {
        id: "minessweeper",
        name: "Minessweeper",
        desc: "A simple JS version of the famous 80s game",
        url: "https://netadror.github.io/mine-sweeper/",
        publishedAt: getDate(2022, 12, 5),
        labels: ["games, Dark Mode"]
    },
    {
        id: "pacman",
        name: "Pacman",
        desc: "A light version of the famous game built with JS",
        url: "https://netadror.github.io/pacman/",
        publishedAt: getDate(2022, 11, 22),
        labels: ["games"]
    },
    // {
    //     id: "touchnums",
    //     name: "Pacman",
    //     desc: "A light version of the famous game built with JS",
    //     url: "https://github.com/netadror/touchnums",
    //     publishedAt: getDate(2022, 11, 22),
    //     labels: ["games"]
    // },
    // {
    //     id: "pacman",
    //     name: "Pacman",
    //     desc: "A light version of the famous game built with JS",
    //     url: "https://netadror.github.io/pacman/",
    //     publishedAt: getDate(2022, 11, 22),
    //     labels: ["games"]
    // },

]

function getProjs() {
    console.log('gProjs', gProjs)
    return gProjs
}

function getProjById(projId) {
    const proj = gProjs.find(proj => projId === proj.id)
    return proj
}
// getDate()
function getDate(year, month, day) {
    const date = new Date(year, month - 1, day);
    const shortYear = date.getFullYear(year);
    const shortMonth = date.getMonth(month);
    const shortDay = date.getDate(day);

    const withHyphens = [year, month, day].join('-')
    // console.log(withHyphens)
    return withHyphens
    // console.log('date', date)
}
