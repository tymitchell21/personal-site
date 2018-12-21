class ProjectCell {
    constructor (rowIndex, projectIndex) {
        this.rowIndex = rowIndex
        this.projectIndex = projectIndex
        this.element = this.createCell()
    }

    createCell () {
        const newCell = document.createElement('a')
        const newImg = document.createElement('img')
        
        if (projectsObject[this.rowIndex]) {
            newImg.src = projectsObject[this.rowIndex].src
        }

        newCell.dataset.rowIndex = this.rowIndex
        newCell.dataset.projectIndex = this.projectIndex
        newCell.classList.add('project-cell')

        newCell.appendChild(newImg)
        return newCell
    }
}
