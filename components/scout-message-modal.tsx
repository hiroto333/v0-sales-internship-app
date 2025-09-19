"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Send, Clock, DollarSign } from "lucide-react"

interface ScoutMessageModalProps {
  candidate: {
    id: number
    name: string
    skills: string[]
    experience: string
  }
  isOpen: boolean
  onClose: () => void
}

export function ScoutMessageModal({ candidate, isOpen, onClose }: ScoutMessageModalProps) {
  const [selectedInternship, setSelectedInternship] = useState("")
  const [message, setMessage] = useState("")
  const [subject, setSubject] = useState("")

  const internships = [
    {
      id: 1,
      title: "SaaS営業インターン",
      duration: "3週間",
      salary: "時給2,500円",
      location: "東京都渋谷区",
    },
    {
      id: 2,
      title: "インサイドセールス",
      duration: "4週間",
      salary: "時給2,200円",
      location: "東京都港区",
    },
  ]

  const handleSendScout = () => {
    // スカウト送信処理
    console.log("Sending scout to:", candidate.name)
    console.log("Internship:", selectedInternship)
    console.log("Message:", message)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>スカウトメッセージを送信</DialogTitle>
          <DialogDescription>{candidate.name}さんにスカウトメッセージを送信します</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Candidate Info */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{candidate.name}</CardTitle>
              <CardDescription>{candidate.experience}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                {candidate.skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Internship Selection */}
          <div className="space-y-3">
            <label className="text-sm font-medium">スカウトするインターンシップ</label>
            <Select value={selectedInternship} onValueChange={setSelectedInternship}>
              <SelectTrigger>
                <SelectValue placeholder="インターンシップを選択してください" />
              </SelectTrigger>
              <SelectContent>
                {internships.map((internship) => (
                  <SelectItem key={internship.id} value={internship.id.toString()}>
                    <div className="flex items-center justify-between w-full">
                      <span>{internship.title}</span>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground ml-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {internship.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          {internship.salary}
                        </div>
                      </div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Subject */}
          <div className="space-y-3">
            <label className="text-sm font-medium">件名</label>
            <Input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="例: 【Proofit】SaaS営業インターンのご案内"
            />
          </div>

          {/* Message */}
          <div className="space-y-3">
            <label className="text-sm font-medium">メッセージ</label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="候補者への個人的なメッセージを入力してください..."
              rows={6}
            />
            <p className="text-xs text-muted-foreground">
              候補者のスキルや経験に言及した個人的なメッセージを送ることで、返信率が向上します。
            </p>
          </div>

          {/* Template Messages */}
          <div className="space-y-3">
            <label className="text-sm font-medium">テンプレート</label>
            <div className="grid grid-cols-1 gap-2">
              <Button
                variant="outline"
                size="sm"
                className="justify-start text-left h-auto p-3 bg-transparent"
                onClick={() =>
                  setMessage(
                    "こんにちは！あなたの営業経験とスキルセットが弊社のインターンシップにぴったりだと思い、ご連絡いたしました。実務を通じてさらなるスキルアップを目指しませんか？",
                  )
                }
              >
                <div>
                  <div className="font-medium text-sm">基本テンプレート</div>
                  <div className="text-xs text-muted-foreground">一般的なスカウトメッセージ</div>
                </div>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="justify-start text-left h-auto p-3 bg-transparent"
                onClick={() =>
                  setMessage(
                    "あなたの{スキル}の経験に大変興味を持ちました。弊社では実際の案件に携わりながら、さらなる成長を支援する環境を提供しています。ぜひ一度お話しさせていただけませんか？",
                  )
                }
              >
                <div>
                  <div className="font-medium text-sm">スキル重視テンプレート</div>
                  <div className="text-xs text-muted-foreground">候補者のスキルを強調</div>
                </div>
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button onClick={handleSendScout} className="flex-1">
              <Send className="w-4 h-4 mr-2" />
              スカウトを送信
            </Button>
            <Button variant="outline" onClick={onClose}>
              キャンセル
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
