"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Target, Briefcase, Calendar, Eye, Send, Star, Filter, Search, MapPin } from "lucide-react"
import Link from "next/link"

export default function JobSeekerDashboardPage() {
  const [activeTab, setActiveTab] = useState("home")

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
            <Badge variant="secondary">求職者ダッシュボード</Badge>
            <Avatar>
              <AvatarImage src="/placeholder-user.png" />
              <AvatarFallback>求職</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">求職者ダッシュボード</h1>
          <p className="text-muted-foreground">インターンシップの検索・応募・管理を行います</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="home">ホーム</TabsTrigger>
            <TabsTrigger value="internships">インターン検索</TabsTrigger>
            <TabsTrigger value="applications">応募状況</TabsTrigger>
            <TabsTrigger value="scouting">スカウト</TabsTrigger>
            <TabsTrigger value="support">サポート</TabsTrigger>
            <TabsTrigger value="profile">プロフィール</TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-6">
            {/* Welcome Card */}
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">おかえりなさい、田中さん</h2>
                    <p className="text-muted-foreground">新しいインターンシップの機会をチェックしましょう</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">プロフィール完成度</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Progress value={85} className="w-20" />
                      <span className="text-sm font-medium">85%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">応募中</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">+1 this week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">スカウト受信</CardTitle>
                  <Send className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">2 new today</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">面談予定</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">next week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">マッチ度平均</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">87%</div>
                  <p className="text-xs text-muted-foreground">high compatibility</p>
                </CardContent>
              </Card>
            </div>

            {/* Recommended Internships */}
            <Card>
              <CardHeader>
                <CardTitle>おすすめのインターンシップ</CardTitle>
                <CardDescription>あなたのスキルと経験に基づいたおすすめ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      company: "株式会社TechSales",
                      title: "セールスインターン",
                      duration: "4週間",
                      compensation: "時給2,500円",
                      location: "東京・リモート可",
                      matchScore: 92,
                      tags: ["新規開拓", "SaaS", "チーム制"],
                    },
                    {
                      company: "StartupCorp",
                      title: "インサイドセールス",
                      duration: "3週間",
                      compensation: "時給2,200円",
                      location: "大阪・ハイブリッド",
                      matchScore: 88,
                      tags: ["既存顧客", "データ分析", "成長企業"],
                    },
                    {
                      company: "GrowthLab Inc.",
                      title: "カスタマーサクセス",
                      duration: "4週間",
                      compensation: "時給2,300円",
                      location: "東京・オフィス",
                      matchScore: 85,
                      tags: ["顧客対応", "プロダクト", "スタートアップ"],
                    },
                  ].map((internship, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{internship.company.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{internship.title}</p>
                          <p className="text-sm text-muted-foreground">{internship.company}</p>
                          <div className="flex items-center space-x-4 mt-1 text-xs text-muted-foreground">
                            <span>{internship.duration}</span>
                            <span>{internship.compensation}</span>
                            <span className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {internship.location}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {internship.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium text-primary">マッチ度: {internship.matchScore}%</p>
                        </div>
                        <Button size="sm">応募する</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Internship Search Tab */}
          <TabsContent value="internships" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">インターンシップ検索</h2>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                詳細フィルター
              </Button>
            </div>

            {/* Search Bar */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input placeholder="キーワードで検索（職種、会社名、スキルなど）" className="w-full" />
              </div>
              <Button>
                <Search className="w-4 h-4 mr-2" />
                検索
              </Button>
            </div>

            {/* Search Results */}
            <div className="space-y-4">
              {[
                {
                  company: "株式会社TechSales",
                  title: "セールスインターン",
                  duration: "4週間",
                  compensation: "時給2,500円",
                  location: "東京・リモート可",
                  description: "新規開拓営業を中心とした実務経験。SaaS製品の営業プロセスを学べます。",
                  requirements: ["営業経験3年以上", "新規開拓経験", "コミュニケーション能力"],
                  posted: "2日前",
                },
                {
                  company: "StartupCorp",
                  title: "インサイドセールス",
                  duration: "3週間",
                  compensation: "時給2,200円",
                  location: "大阪・ハイブリッド",
                  description: "データドリブンなインサイドセールスの実践。CRM活用とリード管理を経験。",
                  requirements: ["インサイドセールス経験", "データ分析スキル", "CRM使用経験"],
                  posted: "1週間前",
                },
                {
                  company: "GrowthLab Inc.",
                  title: "カスタマーサクセス",
                  duration: "4週間",
                  compensation: "時給2,300円",
                  location: "東京・オフィス",
                  description: "既存顧客の成功支援とアップセル・クロスセルの実践。顧客満足度向上に貢献。",
                  requirements: ["カスタマーサクセス経験", "顧客対応スキル", "プロダクト理解力"],
                  posted: "3日前",
                },
              ].map((internship, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{internship.company.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-lg">{internship.title}</h3>
                          <p className="text-muted-foreground">{internship.company}</p>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                            <span>{internship.duration}</span>
                            <span>{internship.compensation}</span>
                            <span className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {internship.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{internship.posted}</Badge>
                      </div>
                    </div>

                    <p className="text-sm mb-4">{internship.description}</p>

                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">求める人材:</p>
                      <div className="flex flex-wrap gap-2">
                        {internship.requirements.map((req, reqIndex) => (
                          <Badge key={reqIndex} variant="secondary" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-2" />
                        詳細を見る
                      </Button>
                      <Button size="sm">応募する</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">応募状況</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  company: "株式会社TechSales",
                  title: "セールスインターン",
                  status: "書類選考中",
                  appliedDate: "2024-01-15",
                  nextStep: "書類選考結果待ち",
                },
                {
                  company: "StartupCorp",
                  title: "インサイドセールス",
                  status: "面談予定",
                  appliedDate: "2024-01-12",
                  nextStep: "1月22日 14:00 オンライン面談",
                },
                {
                  company: "GrowthLab Inc.",
                  title: "カスタマーサクセス",
                  status: "合格",
                  appliedDate: "2024-01-10",
                  nextStep: "日程調整中",
                },
              ].map((application, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{application.company.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{application.title}</p>
                          <p className="text-sm text-muted-foreground">{application.company}</p>
                          <p className="text-xs text-muted-foreground">応募日: {application.appliedDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <Badge
                            variant={
                              application.status === "合格"
                                ? "default"
                                : application.status === "面談予定"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {application.status}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">{application.nextStep}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          詳細
                        </Button>
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
              <h2 className="text-2xl font-bold">スカウト</h2>
              <Badge variant="secondary">5件の新着スカウト</Badge>
            </div>

            <div className="space-y-4">
              {[
                {
                  company: "株式会社NewTech",
                  title: "セールスマネージャー候補",
                  message: "あなたの営業経験と実績に興味を持ちました。ぜひ一度お話しさせてください。",
                  receivedDate: "今日",
                  isNew: true,
                },
                {
                  company: "ScaleUp Inc.",
                  title: "インサイドセールスリード",
                  message: "データドリブンな営業スタイルが弊社の文化にマッチすると思います。",
                  receivedDate: "昨日",
                  isNew: true,
                },
                {
                  company: "Future Corp",
                  title: "カスタマーサクセス",
                  message: "顧客対応のご経験を活かして、弊社で新しいチャレンジをしませんか？",
                  receivedDate: "3日前",
                  isNew: false,
                },
              ].map((scout, index) => (
                <Card key={index} className={scout.isNew ? "border-primary/50 bg-primary/5" : ""}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{scout.company.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <p className="font-medium">{scout.title}</p>
                            {scout.isNew && (
                              <Badge variant="default" className="text-xs">
                                NEW
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{scout.company}</p>
                          <p className="text-sm mt-2">{scout.message}</p>
                          <p className="text-xs text-muted-foreground mt-2">受信日: {scout.receivedDate}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          詳細
                        </Button>
                        <Button size="sm">返信</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">プロフィール管理</h2>
              <Button>プロフィール編集</Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>基本情報</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src="/placeholder-user.png" />
                      <AvatarFallback>田中</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold">田中 太郎</h3>
                    <p className="text-sm text-muted-foreground">営業マネージャー</p>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>経験年数:</strong> 5年
                    </p>
                    <p>
                      <strong>居住地:</strong> 東京都
                    </p>
                    <p>
                      <strong>業界:</strong> SaaS
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>スキル・経験</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">得意スキル</h4>
                    <div className="flex flex-wrap gap-2">
                      {["新規開拓営業", "既存顧客営業", "プレゼンテーション", "交渉力", "データ分析"].map(
                        (skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">主な実績</h4>
                    <p className="text-sm text-muted-foreground">
                      売上目標達成率120%、新規顧客獲得数年間50件、チームマネジメント経験3年
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">希望条件</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p>
                          <strong>期間:</strong> 3-4週間
                        </p>
                        <p>
                          <strong>開始時期:</strong> 1ヶ月以内
                        </p>
                      </div>
                      <div>
                        <p>
                          <strong>報酬:</strong> 時給2,000円〜
                        </p>
                        <p>
                          <strong>働き方:</strong> ハイブリッド
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Support Tab */}
          <TabsContent value="support" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">サポート</h2>
              <Badge variant="secondary">24時間対応</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Quick Support Options */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Send className="w-4 h-4 text-primary" />
                    </div>
                    <span>チャットサポート</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">リアルタイムでサポートチームとチャット</p>
                  <Button className="w-full" asChild>
                    <Link href="/support">チャットを開始</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-secondary" />
                    </div>
                    <span>電話サポート</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">専門スタッフによる電話相談</p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/support">予約する</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-accent" />
                    </div>
                    <span>FAQ</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">よくある質問と回答</p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/support">FAQを見る</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Support Tickets */}
            <Card>
              <CardHeader>
                <CardTitle>最近のサポート履歴</CardTitle>
                <CardDescription>過去のお問い合わせ履歴</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "TICKET-001",
                      subject: "応募書類の修正について",
                      status: "解決済み",
                      date: "2024-01-18",
                      type: "チャット",
                    },
                    {
                      id: "TICKET-002",
                      subject: "面談日程の変更",
                      status: "対応中",
                      date: "2024-01-20",
                      type: "電話",
                    },
                  ].map((ticket, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{ticket.subject}</p>
                        <p className="text-sm text-muted-foreground">
                          {ticket.id} • {ticket.type} • {ticket.date}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={ticket.status === "解決済み" ? "default" : "secondary"}>{ticket.status}</Badge>
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
        </Tabs>
      </div>
    </div>
  )
}
