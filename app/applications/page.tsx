import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Target, Clock, CheckCircle, XCircle, AlertCircle, Eye, MessageSquare, Calendar, Building2 } from "lucide-react"
import Link from "next/link"

export default function ApplicationsPage() {
  const applications = [
    {
      id: 1,
      internshipTitle: "SaaS営業インターン",
      company: "TechStart株式会社",
      appliedDate: "2024-01-15",
      status: "書類選考中",
      progress: 25,
      nextStep: "書類選考結果待ち",
      expectedDate: "2024-01-22",
      location: "東京都渋谷区",
      duration: "3週間",
      salary: "時給2,500円",
      notes: "営業経験を活かしたい旨をアピール",
      lastUpdate: "2時間前",
    },
    {
      id: 2,
      internshipTitle: "インサイドセールス",
      company: "Growth Marketing Inc.",
      appliedDate: "2024-01-12",
      status: "面接予定",
      progress: 50,
      nextStep: "オンライン面接",
      expectedDate: "2024-01-18",
      location: "東京都港区",
      duration: "4週間",
      salary: "時給2,200円",
      notes: "CRM経験をアピール",
      lastUpdate: "1日前",
    },
    {
      id: 3,
      internshipTitle: "カスタマーサクセス",
      company: "Digital Solutions Ltd.",
      appliedDate: "2024-01-10",
      status: "合格",
      progress: 100,
      nextStep: "開始日調整",
      expectedDate: "2024-01-25",
      location: "東京都新宿区",
      duration: "2週間",
      salary: "時給2,800円",
      notes: "データ分析スキルが評価された",
      lastUpdate: "30分前",
    },
    {
      id: 4,
      internshipTitle: "フィールドセールス",
      company: "Enterprise Solutions Co.",
      appliedDate: "2024-01-08",
      status: "不合格",
      progress: 100,
      nextStep: "完了",
      expectedDate: "-",
      location: "東京都千代田区",
      duration: "4週間",
      salary: "時給3,000円",
      notes: "経験不足のため",
      lastUpdate: "3日前",
    },
  ]

  const scouts = [
    {
      id: 1,
      internshipTitle: "パートナーセールス",
      company: "Partnership Dynamics",
      receivedDate: "2024-01-16",
      status: "未読",
      message: "あなたの営業経験に興味を持ちました。ぜひ一度お話しさせていただけませんか？",
      location: "東京都中央区",
      duration: "3週間",
      salary: "時給2,600円",
      deadline: "2024-01-23",
    },
    {
      id: 2,
      internshipTitle: "セールスオペレーション",
      company: "Sales Tech Startup",
      receivedDate: "2024-01-14",
      status: "既読",
      message: "データ分析スキルを活かせるポジションです。営業プロセス改善に興味はありませんか？",
      location: "東京都品川区",
      duration: "3週間",
      salary: "時給2,400円",
      deadline: "2024-01-21",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "書類選考中":
        return "default"
      case "面接予定":
        return "secondary"
      case "合格":
        return "default"
      case "不合格":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "書類選考中":
        return <Clock className="w-4 h-4" />
      case "面接予定":
        return <Calendar className="w-4 h-4" />
      case "合格":
        return <CheckCircle className="w-4 h-4" />
      case "不合格":
        return <XCircle className="w-4 h-4" />
      default:
        return <AlertCircle className="w-4 h-4" />
    }
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
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/jobseeker/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              ダッシュボード
            </Link>
            <Link href="/internships" className="text-muted-foreground hover:text-foreground transition-colors">
              インターン一覧
            </Link>
            <Link href="/applications" className="text-foreground font-medium">
              応募状況
            </Link>
            <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
              サポート
            </Link>
            <Button variant="outline" size="sm">
              ログアウト
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">応募状況</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              あなたの応募状況とスカウト情報をリアルタイムで確認できます
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">4</div>
                  <div className="text-sm text-muted-foreground">総応募数</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">2</div>
                  <div className="text-sm text-muted-foreground">選考中</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">1</div>
                  <div className="text-sm text-muted-foreground">合格</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">2</div>
                  <div className="text-sm text-muted-foreground">スカウト</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="applications" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="applications">応募状況</TabsTrigger>
              <TabsTrigger value="scouts">スカウト</TabsTrigger>
            </TabsList>

            <TabsContent value="applications" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">応募中のインターンシップ</h2>
                <Link href="/internships">
                  <Button>新しいインターンに応募</Button>
                </Link>
              </div>

              <div className="space-y-4">
                {applications.map((application) => (
                  <Card key={application.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl">{application.internshipTitle}</CardTitle>
                            <Badge variant={getStatusColor(application.status)} className="flex items-center gap-1">
                              {getStatusIcon(application.status)}
                              {application.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">{application.company}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{application.location}</span>
                            <span>{application.duration}</span>
                            <span>{application.salary}</span>
                          </div>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <p>応募日: {application.appliedDate}</p>
                          <p>最終更新: {application.lastUpdate}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Progress */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">選考進捗</span>
                            <span className="text-sm text-muted-foreground">{application.progress}%</span>
                          </div>
                          <Progress value={application.progress} className="h-2" />
                        </div>

                        {/* Next Step */}
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div>
                            <p className="text-sm font-medium">次のステップ</p>
                            <p className="text-sm text-muted-foreground">{application.nextStep}</p>
                          </div>
                          {application.expectedDate !== "-" && (
                            <div className="text-right">
                              <p className="text-sm font-medium">予定日</p>
                              <p className="text-sm text-muted-foreground">{application.expectedDate}</p>
                            </div>
                          )}
                        </div>

                        {/* Notes */}
                        {application.notes && (
                          <div className="p-3 bg-primary/5 rounded-lg">
                            <p className="text-sm">
                              <span className="font-medium">メモ: </span>
                              {application.notes}
                            </p>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            詳細を見る
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            メッセージ
                          </Button>
                          {application.status === "面接予定" && (
                            <Button size="sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              日程調整
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="scouts" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">受信したスカウト</h2>
                <Badge variant="secondary">{scouts.filter((s) => s.status === "未読").length}件未読</Badge>
              </div>

              <div className="space-y-4">
                {scouts.map((scout) => (
                  <Card
                    key={scout.id}
                    className={`hover:shadow-lg transition-shadow ${scout.status === "未読" ? "ring-2 ring-primary/20" : ""}`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl">{scout.internshipTitle}</CardTitle>
                            <Badge variant={scout.status === "未読" ? "default" : "secondary"}>{scout.status}</Badge>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">{scout.company}</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{scout.location}</span>
                            <span>{scout.duration}</span>
                            <span>{scout.salary}</span>
                          </div>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <p>受信日: {scout.receivedDate}</p>
                          <p className="text-destructive">回答期限: {scout.deadline}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Message */}
                        <div className="p-3 bg-muted/50 rounded-lg">
                          <p className="text-sm">{scout.message}</p>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <Button size="sm">応募する</Button>
                          <Button size="sm" variant="outline">
                            詳細を見る
                          </Button>
                          <Button size="sm" variant="outline">
                            辞退する
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                応募成功のコツ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">プロフィールを充実させる</h4>
                  <p className="text-muted-foreground">
                    詳細なスキルや経験を記載することで、企業からのスカウト率が向上します。
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">迅速な対応</h4>
                  <p className="text-muted-foreground">
                    スカウトや選考結果には24時間以内に返信することを心がけましょう。
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">積極的なコミュニケーション</h4>
                  <p className="text-muted-foreground">
                    不明な点があれば遠慮なく企業やサポートチームに質問してください。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
