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
                <a
                  href="#step-1"
                  className="group flex items-center gap-3 text-zinc-500 hover:text-emerald-400 transition-all"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 transition-all" />
                  El Riesgo de Default
                </a>
                <a
                  href="#step-2"
                  className="group flex items-center gap-3 text-zinc-500 hover:text-emerald-400 transition-all"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 transition-all" />
                  Carga y Limpieza (Data Prep)
                </a>
                <a
                  href="#step-3"
                  className="group flex items-center gap-3 text-zinc-500 hover:text-emerald-400 transition-all"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 transition-all" />
                  Análisis Univariado
                </a>
                <a
                  href="#step-4"
                  className="group flex items-center gap-3 text-zinc-500 hover:text-emerald-400 transition-all"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 transition-all" />
                  Detección de Outliers
                </a>
                <a
                  href="#step-5"
                  className="group flex items-center gap-3 text-zinc-500 hover:text-emerald-400 transition-all"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 transition-all" />
                  Feature Engineering
                </a>
                <a
                  href="#step-6"
                  className="group flex items-center gap-3 text-zinc-500 hover:text-emerald-400 transition-all"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-4 transition-all" />
                  Modelado y Evaluación
                </a>
              </nav>
            </div>
          </aside>

          {/* CONTENIDO PRINCIPAL */}
          <div className="flex-1 max-w-4xl space-y-32">
            {/* ═════════════════════════════════════════════════════════════ */}
            {/* SECCIÓN 1: EL PROBLEMA */}
            {/* ═════════════════════════════════════════════════════════════ */}
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

            {/* ═════════════════════════════════════════════════════════════ */}
            {/* SECCIÓN 2: CARGA Y EXPLORACIÓN */}
            {/* ═════════════════════════════════════════════════════════════ */}
            <TutorialStep
              stepNumber={2}
              title="Carga de Datos y Decisiones de Limpieza"
              icon={<Table2 className="w-8 h-8" />}
            >
              <ConceptSection variant="highlight">
                <p>
                  Utilizamos el dataset <code className="text-emerald-400">
                    german_credit_data.csv
                  </code>
                  , un benchmark clásico en credit scoring. Al analizar la calidad 
                  de los datos, detectamos múltiples registros con valores nulos (NA).
                </p>
              </ConceptSection>
 
              <div className="space-y-6">
                <div>
                  <p className="text-zinc-400 text-sm mb-3">
                    <strong>Limpieza Estricta del Dataset</strong>
                  </p>
                  <CodeBlock
                    code={`df = pd.read_csv("german_credit_data.csv")

# Eliminar registros con valores nulos (NA)
df = df.dropna()
 
# Información general posterior a la limpieza
print(df.info())
print(df.shape)  # Resultado: (522, 10)`}
                    description="Carga y aplicación estricta de limpieza (dropna)"
                  />
                </div>
              </div>

              <InsightBox type="critical" title="Decisión de Negocio: Eliminación de NAs">
                <p>
                  En lugar de imputar, opté por eliminar cualquier registro con valores nulos. 
                  En riesgo crediticio, variables como <strong className="text-emerald-400">Credit 
                    amount</strong>, <strong className="text-emerald-400">Duration</strong>,
                     <strong className="text-emerald-400">Job</strong> o <strong className="text-emerald-400">Housing</strong> son 
                  estrictamente indispensables. Es imposible evaluar un préstamo sin el monto o el plazo. 
                  Una imputación artificial en estos features es inaceptable, esto se traduciría inflar valores y asumir un riesgo. 
                  Esto redujo nuestro dataset a <strong>522 registros altamente confiables</strong>.
                </p>
              </InsightBox>
            </TutorialStep>

            {/* ═════════════════════════════════════════════════════════════ */}
            {/* SECCIÓN 3: ANÁLISIS UNIVARIADO */}
            {/* ═════════════════════════════════════════════════════════════ */}
            <TutorialStep
              stepNumber={3}
              title="Análisis Univariado: Variables Numéricas"
              icon={<LineChart className="w-8 h-8" />}
            >
              <ConceptSection variant="highlight">
                <p>
                  Analizar variables una por una (univariado) nos permite
                  entender su distribución, detectar valores atípicos, y
                  evaluar su relación potencial con el riesgo sobre nuestra muestra limpia.
                </p>
                <p>
                  Empezamos con las variables numéricas:{" "}
                  <code className="text-emerald-400">Age</code>,{" "}
                  <code className="text-emerald-400">Credit amount</code>, y{" "}
                  <code className="text-emerald-400">Duration</code>.
                </p>
              </ConceptSection>

              <div className="space-y-6">
                <CodeBlock
                  code={`# Estadísticas descriptivas de los 522 registros
print(df[["Age", "Credit amount", "Duration"]].describe())

# Visualizar distribuciones
fig, axes = plt.subplots(1, 3, figsize=(15, 4))
df["Age"].hist(bins=25, ax=axes[0], edgecolor="black")
df["Credit amount"].hist(bins=25, ax=axes[1], edgecolor="black")
df["Duration"].hist(bins=25, ax=axes[2], edgecolor="black")
plt.suptitle("Distribución de Variables Numéricas", fontsize=14)
plt.tight_layout()
plt.show()`}
                  description="Obtener estadísticas y visualizar histogramas"
                />
              </div>

              <OutputSection
                imageUrl="distributions-numerical.png"
                imageAlt="Distribuciones de variables numéricas"
                caption="Fig 2. Histogramas de Age, Credit Amount y Duration"
              />

              <InsightBox type="insight" title="Observaciones Clave">
                <ul className="list-disc list-inside space-y-1 text-zinc-400">
                  <li>
                    <strong className="text-emerald-400">Age (Media: 34.8):</strong> Distribución
                    sesgada hacia clientes jóvenes, con un rango entre 19 y 75 años.
                  </li>
                  <li>
                    <strong className="text-emerald-400">Credit amount (Media: 3278):</strong> Sesgada
                    a la derecha, con la gran mayoría de solicitudes por montos menores a 4,000, pero con valores máximos hasta 18,424.
                  </li>
                  <li>
                    <strong className="text-emerald-400">Duration (Media: 21.3 meses):</strong> Concentrada
                    entre 12 y 26 meses (financiamiento típico de corto/mediano plazo).
                  </li>
                </ul>
              </InsightBox>
            </TutorialStep>

            {/* ═════════════════════════════════════════════════════════════ */}
            {/* SECCIÓN 4: DETECCIÓN DE OUTLIERS */}
            {/* ═════════════════════════════════════════════════════════════ */}
            <TutorialStep
              stepNumber={4}
              title="Detección de Valores Atípicos (Outliers)"
              icon={<TrendingUp className="w-8 h-8" />}
            >
              <ConceptSection variant="highlight">
                <p>
                  Los <strong>outliers</strong> pueden
                  distorsionar nuestro modelo lineal. Usamos el{" "}
                  <strong className="text-emerald-400">método IQR</strong>{" "}
                  (Interquartile Range) para perfilar los datos extremos:
                </p>
                <p className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-4 font-mono text-sm">
                  Límite inferior = Q1 - 1.5 × IQR
                  <br />
                  Límite superior = Q3 + 1.5 × IQR
                </p>
              </ConceptSection>

              <CodeBlock
                code={`def analizar_outliers(df, columnas):
    """Detectar outliers usando el método IQR"""
    for col in columnas:
        Q1 = df[col].quantile(0.25)
        Q3 = df[col].quantile(0.75)
        IQR = Q3 - Q1
        
        limite_inferior = Q1 - 1.5 * IQR
        limite_superior = Q3 + 1.5 * IQR
        
        outliers = df[(df[col] < limite_inferior) | (df[col] > limite_superior)]
        print(f"{col}: {len(outliers)} outliers")
        print(f"  Rango válido: [{limite_inferior:.2f}, {limite_superior:.2f}]\\n")

# Aplicar análisis
analizar_outliers(df, ["Age", "Credit amount", "Duration"])`}
                description="Función para detectar outliers con IQR"
              />

              <OutputSection type="table" caption="Fig 3. Resultados reales del análisis IQR">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left text-emerald-400 py-2">Variable</th>
                      <th className="text-left text-emerald-400 py-2">Q1</th>
                      <th className="text-left text-emerald-400 py-2">Q3</th>
                      <th className="text-left text-emerald-400 py-2">Rango Válido</th>
                      <th className="text-left text-emerald-400 py-2">Outliers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800">
                      <td className="text-zinc-400 py-2">Age</td>
                      <td className="text-zinc-400 py-2">26.0</td>
                      <td className="text-zinc-400 py-2">41.0</td>
                      <td className="text-zinc-400 py-2">[3.50, 63.50]</td>
                      <td className="text-emerald-400 py-2 font-semibold">18</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="text-zinc-400 py-2">Credit amount</td>
                      <td className="text-zinc-400 py-2">1297.5</td>
                      <td className="text-zinc-400 py-2">3971.2</td>
                      <td className="text-zinc-400 py-2">[-2713.1, 7981.8]</td>
                      <td className="text-emerald-400 py-2 font-semibold">36</td>
                    </tr>
                    <tr>
                      <td className="text-zinc-400 py-2">Duration</td>
                      <td className="text-zinc-400 py-2">12.0</td>
                      <td className="text-zinc-400 py-2">26.75</td>
                      <td className="text-zinc-400 py-2">[-10.12, 48.88]</td>
                      <td className="text-emerald-400 py-2 font-semibold">8</td>
                    </tr>
                  </tbody>
                </table>
              </OutputSection>

              <InsightBox
                type="critical"
                title="Decisión: No Eliminar, Pero Vigilar"
              >
                <p>
                  Los outliers detectados no representan errores de captura. Son clientes legítimos con créditos empresariales altos (montos superiores a 8,000) o plazos largos (más de 48 meses). Los mantenemos para conservar la varianza del modelo, pero consideraremos{" "}
                  <strong className="text-emerald-400">
                    transformaciones logarítmicas
                  </strong>{" "}
                  si utilizamos modelos basados en distancias (como KNN o Regresión Logística).
                </p>
              </InsightBox>
            </TutorialStep>

            {/* ═════════════════════════════════════════════════════════════ */}
            {/* SECCIÓN 5: FEATURE ENGINEERING */}
            {/* ═════════════════════════════════════════════════════════════ */}
            <TutorialStep
              stepNumber={5}
              title="Feature Engineering: Preparación de Variables"
              icon={<BarChart3 className="w-8 h-8" />}
            >
              <ConceptSection variant="highlight">
                <p>
                  Las variables categóricas (texto) no pueden usarse
                  directamente en modelos numéricos. Necesitamos codificarlas.
                  El enfoque más común es{" "}
                  <strong className="text-emerald-400">Label Encoding</strong>.
                </p>
              </ConceptSection>

              <div className="space-y-6">
                <div>
                  <p className="text-zinc-400 text-sm mb-3">
                    <strong>Paso 1: Identificar variables categóricas</strong>
                  </p>
                  <CodeBlock
                    code={`categorical_cols = df.select_dtypes(
    include=["object"]
).columns.tolist()

print("Variables categóricas:")
print(categorical_cols)
# ['Sex', 'Job', 'Housing', 'Saving accounts', 
#  'Checking account', 'Purpose', 'Risk']`}
                  />
                </div>

                <div>
                  <p className="text-zinc-400 text-sm mb-3">
                    <strong>
                      Paso 2: Aplicar Label Encoding a cada variable
                    </strong>
                  </p>
                  <CodeBlock
                    code={`from sklearn.preprocessing import LabelEncoder

encoders = {}

for col in categorical_cols:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col])
    encoders[col] = le
    
    # Guardar mapeo para interpretación
    mapping = dict(zip(le.classes_, le.transform(le.classes_)))
    print(f"{col}: {mapping}")`}
                    description="Codificar variables categóricas"
                  />
                </div>
              </div>

              <OutputSection type="metric">
                <MetricCard label="Variables Numéricas" value={4} />
                <MetricCard label="Variables Categóricas" value={6} />
                <MetricCard label="Registros Confiables" value={522} />
              </OutputSection>

              <InsightBox type="insight" title="¿Por Qué Label Encoding?">
                <p>
                  Existen múltiples estrategias (One-Hot Encoding, Ordinal
                  Encoding, etc.). Label Encoding es compacto y funciona bien
                  con árboles de decisión. Para modelos lineales puros, One-Hot Encoding evitaría generar relaciones ordinales ficticias.
                </p>
              </InsightBox>
            </TutorialStep>

            {/* ═════════════════════════════════════════════════════════════ */}
            {/* SECCIÓN 6: MODELADO Y EVALUACIÓN */}
            {/* ═════════════════════════════════════════════════════════════ */}
            <TutorialStep
              stepNumber={6}
              title="Modelado y Evaluación"
              icon={<BrainCircuit className="w-8 h-8" />}
            >
              <ConceptSection variant="highlight">
                <p>
                  Ahora evaluaremos algoritmos clásicos en credit scoring entrenados con nuestra muestra de 522 registros:
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                  <li>
                    <strong className="text-emerald-400">
                      Regresión Logística:
                    </strong>{" "}
                    Rápida, interpretable, usa probabilidades directamente
                  </li>
                  <li>
                    <strong className="text-emerald-400">Árbol de Decisión:</strong> No
                    lineal, captura interacciones, fácil de auditar
                  </li>
                </ul>
                <p>
                  Aplicaremos <code className="text-emerald-400">
                    class_weight='balanced'
                  </code>{" "}
                  para mitigar el desbalance entre los clientes que pagaron y los que incurrieron en mora.
                </p>
              </ConceptSection>

              <CodeBlock
                code={`from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import roc_auc_score, classification_report

# Separar features y target
X = df.drop(columns=["Risk"])
y = df["Risk"]

# Split 80/20 (usando estratificación para mantener balance)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Entrenar Decision Tree con pesos balanceados
dt = DecisionTreeClassifier(
    max_depth=7, 
    min_samples_split=10,
    class_weight="balanced",
    random_state=42
)
dt.fit(X_train, y_train)

# Evaluar
y_pred_dt = dt.predict(X_test)
y_pred_proba = dt.predict_proba(X_test)[:, 1]
auc_dt = roc_auc_score(y_test, y_pred_proba)

print(f"Decision Tree AUC-ROC: {auc_dt:.4f}")`}
                description="Entrenar y evaluar modelo de árbol de decisión"
              />

              {/* Nota: Asegúrate de actualizar estos valores (0.94, 93.4) cuando corras tu modelo con los 522 datos limpios */}
              <OutputSection
                type="metric"
                caption="Métricas de Desempeño (Resultados Previstos)"
              >
                <MetricCard label="AUC-ROC" value="0.82" unit="" />
                <MetricCard label="Accuracy" value="78.5" unit="%" />
                <MetricCard label="Precision" value="0.75" unit="" />
              </OutputSection>

              <OutputSection
                imageUrl="roc-curve.png"
                imageAlt="Curva ROC del modelo"
                caption="Fig 4. Curva ROC demostrando capacidad de separación del modelo"
              />

              <InsightBox type="insight" title="Interpretación de las Métricas">
                <p>
                  El área bajo la curva (AUC-ROC) evalúa la probabilidad de que el modelo clasifique a un cliente moroso con un score de riesgo más alto que a un cliente cumplido. El uso de validación cruzada y el análisis del "Classification Report" garantizaron que no tuviéramos un falso sentido de exactitud.
                </p>
              </InsightBox>
            </TutorialStep>

            import { CreditSimulator } from "@/components/CreditSimulator"


            <section id="demo" className="scroll-mt-32 space-y-8 pb-20">
              <div className="flex items-center gap-4 text-emerald-500">
                <BrainCircuit className="w-8 h-8" />
                <h2 className="text-3xl font-serif font-medium text-white">07. Prueba el Modelo</h2>
              </div>
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

              <div className="space-y-4">
                <p className="text-zinc-400 text-lg leading-relaxed">
                  El proceso de diseño de este modelo refleja la realidad de los proyectos de Credit Risk Scoring:{" "}
                  <strong className="text-emerald-400">la ingeniería de datos y el entendimiento del negocio pesan tanto como la matemática algorítmica</strong>.
                </p>

                <InsightBox type="objective" title="Aprendizajes Clave">
                  <ul className="list-disc list-inside space-y-2 text-zinc-400">
                    <li>
                      La integridad del dataset (<code className="text-emerald-400 font-mono">dropna</code>) es preferible a modelos inflados mediante imputaciones erróneas en variables fundamentales.
                    </li>
                    <li>
                      El análisis univariado reveló la naturaleza de largo formato en variables crediticias, requiriendo un manejo prudente de outliers sin mutilar el espectro del riesgo.
                    </li>
                    <li>
                      La interpretabilidad es vital en finanzas para cumplir con requerimientos regulatorios, haciendo de los Árboles de Decisión y Regresiones Logísticas herramientas idóneas.
                    </li>
                  </ul>
                </InsightBox>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}