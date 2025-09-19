"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import {
  Target,
  Star,
  TrendingUp,
  Users,
  Zap,
  Award,
  MessageSquare,
  CheckCircle,
  BarChart3,
  FileText,
  Send,
} from "lucide-react"
import Link from "next/link"

export default function EvaluationPage() {
  const [selectedIntern, setSelectedIntern] = useState("tanaka")
  const [evaluationScores, setEvaluationScores] = useState({
    ownership: [4],
    innovation: [4],
    influence: [3],
    speedQuality: [4],
    collaboration: [5],
  })
  const [feedback, setFeedback] = useState("")

  const handleSaveDraft = () => {
    alert("評価の下書きが保存されました！")
  }

  const handleSubmitEvaluation = () => {
    alert("評価が送信されました！")
  }

  const interns = [
    {
      id: "tanaka",
      name: "田中 太郎",
      project: "セールス戦略立案",
      duration: "3週間",
      status: "進行中",
      avatar: "/placeholder-user.png",
      progress: 75,
    },
    {
      id: "sato",
      name: "佐藤 花子",
      project: "顧客開拓プロジェクト",
      duration: "4週間",
      status: "完了",
      avatar: "/placeholder-user.png",
      progress: 100,
    },
  ]

  const rubricItems = [
    {
      key: "ownership",
      title: "Ownership",
      description: "主体性を持って課題に取り組み、責任を持って完遂する能力",
      icon: Target,
      color: "text-primary",
    },
    {
      key: "innovation",
      title: "0→1推進",
      description: "新しいアイデアや解決策を生み出し、実行に移す能力",
      icon: Zap,
      color: "text-secondary",
    },
    {
      key: "influence",
      title: "Influence",
      description: "チームメンバーや関係者に良い影響を与える能力",
      icon: Users,
      color: "text-accent",
    },
    {
      key: "speedQuality",
      title: "Speed×Quality",
      description: "スピードと品質を両立して成果を出す能力",
      icon: TrendingUp,
      color: "text-primary",
    },
    {
      key: "collaboration",
      title: "協働",
      description: "チームワークを発揮し、他者と効果的に協力する能力",
      icon: Award,
      color: "text-secondary",
    },
  ]

  const currentIntern = interns.find((intern) => intern.id === selectedIntern)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Proofit</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">評価者モード</Badge>
            <Avatar>
              <AvatarImage src="/placeholder-user.png" />
              <AvatarFallback>管理</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">行動ルーブリック評価</h1>
          <p className="text-muted-foreground">インターン生の実務パフォーマンスを客観的に評価します</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Intern Selection Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">評価対象者</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {interns.map((intern) => (
                  <div
                    key={intern.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      selectedIntern === intern.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedIntern(intern.id)}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={intern.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{intern.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{intern.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{intern.project}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">進捗</span>
                        <Badge variant={intern.status === "完了" ? "default" : "secondary"} className="text-xs">
                          {intern.status}
                        </Badge>
                      </div>
                      <Progress value={intern.progress} className="h-1.5" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Evaluation Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="rubric" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="rubric">ルーブリック評価</TabsTrigger>
                <TabsTrigger value="feedback">フィードバック</TabsTrigger>
                <TabsTrigger value="summary">評価サマリー</TabsTrigger>
              </TabsList>

              {/* Rubric Evaluation */}
              <TabsContent value="rubric" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{currentIntern?.name}の評価</CardTitle>
                        <CardDescription>
                          {currentIntern?.project} - {currentIntern?.duration}
                        </CardDescription>
                      </div>
                      <Badge variant={currentIntern?.status === "完了" ? "default" : "secondary"}>
                        {currentIntern?.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {rubricItems.map((item) => {
                        const IconComponent = item.icon
                        const score = evaluationScores[item.key as keyof typeof evaluationScores][0]
                        return (
                          <div key={item.key} className="space-y-4">
                            <div className="flex items-start space-x-4">
                              <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center`}>
                                <IconComponent className={`w-6 h-6 ${item.color}`} />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                                <div className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">評価スコア</span>
                                    <div className="flex items-center space-x-2">
                                      <span className="text-2xl font-bold text-primary">{score}</span>
                                      <span className="text-sm text-muted-foreground">/5</span>
                                    </div>
                                  </div>
                                  <Slider
                                    value={evaluationScores[item.key as keyof typeof evaluationScores]}
                                    onValueChange={(value) =>
                                      setEvaluationScores((prev) => ({
                                        ...prev,
                                        [item.key]: value,
                                      }))
                                    }
                                    max={5}
                                    min={1}
                                    step={1}
                                    className="w-full"
                                  />
                                  <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>要改善</span>
                                    <span>普通</span>
                                    <span>優秀</span>
                                  </div>
                                </div>

                                {/* Score Description */}
                                <div className="mt-3 p-3 bg-muted/50 rounded-lg">
                                  <p className="text-sm">
                                    {score === 1 && "大幅な改善が必要です"}
                                    {score === 2 && "改善の余地があります"}
                                    {score === 3 && "期待される水準です"}
                                    {score === 4 && "期待を上回る成果です"}
                                    {score === 5 && "卓越した成果です"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Feedback */}
              <TabsContent value="feedback" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageSquare className="w-5 h-5" />
                      <span>詳細フィードバック</span>
                    </CardTitle>
                    <CardDescription>具体的な改善点や優れた点を記載してください</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="strengths">優れていた点</Label>
                        <Textarea
                          id="strengths"
                          placeholder="インターン生が特に優れていた点や成果について具体的に記載してください"
                          rows={4}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="improvements">改善点・成長機会</Label>
                        <Textarea
                          id="improvements"
                          placeholder="今後の成長のための改善点や学習機会について建設的なアドバイスを記載してください"
                          rows={4}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="overall">総合コメント</Label>
                        <Textarea
                          id="overall"
                          placeholder="全体的な印象や今後の期待について記載してください"
                          rows={4}
                          value={feedback}
                          onChange={(e) => setFeedback(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">今後の推奨アクション</h3>
                      <RadioGroup defaultValue="hire">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="hire" id="hire" />
                          <Label htmlFor="hire" className="text-sm">
                            正式採用を強く推奨
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="consider" id="consider" />
                          <Label htmlFor="consider" className="text-sm">
                            採用を検討
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="extend" id="extend" />
                          <Label htmlFor="extend" className="text-sm">
                            インターン期間延長を提案
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="no" />
                          <Label htmlFor="no" className="text-sm">
                            採用見送り
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Summary */}
              <TabsContent value="summary" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Score Summary */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <BarChart3 className="w-5 h-5" />
                        <span>評価サマリー</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {rubricItems.map((item) => {
                          const score = evaluationScores[item.key as keyof typeof evaluationScores][0]
                          const percentage = (score / 5) * 100
                          return (
                            <div key={item.key} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">{item.title}</span>
                                <span className="text-sm text-muted-foreground">{score}/5</span>
                              </div>
                              <Progress value={percentage} className="h-2" />
                            </div>
                          )
                        })}
                        <div className="pt-4 border-t border-border">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">総合評価</span>
                            <span className="text-xl font-bold text-primary">
                              {(Object.values(evaluationScores).reduce((sum, score) => sum + score[0], 0) / 5).toFixed(
                                1,
                              )}
                              /5
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Performance Insights */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Star className="w-5 h-5" />
                        <span>パフォーマンス分析</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2 text-green-600">強み</h4>
                          <div className="flex flex-wrap gap-2">
                            {Object.entries(evaluationScores)
                              .filter(([_, score]) => score[0] >= 4)
                              .map(([key, _]) => {
                                const item = rubricItems.find((item) => item.key === key)
                                return (
                                  <Badge key={key} variant="secondary">
                                    {item?.title}
                                  </Badge>
                                )
                              })}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-sm mb-2 text-orange-600">改善機会</h4>
                          <div className="flex flex-wrap gap-2">
                            {Object.entries(evaluationScores)
                              .filter(([_, score]) => score[0] <= 3)
                              .map(([key, _]) => {
                                const item = rubricItems.find((item) => item.key === key)
                                return (
                                  <Badge key={key} variant="outline">
                                    {item?.title}
                                  </Badge>
                                )
                              })}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-border">
                          <div className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>評価完了準備OK</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end space-x-4">
                  <Button variant="outline" className="bg-transparent" onClick={handleSaveDraft}>
                    <FileText className="w-4 h-4 mr-2" />
                    下書き保存
                  </Button>
                  <Button onClick={handleSubmitEvaluation}>
                    <Send className="w-4 h-4 mr-2" />
                    評価を送信
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
