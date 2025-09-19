import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Target, MessageCircle, Phone, Mail, CheckCircle, AlertCircle, HelpCircle, FileText, Video } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  const tickets = [
    {
      id: "T-001",
      title: "インターン開始日の変更について",
      status: "進行中",
      priority: "中",
      category: "日程調整",
      created: "2024-01-15",
      lastUpdate: "2時間前",
      assignee: "サポート太郎",
    },
    {
      id: "T-002",
      title: "評価システムの使い方",
      status: "完了",
      priority: "低",
      category: "使い方",
      created: "2024-01-14",
      lastUpdate: "1日前",
      assignee: "サポート花子",
    },
    {
      id: "T-003",
      title: "企業との連絡が取れない",
      status: "緊急",
      priority: "高",
      category: "トラブル",
      created: "2024-01-16",
      lastUpdate: "30分前",
      assignee: "サポート次郎",
    },
  ]

  const faqs = [
    {
      category: "インターンシップについて",
      questions: [
        {
          q: "インターンシップの期間はどのくらいですか？",
          a: "通常2-4週間の短期集中型です。企業や職種によって異なりますが、実務に集中できる期間を設定しています。",
        },
        {
          q: "報酬はどのように支払われますか？",
          a: "時給制で、インターンシップ終了後に指定の口座に振り込まれます。詳細は各インターンシップの募集要項をご確認ください。",
        },
        {
          q: "複数のインターンシップに同時に応募できますか？",
          a: "はい、可能です。ただし、期間が重複する場合は事前にご相談ください。",
        },
      ],
    },
    {
      category: "応募・選考について",
      questions: [
        {
          q: "選考にはどのくらい時間がかかりますか？",
          a: "書類選考は通常1週間以内に結果をお知らせします。面接がある場合は追加で1週間程度かかります。",
        },
        {
          q: "選考結果はどのように通知されますか？",
          a: "プラットフォーム内の通知とメールでお知らせします。マイページからも確認できます。",
        },
      ],
    },
    {
      category: "評価・フィードバックについて",
      questions: [
        {
          q: "評価はどのように行われますか？",
          a: "行動ルーブリック評価を使用し、Ownership、0→1推進、Influence、Speed×Qualityの4つの観点で評価します。",
        },
        {
          q: "フィードバックはいつもらえますか？",
          a: "インターンシップ終了後1週間以内に、企業からの詳細なフィードバックをお渡しします。",
        },
      ],
    },
  ]

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
            <Link href="/support" className="text-foreground font-medium">
              サポート
            </Link>
            <Button variant="outline" size="sm">
              ログアウト
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">カスタマーサポート</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            インターンシップ中のお困りごとやご質問に、専門スタッフが迅速にお答えします
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>チャットサポート</CardTitle>
                <CardDescription>リアルタイムでスタッフとチャット</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">平日 9:00-18:00</p>
                <Button className="w-full">チャットを開始</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>電話サポート</CardTitle>
                <CardDescription>緊急時は電話でご相談</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">03-1234-5678</p>
                <Button variant="outline" className="w-full bg-transparent">
                  電話をかける
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>メールサポート</CardTitle>
                <CardDescription>詳細な質問はメールで</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">24時間以内に返信</p>
                <Button variant="outline" className="w-full bg-transparent">
                  メールを送る
                </Button>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="tickets" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="tickets">サポートチケット</TabsTrigger>
              <TabsTrigger value="new-ticket">新規問い合わせ</TabsTrigger>
              <TabsTrigger value="faq">よくある質問</TabsTrigger>
              <TabsTrigger value="resources">リソース</TabsTrigger>
            </TabsList>

            <TabsContent value="tickets" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">あなたのサポートチケット</h2>
                <Button>新しいチケットを作成</Button>
              </div>

              <div className="space-y-4">
                {tickets.map((ticket) => (
                  <Card key={ticket.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">{ticket.id}</Badge>
                          <CardTitle className="text-lg">{ticket.title}</CardTitle>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              ticket.status === "完了"
                                ? "default"
                                : ticket.status === "緊急"
                                  ? "destructive"
                                  : "secondary"
                            }
                          >
                            {ticket.status}
                          </Badge>
                          <Badge
                            variant={
                              ticket.priority === "高"
                                ? "destructive"
                                : ticket.priority === "中"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {ticket.priority}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>カテゴリ: {ticket.category}</span>
                        <span>作成日: {ticket.created}</span>
                        <span>最終更新: {ticket.lastUpdate}</span>
                        <span>担当: {ticket.assignee}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button size="sm">詳細を見る</Button>
                        <Button variant="outline" size="sm">
                          返信する
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="new-ticket" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">新しいサポートチケットを作成</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">カテゴリ</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="問い合わせの種類を選択" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="technical">技術的な問題</SelectItem>
                              <SelectItem value="schedule">日程調整</SelectItem>
                              <SelectItem value="evaluation">評価について</SelectItem>
                              <SelectItem value="payment">報酬について</SelectItem>
                              <SelectItem value="other">その他</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">優先度</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="優先度を選択" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">低</SelectItem>
                              <SelectItem value="medium">中</SelectItem>
                              <SelectItem value="high">高</SelectItem>
                              <SelectItem value="urgent">緊急</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">件名</label>
                        <Input placeholder="問い合わせの件名を入力してください" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">詳細</label>
                        <Textarea placeholder="問題の詳細や状況を具体的に記載してください..." rows={6} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">添付ファイル（任意）</label>
                        <Input type="file" multiple />
                        <p className="text-xs text-muted-foreground">
                          スクリーンショットやドキュメントを添付できます（最大5MB）
                        </p>
                      </div>
                      <Button className="w-full">チケットを送信</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">よくある質問</h2>
                <div className="space-y-6">
                  {faqs.map((category, categoryIndex) => (
                    <Card key={categoryIndex}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <HelpCircle className="w-5 h-5" />
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {category.questions.map((faq, faqIndex) => (
                            <div key={faqIndex} className="border-l-2 border-primary/20 pl-4">
                              <h4 className="font-medium mb-2">{faq.q}</h4>
                              <p className="text-sm text-muted-foreground">{faq.a}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">サポートリソース</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">ユーザーガイド</CardTitle>
                          <CardDescription>プラットフォームの使い方を詳しく解説</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full bg-transparent">
                        ガイドを見る
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                          <Video className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">チュートリアル動画</CardTitle>
                          <CardDescription>動画で学ぶプラットフォーム活用法</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full bg-transparent">
                        動画を見る
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">成功事例</CardTitle>
                          <CardDescription>他の利用者の成功体験を参考に</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full bg-transparent">
                        事例を見る
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <AlertCircle className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">トラブルシューティング</CardTitle>
                          <CardDescription>よくある問題の解決方法</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full bg-transparent">
                        解決方法を見る
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-8 px-4 bg-destructive/5 border-t border-destructive/20">
        <div className="container mx-auto">
          <Card className="border-destructive/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-destructive" />
                <div>
                  <CardTitle className="text-destructive">緊急時のお問い合わせ</CardTitle>
                  <CardDescription>
                    インターンシップ中に緊急事態が発生した場合は、以下の連絡先までお電話ください
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">緊急連絡先: 03-1234-5678</span>
                </div>
                <Badge variant="destructive">24時間対応</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
