import json
import os
import joblib
import pandas as pd
from http.server import BaseHTTPRequestHandler

# 1. Cargamos el modelo y los encoders en la memoria global
# Esto hace que las respuestas sean ultrarrápidas ("Warm Start")
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, 'models', 'credit_risk_model.joblib')
ENCODERS_PATH = os.path.join(BASE_DIR, 'models', 'label_encoders.joblib')

model = joblib.load(MODEL_PATH)
encoders = joblib.load(ENCODERS_PATH)

# Las columnas exactas en el orden que tu modelo espera
FEATURE_COLUMNS = [
    "Age", "Sex", "Job", "Housing", "Saving accounts", 
    "Checking account", "Credit amount", "Duration", "Purpose"
]

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            # Leer los datos que nos envía la página web
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            input_data = json.loads(post_data)

            # Crear un DataFrame con la fila de datos del usuario
            # Aseguramos el orden correcto de las columnas
            df = pd.DataFrame([input_data], columns=FEATURE_COLUMNS)

            # Transformar las variables de texto a números usando tus encoders
            categorical_cols = ['Sex', 'Housing', 'Saving accounts', 'Checking account', 'Purpose']
            for col in categorical_cols:
                if col in encoders:
                    # Transformamos la palabra (ej. "own") al número que el modelo entiende
                    df[col] = encoders[col].transform(df[col])

            # Hacer la predicción
            # predict() devuelve la clase (ej. 0 o 1)
            # predict_proba() devuelve las probabilidades [prob_0, prob_1]
            prediction = model.predict(df)[0]
            probabilities = model.predict_proba(df)[0]

            # Preparar la respuesta para el frontend
            response = {
                "success": True,
                "prediction": int(prediction),
                # Asumiendo que el índice 0 es "bad" y 1 es "good", o viceversa.
                # Lo ajustaremos en el frontend según como lo codificó tu Target Encoder.
                "probability": [float(p) for p in probabilities]
            }

            # Enviar la respuesta exitosa
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*') # Permitir CORS
            self.end_headers()
            self.wfile.write(json.dumps(response).encode('utf-8'))

        except Exception as e:
            # Si algo falla (ej. una categoría que no existe), devolvemos el error
            self.send_response(500)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            error_response = {"success": False, "error": str(e)}
            self.wfile.write(json.dumps(error_response).encode('utf-8'))

    # Permitir peticiones preflight de CORS (necesario para navegadores)
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
