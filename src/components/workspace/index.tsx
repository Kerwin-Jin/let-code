import React from 'react'
import Split from 'react-split'
import ProblemDescription from '../problem-description'
import Playground from '../playground'

export default function Workspace() {
  return (
    <div className="h-[calc(100% - 72px)] text-white" style={{ height: 'calc(100% - 72px)' }}>
      <Split className="split">
        <ProblemDescription />
        <Playground />
      </Split>
    </div>
  )
}
