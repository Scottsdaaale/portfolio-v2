import React from 'react'
import PomodoroTimer from '@/app/components/routes/focus/pomodoro'
import TipTap from '@/app/components/routes/focus/tiptap/TipTap'

const page = () => {
  return (
    <div className='flex flex-col gap-32'>
        <PomodoroTimer />
        {/* <TipTap /> */}
    </div>
  )
}

export default page