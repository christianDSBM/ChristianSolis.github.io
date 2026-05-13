"use client"

import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle2, XCircle, AlertTriangle } from "lucide-react"

interface PredictionResult {
  prediction: number
  probability: number[]
}

interface FormFields {
  Age: string
  Sex: string
  "Credit amount": string
  Duration: string
  Housing: string
  Purpose: string
}

const DURATION_OPTIONS = [6, 12, 18, 24, 36, 48, 60]

function validateFields(fields: FormFields): string | null {
  const age = parseInt(fields.Age, 10)
  const amount = parseInt(fields["Credit amount"], 10)
  const duration = parseInt(fields.Duration, 10)

  if (isNaN(age) || age < 18 || age > 100)
    return "Age must be a number between 18 and 100."
  if (isNaN(amount) || amount <= 0)
    return "Credit amount must be a positive number."
  if (isNaN(duration) || !DURATION_OPTIONS.includes(duration))
    return "Please select a valid loan duration."
  if (!fields.Sex)
    return "Please select a gender."
  if (!fields.Housing)
    return "Please select a housing type."
  if (!fields.Purpose)
    return "Please select a loan purpose."

  return null
}

export function CreditSimulator() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<PredictionResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [duration, setDuration] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const raw = Object.fromEntries(formData.entries()) as FormFields
    raw.Duration = duration

    const validationError = validateFields(raw)
    if (validationError) {
      setError(validationError)
      setLoading(false)
      return
    }

    const payload = {
      Age: parseInt(raw.Age, 10),
      Sex: raw.Sex,
      Job: 2,
      Housing: raw.Housing,
      "Saving accounts": "little",
      "Checking account": "little",
      "Credit amount": parseInt(raw["Credit amount"], 10),
      Duration: parseInt(raw.Duration, 10),
      Purpose: raw.Purpose,
    }

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`)
      }

      const resData: PredictionResult = await response.json()

      if (
        typeof resData.prediction !== "number" ||
        !Array.isArray(resData.probability)
      ) {
        throw new Error("Unexpected response format from API.")
      }

      setResult(resData)
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Unknown error occurred."
      console.error("Prediction Error:", message)
      setError(
        "The model could not process the request. Please check your connection and try again."
      )
    } finally {
      setLoading(false)
    }
  }

  const confidence =
    result && Array.isArray(result.probability) && result.probability.length > 0
      ? (Math.max(...result.probability) * 100).toFixed(2)
      : null

  return (
    <Card className="bg-zinc-950 border-emerald-500/20 shadow-2xl overflow-hidden">
      <CardHeader className="border-b border-white/5 bg-emerald-500/5">
        <CardTitle className="text-white font-serif">
          Real-Time Risk Simulator
        </CardTitle>
        <CardDescription className="text-zinc-400 text-sm">
          Enter customer data to evaluate credit viability through our Random
          Forest model.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-6 p-6 md:grid-cols-2">

          {/* Age */}
          <div className="space-y-2">
            <Label htmlFor="Age" className="text-zinc-300">
              Age
            </Label>
            <Input
              id="Age"
              name="Age"
              type="number"
              placeholder="e.g., 30"
              min={18}
              max={100}
              required
              className="bg-zinc-900 border-zinc-800"
            />
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <Label className="text-zinc-300">Gender</Label>
            <Select name="Sex" required>
              <SelectTrigger className="bg-zinc-900 border-zinc-800">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Credit Amount */}
          <div className="space-y-2">
            <Label htmlFor="Credit amount" className="text-zinc-300">
              Credit Amount (DM)
            </Label>
            <Input
              id="Credit amount"
              name="Credit amount"
              type="number"
              placeholder="e.g., 5000"
              min={1}
              required
              className="bg-zinc-900 border-zinc-800"
            />
          </div>

          {/* Duration — Select con opciones fijas */}
          <div className="space-y-2">
            <Label className="text-zinc-300">Duration (Months)</Label>
            <Select
              value={duration}
              onValueChange={setDuration}
              required
            >
              <SelectTrigger className="bg-zinc-900 border-zinc-800">
                <SelectValue placeholder="Select term" />
              </SelectTrigger>
              <SelectContent>
                {DURATION_OPTIONS.map((months) => (
                  <SelectItem key={months} value={String(months)}>
                    {months} months
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Housing */}
          <div className="space-y-2">
            <Label className="text-zinc-300">Housing</Label>
            <Select name="Housing" required>
              <SelectTrigger className="bg-zinc-900 border-zinc-800">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="own">Own</SelectItem>
                <SelectItem value="rent">Rent</SelectItem>
                <SelectItem value="free">Free</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Purpose */}
          <div className="space-y-2">
            <Label className="text-zinc-300">Purpose</Label>
            <Select name="Purpose" required>
              <SelectTrigger className="bg-zinc-900 border-zinc-800">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car">Car</SelectItem>
                <SelectItem value="radio/TV">Radio / TV</SelectItem>
                <SelectItem value="furniture/equipment">
                  Furniture / Equipment
                </SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="education">Education</SelectItem>
              </SelectContent>
            </Select>
          </div>

        </CardContent>

        <CardFooter className="flex flex-col gap-6 p-6 border-t border-white/5 bg-zinc-950">
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-wide"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "RUN MODEL"
            )}
          </Button>

          {/* Error Banner */}
          {error && (
            <div className="w-full p-4 rounded-lg border bg-yellow-500/10 border-yellow-500/40 text-yellow-500 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 mt-0.5 shrink-0" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Prediction Result */}
          {result && confidence && (
            <div
              className={`w-full p-4 rounded-lg border flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 ${
                result.prediction === 1
                  ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400"
                  : "bg-red-500/10 border-red-500/40 text-red-400"
              }`}
            >
              {result.prediction === 1 ? (
                <CheckCircle2 className="w-6 h-6 shrink-0" />
              ) : (
                <XCircle className="w-6 h-6 shrink-0" />
              )}
              <div className="flex-1">
                <p className="font-bold uppercase text-[10px] tracking-widest mb-1 opacity-70">
                  Model Analysis
                </p>
                <p className="text-lg font-semibold">
                  {result.prediction === 1
                    ? "Credit Approved"
                    : "High Default Risk"}
                </p>
                <p className="text-[10px] mt-1">
                  Model Confidence: {confidence}%
                </p>
              </div>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  )
}