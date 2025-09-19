"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { UserCheck, Target, Briefcase, Upload, ArrowRight, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"

export default function JobSeekerRegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    fullName: "",
    email: "",
    phone: "",
    location: "",

    // Step 2: Experience & Skills
    salesExperience: "",
    currentRole: "",
    industry: "",
    skills: [] as string[],
    achievements: "",

    // Step 3: Preferences
    preferredDuration: "",
    preferredStartDate: "",
    expectedCompensation: "",
    workStyle: "",
    motivation: "",

    // Step 4: Documents
    resumeUploaded: false,
    portfolioUploaded: false,
    agreedToTerms: false,
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    alert("求職者登録が完了しました！おすすめのインターンシップをご紹介します。")
    // Here would be the actual registration logic
  }

  const skillOptions = [
    "新規開拓営業",
    "既存顧客営業",
    "インサイドセールス",
    "フィールドセールス",
    "カスタマーサクセス",
    "営業企画",
    "マーケティング",
    "プレゼンテーション",
    "交渉力",
    "データ分析",
    "CRM活用",
    "チームマネジメント",
    "顧客対応",
    "提案書作成",
  ]

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
          <Badge variant="secondary">求職者登録</Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">求職者登録</h1>
            <div className="text-sm text-muted-foreground">
              ステップ {currentStep} / {totalSteps}
            </div>
          </div>
          <Progress value={progress} className="h-2" />

          <div className="flex justify-between mt-4 text-sm">
            <div
              className={`flex items-center space-x-2 ${currentStep >= 1 ? "text-primary" : "text-muted-foreground"}`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${currentStep >= 1 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                {currentStep > 1 ? <Check className="w-4 h-4" /> : "1"}
              </div>
              <span>基本情報</span>
            </div>
            <div
              className={`flex items-center space-x-2 ${currentStep >= 2 ? "text-primary" : "text-muted-foreground"}`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${currentStep >= 2 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                {currentStep > 2 ? <Check className="w-4 h-4" /> : "2"}
              </div>
              <span>経験・スキル</span>
            </div>
            <div
              className={`flex items-center space-x-2 ${currentStep >= 3 ? "text-primary" : "text-muted-foreground"}`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${currentStep >= 3 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                {currentStep > 3 ? <Check className="w-4 h-4" /> : "3"}
              </div>
              <span>希望条件</span>
            </div>
            <div
              className={`flex items-center space-x-2 ${currentStep >= 4 ? "text-primary" : "text-muted-foreground"}`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${currentStep >= 4 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                4
              </div>
              <span>書類提出</span>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <Card>
          <CardHeader>
            {currentStep === 1 && (
              <>
                <div className="flex items-center space-x-2 mb-2">
                  <UserCheck className="w-6 h-6 text-primary" />
                  <CardTitle>基本情報の入力</CardTitle>
                </div>
                <CardDescription>
                  まずは基本的な情報を教えてください。この情報は企業とのマッチングに使用されます。
                </CardDescription>
              </>
            )}
            {currentStep === 2 && (
              <>
                <div className="flex items-center space-x-2 mb-2">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <CardTitle>経験・スキルの登録</CardTitle>
                </div>
                <CardDescription>
                  あなたの営業経験とスキルセットを詳しく教えてください。最適なマッチングのために重要な情報です。
                </CardDescription>
              </>
            )}
            {currentStep === 3 && (
              <>
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-6 h-6 text-primary" />
                  <CardTitle>希望条件の設定</CardTitle>
                </div>
                <CardDescription>インターンシップに対する希望条件や志望動機を教えてください。</CardDescription>
              </>
            )}
            {currentStep === 4 && (
              <>
                <div className="flex items-center space-x-2 mb-2">
                  <Upload className="w-6 h-6 text-primary" />
                  <CardTitle>書類の提出</CardTitle>
                </div>
                <CardDescription>履歴書とポートフォリオ（任意）をアップロードしてください。</CardDescription>
              </>
            )}
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">氏名 *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">メールアドレス *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">電話番号 *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="090-1234-5678"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">居住地 *</Label>
                    <Select
                      value={formData.location}
                      onValueChange={(value) => setFormData({ ...formData, location: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="居住地を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tokyo">東京都</SelectItem>
                        <SelectItem value="osaka">大阪府</SelectItem>
                        <SelectItem value="nagoya">愛知県</SelectItem>
                        <SelectItem value="fukuoka">福岡県</SelectItem>
                        <SelectItem value="other">その他</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Experience & Skills */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="salesExperience">営業経験年数 *</Label>
                    <Select
                      value={formData.salesExperience}
                      onValueChange={(value) => setFormData({ ...formData, salesExperience: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="経験年数を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">1年未満</SelectItem>
                        <SelectItem value="1-3">1-3年</SelectItem>
                        <SelectItem value="3-5">3-5年</SelectItem>
                        <SelectItem value="5-10">5-10年</SelectItem>
                        <SelectItem value="10+">10年以上</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="currentRole">現在の職種 *</Label>
                    <Input
                      id="currentRole"
                      value={formData.currentRole}
                      onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                      placeholder="営業マネージャー"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="industry">業界経験 *</Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => setFormData({ ...formData, industry: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="業界を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="saas">SaaS</SelectItem>
                      <SelectItem value="fintech">FinTech</SelectItem>
                      <SelectItem value="ecommerce">EC・小売</SelectItem>
                      <SelectItem value="consulting">コンサルティング</SelectItem>
                      <SelectItem value="manufacturing">製造業</SelectItem>
                      <SelectItem value="healthcare">ヘルスケア</SelectItem>
                      <SelectItem value="education">教育</SelectItem>
                      <SelectItem value="other">その他</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>得意なスキル（複数選択可）*</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    {skillOptions.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={skill}
                          checked={formData.skills.includes(skill)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({ ...formData, skills: [...formData.skills, skill] })
                            } else {
                              setFormData({ ...formData, skills: formData.skills.filter((s) => s !== skill) })
                            }
                          }}
                        />
                        <Label htmlFor={skill} className="text-sm">
                          {skill}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="achievements">主な実績・成果 *</Label>
                  <Textarea
                    id="achievements"
                    value={formData.achievements}
                    onChange={(e) => setFormData({ ...formData, achievements: e.target.value })}
                    placeholder="売上目標達成率120%、新規顧客獲得数○○件など具体的な実績を記載してください"
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="preferredDuration">希望期間 *</Label>
                    <Select
                      value={formData.preferredDuration}
                      onValueChange={(value) => setFormData({ ...formData, preferredDuration: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="期間を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2weeks">2週間</SelectItem>
                        <SelectItem value="3weeks">3週間</SelectItem>
                        <SelectItem value="4weeks">4週間</SelectItem>
                        <SelectItem value="flexible">相談可</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="preferredStartDate">希望開始時期 *</Label>
                    <Select
                      value={formData.preferredStartDate}
                      onValueChange={(value) => setFormData({ ...formData, preferredStartDate: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="開始時期を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediately">すぐに</SelectItem>
                        <SelectItem value="1month">1ヶ月以内</SelectItem>
                        <SelectItem value="2months">2ヶ月以内</SelectItem>
                        <SelectItem value="3months">3ヶ月以内</SelectItem>
                        <SelectItem value="flexible">相談可</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expectedCompensation">希望報酬 *</Label>
                    <Input
                      id="expectedCompensation"
                      value={formData.expectedCompensation}
                      onChange={(e) => setFormData({ ...formData, expectedCompensation: e.target.value })}
                      placeholder="時給2,000円〜"
                    />
                  </div>
                  <div>
                    <Label htmlFor="workStyle">希望する働き方 *</Label>
                    <Select
                      value={formData.workStyle}
                      onValueChange={(value) => setFormData({ ...formData, workStyle: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="働き方を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="remote">リモート中心</SelectItem>
                        <SelectItem value="office">オフィス中心</SelectItem>
                        <SelectItem value="hybrid">ハイブリッド</SelectItem>
                        <SelectItem value="flexible">相談可</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="motivation">志望動機・インターンで実現したいこと *</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    placeholder="なぜインターンシップに参加したいのか、どのような経験を積みたいのかを記載してください"
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Documents */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-dashed">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">履歴書 *</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          PDF形式でアップロードしてください（最大5MB）
                        </p>
                        <Button variant="outline" onClick={() => setFormData({ ...formData, resumeUploaded: true })}>
                          {formData.resumeUploaded ? "アップロード済み" : "ファイルを選択"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-dashed">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">ポートフォリオ（任意）</h3>
                        <p className="text-sm text-muted-foreground mb-4">営業資料、実績資料などがあればアップロード</p>
                        <Button variant="outline" onClick={() => setFormData({ ...formData, portfolioUploaded: true })}>
                          {formData.portfolioUploaded ? "アップロード済み" : "ファイルを選択"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={formData.agreedToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreedToTerms: !!checked })}
                    />
                    <div>
                      <Label htmlFor="terms" className="text-sm">
                        <Link href="#" className="text-primary hover:underline">
                          利用規約
                        </Link>
                        および
                        <Link href="#" className="text-primary hover:underline">
                          プライバシーポリシー
                        </Link>
                        に同意します
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">登録完了後の流れ</h3>
                  <div className="space-y-2 text-sm text-green-700">
                    <p>• おすすめのインターンシップをご紹介</p>
                    <p>• 企業からのスカウトを受信</p>
                    <p>• 興味のある案件に応募</p>
                    <p>• 書類選考・面談</p>
                    <p>• インターンシップ開始</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="flex items-center space-x-2 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>前へ</span>
          </Button>

          {currentStep < totalSteps ? (
            <Button onClick={handleNext} className="flex items-center space-x-2">
              <span>次へ</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={!formData.agreedToTerms} className="flex items-center space-x-2">
              <span>登録完了</span>
              <Check className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
