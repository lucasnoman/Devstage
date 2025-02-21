import Image from 'next/image'
import cooper from '../../assets/medal_cooper.svg'
import gold from '../../assets/medal_gold.svg'
import silver from '../../assets/medal_silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-gray-300 text-sm leading-none">
            <span className="font-semibold">1º</span> | Lucas C. Noman
          </span>

          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            1030
          </span>

          <Image
            src={gold}
            alt="gold medal"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-gray-300 text-sm leading-none">
            <span className="font-semibold">2º</span> | Lucas C. Noman
          </span>

          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            1030
          </span>

          <Image
            src={silver}
            alt="silver medal"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6">
          <span className="text-gray-300 text-sm leading-none">
            <span className="font-semibold">3º</span> | Lucas C. Noman
          </span>

          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            1030
          </span>

          <Image
            src={cooper}
            alt="cooper medal"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
