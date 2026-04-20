import React from 'react'
import { AlertCircle } from 'lucide-react'

export default function NoticeBar() {
  return (
    <div className="bg-amber-50 border-b-2 border-amber-300 py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
        <AlertCircle className="text-amber-600 shrink-0" size={20} />
        <p className="text-amber-800 font-semibold text-sm md:text-base">
          <span className="font-bold">Notice:</span> Pacific Medical Alert Dogs is currently{' '}
          <span className="underline underline-offset-2">not accepting new client requests.</span>{' '}
          Please check back for future updates.
        </p>
      </div>
    </div>
  )
}
