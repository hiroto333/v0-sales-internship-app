"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  Clock,
  Users,
  TrendingUp,
  Target,
  CheckCircle,
  AlertCircle,
  BarChart3,
  FileText,
  MessageSquare,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const handleReportSubmit = () => {
    alert("レポートが提出されました！")
  }

  const handleApplyToProject = (projectName: string) => {
    alert(`${projectName}に応募しました！`)
  }

  const handleViewDetails = (projectName: string) => {
    alert(`${projectName}の詳細を表示します`)
  }

  const handleViewResults = () => {
    alert("評価結果を表示します")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Proofit</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={() => alert("サポートチームに連絡します")}>
              <MessageSquare className="w-4 h-4 mr-2" />
              サポート
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.png" />
              <AvatarFallback>田中</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">おかえりなさい、田中さん</h1>
          <p className="text-muted-foreground">現在進行中のインターンシップと評価状況を確認できます</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">進行中のインターン</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">+1 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">完了したプロジェクト</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+3 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">平均評価スコア</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2</div>
              <p className="text-xs text-muted-foreground">+0.3 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">成約率</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="current" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="current">進行中</TabsTrigger>
            <TabsTrigger value="applications">応募管理</TabsTrigger>
            <TabsTrigger value="evaluations">評価</TabsTrigger>
            <TabsTrigger value="analytics">分析</TabsTrigger>
          </TabsList>

          {/* Current Internships */}
          <TabsContent value="current" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Active Internship Card */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">セールス戦略立案</CardTitle>
                      <CardDescription>株式会社テックスタートアップ</CardDescription>
                    </div>
                    <Badge variant="default">進行中</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>2024年1月15日 - 2024年2月12日</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>残り12日</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>進捗</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1" onClick={handleReportSubmit}>
                      <FileText className="w-4 h-4 mr-2" />
                      レポート提出
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleViewDetails("セールス戦略立案")}>
                      詳細
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Another Active Internship */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">顧客開拓プロジェクト</CardTitle>
                      <CardDescription>株式会社グロースカンパニー</CardDescription>
                    </div>
                    <Badge variant="secondary">評価待ち</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>2024年1月1日 - 2024年1月28日</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <AlertCircle className="w-4 h-4" />
                    <span>評価結果待ち</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>進捗</span>
                      <span>100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent" onClick={handleViewResults}>
                      <BarChart3 className="w-4 h-4 mr-2" />
                      結果を見る
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleViewDetails("顧客開拓プロジェクト")}>
                      詳細
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>最近のアクティビティ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">週次レポートを提出しました</p>
                      <p className="text-xs text-muted-foreground">2時間前</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">新しいプロジェクトに応募しました</p>
                      <p className="text-xs text-muted-foreground">1日前</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">評価結果が公開されました</p>
                      <p className="text-xs text-muted-foreground">3日前</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Applications Management */}
          <TabsContent value="applications" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>応募可能なプロジェクト</CardTitle>
                  <CardDescription>あなたのスキルにマッチするプロジェクトです</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">新規顧客獲得戦略</h3>
                        <Badge variant="outline">セールス</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        SaaS企業での新規顧客獲得戦略の立案と実行。3週間のプロジェクトです。
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>期間: 3週間</span>
                          <span>報酬: ¥150,000</span>
                        </div>
                        <Button size="sm" onClick={() => handleApplyToProject("新規顧客獲得戦略")}>
                          応募する
                        </Button>
                      </div>
                    </div>

                    <div className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">営業プロセス改善</h3>
                        <Badge variant="outline">プロセス改善</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        既存の営業プロセスを分析し、効率化提案を行うプロジェクトです。
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>期間: 4週間</span>
                          <span>報酬: ¥200,000</span>
                        </div>
                        <Button size="sm" onClick={() => handleApplyToProject("営業プロセス改善")}>
                          応募する
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Evaluations */}
          <TabsContent value="evaluations" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>行動ルーブリック評価</CardTitle>
                  <CardDescription>最新のプロジェクト評価結果</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Ownership</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={85} className="w-20 h-2" />
                        <span className="text-sm text-muted-foreground">4.2/5</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">0→1推進</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={90} className="w-20 h-2" />
                        <span className="text-sm text-muted-foreground">4.5/5</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Influence</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={75} className="w-20 h-2" />
                        <span className="text-sm text-muted-foreground">3.8/5</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Speed×Quality</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={80} className="w-20 h-2" />
                        <span className="text-sm text-muted-foreground">4.0/5</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">協働</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={95} className="w-20 h-2" />
                        <span className="text-sm text-muted-foreground">4.8/5</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>フィードバック</CardTitle>
                  <CardDescription>企業からの評価コメント</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <p className="text-sm text-muted-foreground mb-2">株式会社テックスタートアップ</p>
                      <p className="text-sm">
                        "非常に積極的で、短期間で大きな成果を上げていただきました。特に新規顧客開拓において優れた提案をいただき、実際に成約につながりました。"
                      </p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <p className="text-sm text-muted-foreground mb-2">株式会社グロースカンパニー</p>
                      <p className="text-sm">
                        "チームワークが素晴らしく、既存メンバーとの協働も非常にスムーズでした。今後も一緒に働きたいと思える人材です。"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>パフォーマンス推移</CardTitle>
                  <CardDescription>過去6ヶ月の評価スコア推移</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    <BarChart3 className="w-8 h-8 mr-2" />
                    <span>チャートデータを読み込み中...</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>スキル分析</CardTitle>
                  <CardDescription>強みと改善点の分析</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">強み</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">チームワーク</Badge>
                        <Badge variant="secondary">新規開拓</Badge>
                        <Badge variant="secondary">戦略立案</Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">改善点</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">プレゼンテーション</Badge>
                        <Badge variant="outline">データ分析</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
