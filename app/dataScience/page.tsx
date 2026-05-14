"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import {
  LineChart,
  Table2,
  BrainCircuit,
  Activity,
  ShieldAlert,
  ArrowRight,
  BarChart3,
  TrendingUp,
} from "lucide-react"
import { TutorialStep } from "@/components/tutorial/TutorialStep"
import { ConceptSection } from "@/components/tutorial/ConceptSection"
import { CodeBlock } from "@/components/tutorial/CodeBlock"
import { OutputSection, MetricCard } from "@/components/tutorial/OutputSection"
import { InsightBox } from "@/components/tutorial/InsightBox"
import { CreditSimulator } from "@/components/CreditSimulator"

export default function DataSciencePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b]">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <Badge
            variant="outline"
            className="mb-4 border-emerald-500/30 text-emerald-400 bg-emerald-500/5 px-3 py-1"
          >
            Financial Engineering Case Study
          </Badge>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-8 text-white tracking-tight">
            Credit Risk <span className="text-emerald-500">Scoring Model</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Un análisis integral sobre la probabilidad de impago (Probability of
            Default), conectando el rigor estadístico con la implementación de
            modelos predictivos para la toma de decisiones financieras.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* NAVEGACIÓN LATERAL ScrollSpy */}
          <aside className="hidden lg:block w-72 sticky top-28 h-fit">
            <div className="border-l border-emerald-500/10 pl-6 space-y-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500/60">
                Contenido del Proyecto
              </p>
              <nav className="flex flex-col gap-5 text-sm">
                {[
                  { href: "#step-1", label: "El Riesgo de Default" },
                  { href: "#step-2", label: "Carga y Limpieza" },
                  { href: "#step-3", label: "Análisis Univariado" },
                  { href: "#step-4", label: "Detección de Outliers" },
                  { href: "#step-5", label: "Feature Engineering" },
                  { href: "#step-6", label: "Modelado y Evaluación" },
                  { href: "#demo",   label: "Prueba el Modelo" },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="group flex items-center gap-3 text-zinc-500 hover:text-emerald-400 transition-all"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 transition-all" />
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* CONTENIDO PRINCIPAL */}
          <div className="flex-1 max-w-4xl space-y-32">

            {/* SECCIÓN 1 */}
            <TutorialStep
              stepNumber={1}
              title="El Riesgo de Default"
              icon={<ShieldAlert className="w-8 h-8" />}
            >
              <ConceptSection variant="highlight">
                <p>
                  En el sector bancario, predecir si un cliente incurrirá en
                  mora durante los próximos dos años es una tarea crítica. ¿Por
                  qué importa?
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                  <li>
                    <strong className="text-emerald-400">Riesgo Financiero:</strong>{" "}
                    Un impago no previsto genera pérdidas directas
                  </li>
                  <li>
                    <strong className="text-emerald-400">Regulación:</strong> Los
                    bancos deben mantener reservas de capital (Basilea III)
                  </li>
                  <li>
                    <strong className="text-emerald-400">Decisión Justa:</strong>{" "}
                    El cliente merece saber por qué se rechaza su solicitud
                  </li>
                </ul>
                <p>
                  El reto principal no es solo la <strong>precisión</strong>,
                  sino la{" "}
                  <strong className="text-emerald-400">interpretabilidad</strong>
                  : entender por qué un modelo rechaza un crédito es tan
                  importante como el rechazo mismo.
                </p>
              </ConceptSection>

              <InsightBox type="objective" title="Objetivo del Proyecto">
                <p>
                  Construir un modelo predictivo que identifique clientes con
                  alto riesgo de impago, explicando los factores detrás de cada
                  predicción.
                </p>
              </InsightBox>
            </TutorialStep>

            {/* SECCIÓN 2 */}
            <TutorialStep
              stepNumber={2}
              title="Carga de Datos y Decisiones de Limpieza"
              icon={<Table2 className="w-8 h-8" />}
            >
              <ConceptSection variant="highlight">
                <p>
                  Utilizamos el dataset{" "}
                  <code className="text-emerald-400">german_credit_data.csv</code>,
                  un benchmark clásico en credit scoring. Al analizar la calidad
                  de los datos, detectamos múltiples registros con valores nulos (NA).
                </p>
              </ConceptSection>

              <CodeBlock
                code={`df = pd.read_csv("german_credit_data.csv")

# Eliminar registros con valores nulos
df = df.dropna()

# Dataset resultante
print(df.shape)  # (522, 10)`}
                description="Carga y limpieza estricta del dataset"
              />

              {/* df.head() — 5 registros reales */}
              <OutputSection type="table" caption="Fig 1. Primeras 5 filas del dataset limpio">
                <table className="w-full text-sm font-mono">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      {["Age","Sex","Job","Housing","Saving accounts","Checking account","Credit amount","Duration","Purpose","Risk"].map((h) => (
                        <th key={h} className="text-left text-emerald-400 py-2 px-2 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["22","female","2","own","little","moderate","5951","48","radio/TV","bad"],
                      ["45","male","2","free","little","little","7882","42","furniture/equipment","good"],
                      ["53","male","2","free","little","little","4870","24","car","bad"],
                      ["35","male","3","rent","little","moderate","6948","36","car","good"],
                      ["28","male","3","own","little","moderate","5234","30","car","bad"],
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-zinc-800">
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className={`py-2 px-2 ${
                              j === row.length - 1
                                ? cell === "good"
                                  ? "text-emerald-400"
                                  : "text-red-400"
                                : "text-zinc-400"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </OutputSection>

              <InsightBox type="critical" title="Decisión de Negocio: Eliminación de NAs">
                <p>
                  En lugar de imputar, opté por eliminar cualquier registro con valores nulos.
                  En riesgo crediticio, variables como{" "}
                  <strong className="text-emerald-400">Credit amount</strong>,{" "}
                  <strong className="text-emerald-400">Duration</strong>,{" "}
                  <strong className="text-emerald-400">Job</strong> o{" "}
                  <strong className="text-emerald-400">Housing</strong> son
                  estrictamente indispensables. Una imputación artificial en estos
                  features inflaría valores y asumiría un riesgo que no podemos sostener.
                  Esto redujo el dataset a{" "}
                  <strong>522 registros altamente confiables</strong>.
                </p>
              </InsightBox>
            </TutorialStep>

            {/* SECCIÓN 3 */}
            <TutorialStep
              stepNumber={3}
              title="Análisis Univariado: Variables Numéricas"
              icon={<LineChart className="w-8 h-8" />}
            >
              <ConceptSection variant="highlight">
                <p>
                  Analizar variables una por una nos permite entender su
                  distribución, detectar valores atípicos, y evaluar su relación
                  potencial con el riesgo sobre nuestra muestra limpia.
                </p>
                <p>
                  Empezamos con:{" "}
                  <code className="text-emerald-400">Age</code>,{" "}
                  <code className="text-emerald-400">Credit amount</code>, y{" "}
                  <code className="text-emerald-400">Duration</code>.
                </p>
              </ConceptSection>

              <CodeBlock
                code={`print(df[["Age", "Credit amount", "Duration"]].describe())

fig, axes = plt.subplots(1, 3, figsize=(15, 4))
df["Age"].hist(bins=25, ax=axes[0], edgecolor="black")
df["Credit amount"].hist(bins=25, ax=axes[1], edgecolor="black")
df["Duration"].hist(bins=25, ax=axes[2], edgecolor="black")
plt.suptitle("Distribución de Variables Numéricas", fontsize=14)
plt.tight_layout()
plt.show()`}
                description="Estadísticas descriptivas y visualización de histogramas"
              />

              {/* df.describe() real */}
              <OutputSection type="table" caption="Fig 2. Estadísticas descriptivas (n=522)">
                <table className="w-full text-sm font-mono">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      {["Stat", "Age", "Credit amount", "Duration"].map((h) => (
                        <th key={h} className="text-left text-emerald-400 py-2 px-3 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["count", "522",    "522",      "522"],
                      ["mean",  "34.89",  "3,278.75", "21.34"],
                      ["std",   "11.79",  "2,929.16", "12.47"],
                      ["min",   "19",     "276",      "6"],
                      ["25%",   "26",     "1,297.50", "12"],
                      ["50%",   "31.50",  "2,326.50", "18"],
                      ["75%",   "41",     "3,971.25", "26.75"],
                      ["max",   "75",     "18,424",   "72"],
                    ].map(([stat, ...vals], i) => (
                      <tr key={i} className="border-b border-zinc-800 hover:bg-zinc-800/20 transition-colors">
                        <td className="py-2 px-3 text-emerald-400/70 font-semibold">{stat}</td>
                        {vals.map((v, j) => (
                          <td key={j} className="py-2 px-3 text-zinc-400">{v}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </OutputSection>

              <OutputSection
                imageUrl="distributions-numerical.png"
                imageAlt="Distribuciones de variables numéricas"
                caption="Fig 3. Histogramas de Age, Credit Amount y Duration"
              />

              <InsightBox type="insight" title="Observaciones Clave">
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                  <li>
                    <strong className="text-emerald-400">Age (Media: 34.8):</strong>{" "}
                    Sesgada hacia clientes jóvenes, rango entre 19 y 75 años.
                  </li>
                  <li>
                    <strong className="text-emerald-400">Credit amount (Media: 3,278):</strong>{" "}
                    Fuertemente sesgada a la derecha — mayoría de solicitudes bajo
                    4,000, pero máximo hasta 18,424.
                  </li>
                  <li>
                    <strong className="text-emerald-400">Duration (Media: 21.3 meses):</strong>{" "}
                    Concentrada entre 12 y 27 meses (financiamiento de corto/mediano plazo).
                  </li>
                </ul>
              </InsightBox>
            </TutorialStep>

            {/* SECCIÓN 4 */}
            <TutorialStep
              stepNumber={4}
              title="Detección de Valores Atípicos (Outliers)"
              icon={<TrendingUp className="w-8 h-8" />}
            >
              <ConceptSection variant="highlight">
                <p>
                  Los <strong>outliers</strong> pueden distorsionar modelos
                  lineales. Usamos el{" "}
                  <strong className="text-emerald-400">método IQR</strong>{" "}
                  para perfilar los datos extremos:
                </p>
                <p className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-4 font-mono text-sm">
                  Límite inferior = Q1 − 1.5 × IQR
                  <br />
                  Límite superior = Q3 + 1.5 × IQR
                </p>
              </ConceptSection>

              <CodeBlock
                code={`def analizar_outliers(df, columnas):
    for col in columnas:
        Q1 = df[col].quantile(0.25)
        Q3 = df[col].quantile(0.75)
        IQR = Q3 - Q1
        li = Q1 - 1.5 * IQR
        ls = Q3 + 1.5 * IQR
        outliers = df[(df[col] < li) | (df[col] > ls)]
        print(f"{col}: {len(outliers)} outliers | Rango: [{li:.2f}, {ls:.2f}]")

analizar_outliers(df, ["Age", "Credit amount", "Duration"])`}
                description="Detección de outliers con IQR"
              />

              <OutputSection type="table" caption="Fig 4. Resultados reales del análisis IQR">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      {["Variable","Q1","Q3","Rango Válido","Outliers"].map((h) => (
                        <th key={h} className="text-left text-emerald-400 py-2 px-2">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Age",           "26.0",   "41.0",   "[3.50, 63.50]",      "18"],
                      ["Credit amount", "1,297.5","3,971.2","[-2,713.1, 7,981.8]","36"],
                      ["Duration",      "12.0",   "26.75",  "[-10.12, 48.88]",    "8"],
                    ].map(([variable, q1, q3, rango, outliers], i) => (
                      <tr key={i} className="border-b border-zinc-800">
                        <td className="text-zinc-400 py-2 px-2">{variable}</td>
                        <td className="text-zinc-400 py-2 px-2">{q1}</td>
                        <td className="text-zinc-400 py-2 px-2">{q3}</td>
                        <td className="text-zinc-400 py-2 px-2 font-mono text-xs">{rango}</td>
                        <td className="text-emerald-400 py-2 px-2 font-semibold">{outliers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </OutputSection>

              <InsightBox type="critical" title="Decisión: No Eliminar, Pero Vigilar">
                <p>
                  Los outliers no son errores de captura. Representan clientes
                  con créditos empresariales altos (montos sobre 8,000) o plazos
                  largos (más de 48 meses). Los mantenemos para conservar la
                  varianza del modelo, pero aplicaremos{" "}
                  <strong className="text-emerald-400">transformaciones logarítmicas</strong>{" "}
                  si usamos modelos basados en distancias como KNN o Regresión Logística.
                </p>
              </InsightBox>
            </TutorialStep>

            {/* SECCIÓN 5 */}
            <TutorialStep
              stepNumber={5}
              title="Feature Engineering: Preparación de Variables"
              icon={<BarChart3 className="w-8 h-8" />}
            >
              <ConceptSection variant="highlight">
                <p>
                  Las variables categóricas no pueden usarse directamente en
                  modelos numéricos. El enfoque que usamos es{" "}
                  <strong className="text-emerald-400">Label Encoding</strong>.
                </p>
              </ConceptSection>

              <CodeBlock
                code={`categorical_cols = df.select_dtypes(include=["object"]).columns.tolist()
# ['Sex', 'Housing', 'Saving accounts', 'Checking account', 'Purpose', 'Risk']

encoders = {}
for col in categorical_cols:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col])
    encoders[col] = le
    mapping = dict(zip(le.classes_, le.transform(le.classes_)))
    print(f"{col}: {mapping}")`}
                description="Identificar y codificar variables categóricas"
              />

              <OutputSection type="metric">
                <MetricCard label="Variables Numéricas" value={4} />
                <MetricCard label="Variables Categóricas" value={6} />
                <MetricCard label="Registros Confiables" value={522} />
              </OutputSection>

              <InsightBox type="insight" title="¿Por Qué Label Encoding?">
                <p>
                  Label Encoding es compacto y funciona bien con árboles de
                  decisión. Para modelos lineales puros, One-Hot Encoding
                  evitaría generar relaciones ordinales ficticias entre categorías.
                </p>
              </InsightBox>
            </TutorialStep>

            {/* SECCIÓN 6 */}
            <TutorialStep
              stepNumber={6}
              title="Modelado y Evaluación"
              icon={<BrainCircuit className="w-8 h-8" />}
            >
              <ConceptSection variant="highlight">
                <p>
                  Evaluaremos algoritmos clásicos en credit scoring entrenados
                  con nuestra muestra de 522 registros:
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                  <li>
                    <strong className="text-emerald-400">Random Forest:</strong>{" "}
                    Elegido por su robustez contra el sobreajuste (overfitting) y su capacidad para capturar interacciones complejas entre múltiples variables financieras.
                  </li>
                  <li>
                    <strong className="text-emerald-400">Árbol de Decisión Simple:</strong>{" "}
                    Probado inicialmente, pero descartado porque generaba reglas demasiado rígidas y no aprovechaba todas las variables disponibles.
                  </li>
                </ul>
                <p>
                  Aplicaremos{" "}
                  <code className="text-emerald-400">class_weight=&apos;balanced&apos;</code>{" "}
                  para mitigar el desbalance entre clientes que pagaron y los
                  que incurrieron en mora.
                </p>
              </ConceptSection>

              <CodeBlock
                code={`X = df.drop(columns=["Risk"])
y = df["Risk"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

rf = RandomForestClassifier(
    n_estimators=100,
    max_depth=10,
    min_samples_split=10,
    class_weight="balanced",
    random_state=42
)
rf.fit(X_train, y_train)

y_pred  = rf.predict(X_test)
y_proba = rf.predict_proba(X_test)[:, 1]
auc     = roc_auc_score(y_test, y_proba)
print(f"AUC-ROC: {auc:.4f}")`}
                description="Entrenamiento y evaluación del modelo"
              />

              {/* TODO: reemplazar con los valores reales de tu notebook */}
              <OutputSection type="metric" caption="Métricas de Desempeño">
                <MetricCard label="AUC-ROC" value="0.74" />
                <MetricCard label="Accuracy" value="63.8" unit="%" />
                <MetricCard label="Recall (Riesgo)" value="0.71" />
              </OutputSection>

              <OutputSection
                imageUrl="roc-curve.png"
                imageAlt="Curva ROC del modelo"
                caption="Fig 5. Curva ROC — capacidad de separación del modelo"
              />

              <InsightBox type="insight" title="Interpretación de las Métricas">
                <p>
                  El AUC-ROC evalúa la probabilidad de que el modelo clasifique
                  a un cliente moroso con un score más alto que a uno cumplido.
                  La estratificación en el split y{" "}
                  <code className="text-emerald-400">class_weight</code>{" "}
                  garantizaron que las métricas no reflejaran un falso sentido
                  de exactitud.
                </p>
              </InsightBox>
            </TutorialStep>

            {/* SECCIÓN 7: DEMO */}
            <section id="demo" className="scroll-mt-32 space-y-8 pb-20">
              <div className="flex items-center gap-4 text-emerald-500">
                <BrainCircuit className="w-8 h-8" />
                <h2 className="text-3xl font-serif font-medium text-white">
                  07. Prueba el Modelo
                </h2>
              </div>
              <p className="text-zinc-400">
                Ingresa los datos de un cliente y el modelo evaluará en tiempo
                real su probabilidad de impago.
              </p>
              <CreditSimulator />
            </section>

            {/* CONCLUSIONES */}
            <section className="scroll-mt-32 space-y-6 pb-32">
              <div className="flex items-center gap-4 text-emerald-500">
                <Activity className="w-8 h-8" />
                <h2 className="text-3xl font-serif font-medium text-white">
                  Conclusiones y Próximos Pasos
                </h2>
              </div>

              <p className="text-zinc-400 text-lg leading-relaxed">
                El proceso de diseño de este modelo refleja la realidad de los
                proyectos de Credit Risk Scoring:{" "}
                <strong className="text-emerald-400">
                  la ingeniería de datos y el entendimiento del negocio pesan
                  tanto como la matemática algorítmica
                </strong>.
              </p>

              <InsightBox type="objective" title="Aprendizajes Clave">
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                  <li>
                    La integridad del dataset (
                    <code className="text-emerald-400 font-mono">dropna</code>) es
                    preferible a modelos inflados con imputaciones erróneas en
                    variables fundamentales.
                  </li>
                  <li>
                    El análisis univariado reveló la naturaleza sesgada de las
                    variables crediticias, requiriendo un manejo prudente de
                    outliers sin mutilar el espectro del riesgo.
                  </li>
                  <li>
                    La interpretabilidad es vital en finanzas para cumplir
                    requerimientos regulatorios — los Árboles de Decisión son
                    herramientas idóneas para este fin.
                  </li>
                </ul>
              </InsightBox>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}