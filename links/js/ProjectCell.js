class ProjectCell {
    constructor (rowIndex, projectIndex, projectNum) {
        this.rowIndex = rowIndex
        this.projectIndex = projectIndex
        this.projectNum = projectNum
        this.element = this.createCell()
    }

    createCell () {
        const newCell = document.createElement('a')
        const newDescription = document.createElement('h1')
        const newImg = document.createElement('img')
        
        if (projectsObject[this.projectNum]) {
            newImg.src = projectsObject[this.projectNum].src
        }

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
