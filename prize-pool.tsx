import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function PrizePool() {
  return (
    <Card className="bg-cyan-50">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          <span className="text-4xl">$66,832</span>
          <span className="text-2xl text-muted-foreground">.22</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="Mascot"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">Next drop</p>
          <p className="text-xl font-semibold">$3,341.61</p>
          <p className="text-sm text-muted-foreground mt-2">
            Dotto will buy $3,341.61 of the picked coin on the next drop.
          </p>
        </div>
        <Button className="w-full" variant="outline">
          View all
        </Button>
      </CardContent>
    </Card>
  )
}

