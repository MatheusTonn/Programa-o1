const siteName = document.getElementById('nomedosite')
const newSiteName = document.getElementById('adicionar-nome')
const newSiteLink = document.getElementById('adicionar-link')
let allSites = [

]

let allLinks = [

]

function openSite(){
    if(siteName.value == allSites[0]){
        window.open(allLinks[0])
    }

    if(siteName.value == allSites[1]){
        window.open(allLinks[1])
    }

    if(siteName.value == allSites[2]){
        window.open(allLinks[2])
    }
    
    if(siteName.value == allSites[3]){
        window.open(allLinks[3])
    }

    if(siteName.value == allSites[4]){
        window.open(allLinks[4])
    }

    if(siteName.value == allSites[5]){
        window.open(allLinks[5])
    }

    if(siteName.value == allSites[6]){
        window.open(allLinks[6])
    }
}



function newSite(){
    allSites.push(newSiteName.value)
    allLinks.push(newSiteLink.value)
    siteName.value = ''
    newSiteName.value = ''
    newSiteLink.value = ''
}

