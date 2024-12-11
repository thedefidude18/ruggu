"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, MessageCircle, Heart, Share2, Check, X } from 'lucide-react'
import { cn } from "@/lib/utils"

interface PostCardProps {
  username: string
  handle: string
  timestamp: string
  content: string
  wager: string
  yesVotes: number
  noVotes: number
  comments: number
  likes: number
  isVerified?: boolean
}

export function PostCard({
  username,
  handle,
  timestamp,
  content,
  wager,
  yesVotes,
  noVotes,
  comments,
  likes,
  isVerified = false,
}: PostCardProps) {
  return (
    <Card className="bg-[#1a1b1e] text-white border-none p-4 space-y-3">
      {/* Header */}
      <div className="flex items-start gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>CW</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span className="font-semibold">{username}</span>
            {isVerified && (
              <CheckCircle2 className="h-4 w-4 text-blue-400" />
            )}
            <span className="text-[#71767b]">·</span>
            <span className="text-[#71767b]">{timestamp}</span>
          </div>
          <div className="text-[#71767b]">@{handle}</div>
        </div>
      </div>

      {/* Content */}
      <div className="text-xl font-medium leading-normal">
        {content}
      </div>

      {/* Wager */}
      <div className="text-[#a78bfa]">
        Wager: {wager}
      </div>

      {/* Voting Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="outline"
          className={cn(
            "h-14 border border-green-500/20 bg-green-500/10 hover:bg-green-500/20",
            "text-green-400 justify-between px-4"
          )}
        >
          <Check className="h-5 w-5" />
          <span>Yes ({yesVotes})</span>
        </Button>
        <Button
          variant="outline"
          className={cn(
            "h-14 border border-red-500/20 bg-red-500/10 hover:bg-red-500/20",
            "text-red-400 justify-between px-4"
          )}
        >
          <X className="h-5 w-5" />
          <span>No ({noVotes})</span>
        </Button>
      </div>

      {/* Status and Engagement */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-green-500/10 text-green-400 border-none">
            Active
          </Badge>
          <span className="text-[#71767b]">{timestamp}</span>
        </div>
        <div className="flex items-center gap-6 text-[#71767b]">
          <button className="flex items-center gap-2 hover:text-white transition-colors">
            <MessageCircle className="h-5 w-5" />
            <span>{comments}</span>
          </button>
          <button className="flex items-center gap-2 hover:text-white transition-colors">
            <Heart className="h-5 w-5" />
            <span>{likes}</span>
          </button>
          <button className="hover:text-white transition-colors">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Card>
  )
}

