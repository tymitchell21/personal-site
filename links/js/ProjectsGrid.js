const projectsElement = document.querySelector('#projects')

class ProjectsGrid {
    constructor (rowNum, projectNum, destination) {
        this.rowNum = rowNum
        this.projectNum = projectNum
        this.destination = destination
        this.projects = []

        this.createGrid()
        this.drawGrid()
    }

    createGrid () {
        let projectNum = 0
        for (let rowIndex=0; rowIndex<this.rowNum; rowIndex++) {
            this.projects.push([])
            for (let projectIndex=0; projectIndex<this.projectNum; projectIndex++) {
                this.projects[rowIndex].push(new ProjectCell(rowIndex, projectIndex, projectNum))
                projectNum++
            }
        }
    }

    createRow () {
        const rowDiv = document.createElement('div')
        rowDiv.classList.add('project-row')
        return rowDiv
    }

    drawGrid () {
        this.projects.map((row, rowIndex) => {
            const rowDiv = this.createRow()
            row.map((project, projectIndex) => {
                rowDiv.appendChild(this.projects[rowIndex][projectIndex].element)
            })
            this.destination.appendChild(rowDiv)
        })
    }
}

const projectsGrid = new ProjectsGrid(2, 3, projectsElement)