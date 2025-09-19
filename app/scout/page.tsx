import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Target, Search, Users, Star, Send, Eye, Heart } from "lucide-react"
import Link from "next/link"

export default function ScoutPage() {
  const candidates = [
    {
      id: 1,
      name: "田中 太郎",
      age: 28,
      location: "東京都",
      experience: "SaaS営業 3年",
      skills: ["新規開拓", "SaaS", "B2B営業", "プレゼンテーション"],
      previousRole: "営業マネージャー",
      education: "早稲田大学 商学部",
      achievements: ["年間売上目標120%達成", "新規顧客獲得数社内1位"],
      availability: "即日可能",
      expectedSalary: "時給2,500円〜",
      rating: 4.8,
      matchScore: 95,
      profileViews: 24,
      scoutReceived: 8,
      lastActive: "2時間前",
    },
    {
      id: 2,
      name: "佐藤 花子",
      age: 26,
      location: "東京都",
      experience: "インサイドセールス 2年",
      skills: ["インサイドセールス", "CRM", "リード育成", "データ分析"],
      previousRole: "インサイドセールス",
      education: "慶應義塾大学 経済学部",
      achievements: ["アポイント獲得率150%向上", "顧客満足度95%維持"],
      availability: "2週間後",
      expectedSalary: "時給2,200円〜",
      rating: 4.6,
      matchScore: 88,
      profileViews: 18,
      scoutReceived: 5,
      lastActive: "1日前",
    },
    {
      id: 3,
      name: "山田 次郎",
      age: 30,
      location: "神奈川県",
      experience: "エンタープライズ営業 5年",
      skills: ["エンタープライズ営業", "提案営業", "大型案件", "契約交渉"],
      previousRole: "シニア営業",
      education: "東京大学 法学部",
      achievements: ["大型案件3件成約", "売上貢献度部門トップ"],
      availability: "1ヶ月後",
      expectedSalary: "時給3,000円〜",
      rating: 4.9,
      matchScore: 92,
      profileViews: 31,
      scoutReceived: 12,
      lastActive: "30分前",
    },
    {
      id: 4,
      name: "鈴木 美咲",
      age: 24,
      location: "東京都",
      experience: "カスタマーサクセス 1年",
      skills: ["カスタマーサクセス", "アップセル", "顧客対応", "データ分析"],
      previousRole: "カスタマーサクセス",
      education: "上智大学 外国語学部",
      achievements: ["顧客継続率98%達成", "アップセル売上200%向上"],
      availability: "即日可能",
      expectedSalary: "時給2,300円〜",
      rating: 4.7,
      matchScore: 85,
      profileViews: 15,
      scoutReceived: 6,
      lastActive: "5時間前",
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
            <Link href="/company/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              ダッシュボード
            </Link>
            <Link href="/scout" className="text-foreground font-medium">
              スカウト
            </Link>
            <Link href="/company/internships" className="text-muted-foreground hover:text-foreground transition-colors">
              インターン管理
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">候補者スカウト</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AIマッチングで最適な人材を見つけて、直接スカウトを送信しましょう
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="スキル、経験、キーワードで検索..." className="pl-10" />
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="経験年数" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="1-2">1-2年</SelectItem>
                    <SelectItem value="3-5">3-5年</SelectItem>
                    <SelectItem value="5+">5年以上</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="場所" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="tokyo">東京都</SelectItem>
                    <SelectItem value="kanagawa">神奈川県</SelectItem>
                    <SelectItem value="osaka">大阪府</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="マッチ度" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="high">90%以上</SelectItem>
                    <SelectItem value="medium">80%以上</SelectItem>
                    <SelectItem value="low">70%以上</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate List */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">{candidates.length}名の候補者が見つかりました</p>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="並び替え" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="match">マッチ度順</SelectItem>
                <SelectItem value="rating">評価順</SelectItem>
                <SelectItem value="experience">経験年数順</SelectItem>
                <SelectItem value="active">最終ログイン順</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {candidates.map((candidate) => (
              <Card key={candidate.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{candidate.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {candidate.age}歳 • {candidate.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span>{candidate.experience}</span>
                        <span>{candidate.education}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{candidate.lastActive}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        マッチ度 {candidate.matchScore}%
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">スキル</h4>
                    <div className="flex flex-wrap gap-1">
                      {candidate.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">主な実績</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {candidate.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                    <div>
                      <span className="text-muted-foreground">開始可能時期:</span>
                      <p className="font-medium">{candidate.availability}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">希望時給:</span>
                      <p className="font-medium">{candidate.expectedSalary}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{candidate.profileViews}回閲覧</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        <span>{candidate.scoutReceived}件スカウト</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{candidate.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      <Send className="w-4 h-4 mr-2" />
                      スカウト送信
                    </Button>
                    <Button variant="outline" size="sm">
                      詳細を見る
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              さらに読み込む
            </Button>
          </div>
        </div>
      </section>

      {/* Scout Message Modal would go here */}
    </div>
  )
}
