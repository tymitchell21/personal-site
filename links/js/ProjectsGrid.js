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
        for (let rowIndex=0; rowIndex<this.rowNum; rowIndex++) {
            this.projects.push([])
            for (let projectIndex=0; projectIndex<this.projectNum; projectIndex++) {
                this.projects[rowIndex].push(new ProjectCell(rowIndex, projectIndex, 'src'))
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

        for(let row=0; row<this.rowNum; row++) {
            const rowDiv = this.createRow()
            for(let column=0; column<this.columnNum; column++) {
                rowDiv.appendChild(this.findCell(row,column).element)
            }
            this.destination.appendChild(rowDiv)
        }
    }
}

const projectsGrid = new ProjectsGrid(4, 3, projectsElement)