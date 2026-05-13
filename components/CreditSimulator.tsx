"use client"

import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle2, XCircle, AlertTriangle } from "lucide-react"

export function CreditSimulator() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    // Validation for negative or invalid values
    const age = parseInt(data.Age as string)
    if (age < 18 || age > 100) {
      setError("Please enter a valid age (18-100).")
      setLoading(false)
      return
    }

    const payload = {
      ...data,
      Age: age,
      Job: parseInt(data.Job as string),
      "Credit amount": parseInt(data["Credit amount"] as string),
      Duration: parseInt(data.Duration as string),
    }

    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      
      if (!response.ok) throw new Error("API Response Error")
      
      const resData = await response.json()
      setResult(resData)
    } catch (err) {
      console.error("Prediction Error:", err)
      setError("The model could not process this request. Check your input values.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="bg-zinc-950 border-emerald-500/20 shadow-2xl overflow-hidden">
      <CardHeader className="border-b border-white/5 bg-emerald-500/5">
        <CardTitle className="text-white font-serif">Real-Time Risk Simulator</CardTitle>
        <CardDescription className="text-zinc-400 text-sm">
          Enter client data to evaluate credit viability using our Random Forest model.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-6 p-6 md:grid-cols-2">
          {/* Age */}
          <div className="space-y-2">
            <Label htmlFor="Age" className="text-zinc-300">Age</Label>
            <Input id="Age" name="Age" type="number" placeholder="e.g. 30" required className="bg-zinc-900 border-zinc-800" />
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
            <Label htmlFor="Credit amount" className="text-zinc-300">Credit Amount (DM)</Label>
            <Input id="Credit amount" name="Credit amount" type="number" placeholder="e.g. 5000" required className="bg-zinc-900 border-zinc-800" />
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <Label htmlFor="Duration" className="text-zinc-300">Duration (Months)</Label>
            <Input id="Duration" name="Duration" type="number" placeholder="e.g. 24" required className="bg-zinc-900 border-zinc-800" />
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
                <SelectItem value="radio/TV">Radio/TV</SelectItem>
                <SelectItem value="furniture/equipment">Furniture/Equipment</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="education">Education</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <input type="hidden" name="Job" value="2" />
          <input type="hidden" name="Saving accounts" value="little" />
          <input type="hidden" name="Checking account" value="little" />
        </CardContent>

        <CardFooter className="flex flex-col gap-6 p-6 border-t border-white/5 bg-zinc-950">
          <Button type="submit" disabled={loading} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-wide transition-all">
            {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</> : "RUN MODEL"}
          </Button>

          {/* Validation Error Message */}
          {error && (
            <div className="w-full p-4 rounded-lg border bg-yellow-500/10 border-yellow-500/40 text-yellow-500 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Success / Default Result */}
          {result && (
            <div className={`w-full p-4 rounded-lg border flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 ${
              result.prediction === 1 
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' 
                : 'bg-red-500/10 border-red-500/40 text-red-400'
            }`}>
              {result.prediction === 1 ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
              <div className="flex-1">
                <p className="font-bold uppercase text-[10px] tracking-widest mb-1 opacity-70">Model Output</p>
                <p className="text-lg font-semibold leading-tight">
                  {result.prediction === 1 ? "Credit Approved" : "Risk of Default Detected"}
                </p>
                <p className="text-[10px] mt-1">
                  Model Confidence: {(Math.max(...result.probability) * 100).toFixed(2)}%
                </p>
              </div>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  )
}