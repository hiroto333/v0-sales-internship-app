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
import {
  Target,
  ArrowLeft,
  ArrowRight,
  Upload,
  CheckCircle,
  Clock,
  Users,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // Experience
    experience: "",
    skills: [],
    previousRole: "",
    // Preferences
    preferredDuration: "",
    availableStart: "",
    motivation: "",
    // Documents
    resume: null,
    portfolio: null,
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
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
            <span className="text-sm text-muted-foreground">
              ステップ {currentStep} / {totalSteps}
            </span>
            <Progress value={progress} className="w-32" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">インターンシップ応募</h1>
          <p className="text-muted-foreground">セールス特化型インターンシップに応募して、実務経験を積みましょう</p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
                </div>
                {step < 4 && <div className={`w-12 h-0.5 mx-2 ${step < currentStep ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <Card className="mb-8">
          <CardContent className="p-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">基本情報</h2>
                  <p className="text-muted-foreground">あなたの基本情報を入力してください</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">姓</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="田中"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">名</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="太郎"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="tanaka@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">電話番号</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="090-1234-5678"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Experience & Skills */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">経験・スキル</h2>
                  <p className="text-muted-foreground">あなたの職歴とスキルについて教えてください</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">セールス経験年数</Label>
                  <Select onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="経験年数を選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1年</SelectItem>
                      <SelectItem value="1-3">1-3年</SelectItem>
                      <SelectItem value="3-5">3-5年</SelectItem>
                      <SelectItem value="5+">5年以上</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="previousRole">直近の職種</Label>
                  <Input
                    id="previousRole"
                    value={formData.previousRole}
                    onChange={(e) => handleInputChange("previousRole", e.target.value)}
                    placeholder="例: インサイドセールス、フィールドセールス"
                  />
                </div>

                <div className="space-y-2">
                  <Label>得意分野（複数選択可）</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "新規開拓",
                      "既存顧客フォロー",
                      "プレゼンテーション",
                      "データ分析",
                      "チームマネジメント",
                      "戦略立案",
                    ].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={skill}
                          onCheckedChange={(checked) => {
                            const currentSkills = formData.skills || []
                            if (checked) {
                              handleInputChange("skills", [...currentSkills, skill])
                            } else {
                              handleInputChange(
                                "skills",
                                currentSkills.filter((s) => s !== skill),
                              )
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
              </div>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">希望条件</h2>
                  <p className="text-muted-foreground">インターンシップの希望条件を設定してください</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredDuration">希望期間</Label>
                  <Select onValueChange={(value) => handleInputChange("preferredDuration", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="希望期間を選択してください" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2weeks">2週間</SelectItem>
                      <SelectItem value="3weeks">3週間</SelectItem>
                      <SelectItem value="4weeks">4週間</SelectItem>
                      <SelectItem value="flexible">柔軟に対応可能</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availableStart">開始可能日</Label>
                  <Input
                    id="availableStart"
                    type="date"
                    value={formData.availableStart}
                    onChange={(e) => handleInputChange("availableStart", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">志望動機</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    placeholder="なぜこのインターンシップに参加したいのか、どのような成長を期待しているかを教えてください"
                    rows={5}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Documents */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">書類提出</h2>
                  <p className="text-muted-foreground">必要な書類をアップロードしてください</p>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>履歴書 *</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-1">
                        クリックまたはドラッグ&ドロップでファイルをアップロード
                      </p>
                      <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (最大5MB)</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>ポートフォリオ（任意）</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-1">過去の実績や成果物があればアップロード</p>
                      <p className="text-xs text-muted-foreground">PDF, DOC, DOCX, PPT, PPTX (最大10MB)</p>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <h3 className="font-medium mb-2">応募完了後の流れ</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>書類審査（1-2営業日）</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>企業とのマッチング</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>面談・課題説明</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>インターンシップ開始</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            前へ
          </Button>

          {currentStep < totalSteps ? (
            <Button onClick={nextStep}>
              次へ
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button className="bg-primary hover:bg-primary/90">
              <CheckCircle className="w-4 h-4 mr-2" />
              応募を完了する
            </Button>
          )}
        </div>

        {/* Available Positions */}
        {currentStep === 1 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">現在募集中のポジション</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">セールス戦略立案</CardTitle>
                    <Badge variant="default">急募</Badge>
                  </div>
                  <CardDescription>SaaS企業での新規顧客獲得戦略</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>期間</span>
                      <span>3週間</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>報酬</span>
                      <span>¥150,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>開始日</span>
                      <span>2024年2月1日〜</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">営業プロセス改善</CardTitle>
                  <CardDescription>既存営業フローの効率化提案</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>期間</span>
                      <span>4週間</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>報酬</span>
                      <span>¥200,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>開始日</span>
                      <span>2024年2月15日〜</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
