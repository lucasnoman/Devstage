import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

export function Stats() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative flex flex-col items-center justify-center gap-1 border-gray-600 bg-gray-700 px-4 py-7">
        <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
          1042
        </span>
        <span className="text-center text-gray-300 text-sm leading-none">
          Acessos ao link
        </span>

        <MousePointerClick className="absolute top-3 left-3 size-5 text-purple" />
      </div>
      <div className="relative flex flex-col items-center justify-center gap-1 border-gray-600 bg-gray-700 px-4 py-7">
        <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
          999
        </span>
        <span className="text-center text-gray-300 text-sm leading-none">
          Inscrições feitas
        </span>

        <BadgeCheck className="absolute top-3 left-3 size-5 text-purple" />
      </div>
      <div className="relative flex flex-col items-center justify-center gap-1 border-gray-600 bg-gray-700 px-4 py-7">
        <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
          3º
        </span>
        <span className="text-center text-gray-300 text-sm leading-none">
          Posição no ranking
        </span>

        <Medal className="absolute top-3 left-3 size-5 text-purple" />
      </div>
    </div>
  )
}
