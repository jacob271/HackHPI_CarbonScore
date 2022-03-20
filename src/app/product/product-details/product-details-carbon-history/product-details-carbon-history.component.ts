import { Component, OnInit } from '@angular/core'
import * as d3 from 'd3'

@Component({
  selector: 'app-product-details-carbon-history',
  templateUrl: './product-details-carbon-history.component.html',
  styleUrls: ['./product-details-carbon-history.component.scss'],
})
export class ProductDetailsCarbonHistoryComponent implements OnInit {
  ngOnInit(): void {
    this.initializeChart()
  }

  private async initializeChart(): Promise<void> {
    let margin = { top: 60, right: 30, bottom: 50, left: 35 },
      width = 900 - margin.left - margin.right,
      height = 450 - margin.top - margin.bottom

    const data = await d3.csv('/assets/transformed_mock_data.csv', (row: any) => {
      //--- Additional calculations ---//
      if (row.productId == 'Cookie100')
        return {
          month: parseInt(row.month),
          averageFootprintPerUnit: parseFloat(row.averageFootprintPerUnit),
        }

      return undefined
    })

    //--- Preprocessing ---//
    data.sort(function (a, b) {
      return a.month - b.month
    })

    function mapMonth(month_number) {
      const d = new Date()
      d.setMonth(month_number - 1)
      const monthName = d.toLocaleString('en-US', { month: 'long' })
      return monthName
    }
    //--- Drawing ---//
    // Tooltip
    var tooltip = d3.select('body').append('div').attr('class', 'tooltip')
    var nodeName = tooltip.append('div')
    var nodeInfo = tooltip.append('div')
    // Insert svg and group
    var svg = d3
      .select('#product-details-carbon-history-chart')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    // Print the title
    svg
      .append('text')
      .attr('class', 'title')
      .attr('x', width / 2)
      .attr('y', 0)
      .style('text-anchor', 'middle')
      .text('CO2e History')

    // Add visualization
    // X axis
    var x = d3
      .scaleBand()
      .range([margin.left, width])
      .domain(
        data.map(function (d) {
          return mapMonth(d.month)
        })
      )
      .padding(0.4)
    svg
      .append('g')
      .attr('transform', 'translate(0,' + (height - 40) + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end')
      .style('font-size', '1.2rem')

    // Add Y axis
    var y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(
          data.map(function (d) {
            return d.averageFootprintPerUnit
          })
        ),
      ])
      .range([height - 40, 20])
    svg
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',0)')
      .style('font-size', '1rem')
      .call(d3.axisLeft(y))

    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - margin.left + 15 - 20)
      .attr('x', 0 - height / 2)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font-size', '1.2rem')
      .html('Avg. CO2e / unit [kg]')

    // Bars
    svg
      .selectAll('mybar')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', function (d) {
        return x(mapMonth(d.month))
      })
      .attr('width', x.bandwidth())
      .attr('height', function (d) {
        return height - y(0)
      })
      .attr('y', function (d) {
        return y(0) - 40
      })
      .attr('fill', '#038FDE')
      .on('mouseover', function (event, d) {
        svg.selectAll('rect').style('opacity', (c: any) => (c.month === d.month ? 0.5 : 1))
        tooltip.style('visibility', 'visible')
        nodeName.text(mapMonth(d.month))
        nodeInfo.text(d.averageFootprintPerUnit.toFixed(3) + ' CO2e [kg]')
      })
      .on('mousemove', function (event, d) {
        tooltip
          .style('top', event.originalTarget?.getBoundingClientRect()?.top - 10 + 'px')
          .style('left', event.originalTarget?.getBoundingClientRect()?.left + 10 + 'px')
      })
      .on('mouseout', function (d) {
        svg.selectAll('rect').style('opacity', 1)
        tooltip.style('visibility', 'hidden')
      })

    // Animation
    svg
      .selectAll('rect')
      .transition()
      .duration(800)
      .attr('y', function (d: any) {
        return y(d.averageFootprintPerUnit)
      })
      .attr('height', function (d: any) {
        return height - 40 - y(d.averageFootprintPerUnit)
      })
      .delay(function (d, i) {
        return i * 100
      })
  }
}
