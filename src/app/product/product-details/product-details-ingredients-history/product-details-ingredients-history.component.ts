import { Component, OnInit } from '@angular/core'
import * as d3 from 'd3'

@Component({
  selector: 'app-product-details-ingredients-history',
  templateUrl: './product-details-ingredients-history.component.html',
  styleUrls: ['./product-details-ingredients-history.component.scss'],
})
export class ProductDetailsIngredientsHistoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initChart()
  }

  private initChart(): void {
    // Dimensions with margins
    let margin = { top: 60, right: 30, bottom: 50, left: 35 },
      width = 1000 - margin.left - margin.right,
      height = 600 - margin.top - margin.bottom

    // Mocked shared information
    const sumstat_1 = [
      { month: '1', min: 0.6, max: 1.0 },
      { month: '2', min: 0.6, max: 1.0 },
      { month: '3', min: 0.5, max: 0.9 },
      { month: '4', min: 0.5, max: 0.9 },
      { month: '5', min: 0.5, max: 1.0 },
      { month: '6', min: 0.4, max: 0.9 },
      { month: '7', min: 0.5, max: 1.0 },
      { month: '8', min: 0.5, max: 0.9 },
      { month: '9', min: 0.5, max: 1.0 },
      { month: '10', min: 0.5, max: 0.9 },
      { month: '11', min: 0.5, max: 0.9 },
      { month: '12', min: 0.6, max: 0.9 },
    ]

    const sumstat_2 = [
      { month: '1', min: 3, max: 10 },
      { month: '2', min: 3, max: 10 },
      { month: '3', min: 2, max: 9 },
      { month: '4', min: 2, max: 9 },
      { month: '5', min: 2, max: 10 },
      { month: '6', min: 2, max: 9 },
      { month: '7', min: 2, max: 9 },
      { month: '8', min: 2, max: 8 },
      { month: '9', min: 2, max: 9 },
      { month: '10', min: 2, max: 9 },
      { month: '11', min: 2, max: 10 },
      { month: '12', min: 2, max: 10 },
    ]

    const sumstat_3 = [
      { month: '1', min: 10, max: 14 },
      { month: '2', min: 11, max: 16 },
      { month: '3', min: 11, max: 15 },
      { month: '4', min: 10, max: 16 },
      { month: '5', min: 11, max: 15 },
      { month: '6', min: 11, max: 18 },
      { month: '7', min: 11, max: 18 },
      { month: '8', min: 12, max: 18 },
      { month: '9', min: 12, max: 19 },
      { month: '10', min: 12, max: 20 },
      { month: '11', min: 13, max: 21 },
      { month: '12', min: 14, max: 22 },
    ]

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
    }).then(function (data) {
      //--- Preprocessing ---//
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
        .select('#product-details-ingredients-history-chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

      const offset = 9
      const padding_between_col = 50
      const box_width = 15
      const y_axis_label_pull = 20
      // X axis column 1
      const x1 = d3
        .scaleBand()
        .range([margin.left, width / 3 - padding_between_col])
        .domain(
          data
            .filter((d) => d.key === 'BeeSug100')
            .map(function (d) {
              return mapMonth(d.month)
            })
        )
        .padding(0.2)
      svg
        .append('g')
        .attr('transform', 'translate(0,' + height / 2 + ')')
        .call(d3.axisBottom(x1))
        .selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end')
      const y1 = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(
            data
              .filter((d) => d.key === 'BeeSug100')
              .map(function (d) {
                return 2 * d.averageFootprintPerUnit
              })
          ),
        ])
        .range([height / 2, 0])
      svg
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',0)')
        .call(d3.axisLeft(y1))
      svg
        .append('g')
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - 15)
        .attr('x', 0 - height / 4)
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .html('Avg. CO2e / unit [kg]')
      svg
        .append('g')
        .append('text')
        .attr('y', 0)
        .attr('x', width / 6 - 10)
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .html('Linen')
      svg
        .append('g')
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', width / 3 - 45)
        .attr('x', 0 - height / 4)
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .html('Avg. CO2e / unit [kg]')
      svg
        .append('g')
        .append('text')
        .attr('y', 0)
        .attr('x', width / 2 - 10)
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .html('Cotton')
      svg
        .append('g')
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', (2 * width) / 3 - 45)
        .attr('x', 0 - height / 4)
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .html('Avg. CO2e / unit [kg]')
      svg
        .append('g')
        .append('text')
        .attr('y', 0)
        .attr('x', (7 * width) / 9 + 20)
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .html('Wool')
      // Show the main vertical line
      svg
        .selectAll('vertLines')
        .data(sumstat_1)
        .enter()
        .append('line')
        .attr('x1', function (d) {
          return x1(mapMonth(d.month)) + offset
        })
        .attr('x2', function (d) {
          return x1(mapMonth(d.month)) + offset
        })
        .attr('y1', function (d) {
          return y1(d.min)
        })
        .attr('y2', function (d) {
          return y1(d.max)
        })
        .attr('stroke', 'grey')
        .style('width', 5)
      // Boxes
      svg
        .selectAll('boxes')
        .data(sumstat_1)
        .enter()
        .append('rect')
        .attr('x', function (d) {
          return x1(mapMonth(d.month)) - box_width / 2 + offset
        })
        .attr('y', function (d) {
          return y1((d.min + d.max) / 2 + 0.1)
        })
        .attr('height', function (d) {
          return y1((d.min + d.max) / 2 - 0.1) - y1((d.min + d.max) / 2 + 0.1)
        })
        .attr('width', box_width)
        .attr('stroke', 'grey')
        .style('fill', '#038FDE')

      // X axis column 2
      const x2 = d3
        .scaleBand()
        .range([width / 3, (2 * width) / 3 - padding_between_col])
        .domain(
          data
            .filter((d) => d.key === 'Butter100')
            .map(function (d) {
              return mapMonth(d.month)
            })
        )
        .padding(0.2)
      svg
        .append('g')
        .attr('transform', 'translate(0,' + height / 2 + ')')
        .call(d3.axisBottom(x2))
        .selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end')
      const y2 = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(
            data
              .filter((d) => d.key === 'Butter100')
              .map(function (d) {
                return 2 * d.averageFootprintPerUnit
              })
          ),
        ])
        .range([height / 2, 0])
      svg
        .append('g')
        .attr('transform', 'translate(' + width / 3 + ',0)')
        .call(d3.axisLeft(y2))
      // Show the main vertical line
      svg
        .selectAll('vertLines')
        .data(sumstat_2)
        .enter()
        .append('line')
        .attr('x1', function (d) {
          return x2(mapMonth(d.month)) + offset
        })
        .attr('x2', function (d) {
          return x2(mapMonth(d.month)) + offset
        })
        .attr('y1', function (d) {
          return y2(d.min)
        })
        .attr('y2', function (d) {
          return y2(d.max)
        })
        .attr('stroke', 'grey')
        .style('width', 5)
      // Boxes
      svg
        .selectAll('boxes')
        .data(sumstat_2)
        .enter()
        .append('rect')
        .attr('x', function (d) {
          return x2(mapMonth(d.month)) - box_width / 2 + offset
        })
        .attr('y', function (d) {
          return y2((d.min + d.max) / 2 + 1)
        })
        .attr('height', function (d) {
          return y2((d.min + d.max) / 2 - 1) - y2((d.min + d.max) / 2 + 1)
        })
        .attr('width', box_width)
        .attr('stroke', 'grey')
        .style('fill', '#038FDE')

      // X axis column 3
      const x3 = d3
        .scaleBand()
        .range([(2 * width) / 3, width - padding_between_col])
        .domain(
          data
            .filter((d) => d.key === 'CocBea100')
            .map(function (d) {
              return mapMonth(d.month)
            })
        )
        .padding(0.2)
      svg
        .append('g')
        .attr('transform', 'translate(0,' + height / 2 + ')')
        .call(d3.axisBottom(x3))
        .selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end')
      const y3 = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(
            data
              .filter((d) => d.key === 'CocBea100')
              .map(function (d) {
                return 2 * d.averageFootprintPerUnit
              })
          ),
        ])
        .range([height / 2, 0])
      svg
        .append('g')
        .attr('transform', 'translate(' + (2 * width) / 3 + ',0)')
        .call(d3.axisLeft(y3))
      // Show the main vertical line
      svg
        .selectAll('vertLines')
        .data(sumstat_3)
        .enter()
        .append('line')
        .attr('x1', function (d) {
          return x3(mapMonth(d.month)) + offset
        })
        .attr('x2', function (d) {
          return x3(mapMonth(d.month)) + offset
        })
        .attr('y1', function (d) {
          return y3(d.min)
        })
        .attr('y2', function (d) {
          return y3(d.max)
        })
        .attr('stroke', 'grey')
        .style('width', 5)
      // Boxes
      svg
        .selectAll('boxes')
        .data(sumstat_3)
        .enter()
        .append('rect')
        .attr('x', function (d) {
          return x3(mapMonth(d.month)) - box_width / 2 + offset
        })
        .attr('y', function (d) {
          return y3((d.min + d.max) / 2 + 1)
        })
        .attr('height', function (d) {
          return y3((d.min + d.max) / 2 - 1) - y3((d.min + d.max) / 2 + 1)
        })
        .attr('width', box_width)
        .attr('stroke', 'grey')
        .style('fill', '#038FDE')

      const initial_position_y_1 =
        d3.max(
          data
            .filter((d) => d.key === 'BeeSug100')
            .map(function (d) {
              return 2 * d.averageFootprintPerUnit
            })
        ) / 2
      const first = svg
        .selectAll('no1')
        .data(data.filter((d) => d.key === 'BeeSug100'))
        .enter()
        .append('circle')
        .attr('cx', (d) => x1(mapMonth(d.month)) + offset)
        .attr('cy', y1(initial_position_y_1))
        .attr('r', '3pt')
        .attr('stroke', 'black')
        .style('fill', 'orange')

      const initial_position_y_2 =
        d3.max(
          data
            .filter((d) => d.key === 'Butter100')
            .map(function (d) {
              return 2 * d.averageFootprintPerUnit
            })
        ) / 2
      const second = svg
        .selectAll('no2')
        .data(data.filter((d) => d.key === 'Butter100'))
        .enter()
        .append('circle')
        .attr('cx', (d) => x2(mapMonth(d.month)) + offset)
        .attr('cy', (d) => y2(initial_position_y_2))
        .attr('r', '3pt')
        .attr('stroke', 'black')
        .style('fill', 'orange')

      const initial_position_y_3 =
        d3.max(
          data
            .filter((d) => d.key === 'CocBea100')
            .map(function (d) {
              return 2 * d.averageFootprintPerUnit
            })
        ) / 2
      const third = svg
        .selectAll('no3')
        .data(data.filter((d) => d.key === 'CocBea100'))
        .enter()
        .append('circle')
        .attr('cx', (d) => x3(mapMonth(d.month)) + offset)
        .attr('cy', (d) => y3(initial_position_y_3))
        .attr('r', '3pt')
        .attr('stroke', 'black')
        .style('fill', 'orange')

      svg
        .selectAll('circle')
        .transition()
        .duration(2000)
        .attr('cy', (d: any) => {
          if (d.key === 'BeeSug100') {
            return y1(d.averageFootprintPerUnit)
          } else if (d.key === 'Butter100') {
            return y2(d.averageFootprintPerUnit - d.month / 2)
          } else if (d.key === 'CocBea100') {
            return y3(d.averageFootprintPerUnit + d.month / 2)
          }

          return undefined
        })
      svg.selectAll('rect').transition().duration(2100).attr('opacity', 1)
      svg.selectAll('line').transition().duration(2100).attr('opacity', 1)
    })
  }
}
