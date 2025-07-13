"use client";
import ScrambledText from "@/animations/ScrambledText";
import SplashCursor from "@/animations/SplashCursor";
import React, { Component } from "react";
import CardSwap, { Card } from '@/animations/CardSwap'

export default class Hero extends Component {
  render() {
    return (
      <div className="relative flex overflow-hidden">
        <SplashCursor />
        <div className="w-full h-screen font-sans overflow-hidden bg-pink-700 text-black">
          <ScrambledText
            className="scrambled-text-demo py-30 px-6"
            radius={70}
            duration={2}
            speed={0.5}
            scrambleChars=""
          >
            <span className="text-5xl leading-14">
              <span className="font-bold text-6xl">W</span>e Build Products
              <br />
              That <span className="font-bold">Scale —</span>
              <br />
              <span className="font-bold">No Code Required.</span>
            </span>
          </ScrambledText>
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




