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
import { Building2, Target, Users, Sparkles, ArrowRight, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"

export default function CompanyRegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Company Info
    companyName: "",
    industry: "",
    companySize: "",
    website: "",
    description: "",

    // Step 2: Internship Design
    internshipTitle: "",
    department: "",
    duration: "",
    compensation: "",
    requirements: "",
    projectDescription: "",

    // Step 3: AI Collaboration
    targetSkills: [] as string[],
    workStyle: "",
    kpis: "",
    mentorStyle: "",

    // Step 4: Contract
    agreedToTerms: false,
    agreedToPrivacy: false,
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
    alert("企業登録が完了しました！AIエージェントがインターン設計をサポートします。")
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
          <Badge variant="secondary">企業登録</Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">企業登録</h1>
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
              <span>企業情報</span>
            </div>
            <div
              className={`flex items-center space-x-2 ${currentStep >= 2 ? "text-primary" : "text-muted-foreground"}`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${currentStep >= 2 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                {currentStep > 2 ? <Check className="w-4 h-4" /> : "2"}
              </div>
              <span>インターン設計</span>
            </div>
            <div
              className={`flex items-center space-x-2 ${currentStep >= 3 ? "text-primary" : "text-muted-foreground"}`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${currentStep >= 3 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                {currentStep > 3 ? <Check className="w-4 h-4" /> : "3"}
              </div>
              <span>AI共創</span>
            </div>
            <div
              className={`flex items-center space-x-2 ${currentStep >= 4 ? "text-primary" : "text-muted-foreground"}`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center ${currentStep >= 4 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                4
              </div>
              <span>契約</span>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <Card>
          <CardHeader>
            {currentStep === 1 && (
              <>
                <div className="flex items-center space-x-2 mb-2">
                  <Building2 className="w-6 h-6 text-primary" />
                  <CardTitle>企業情報の登録</CardTitle>
                </div>
                <CardDescription>
                  まずは基本的な企業情報を教えてください。この情報は求職者に公開されます。
                </CardDescription>
              </>
            )}
            {currentStep === 2 && (
              <>
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-6 h-6 text-primary" />
                  <CardTitle>インターン内容の設計</CardTitle>
                </div>
                <CardDescription>
                  募集するインターンシップの詳細を設定してください。セールス職に特化した内容で設計します。
                </CardDescription>
              </>
            )}
            {currentStep === 3 && (
              <>
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <CardTitle>AIエージェントとの共創</CardTitle>
                </div>
                <CardDescription>
                  AIエージェントがあなたの要望に基づいて、最適なインターン設計をサポートします。
                </CardDescription>
              </>
            )}
            {currentStep === 4 && (
              <>
                <div className="flex items-center space-x-2 mb-2">
                  <Check className="w-6 h-6 text-primary" />
                  <CardTitle>利用規約と契約</CardTitle>
                </div>
                <CardDescription>最後に利用規約をご確認いただき、プラットフォームの利用を開始します。</CardDescription>
              </>
            )}
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Step 1: Company Info */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">会社名 *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="株式会社○○"
                    />
                  </div>
                  <div>
                    <Label htmlFor="website">ウェブサイト</Label>
                    <Input
                      id="website"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="industry">業界 *</Label>
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
                    <Label htmlFor="companySize">従業員数 *</Label>
                    <Select
                      value={formData.companySize}
                      onValueChange={(value) => setFormData({ ...formData, companySize: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="従業員数を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10名</SelectItem>
                        <SelectItem value="11-50">11-50名</SelectItem>
                        <SelectItem value="51-200">51-200名</SelectItem>
                        <SelectItem value="201-500">201-500名</SelectItem>
                        <SelectItem value="500+">500名以上</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">会社概要 *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="事業内容、企業文化、ミッションなどを記載してください"
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Internship Design */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="internshipTitle">インターンシップタイトル *</Label>
                    <Input
                      id="internshipTitle"
                      value={formData.internshipTitle}
                      onChange={(e) => setFormData({ ...formData, internshipTitle: e.target.value })}
                      placeholder="セールスインターン"
                    />
                  </div>
                  <div>
                    <Label htmlFor="department">配属部署 *</Label>
                    <Select
                      value={formData.department}
                      onValueChange={(value) => setFormData({ ...formData, department: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="部署を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">営業部</SelectItem>
                        <SelectItem value="inside-sales">インサイドセールス</SelectItem>
                        <SelectItem value="customer-success">カスタマーサクセス</SelectItem>
                        <SelectItem value="business-dev">事業開発</SelectItem>
                        <SelectItem value="marketing">マーケティング</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="duration">期間 *</Label>
                    <Select
                      value={formData.duration}
                      onValueChange={(value) => setFormData({ ...formData, duration: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="期間を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2weeks">2週間</SelectItem>
                        <SelectItem value="3weeks">3週間</SelectItem>
                        <SelectItem value="4weeks">4週間</SelectItem>
                        <SelectItem value="custom">カスタム</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="compensation">報酬 *</Label>
                    <Input
                      id="compensation"
                      value={formData.compensation}
                      onChange={(e) => setFormData({ ...formData, compensation: e.target.value })}
                      placeholder="時給2,000円〜"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="requirements">求める人材・スキル *</Label>
                  <Textarea
                    id="requirements"
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="営業経験3年以上、新規開拓経験、コミュニケーション能力など"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="projectDescription">プロジェクト内容 *</Label>
                  <Textarea
                    id="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="具体的な業務内容、目標、期待する成果などを記載してください"
                    rows={4}
                  />
                </div>
              </div>
            )}

            {/* Step 3: AI Collaboration */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-primary">AIエージェントからの提案</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    入力いただいた情報を基に、最適なインターン設計を提案します。以下の項目を調整してください。
                  </p>
                </div>

                <div>
                  <Label>重視するスキル（複数選択可）</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                    {skillOptions.map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={skill}
                          checked={formData.targetSkills.includes(skill)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({ ...formData, targetSkills: [...formData.targetSkills, skill] })
                            } else {
                              setFormData({
                                ...formData,
                                targetSkills: formData.targetSkills.filter((s) => s !== skill),
                              })
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
                  <Label htmlFor="workStyle">働き方・文化 *</Label>
                  <Select
                    value={formData.workStyle}
                    onValueChange={(value) => setFormData({ ...formData, workStyle: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="働き方を選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="autonomous">自律的・裁量重視</SelectItem>
                      <SelectItem value="collaborative">チーム協働重視</SelectItem>
                      <SelectItem value="data-driven">データドリブン</SelectItem>
                      <SelectItem value="customer-first">顧客第一主義</SelectItem>
                      <SelectItem value="speed">スピード重視</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="kpis">評価指標・KPI *</Label>
                  <Textarea
                    id="kpis"
                    value={formData.kpis}
                    onChange={(e) => setFormData({ ...formData, kpis: e.target.value })}
                    placeholder="アポ獲得数、商談化率、売上貢献額など具体的なKPIを記載"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="mentorStyle">メンター・上長のスタイル *</Label>
                  <Select
                    value={formData.mentorStyle}
                    onValueChange={(value) => setFormData({ ...formData, mentorStyle: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="メンタリングスタイルを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hands-on">ハンズオン指導</SelectItem>
                      <SelectItem value="coaching">コーチング重視</SelectItem>
                      <SelectItem value="goal-oriented">目標設定・進捗管理</SelectItem>
                      <SelectItem value="feedback-rich">フィードバック重視</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 4: Contract */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">登録内容の確認</h3>
                  <div className="space-y-2 text-sm text-green-700">
                    <p>
                      <strong>会社名:</strong> {formData.companyName}
                    </p>
                    <p>
                      <strong>インターンシップ:</strong> {formData.internshipTitle}
                    </p>
                    <p>
                      <strong>期間:</strong> {formData.duration}
                    </p>
                    <p>
                      <strong>報酬:</strong> {formData.compensation}
                    </p>
                  </div>
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
                        に同意します
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="privacy"
                      checked={formData.agreedToPrivacy}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreedToPrivacy: !!checked })}
                    />
                    <div>
                      <Label htmlFor="privacy" className="text-sm">
                        <Link href="#" className="text-primary hover:underline">
                          プライバシーポリシー
                        </Link>
                        に同意します
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">次のステップ</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• AIエージェントがインターン設計を最適化</li>
                    <li>• 求職者への公開とマッチング開始</li>
                    <li>• スカウト機能の利用開始</li>
                    <li>• 応募者の管理とスクリーニング</li>
                  </ul>
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
