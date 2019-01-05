class ProjectCell {
    constructor (rowIndex, projectIndex, projectNum) {
        this.rowIndex = rowIndex
        this.projectIndex = projectIndex
        this.projectNum = projectNum
        this.element = this.createCell()
    }

    createCell () {
        const newCell = document.createElement('a')
        const newDescription = document.createElement('div')
        const newImg = document.createElement('img')
        
        if (projectsObject[this.projectNum]) {
            newImg.src = projectsObject[this.projectNum].src
        }

        newDescription.innerHTML += `<h1 class='project-description'>${projectsObject[this.projectNum].name}</h1>`
        newDescription.innerHTML += "<p class='projects-mobile'>(not mobile friendly)</p>"
        newDescription.classList.add('description')

        newCell.href = projectsObject[this.projectNum].url
        newCell.target = "_blank"

        newCell.dataset.rowIndex = this.rowIndex
        newCell.dataset.projectIndex = this.projectIndex
        newCell.classList.add('project-cell')

        newCell.appendChild(newImg)
        newCell.appendChild(newDescription)

        return newCell
    }
}
