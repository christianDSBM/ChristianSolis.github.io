import joblib
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ENCODERS_PATH = os.path.join(BASE_DIR, 'api', 'models', 'label_encoders.joblib')

try:
    encoders = joblib.load(ENCODERS_PATH)
    for col, enc in encoders.items():
        print(f"Column: {col}")
        try:
            print(f"Classes: {enc.classes_}")
        except:
            print(f"Encoder object: {enc}")
except Exception as e:
    print(f"Error: {e}")
