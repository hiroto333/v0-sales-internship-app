"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Target, Users, TrendingUp, Eye, Send, CheckCircle, Star, Filter } from "lucide-react"
import Link from "next/link"

export default function CompanyDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Proofit</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">企業ダッシュボード</Badge>
            <Avatar>
              <AvatarImage src="/placeholder-user.png" />
              <AvatarFallback>企業</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">企業ダッシュボード</h1>
          <p className="text-muted-foreground">インターンシップの管理と候補者とのマッチングを行います</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">概要</TabsTrigger>
            <TabsTrigger value="internships">インターン管理</TabsTrigger>
            <TabsTrigger value="applications">応募者管理</TabsTrigger>
            <TabsTrigger value="scouting">スカウト</TabsTrigger>
            <TabsTrigger value="evaluation">評価・フィードバック</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">進行中インターン</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">+1 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">応募者数</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+3 this week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">平均評価スコア</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.2</div>
                  <p className="text-xs text-muted-foreground">out of 5.0</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">正規雇用率</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">75%</div>
                  <p className="text-xs text-muted-foreground">+5% from last quarter</p>
                </CardContent>
              </Card>
            </div>

            {/* Active Internships */}
            <Card>
              <CardHeader>
                <CardTitle>進行中のインターンシップ</CardTitle>
                <CardDescription>現在実施中のインターンシップの状況</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "田中 太郎", position: "セールスインターン", progress: 75, daysLeft: 5 },
                    { name: "佐藤 花子", position: "インサイドセールス", progress: 45, daysLeft: 12 },
                    { name: "山田 次郎", position: "カスタマーサクセス", progress: 90, daysLeft: 2 },
                  ].map((intern, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{intern.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{intern.name}</p>
                          <p className="text-sm text-muted-foreground">{intern.position}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">{intern.progress}% 完了</p>
                          <p className="text-xs text-muted-foreground">残り{intern.daysLeft}日</p>
                        </div>
                        <Progress value={intern.progress} className="w-20" />
                        <Button size="sm" variant="outline">
                          詳細
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Internship Management Tab */}
          <TabsContent value="internships" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">インターンシップ管理</h2>
              <Button>新規インターン作成</Button>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "セールスインターン",
                  status: "募集中",
                  applications: 8,
                  duration: "4週間",
                  compensation: "時給2,500円",
                },
                {
                  title: "インサイドセールス",
                  status: "実施中",
                  applications: 3,
                  duration: "3週間",
                  compensation: "時給2,200円",
                },
                {
                  title: "カスタマーサクセス",
                  status: "完了",
                  applications: 5,
                  duration: "4週間",
                  compensation: "時給2,300円",
                },
              ].map((internship, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{internship.title}</CardTitle>
                        <CardDescription>
                          {internship.duration} • {internship.compensation}
                        </CardDescription>
                      </div>
                      <Badge
                        variant={
                          internship.status === "募集中"
                            ? "default"
                            : internship.status === "実施中"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {internship.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="text-sm text-muted-foreground">応募者: {internship.applications}名</div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          詳細
                        </Button>
                        <Button size="sm" variant="outline">
                          編集
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Applications Management Tab */}
          <TabsContent value="applications" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">応募者管理</h2>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                フィルター
              </Button>
            </div>

            <div className="space-y-4">
              {[
                {
                  name: "鈴木 一郎",
                  position: "セールスインターン",
                  experience: "営業経験5年",
                  status: "書類選考中",
                  appliedDate: "2024-01-15",
                },
                {
                  name: "高橋 美咲",
                  position: "インサイドセールス",
                  experience: "SaaS営業3年",
                  status: "面談予定",
                  appliedDate: "2024-01-14",
                },
                {
                  name: "伊藤 健太",
                  position: "セールスインターン",
                  experience: "新規開拓営業4年",
                  status: "合格",
                  appliedDate: "2024-01-12",
                },
              ].map((applicant, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{applicant.name}</p>
                          <p className="text-sm text-muted-foreground">{applicant.position}</p>
                          <p className="text-xs text-muted-foreground">{applicant.experience}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <Badge
                            variant={
                              applicant.status === "合格"
                                ? "default"
                                : applicant.status === "面談予定"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {applicant.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">応募日: {applicant.appliedDate}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            履歴書
                          </Button>
                          <Button size="sm">選考進行</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Scouting Tab */}
          <TabsContent value="scouting" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">スカウト機能</h2>
              <Button>
                <Send className="w-4 h-4 mr-2" />
                一括スカウト
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>おすすめ候補者</CardTitle>
                <CardDescription>AIが分析した、あなたのインターンシップに最適な候補者</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "匿名ユーザー A",
                      skills: ["新規開拓営業", "SaaS経験", "チームリーダー"],
                      experience: "営業経験6年",
                      matchScore: 92,
                    },
                    {
                      name: "匿名ユーザー B",
                      skills: ["インサイドセールス", "データ分析", "CRM活用"],
                      experience: "営業経験4年",
                      matchScore: 87,
                    },
                    {
                      name: "匿名ユーザー C",
                      skills: ["カスタマーサクセス", "プレゼン", "交渉力"],
                      experience: "営業経験3年",
                      matchScore: 84,
                    },
                  ].map((candidate, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{candidate.name}</p>
                          <p className="text-sm text-muted-foreground">{candidate.experience}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {candidate.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium text-primary">マッチ度: {candidate.matchScore}%</p>
                        </div>
                        <Button size="sm">スカウト送信</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Evaluation Tab */}
          <TabsContent value="evaluation" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">評価・フィードバック</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  name: "田中 太郎",
                  position: "セールスインターン",
                  status: "評価待ち",
                  endDate: "2024-01-20",
                  progress: "完了",
                },
                {
                  name: "佐藤 花子",
                  position: "インサイドセールス",
                  status: "評価完了",
                  endDate: "2024-01-18",
                  progress: "完了",
                },
              ].map((intern, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{intern.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{intern.name}</p>
                          <p className="text-sm text-muted-foreground">{intern.position}</p>
                          <p className="text-xs text-muted-foreground">終了日: {intern.endDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant={intern.status === "評価完了" ? "default" : "secondary"}>{intern.status}</Badge>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            実績確認
                          </Button>
                          <Button size="sm">{intern.status === "評価完了" ? "評価確認" : "評価実施"}</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
