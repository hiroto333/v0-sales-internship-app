import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, TrendingUp, Clock, Target, Award, Building2, UserCheck, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Proofit</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#user-flows" className="text-muted-foreground hover:text-foreground transition-colors">
              利用の流れ
            </Link>
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              特徴
            </Link>
            <Link href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">
              メリット
            </Link>
            <Link href="/internships">
              <Button variant="outline" size="sm">
                インターン一覧
              </Button>
            </Link>
            <Link href="/company/register">
              <Button variant="outline" size="sm">
                企業登録
              </Button>
            </Link>
            <Link href="/jobseeker/register">
              <Button size="sm">求職者登録</Button>
            </Link>
          </nav>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            セールス特化型インターンシップ
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            実務で確かめる
            <span className="text-primary block">カルチャーフィット</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            実働的な人員を少ないステップで短期的に確保することができる。実務を共にすることで、従来の採用活動に比べて相互理解を促進させ、採用後のギャップやミスマッチのリスクを軽減する価値を提供します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/company/register">
              <Button size="lg" className="text-lg px-8">
                企業として参加する
              </Button>
            </Link>
            <Link href="/jobseeker/register">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                候補者として応募する
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Login Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-border shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">アカウントをお持ちの方</CardTitle>
              <CardDescription>
                ログインして、応募状況の確認やスカウト機能をご利用ください。
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/company/dashboard" className="flex-1">
                <Button size="lg" className="w-full">
                  企業ログイン
                </Button>
              </a>
              <a href="/jobseeker/dashboard" className="flex-1">
                <Button size="lg" variant="outline" className="w-full bg-transparent">
                  求職者ログイン
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* User Flow Section */}
      <section id="user-flows" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">利用の流れ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              企業と求職者、それぞれの視点から見たProofitの利用フロー
            </p>
          </div>

          {/* Company Flow */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-3">
                <Building2 className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">企業側の流れ</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="relative">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg font-bold mx-auto mb-4">
                    1
                  </div>
                  <CardTitle className="text-lg">企業登録・インターン設計</CardTitle>
                  <CardDescription>
                    AIエージェントと共創してインターン内容を設計。セールス人材に最適化された研修から実務までの計画を作成
                  </CardDescription>
                </CardHeader>
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              </Card>
              <Card className="relative">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-lg font-bold mx-auto mb-4">
                    2
                  </div>
                  <CardTitle className="text-lg">募集開始・スカウト</CardTitle>
                  <CardDescription>
                    インターン募集を開始。登録ユーザーの経歴・スキルから最適な人材をスカウト機能で能動的にアプローチ
                  </CardDescription>
                </CardHeader>
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              </Card>
              <Card className="relative">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-lg font-bold mx-auto mb-4">
                    3
                  </div>
                  <CardTitle className="text-lg">書類選考・日程調整</CardTitle>
                  <CardDescription>
                    面接なしで1週間以内に書類選考。合格者とはプラットフォーム上で日程調整を実施
                  </CardDescription>
                </CardHeader>
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg font-bold mx-auto mb-4">
                    4
                  </div>
                  <CardTitle className="text-lg">実務・評価・採用判定</CardTitle>
                  <CardDescription>
                    インターン実施中はAIサポート機能でトラブル対応。終了後は相互フィードバックで正規雇用を判定
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
          
          {/* Job Seeker Flow */}
          <div>
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-3">
                <UserCheck className="w-8 h-8 text-secondary" />
                <h3 className="text-2xl font-bold">求職者側の流れ</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="relative">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-lg font-bold mx-auto mb-4">
                    1
                  </div>
                  <CardTitle className="text-lg">ユーザー登録</CardTitle>
                  <CardDescription>スキルセット、働きたい条件、セールス経験などのプロフィールを登録</CardDescription>
                </CardHeader>
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              </Card>
              <Card className="relative">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-lg font-bold mx-auto mb-4">
                    2
                  </div>
                  <CardTitle className="text-lg">インターン情報閲覧・スカウト</CardTitle>
                  <CardDescription>おすすめインターン情報を閲覧。企業からのスカウトも受け取り可能</CardDescription>
                </CardHeader>
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              </Card>
              <Card className="relative">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-lg font-bold mx-auto mb-4">
                    3
                  </div>
                  <CardTitle className="text-lg">応募・選考・日程調整</CardTitle>
                  <CardDescription>
                    興味のあるインターンに応募。書類選考通過後、プラットフォーム上で日程調整
                  </CardDescription>
                </CardHeader>
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-lg font-bold mx-auto mb-4">
                    4
                  </div>
                  <CardTitle className="text-lg">実務・評価・結果確認</CardTitle>
                  <CardDescription>
                    実務インターンを実施。カスタマーサポートも利用可能。終了後は相互評価で正規雇用の結果を確認
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">なぜProofitなのか</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              従来の面接・書類選考では見えない、実際の働き方とカルチャーフィットを確認できます
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>実務による相互理解</CardTitle>
                <CardDescription>面接では分からない実際の働き方、価値観、協働スタイルを体感できます</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>即効のキャパ補填</CardTitle>
                <CardDescription>インターン期間中も実際の成果を生み、小粒案件の前倒しが可能です</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>リスク軽減</CardTitle>
                <CardDescription>短期・有償・可逆的な仕組みで、企業・候補者双方のリスクを最小化</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>スピード採用</CardTitle>
                <CardDescription>判断材料が増えることで、採用決定までの時間を大幅に短縮</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>行動ルーブリック評価</CardTitle>
                <CardDescription>Ownership、0→1推進、Influence、Speed×Qualityで客観的評価</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>セールス特化</CardTitle>
                <CardDescription>セールス職に最適化された課題設計とKPI設定で実践的な評価</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">実務トライアルの流れ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">シンプルで効果的な4ステップのプロセス</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">マッチング</h3>
              <p className="text-muted-foreground">企業のニーズと候補者のスキルをマッチング</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">課題設定</h3>
              <p className="text-muted-foreground">2-4週間で完了可能な実務課題を設定</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">実務実行</h3>
              <p className="text-muted-foreground">実際の業務環境で課題に取り組み</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">相互評価</h3>
              <p className="text-muted-foreground">行動ルーブリックによる客観的評価</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">企業側のメリット</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">不確実性の低減</h3>
                    <p className="text-muted-foreground">入社前に価値観・働き方・協働スタイルを実観測</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">採用の質向上とスピード</h3>
                    <p className="text-muted-foreground">判断材料が増え、承諾率↑／ミスマッチ↓</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">即効のキャパ補填</h3>
                    <p className="text-muted-foreground">インターン期間中も成果を生む</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">候補者側のメリット</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">"自分事化"</h3>
                    <p className="text-muted-foreground">実務で役割・KPI・上長スタイルを体感</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">リスク低い挑戦</h3>
                    <p className="text-muted-foreground">短期・有償・可逆（合わなければ離脱しやすい）</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">スキル向上</h3>
                    <p className="text-muted-foreground">実務経験を通じた実践的なスキルアップ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">採用の新しいアプローチを始めませんか？</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            実務トライアルで、カルチャーフィットの不確実性を解消し、 質の高い採用を実現しましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/company/register">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                企業登録はこちら
              </Button>
            </Link>
            <Link href="/jobseeker/register">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                求職者登録はこちら
              </Button>
            </Link>
          </div>
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
