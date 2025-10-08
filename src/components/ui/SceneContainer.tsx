import React, { type JSX } from "react";

type Props = {
  children: React.ReactNode;
};

export default function SceneContainer({ children }: Props): JSX.Element {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* Info box top-left */}
      <div className="absolute z-10 left-4 top-4 bg-white/80 backdrop-blur rounded-md p-3 text-sm shadow">
        <div>
          <a
            href="https://threejs.org"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            three.js
          </a>{" "}
          - webgl hemisphere light example
        </div>
        <div className="text-xs mt-1 text-slate-600">
          flamingo by mirada from ro.me
        </div>
      </div>
      {children}
    </div>
  );
}
