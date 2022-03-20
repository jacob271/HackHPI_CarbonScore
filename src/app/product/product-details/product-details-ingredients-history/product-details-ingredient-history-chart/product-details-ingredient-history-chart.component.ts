import { Component, Input, OnInit } from '@angular/core'
import * as d3 from 'd3'

@Component({
  selector: 'app-product-details-ingredient-history-chart',
  templateUrl: './product-details-ingredient-history-chart.component.html',
  styleUrls: ['./product-details-ingredient-history-chart.component.scss'],
})
export class ProductDetailsIngredientHistoryChartComponent implements OnInit {
  @Input() sumStat: {}[]
  @Input() rawComponentKey: string

  constructor() {}

  ngOnInit(): void {
    this.initChart()
  }

  private initChart(): void {
    const offset = 9
    const box_width = 30
    const name = 'XYZ'
    const font_size = '1.2rem'
    const raw_component_key = this.rawComponentKey // "Butter100" for sumstat_2, "CocBea100" for sumstat_3

    let margin = {
        top: 20,
        right: 30,
        bottom: 90,
        left: 70,
      },
      width = 900 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom

    // Read data and process it afterwards
    d3.csv('/assets/transformed_mock_data.csv', (row: any) => {
      //--- Additional calculations ---//
      if (row.productId != 'Cookie100')
        return {
          key: row.productId,
          name: row.productName,
          plant: row.plant,
          month: parseInt(row.month),
          averageFootprintPerUnit: parseFloat(row.averageFootprintPerUnit),
          quantity: parseFloat(row.quantity),
          totalFootprint: parseFloat(row.totalFootprint),
        }

      return undefined
    }).then((data) => {
      //--- Preprocessing ---//
      function mapMonth(month_number) {
        const d = new Date()
        d.setMonth(month_number - 1)
        const monthName = d.toLocaleString('en-US', { month: 'long' })
        return monthName
      }

      const active_stumstat = this.sumStat // ACTIVE SUMSTAT

      //--- Drawing ---//
      // Tooltip
      var tooltip = d3.select('body').append('div').attr('class', 'tooltip')
      // Insert svg and group
      var svg = d3
        .select('#products-history-chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .style('font-size', font_size)
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

      // X axis column 1
      const x1 = d3
        .scaleBand()
        .range([margin.left, width])
        .domain(
          data
            .filter((d) => d.key === raw_component_key)
            .map(function (d: any) {
              return mapMonth(d.month)
            })
        )
        .padding(0.2)
      svg
        .append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x1))
        .selectAll('text')
        .style('font-size', font_size)
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end')

      const y1 = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(
            data
              .filter((d) => d.key === raw_component_key)
              .map(function (d: any) {
                return 2 * d.averageFootprintPerUnit
              })
          ),
        ])
        .range([height, 0])
      svg
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',0)')
        .style('font-size', font_size)
        .call(d3.axisLeft(y1))
      svg
        .append('g')
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - 40)
        .attr('x', 0 - height / 2)
        .attr('dy', '7px')
        .style('text-anchor', 'middle')
        .html('Avg. CO2e / unit [kg]')
      svg
        .append('g')
        .append('text')
        .attr('y', 0)
        .attr('x', width / 2)
        .attr('dy', '7px')
        .style('text-anchor', 'middle')
        .style('font-size', font_size)
        .text(name)

      // Show the main vertical line
      svg
        .selectAll('vertLines')
        .data(active_stumstat)
        .enter()
        .append('line')
        .attr('x1', function (d: any) {
          return x1(mapMonth(d.month)) + offset
        })
        .attr('x2', function (d: any) {
          return x1(mapMonth(d.month)) + offset
        })
        .attr('y1', function (d: any) {
          return y1(d.min)
        })
        .attr('y2', function (d: any) {
          return y1(d.max)
        })
        .attr('stroke', 'grey')
        .style('width', 5)
      // Boxes
      svg
        .selectAll('boxes')
        .data(this.sumStat)
        .enter()
        .append('rect')
        .attr('x', function (d: any) {
          return x1(mapMonth(d.month)) - box_width / 2 + offset
        })
        .attr('y', function (d: any) {
          return y1((d.min + d.max) / 2 + 0.1)
        })
        .attr('height', function (d: any) {
          return y1((d.min + d.max) / 2 - 0.1) - y1((d.min + d.max) / 2 + 0.1)
        })
        .attr('width', box_width)
        .attr('stroke', 'grey')
        .style('fill', '#038FDE')

      const initial_position_y_1 =
        d3.max(
          data
            .filter((d) => d.key === raw_component_key)
            .map(function (d: any) {
              return 2 * d.averageFootprintPerUnit
            })
        ) / 2
      const first = svg
        .selectAll('no1')
        .data(data.filter((d) => d.key === raw_component_key))
        .enter()
        .append('circle')
        .attr('cx', (d) => x1(mapMonth(d.month)) + offset)
        .attr('cy', y1(initial_position_y_1))
        .attr('r', '7px')
        .attr('stroke', 'black')
        .style('fill', 'orange')

      // Fancy animations
      svg
        .selectAll('circle')
        .transition()
        .duration(2000)
        .attr('cy', (d: any) => {
          if (d.key === 'BeeSug100') {
            return y1(d.averageFootprintPerUnit)
          }

          return null
        })
      svg.selectAll('rect').transition().duration(2100).attr('opacity', 1)
      svg.selectAll('line').transition().duration(2100).attr('opacity', 1)
    })
  }
}
