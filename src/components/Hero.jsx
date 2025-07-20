"use client";

import SplashCursor from "@/animations/SplashCursor";
import React, { Component } from "react";
import CardSwap, { Card } from "@/animations/CardSwap";
import MagneticText from "@/animations/MagneticText";
import { Rocket, Code, Shield } from "lucide-react";

export default class Hero extends Component {
  render() {
    return (
      <div className="relative flex overflow-hidden">
        {/* <SplashCursor /> */}
        <div className="w-full h-screen pt-40 pl-20 font-sans overflow-hidden bg-[#b51947] text-black">
          <MagneticText />
          <h1 className="md:hidden sm:text-4xl text-3xl relative font-semibold leading-tight z-10">
            <span className="font-bold text-4xl sm:text-5xl">W</span>e Build Products
            <br />
            That <span className="font-bold">Scale —</span>
            <br />
            <span className="font-bold">No Code Required.</span>
          </h1>
        </div>

        <div className="h-[300px] md:h-[300px] lg:h-[400px] xl:h-[600px] relative">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card customClass="bg-pink-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Rocket size={35} />
                <h3 className="font-semibold text-4xl">Fast Launch</h3>
              </div>
              <p className="text-xl text-white/80">
                Deploy your ideas quickly with no code tools.
              </p>
            </Card>

            <Card customClass="bg-purple-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Code size={35} />
                <h3 className="font-semibold text-4xl">Customizable</h3>
              </div>
              <p className="text-xl text-white/80">
                Easily tweak and expand your projects anytime.
              </p>
            </Card>

            <Card customClass="bg-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Shield size={35} />
                <h3 className="font-semibold text-4xl">Secure</h3>
              </div>
              <p className="text-xl text-white/80">
                Built with modern standards to keep data safe.
              </p>
            </Card>
          </CardSwap>
        </div>
      </div>
    );
  }
}
