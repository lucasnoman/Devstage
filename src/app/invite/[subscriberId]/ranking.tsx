import { getRanking } from '@/http/api'
import Image from 'next/image'
import cooper from '../../../assets/medal_cooper.svg'
import gold from '../../../assets/medal_gold.svg'
import silver from '../../../assets/medal_silver.svg'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1
          return (
            <div
              key={item.id}
              className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6"
            >
              <span className="text-gray-300 text-sm leading-none">
                <span className="font-semibold">{rankingPosition}º</span> |{' '}
                {item.name}
              </span>

              <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
                {item.score}
              </span>

              {rankingPosition === 1 && (
                <Image
                  src={gold}
                  alt="gold medal"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 2 && (
                <Image
                  src={silver}
                  alt="silver medal"
                  className="absolute top-0 right-8"
                />
              )}
              {rankingPosition === 3 && (
                <Image
                  src={cooper}
                  alt="cooper medal"
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
