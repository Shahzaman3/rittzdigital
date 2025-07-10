"use client";
import ScrambledText from "@/animations/ScrambledText";
import SplashCursor from "@/animations/SplashCursor";
import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <>
        <SplashCursor />
        <div className="w-full h-screen font-sans overflow-hidden bg-[#b51947] text-black">
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
      </>
    );
  }
}
