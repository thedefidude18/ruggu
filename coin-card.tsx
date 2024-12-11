import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpIcon, UsersIcon } from 'lucide-react'
import Image from "next/image"

interface CoinCardProps {
  name: string
  symbol: string
  imageUrl: string
  holders: number
  price: string
  marketCap: string
  volume: string
  buyCount: number
}

export function CoinCard({
  name,
  symbol,
  imageUrl,
  holders,
  price,
  marketCap,
  volume,
  buyCount,
}: CoinCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-12 h-12 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg truncate">{name}</h3>
          <p className="text-sm text-muted-foreground">{symbol}</p>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <UsersIcon className="h-4 w-4" />
          <span>{holders} Holders</span>
        </div>
      </div>
      <Badge variant="success" className="mb-2">
        Success!
      </Badge>
      <div className="bg-green-500 rounded-full h-2 mb-4" />
      <div className="grid grid-cols-3 gap-2 text-sm">
        <div className="flex items-center gap-1">
          <ArrowUpIcon className="h-4 w-4 text-green-500" />
          <span>{buyCount} Buys</span>
        </div>
        <div>${marketCap} Market Cap</div>
        <div>${volume} Volume</div>
      </div>
    </Card>
  )
}

