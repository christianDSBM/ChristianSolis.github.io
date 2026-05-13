"use client"

import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Loader2, CheckCircle2, XCircle } from "lucide-react"

export function CreditSimulator() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    // Convertimos los campos numéricos
    const payload = {
      ...data,
      Age: parseInt(data.Age as string),
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
      const resData = await response.json()
      setResult(resData)
    } catch (error) {
      console.error("Error al predecir:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="bg-zinc-950 border-emerald-500/20 shadow-2xl overflow-hidden">
      <CardHeader className="border-b border-white/5 bg-emerald-500/5">
        <CardTitle className="text-white font-serif">Simulador de Riesgo en Tiempo Real</CardTitle>
        <CardDescription className="text-zinc-400 text-sm">
          Ingresa los datos del cliente para que el modelo evalúe la viabilidad del crédito.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-6 p-6 md:grid-cols-2">
          {/* Edad */}
          <div className="space-y-2">
            <Label htmlFor="Age" className="text-zinc-300">Edad</Label>
            <Input id="Age" name="Age" type="number" placeholder="Ej. 30" required className="bg-zinc-900 border-zinc-800" />
          </div>

          {/* Sexo */}
          <div className="space-y-2">
            <Label className="text-zinc-300">Género</Label>
            <Select name="Sex" required>
              <SelectTrigger className="bg-zinc-900 border-zinc-800">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Masculino</SelectItem>
                <SelectItem value="female">Femenino</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Monto del Crédito */}
          <div className="space-y-2">
            <Label htmlFor="Credit amount" className="text-zinc-300">Monto del Crédito (DM)</Label>
            <Input id="Credit amount" name="Credit amount" type="number" placeholder="Ej. 5000" required className="bg-zinc-900 border-zinc-800" />
          </div>

          {/* Duración */}
          <div className="space-y-2">
            <Label htmlFor="Duration" className="text-zinc-300">Plazo (Meses)</Label>
            <Input id="Duration" name="Duration" type="number" placeholder="Ej. 24" required className="bg-zinc-900 border-zinc-800" />
          </div>

          {/* Vivienda */}
          <div className="space-y-2">
            <Label className="text-zinc-300">Vivienda</Label>
            <Select name="Housing" required>
              <SelectTrigger className="bg-zinc-900 border-zinc-800">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="own">Propia</SelectItem>
                <SelectItem value="rent">Rentada</SelectItem>
                <SelectItem value="free">Gratis</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Propósito */}
          <div className="space-y-2">
            <Label className="text-zinc-300">Propósito</Label>
            <Select name="Purpose" required>
              <SelectTrigger className="bg-zinc-900 border-zinc-800">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car">Auto</SelectItem>
                <SelectItem value="radio/TV">Radio/TV</SelectItem>
                <SelectItem value="furniture/equipment">Muebles/Equipo</SelectItem>
                <SelectItem value="business">Negocios</SelectItem>
                <SelectItem value="education">Educación</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Campos ocultos o simplificados para el ejemplo */}
          <input type="hidden" name="Job" value="2" />
          <input type="hidden" name="Saving accounts" value="little" />
          <input type="hidden" name="Checking account" value="little" />
        </CardContent>

        <CardFooter className="flex flex-col gap-6 p-6 border-t border-white/5 bg-zinc-950">
          <Button type="submit" disabled={loading} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-wide">
            {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Procesando...</> : "CORRER MODELO"}
          </Button>

          {result && (
            <div className={`w-full p-4 rounded-lg border flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 ${
              result.prediction === 1 
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' 
                : 'bg-red-500/10 border-red-500/40 text-red-400'
            }`}>
              {result.prediction === 1 ? <CheckCircle2 className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
              <div className="flex-1">
                <p className="font-bold uppercase text-xs tracking-widest mb-1">Resultado del Modelo</p>
                <p className="text-lg">
                  {result.prediction === 1 ? "Crédito Aprobado" : "Riesgo de Default Detectado"}
                </p>
                <p className="text-[10px] opacity-70">
                  Confianza del modelo: {(Math.max(...result.probability) * 100).toFixed(2)}%
                </p>
              </div>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  )
}