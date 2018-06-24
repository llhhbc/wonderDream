import { Component, OnInit, ElementRef } from '@angular/core';

import * as d3 from 'd3';

const ngcont = '_ngcontent-c1';

@Component({
  selector: 'app-dreammap',
  templateUrl: './dreammap.component.html',
  styleUrls: ['./dreammap.component.css']
})
export class DreammapComponent implements OnInit { 



  constructor() {
  }

  ngOnInit() {

    var svg = d3.select("svg");
      // width = +svg.attr("width"),
      // height = +svg.attr("height");


    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function(d) { return d.id; }))
      .force("charge", d3.forceManyBody())
      .force("collision", d3.forceCollide(15*3))
      .force("center", d3.forceCenter(500, 500));

      d3.json("assets/miserables.json", function(error, graph) {
        if (error) {
          console.log('get err');
          throw error;
        }

        var link = svg.append("g")
            .attr(ngcont, "")
            .attr("class", "links")
          .selectAll("line")
          .data(graph.links)
          .enter().append("line")
            .attr(ngcont, "")
            .attr("fill", color(0))
            .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

        var nodeg = svg
            .attr(ngcont, "")
          .selectAll("g")
          .data(graph.nodes)
          .enter().append("g")
            .attr(ngcont, "")
            .attr("transform", "translate(80,80)")

        var cir = nodeg.append("circle")
            .attr("class", "nodes")
            .attr("r", 15)
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("fill", function(d) { return color(d.group%10); })
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        cir.append("title")
            .text(function(d) { return d.id; });
        nodeg.append("text")
            .attr("dx", -20)
            .text(function(d) { return d.id; })
              .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        simulation
            .nodes(graph.nodes)
            .on("tick", ticked);

        simulation.force("link")
            .links(graph.links);

        function ticked() {

          link
              .attr("x1", function(d) { return d.source.x; })
              .attr("y1", function(d) { return d.source.y; })
              .attr("x2", function(d) { return d.target.x; })
              .attr("y2", function(d) { return d.target.y; });

          nodeg.attr("transform", function(d) { return "translate(" + d.x + ", " + d.y + ")";})
          // cir
          //     .attr("cx", function(d) { return d.x; })
          //     .attr("cy", function(d) { return d.y; });
        }


        function dragstarted(d) {
          if (!d3.event.active && Math.abs(d.fx - d.x) > 10) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        }

        function dragged(d) {
          if (Math.abs(d.fx - d3.event.x) > 10 ) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
          }
          
        }

        function dragended(d) {
          if (!d3.event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }
      });

      console.log('init ok');
    
  }


}
