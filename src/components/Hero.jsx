"use client";

import SplashCursor from "@/animations/SplashCursor";
import React, { Component } from "react";
import CardSwap, { Card } from '@/animations/CardSwap'
import MagneticText from "@/animations/MagneticText";

export default class Hero extends Component {
  render() {
    return (
      <div className="relative flex overflow-hidden">
        {/* <SplashCursor /> */}
        <div className="w-full h-screen pt-40 pl-20 font-sans overflow-hidden bg-[#b51947] text-black">
          <MagneticText />
        </div>
        
        <div style={{ height: "600px", position: "relative" }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <h3>Card 1</h3>
              <p>Your content here</p>
            </Card>
            <Card>
              <h3>Card 2</h3>
              <p>Your content here</p>
            </Card>
            <Card>
              <h3>Card 3</h3>
              <p>Your content here</p>
            </Card>
          </CardSwap>
        </div>
      </div>
    );
  }
}
