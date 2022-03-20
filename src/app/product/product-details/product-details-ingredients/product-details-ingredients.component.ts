import { Component, OnInit } from '@angular/core'
import * as d3 from 'd3'

@Component({
  selector: 'app-product-details-ingredients',
  templateUrl: './product-details-ingredients.component.html',
  styleUrls: ['./product-details-ingredients.component.scss'],
})
export class ProductDetailsIngredientsComponent {
  constructor() {}

  ngOnInit(): void {
    this.initChart()
  }

  private initChart(): void {
    const stratify = d3.stratify().parentId(function (d: any) {
      return d.id.substring(0, d.id.lastIndexOf('\\'))
    })

    const data = d3.csvParse(`id,name,value,thisaverage,average
root,root,0,,
root\\sugar,"Sugar",20,8,7
root\\butter,"Butter (Cow Milk)",10,10,11
root\\cocoabeans,"Cocoa Beans",13,11
root\\cocoaoil,"Cocoa Oil",5,11,11
root\\wheat,"Wheat",50,1,2
root\\palmoil,"Palm Oil",5,16,15
`)
    const tree = stratify(data)
    tree.sum(function (d: any) {
      return d.value
    })
    const width = 500,
      height = 300
    const treemap = d3.treemap().size([width, height]).round(true).padding(1)

    // Apply to the tree
    treemap(tree)

    const svg = d3.select('#ingredients-chart').append('svg').attr('width', width).attr('height', height)

    const cell = svg
      .selectAll('g')
      .data(tree.leaves())
      .enter()
      .append('g')
      .attr('transform', function (d: any) {
        return 'translate(' + d.x0 + ',' + d.y0 + ')'
      })

    cell
      .append('rect')
      .attr('id', function (d: any) {
        return d.data.id
      })
      .attr('width', function (d: any) {
        return d.x1 - d.x0
      })
      .attr('height', function (d: any) {
        return d.y1 - d.y0
      })
      .attr('fill', function (d: any) {
        if (parseFloat(d.data.thisaverage) > parseFloat(d.data.average)) {
          return '#d78e8c'
        } else if (parseFloat(d.data.thisaverage) < parseFloat(d.data.average)) {
          return '#91d78c'
        } else {
          return '#d3d78c'
        }
      })
    cell.append('title').text(function (d: any) {
      if (parseFloat(d.data.thisaverage) > parseFloat(d.data.average)) {
        return d.data.name + '\n' + d.value + ' average CO2e per unit [kg]\nMore than average :('
      } else if (parseFloat(d.data.thisaverage) < parseFloat(d.data.average)) {
        return d.data.name + '\n' + d.value + ' average CO2e per unit [kg]\nBetter than average :D'
      } else {
        return d.data.name + '\n' + d.value + ' average CO2e per unit [kg]\nAverage :)'
      }
    })
  }
}
