import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Target, MapPin, Clock, DollarSign, Users, Search, Filter, Building2, Star } from "lucide-react"
import Link from "next/link"

export default function InternshipsPage() {
  const internships = [
    {
      id: 1,
      title: "SaaS営業インターン",
      company: "TechStart株式会社",
      location: "東京都渋谷区",
      duration: "3週間",
      salary: "時給2,500円",
      type: "新規開拓営業",
      description:
        "急成長中のSaaSスタートアップで新規顧客開拓を担当。リード獲得からクロージングまでの一連の営業プロセスを経験できます。",
      requirements: ["営業経験2年以上", "SaaS業界への興味", "新規開拓経験"],
      skills: ["新規開拓", "SaaS", "B2B営業"],
      rating: 4.8,
      applications: 12,
      featured: true,
    },
    {
      id: 2,
      title: "インサイドセールス",
      company: "Growth Marketing Inc.",
      location: "東京都港区",
      duration: "4週間",
      salary: "時給2,200円",
      type: "インサイドセールス",
      description: "マーケティングツールのインサイドセールスチームで、リード育成からアポイント獲得までを担当します。",
      requirements: ["電話営業経験", "CRM操作経験", "コミュニケーション能力"],
      skills: ["インサイドセールス", "リード育成", "CRM"],
      rating: 4.6,
      applications: 8,
      featured: false,
    },
    {
      id: 3,
      title: "カスタマーサクセス",
      company: "Digital Solutions Ltd.",
      location: "東京都新宿区",
      duration: "2週間",
      salary: "時給2,800円",
      type: "カスタマーサクセス",
      description: "既存顧客の成功支援とアップセル・クロスセルを通じて、顧客満足度向上と売上拡大を目指します。",
      requirements: ["顧客対応経験", "データ分析スキル", "提案力"],
      skills: ["カスタマーサクセス", "アップセル", "データ分析"],
      rating: 4.9,
      applications: 15,
      featured: true,
    },
    {
      id: 4,
      title: "フィールドセールス",
      company: "Enterprise Solutions Co.",
      location: "東京都千代田区",
      duration: "4週間",
      salary: "時給3,000円",
      type: "フィールドセールス",
      description: "大手企業向けのエンタープライズソリューション営業。提案から契約まで高額案件を担当します。",
      requirements: ["法人営業経験3年以上", "提案書作成スキル", "プレゼンテーション能力"],
      skills: ["エンタープライズ営業", "提案営業", "大型案件"],
      rating: 4.7,
      applications: 6,
      featured: false,
    },
    {
      id: 5,
      title: "セールスオペレーション",
      company: "Sales Tech Startup",
      location: "東京都品川区",
      duration: "3週間",
      salary: "時給2,400円",
      type: "セールスオペレーション",
      description: "営業チームの効率化とプロセス改善を担当。データ分析と営業支援ツールの活用がメインです。",
      requirements: ["Excel/スプレッドシート上級", "データ分析経験", "営業プロセス理解"],
      skills: ["セールスオペレーション", "データ分析", "プロセス改善"],
      rating: 4.5,
      applications: 9,
      featured: false,
    },
    {
      id: 6,
      title: "パートナーセールス",
      company: "Partnership Dynamics",
      location: "東京都中央区",
      duration: "3週間",
      salary: "時給2,600円",
      type: "パートナーセールス",
      description: "戦略的パートナーとの関係構築と共同営業を通じて、新たなビジネス機会を創出します。",
      requirements: ["パートナー営業経験", "関係構築スキル", "戦略的思考"],
      skills: ["パートナーセールス", "関係構築", "戦略営業"],
      rating: 4.4,
      applications: 7,
      featured: false,
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
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              ホーム
            </Link>
            <Link href="/internships" className="text-foreground font-medium">
              インターン一覧
            </Link>
            <Link href="/company/register">
              <Button variant="outline" size="sm">
                企業ログイン
              </Button>
            </Link>
            <Link href="/jobseeker/register">
              <Button size="sm">求職者登録</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">募集中のインターンシップ</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              セールス特化型の実務インターンシップで、あなたのキャリアを次のステージへ
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="職種、企業名、キーワードで検索..." className="pl-10" />
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="職種" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="new-business">新規開拓営業</SelectItem>
                    <SelectItem value="inside-sales">インサイドセールス</SelectItem>
                    <SelectItem value="customer-success">カスタマーサクセス</SelectItem>
                    <SelectItem value="field-sales">フィールドセールス</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="期間" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="2weeks">2週間</SelectItem>
                    <SelectItem value="3weeks">3週間</SelectItem>
                    <SelectItem value="4weeks">4週間</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="場所" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべて</SelectItem>
                    <SelectItem value="shibuya">渋谷区</SelectItem>
                    <SelectItem value="minato">港区</SelectItem>
                    <SelectItem value="shinjuku">新宿区</SelectItem>
                    <SelectItem value="chiyoda">千代田区</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Listings */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">{internships.length}件のインターンシップが見つかりました</p>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="並び替え" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">新着順</SelectItem>
                <SelectItem value="salary-high">時給の高い順</SelectItem>
                <SelectItem value="rating">評価の高い順</SelectItem>
                <SelectItem value="applications">応募者数順</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {internships.map((internship) => (
              <Card
                key={internship.id}
                className={`hover:shadow-lg transition-shadow ${internship.featured ? "ring-2 ring-primary/20" : ""}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{internship.title}</CardTitle>
                        {internship.featured && (
                          <Badge variant="default" className="text-xs">
                            注目
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{internship.company}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{internship.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{internship.salary}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{internship.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="w-3 h-3" />
                        <span>{internship.applications}名応募</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2">
                      {internship.type}
                    </Badge>
                    <CardDescription className="text-sm leading-relaxed">{internship.description}</CardDescription>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">必要なスキル・経験</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {internship.requirements.map((req, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {internship.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      応募する
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
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              さらに読み込む
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">理想のインターンシップが見つからない？</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            プロフィールを登録すると、あなたにぴったりのインターンシップをスカウトでお知らせします
          </p>
          <Link href="/jobseeker/register">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              プロフィールを登録する
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Proofit</span>
              </div>
              <p className="text-muted-foreground">セールス特化型インターンシップで、採用の新しい形を提供します。</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">企業向け</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/company/register" className="hover:text-foreground transition-colors">
                    企業登録
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    料金プラン
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    導入事例
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">候補者向け</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/jobseeker/register" className="hover:text-foreground transition-colors">
                    求職者登録
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    よくある質問
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    成功事例
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">サポート</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    お問い合わせ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition-colors">
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Proofit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
