import React from 'react'
import { TbStar } from 'react-icons/tb'
import { BsCheck2Circle } from 'react-icons/bs'
import { AiFillDislike, AiFillLike } from 'react-icons/ai'
import { TiStarOutline } from 'react-icons/ti'

export default function ProblemDescription() {
  return (
    <div className="h-full bg-[#1b1b1b]">
      <div className="mt-2">
        <button className="rounded-t-lg flex justify-center items-center bg-[#2d2d2d] px-4 py-3">Description</button>
      </div>
      <div className="bg-[#2d2d2d] p-4 overflow-y-scroll h-full">
        <div className="text-lg font-semibold">1.Two Sum</div>
        <div className="flex gap-4 my-4 items-center">
          <span className=" py-1 px-2 text-green-600 bg-green-800 rounded-full">Easy</span>
          <BsCheck2Circle color="green" />
          <div className="flex items-center gap-1 cursor-pointer hover:bg-dark-fill-3 rounded p-[3px] transition-colors duration-200  text-dark-gray-6">
            <AiFillLike />
            120
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:bg-dark-fill-3 rounded p-[3px] transition-colors duration-200  text-dark-gray-6">
            <AiFillDislike />0
          </div>
          <div className="cursor-pointer hover:bg-dark-fill-3 rounded p-[3px] transition-colors duration-200  text-dark-gray-6">
            <TiStarOutline />
          </div>
        </div>
        <div>
          <p className="mb-2">
            Lorem ipsum <code>dolor</code> sit amet consectetur adipisicing elit. Cum ut laboriosam error, dolor fugiat
            a at iste magnam harum vel cupiditate amet deleniti corporis saepe minus mollitia nesciunt dolorem!
            Pariatur.
          </p>
          <p>
            Lorem ipsum <code>dolor</code> sit amet consectetur adipisicing elit. Cum ut laboriosam error, dolor fugiat
            a at iste magnam harum vel cupiditate amet deleniti corporis saepe minus mollitia nesciunt dolorem!
            Pariatur.
          </p>
          <p>
            Lorem ipsum <code>dolor</code> sit amet consectetur adipisicing elit. Cum ut laboriosam error, dolor fugiat
            a at iste magnam harum vel cupiditate amet deleniti corporis saepe minus mollitia nesciunt dolorem!
            Pariatur.
          </p>
          <div className="mt-4">
            <div>
              <div>事例1:</div>
              <div className="example-card">
                <pre>
                  <strong>Input:</strong>hello
                  <br />
                  <strong>World:</strong>this is hello
                </pre>
              </div>
            </div>
            <div>
              <div>事例2:</div>
              <div className="example-card">
                <pre>
                  <strong>Input:</strong>hello
                  <br />
                  <strong>World:</strong>this is hello
                </pre>
              </div>
            </div>
          </div>

          <div className="my-5">
            <div className="mb-3">Constraints:</div>
            <ul className="text-white text-sm list-disc ml-5 flex flex-col gap-3">
              <li>
                <code>-10 小于 10</code>
              </li>
              <li>
                <code>-10 小于 10</code>
              </li>
              <li>
                <code>-10 小于 10</code>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
